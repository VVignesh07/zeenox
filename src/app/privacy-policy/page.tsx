import { Metadata } from "next";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | ZeenOx Digital Agency",
  description: "Privacy policy for ZeenOx Media Tech Automation regarding client inquiry data, WhatsApp communication, analytics, and data protection in India.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: March 2026 • Effective Date: January 1, 2024
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>
              ZeenOx Media Tech Automation ("ZeenOx", "we", "us", or "our") operates the website{" "}
              <a href={siteConfig.siteUrl} className="text-primary hover:underline">
                {siteConfig.siteUrl}
              </a>
              . We are committed to safeguarding the privacy of our website visitors, clients, and prospective business partners in compliance with applicable Indian data protection laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. Information We Collect</h2>
            <p>We only collect personal information that you voluntarily provide to us when inquiring about our services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Contact Form Data:</strong> Name, phone number, email address, company name, and service interests.</li>
              <li><strong className="text-foreground">Direct WhatsApp Communication:</strong> Mobile number, chat transcripts, project requirements, and file attachments shared during discovery.</li>
              <li><strong className="text-foreground">Technical & Usage Data:</strong> Anonymized browser type, operating system, pages visited, referral source (UTM parameters), and approximate geographic location (city level).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p>Your information is used strictly for legitimate business purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding to project inquiries and sending formal cost estimates or proposals.</li>
              <li>Communicating project updates, milestone deliveries, and technical support via WhatsApp or email.</li>
              <li>Improving our website performance, conversion workflows, and service offerings.</li>
              <li>Complying with statutory accounting and tax obligations under the laws of Tamil Nadu and the Republic of India.</li>
            </ul>
            <p className="font-semibold text-foreground">We never sell, rent, or trade your personal data to third-party marketing brokers.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Cookies & Analytics</h2>
            <p>
              We may utilize privacy-respecting analytics tools (such as Google Analytics 4, Meta Pixel, or Microsoft Clarity) to understand website traffic patterns. These scripts collect anonymized metrics. You can control or block cookies through your browser settings at any time without impacting your ability to browse our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Data Retention & Security</h2>
            <p>
              We implement industry-standard encryption (SSL/TLS) for data in transit and secure cloud storage. Client inquiries are retained only for as long as necessary to fulfill the business relationship or satisfy legal accounting requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">6. Your Rights</h2>
            <p>
              Under Indian law, you have the right to request access to the personal data we hold about you, request corrections, or ask us to delete your inquiry history. To exercise these rights, please message our team at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                {siteConfig.contact.email}
              </a>{" "}
              or contact us on WhatsApp at {siteConfig.contact.primaryPhone}.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">7. Contact Information</h2>
            <p>
              If you have any questions or grievances regarding this Privacy Policy, please contact our Data Representative:
            </p>
            <div className="p-4 rounded-2xl bg-card border border-border text-sm">
              <p><strong className="text-foreground">ZeenOx Media Tech Automation</strong></p>
              <p>Attn: Arun Pandian (Founder & CEO)</p>
              <p>{siteConfig.contact.address.full}</p>
              <p>Email: {siteConfig.contact.email}</p>
              <p>Phone: {siteConfig.contact.primaryPhone}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

