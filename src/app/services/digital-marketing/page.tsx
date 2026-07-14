import { Metadata } from "next";
import { TrendingUp, Target, BarChart, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in India | ZeenOx Services",
  description: "ZeenOx is a data-driven digital marketing agency in India providing social media management, paid ads, and comprehensive marketing strategies.",
  keywords: [
    "digital marketing agency India",
    "social media marketing agency",
    "best digital marketing company",
    "paid ads agency",
    "marketing strategy",
    "Facebook ads agency",
  ],
  alternates: { canonical: "https://zeenox.agency/services/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Agency in India | ZeenOx",
    description: "Data-driven digital marketing agency providing social media management, paid ads, and marketing strategy.",
    url: "https://zeenox.agency/services/digital-marketing",
  },
};

export default function DigitalMarketingService() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full-Service Digital Marketing",
    "alternateName": "Digital Marketing Agency India",
    "provider": {
      "@type": "Organization",
      "name": "ZeenOx Digital Agency",
      "url": "https://zeenox.agency"
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "description": "Comprehensive digital marketing services including social media management, Google Ads, Meta Ads, and marketing strategy to lower CAC and maximize ROAS.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "offerCount": "2",
      "highPrice": "150000",
      "lowPrice": "20000"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to see results from digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paid ads can generate leads within the first week, while organic social media growth and SEO typically require 3 to 6 months to build sustainable momentum."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with local businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We run highly localized digital marketing campaigns designed to drive foot traffic to physical locations, such as clinics, retail stores, and local service providers."
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
            Digital Marketing <br className="hidden md:block" />
            <span className="font-serif-accent italic text-primary">Agency</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beautiful content is useless if no one sees it. Our digital marketing agency builds data-driven campaigns that capture attention, build brand equity, and turn followers into paying customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Users size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Social Media Management</h2>
            <p className="text-muted-foreground mb-4">
              We take over your social channels and run them like a media company. From content calendars to community management, we ensure your brand stays top-of-mind. Especially effective for social media marketing for jewellery brands, fashion labels, and lifestyle companies.
            </p>
          </div>

          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Target size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Paid Ads (Meta & Google)</h2>
            <p className="text-muted-foreground mb-4">
              We deploy hyper-targeted paid advertising campaigns across Facebook, Instagram, and Google. We continually A/B test creatives and optimize bidding strategies to lower your Customer Acquisition Cost (CAC) and maximize Return on Ad Spend (ROAS).
            </p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-6">A Marketing Engine Built for Growth</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Many businesses struggle because their marketing efforts are disjointed. You might have a great video editor, a separate ad buyer, and someone else running organic social. As a full-service digital marketing agency, ZeenOx unifies these efforts. We ensure that the videos we produce are immediately deployed into high-performing marketing funnels.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our strategic approach begins with a comprehensive audit of your current digital footprint. We analyze your competitors, define your exact buyer personas, and map out a customer journey that removes friction from the buying process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card-apple p-6">
              <h3 className="text-lg font-bold mb-2">How long does it take to see results from digital marketing?</h3>
              <p className="text-muted-foreground text-sm">Paid ads can generate leads within the first week, while organic social media growth and SEO typically require 3 to 6 months to build sustainable momentum.</p>
            </div>
            <div className="card-apple p-6">
              <h3 className="text-lg font-bold mb-2">Do you work with local businesses?</h3>
              <p className="text-muted-foreground text-sm">Absolutely. We run highly localized digital marketing campaigns designed to drive foot traffic to physical locations, such as clinics, retail stores, and local service providers.</p>
            </div>
          </div>
        </div>

        <div className="text-center card-apple p-12 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold mb-6">Let's build your marketing engine.</h2>
          <Link href="/#contact" className="btn-apple inline-flex">
            Schedule a Strategy Session
          </Link>
        </div>
      </div>
    </main>
  );
}
