import { Metadata } from "next";
import { Cpu, Settings, Zap, Workflow } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Automation Agency | ZeenOx Digital Services",
  description: "Save time and scale operations with our workflow automation and marketing automation services tailored for businesses.",
  keywords: [
    "business automation agency",
    "marketing automation services",
    "workflow automation",
    "Zapier integration expert",
    "CRM automation",
    "small business automation",
  ],
  alternates: { canonical: "https://zeenox.agency/services/automation" },
  openGraph: {
    title: "Business Automation Agency | ZeenOx",
    description: "Scale operations with our workflow and marketing automation services.",
    url: "https://zeenox.agency/services/automation",
  },
};

export default function AutomationService() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business & Marketing Automation",
    "alternateName": "Workflow Automation Services",
    "provider": {
      "@type": "Organization",
      "name": "ZeenOx Digital Agency",
      "url": "https://zeenox.agency"
    },
    "description": "Custom workflow automation, Zapier integrations, and marketing automation systems to save time and scale business operations.",
    "category": "Business Services"
  };

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Service Profile
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Business & Marketing <br className="hidden md:block" />
            <span className="font-serif-accent italic text-primary">Automation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop doing repetitive tasks manually. We build custom automation systems that handle lead routing, follow-ups, and internal workflows so your team can focus on high-leverage work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Workflow size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Marketing Automation</h2>
            <p className="text-muted-foreground mb-4">
              Never let a lead go cold. We set up intelligent marketing automation for small business operations, including email drip campaigns, automated SMS follow-ups, and dynamic CRM lead scoring based on user behavior.
            </p>
          </div>

          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Settings size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Workflow & Internal Ops</h2>
            <p className="text-muted-foreground mb-4">
              We connect your disparate software tools (Zapier, Make.com, custom APIs) to eliminate data entry. From automatically generating invoices when a deal closes to synchronizing your calendar with client onboarding forms.
            </p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-6">The Unfair Advantage of Automation</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In today's fast-paced digital economy, speed is a competitive advantage. If a lead fills out a form on your website and doesn't receive a personalized follow-up within five minutes, their conversion likelihood drops drastically. Automation services for small business bridge this gap, giving a lean team the operational capacity of a massive enterprise.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We map out your current operational bottlenecks, identify repetitive manual tasks, and implement robust, error-free automated pipelines. The result? Lower overhead costs, zero human error in data transfer, and a significantly faster sales cycle.
          </p>
        </div>

        <div className="text-center card-apple p-12 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold mb-6">Ready to streamline your operations?</h2>
          <Link href="/#contact" className="btn-apple inline-flex">
            Book an Automation Audit
          </Link>
        </div>
      </div>
    </main>
  );
}
