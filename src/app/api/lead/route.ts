import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import siteConfig from "@/data/siteConfig";

// Simple in-memory rate limiting: max 5 requests per 10 minutes per IP
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
}

// Clean up stale rate limits every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, 15 * 60 * 1000);

// Validation Schema
const leadSchema = z.object({
  type: z.enum(["contact", "audit", "estimator"]).default("contact"),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .trim()
    .refine((val) => {
      // Validate 10-digit Indian phone numbers with optional +91 or 0 prefix
      const cleaned = val.replace(/[\s\-()]/g, "").replace(/^\+91|^91|^0/, "");
      return /^[6-9]\d{9}$/.test(cleaned);
    }, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  service: z.string().max(100).optional(),
  message: z.string().max(1000).optional(),
  businessName: z.string().max(150).optional(),
  websiteOrSocial: z.string().max(250).optional(),
  // Honeypot field - must be empty
  website_hp: z.string().optional(),
  // UTM & Attribution tracking
  utm_source: z.string().max(100).optional(),
  utm_medium: z.string().max(100).optional(),
  utm_campaign: z.string().max(100).optional(),
  referrer: z.string().max(250).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 1. Rate Limiting Check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please message us directly on WhatsApp." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 2. Honeypot check — bots filling hidden field get simulated success
    if (body.website_hp && body.website_hp.trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // 3. Zod Server-side Validation
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      const errorMsg = parsed.error.errors.map((e) => e.message).join(", ");
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const leadData = {
      ...parsed.data,
      ip,
      submittedAt: new Date().toISOString(),
    };

    // 4. Forward to LEAD_WEBHOOK_URL (n8n / Google Sheets / CRM webhook)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });
      } catch (webhookErr) {
        console.error("LEAD_WEBHOOK_URL error:", webhookErr);
      }
    }

    // 5. Optionally send email via Resend if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || siteConfig.contact.email;
    if (resendApiKey && notifyEmail) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "ZeenOx Leads <leads@zeenox.agency>",
            to: [notifyEmail],
            subject: `🔥 New Lead [${leadData.type.toUpperCase()}]: ${leadData.name} (${leadData.phone})`,
            html: `
              <h2>New Lead Received on ZeenOx Agency</h2>
              <p><strong>Type:</strong> ${leadData.type}</p>
              <p><strong>Name:</strong> ${leadData.name}</p>
              <p><strong>Phone:</strong> ${leadData.phone}</p>
              ${leadData.email ? `<p><strong>Email:</strong> ${leadData.email}</p>` : ""}
              ${leadData.service ? `<p><strong>Service:</strong> ${leadData.service}</p>` : ""}
              ${leadData.businessName ? `<p><strong>Business:</strong> ${leadData.businessName}</p>` : ""}
              ${leadData.websiteOrSocial ? `<p><strong>Link:</strong> ${leadData.websiteOrSocial}</p>` : ""}
              ${leadData.message ? `<p><strong>Message:</strong> ${leadData.message}</p>` : ""}
              <hr/>
              <p><small>UTM Source: ${leadData.utm_source || "direct"} | Ref: ${leadData.referrer || "none"} | Time: ${leadData.submittedAt}</small></p>
            `,
          }),
        });
      } catch (resendErr) {
        console.error("Resend API error:", resendErr);
      }
    }

    // Clean Indian phone for WhatsApp follow-up link
    const cleanPhone = leadData.phone.replace(/[\s\-()]/g, "").replace(/^\+91|^91|^0/, "");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your inquiry has been received.",
        replyExpectedHours: siteConfig.contact.responseTimeHours,
        name: leadData.name,
        cleanPhone,
        service: leadData.service || "General Inquiry",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please contact us via WhatsApp." },
      { status: 500 }
    );
  }
}

