import { Metadata } from "next";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service | ZeenOx Digital Agency",
  description: "Terms and conditions for client engagements, milestone billing, deliverables, revision policy, and warranties with ZeenOx Media Tech Automation.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/terms`,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="mb-12">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-primary hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: March 2026 • Governing Law: Jurisdiction of Tamil Nadu, India
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Engagement Overview</h2>
            <p>
              These Terms of Service govern the delivery of digital engineering, website development, video production, and business automation services provided by ZeenOx Media Tech Automation ("ZeenOx", "Agency") to clients ("Client"). By authorizing a project proposal or paying an invoice/advance, the Client agrees to these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. Payment Terms & Milestones</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Advance Deposit:</strong> Unless otherwise specified in a formal statement of work, an initial non-refundable deposit of 50% is required to secure calendar scheduling and commence architecture work.</li>
              <li><strong className="text-foreground">Final Delivery:</strong> The remaining 50% balance is due upon project completion, prior to transferring live domain DNS, deployment access, or full production master files.</li>
              <li><strong className="text-foreground">Taxes & Invoicing:</strong> All pricing is quoted in Indian Rupees (INR) and invoiced in accordance with statutory Goods and Services Tax (GST) provisions where applicable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. Revisions & Scope Policy</h2>
            <p>
              We believe in delivering client-ready excellence. Every project package includes structured feedback rounds:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Standard website and video packages include up to two (2) comprehensive revision cycles per milestone.</li>
              <li>Scope changes requested after architecture sign-off (such as adding new page templates, custom payment gateways, or extensive additional features not outlined in the initial agreement) will be quoted separately as an add-on sprint.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Code & Asset Ownership</h2>
            <p>
              Upon 100% receipt of all agreed project dues, the Client gains full and perpetual ownership of the custom website code, design assets, and production deliverables created for the project. ZeenOx retains the right to display the completed work in its portfolio, case studies, and marketing materials unless a signed Non-Disclosure Agreement (NDA) specifies otherwise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Third-Party Services & Hosting</h2>
            <p>
              Clients retain direct billing relationships with third-party service providers (such as domain registrars, hosting platforms like Vercel or Hostinger, payment gateways like Razorpay, and WhatsApp Business API providers). ZeenOx is not liable for service downtime, rate limits, or fee changes imposed by third-party platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">6. Post-Launch Warranty & Support</h2>
            <p>
              Every custom website and app includes a complimentary 30-day technical warranty from the date of handover covering bug fixes and browser compatibility issues resulting from the original scope. Extended ongoing maintenance and feature development are available under separate support retainers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">7. Cancellation & Refunds</h2>
            <p>
              In the unlikely event that a project is cancelled prior to completion, the initial deposit is non-refundable to cover sprint allocation and discovery resources. If work is halted mid-project by the Client, payment will be pro-rated for all milestones completed up to that point.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">8. Jurisdiction</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Virudhunagar / Madurai, Tamil Nadu, India.
            </p>
            <div className="p-4 rounded-2xl bg-card border border-border text-sm mt-4">
              <p><strong className="text-foreground">Questions regarding these terms?</strong></p>
              <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a></p>
              <p>WhatsApp: <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="text-primary hover:underline">{siteConfig.contact.primaryPhone}</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

