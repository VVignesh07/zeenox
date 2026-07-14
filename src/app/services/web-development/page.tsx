import { Metadata } from "next";
import { Globe, Layout, Code2, Smartphone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Agency in India | ZeenOx Digital Services",
  description: "ZeenOx is a premium web development agency in India building fast, modern, conversion-focused websites, e-commerce stores, and custom web apps.",
  keywords: [
    "web development agency India",
    "website development company",
    "best web design agency",
    "e-commerce development",
    "custom web apps",
    "Next.js web development India",
  ],
  alternates: { canonical: "https://zeenox.agency/services/web-development" },
  openGraph: {
    title: "Web Development Agency in India | ZeenOx",
    description: "Premium web development agency building fast, modern, conversion-focused websites and web apps.",
    url: "https://zeenox.agency/services/web-development",
  },
};

export default function WebDevelopmentService() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Web Development Services",
    "alternateName": "Website Development Company India",
    "provider": {
      "@type": "Organization",
      "name": "ZeenOx Digital Agency",
      "url": "https://zeenox.agency"
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "description": "Premium website development, e-commerce, and custom web applications optimized for speed, technical SEO, and maximum conversion.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "offerCount": "3",
      "highPrice": "200000",
      "lowPrice": "25000"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What technologies do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in the modern JavaScript ecosystem, utilizing frameworks like Next.js, React, and Tailwind CSS to build incredibly fast, SEO-friendly sites that outperform legacy WordPress setups."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing website maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer retainer packages to handle hosting, security updates, content changes, and continuous performance optimization."
        }
      }
    ]
  };

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Service Profile
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Web Development <br className="hidden md:block" />
            <span className="font-serif-accent italic text-primary">Agency</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your website is your most important digital asset. We build fast, responsive, and visually stunning web experiences engineered specifically to convert visitors into leads and customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Layout size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Business & Portfolio Websites</h2>
            <p className="text-muted-foreground mb-4">
              We design premium landing pages and corporate websites that instantly establish trust. Whether you need website development for fashion brands or a lead-gen site for a B2B consultancy, we ensure your brand looks world-class.
            </p>
          </div>

          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Code2 size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">E-Commerce & Custom Web Apps</h2>
            <p className="text-muted-foreground mb-4">
              Scalable, secure, and lightning-fast. We build robust digital storefronts and custom web applications using modern tech stacks like Next.js and React, providing your users with a seamless, app-like experience.
            </p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-6">More Than Just Code</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            As a leading web development agency, we understand that a website must be more than just a digital brochure. It must be a functional marketing tool. That's why every site we build is optimized for technical SEO, rapid load times, and flawless mobile responsiveness.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We also offer comprehensive website audit services (including Drupal/WordPress audits) to identify performance bottlenecks, UX friction points, and SEO penalties on your existing site, giving you a clear roadmap for improvement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card-apple p-6">
              <h3 className="text-lg font-bold mb-2">What technologies do you use?</h3>
              <p className="text-muted-foreground text-sm">We specialize in the modern JavaScript ecosystem, utilizing frameworks like Next.js, React, and Tailwind CSS to build incredibly fast, SEO-friendly sites that outperform legacy WordPress setups.</p>
            </div>
            <div className="card-apple p-6">
              <h3 className="text-lg font-bold mb-2">Do you provide ongoing website maintenance?</h3>
              <p className="text-muted-foreground text-sm">Yes. We offer retainer packages to handle hosting, security updates, content changes, and continuous performance optimization.</p>
            </div>
          </div>
        </div>

        <div className="text-center card-apple p-12 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold mb-6">Ready to upgrade your digital storefront?</h2>
          <Link href="/#contact" className="btn-apple inline-flex">
            Request a Web Audit
          </Link>
        </div>
      </div>
    </main>
  );
}
