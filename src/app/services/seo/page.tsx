import { Metadata } from "next";
import { Search, TrendingUp, BarChart3, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Agency in India | ZeenOx Digital Services",
  description: "ZeenOx is a top-rated SEO agency in India providing on-page, off-page, and technical SEO services to rank your website #1 on Google.",
  keywords: [
    "SEO agency India",
    "best SEO company",
    "search engine optimization services",
    "technical SEO",
    "on-page SEO",
    "off-page SEO",
    "local SEO agency",
  ],
  alternates: { canonical: "https://zeenox.agency/services/seo" },
  openGraph: {
    title: "SEO Agency in India | ZeenOx",
    description: "Top-rated SEO agency in India providing comprehensive search engine optimization to rank your website #1.",
    url: "https://zeenox.agency/services/seo",
  },
};

export default function SEOService() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional SEO Services",
    "alternateName": "SEO Agency India",
    "provider": {
      "@type": "Organization",
      "name": "ZeenOx Digital Agency",
      "url": "https://zeenox.agency"
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "description": "Comprehensive Search Engine Optimization (SEO) services including Technical SEO, On-Page content optimization, and Off-Page link building.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "offerCount": "3",
      "highPrice": "100000",
      "lowPrice": "15000"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does SEO take to show results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO is a long-term strategy. While technical fixes can show improvements in weeks, significant ranking and traffic growth typically takes 3 to 6 months depending on keyword competition."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our SEO services cover all three pillars: Technical SEO (site speed, schema markup, mobile optimization), On-Page SEO (content, keywords, meta tags), and Off-Page SEO (high-quality backlink building)."
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
            Search Engine <br className="hidden md:block" />
            <span className="font-serif-accent italic text-primary">Optimization</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop relying solely on paid ads. We engineer sustainable, long-term organic growth by dominating search results for high-intent keywords in your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Search size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Technical & On-Page SEO</h2>
            <p className="text-muted-foreground mb-4">
              We fix the foundation. From optimizing Core Web Vitals and site speed to injecting advanced Schema Markup (JSON-LD) and restructuring your content for semantic relevance, we ensure Google loves reading your site.
            </p>
          </div>

          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <TrendingUp size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Off-Page Authority Building</h2>
            <p className="text-muted-foreground mb-4">
              Content alone isn't enough for competitive niches. We run aggressive digital PR and outreach campaigns to secure high-authority, contextually relevant backlinks that drastically increase your domain authority.
            </p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-6">Why You Need a Dedicated SEO Strategy</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Search Engine Optimization is the highest-ROI marketing channel available. When a user searches for your service on Google, they are already displaying high purchase intent. If your competitors are ranking on page one and you aren't, you are actively losing revenue every single day.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            As a premier SEO agency in India, ZeenOx doesn't just chase traffic; we chase conversions. We target bottom-of-the-funnel keywords that bring qualified leads directly to your digital doorstep.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card-apple p-6">
              <h3 className="text-lg font-bold mb-2">How long does SEO take to show results?</h3>
              <p className="text-muted-foreground text-sm">SEO is a long-term strategy. While technical fixes can show improvements in weeks, significant ranking and traffic growth typically takes 3 to 6 months depending on keyword competition.</p>
            </div>
            <div className="card-apple p-6">
              <h3 className="text-lg font-bold mb-2">What is included in your SEO services?</h3>
              <p className="text-muted-foreground text-sm">Our SEO services cover all three pillars: Technical SEO (site speed, schema markup, mobile optimization), On-Page SEO (content, keywords, meta tags), and Off-Page SEO (high-quality backlink building).</p>
            </div>
          </div>
        </div>

        <div className="text-center card-apple p-12 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold mb-6">Want to rank #1 on Google?</h2>
          <Link href="/#contact" className="btn-apple inline-flex">
            Get a Free SEO Audit
          </Link>
        </div>
      </div>
    </main>
  );
}
