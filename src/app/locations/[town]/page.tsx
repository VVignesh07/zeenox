import { Metadata } from "next";
import { locations } from "@/data/locations";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle, Video, Code2, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";

// Generate static routes at build time
export function generateStaticParams() {
  return locations.map((loc) => ({
    town: loc.id,
  }));
}

// Generate dynamic metadata for each town
export async function generateMetadata(
  { params }: { params: Promise<{ town: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const location = locations.find((l) => l.id === resolvedParams.town);
  
  if (!location) {
    return { title: "Not Found" };
  }

  const townName = location.name;

  return {
    title: `Best Digital Marketing & Web Development Agency in ${townName} | ZeenOx`,
    description: `ZeenOx is the top-rated digital agency serving ${townName}. We offer professional video editing, website development, and SEO services to local businesses.`,
    keywords: [
      `digital marketing agency ${townName}`,
      `website development company ${townName}`,
      `video editing services ${townName}`,
      `web design company near ${townName}`,
      `SEO agency ${townName}`
    ],
    alternates: { canonical: `https://zeenox.agency/locations/${location.id}` },
    openGraph: {
      title: `Digital Marketing & Web Agency in ${townName} | ZeenOx`,
      description: `Grow your business in ${townName} with our expert digital marketing, web development, and video editing services.`,
      url: `https://zeenox.agency/locations/${location.id}`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ town: string }> }) {
  const resolvedParams = await params;
  const location = locations.find((l) => l.id === resolvedParams.town);
  
  if (!location) {
    notFound();
  }

  const townName = location.name;

  const isHQ = location.id === "kariapatti";

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ZeenOx Digital Agency",
    "image": "https://zeenox.agency/images/logo2.png",
    "description": isHQ
      ? `ZeenOx Digital Agency is headquartered in Kariapatti, Virudhunagar district, Tamil Nadu. We provide professional digital marketing, web development, and video editing services to businesses in Kariapatti and across Tamil Nadu.`
      : `Professional digital marketing, web development, and video editing agency serving businesses in ${townName}.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kariapatti",
      "addressLocality": isHQ ? "Kariapatti" : townName,
      "addressRegion": "Tamil Nadu",
      "postalCode": "626106",
      "addressCountry": "IN"
    },
    ...(isHQ && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.2193",
        "longitude": "77.5702"
      },
      "hasMap": "https://maps.google.com/?q=Kariapatti,Tamil+Nadu,India"
    }),
    "areaServed": isHQ
      ? [
          { "@type": "City", "name": "Kariapatti" },
          { "@type": "AdministrativeArea", "name": "Virudhunagar district" },
          { "@type": "State", "name": "Tamil Nadu" }
        ]
      : { "@type": "City", "name": townName },
    "telephone": "+917603917369",
    "url": isHQ ? "https://zeenox.agency" : `https://zeenox.agency/locations/${location.id}`,
    "sameAs": [
      "https://www.instagram.com/zeenox.agency/",
      "https://www.linkedin.com/company/zeenox-agency"
    ],
    "priceRange": "₹₹"
  };

  const services = [
    { title: "Video Editing", icon: Video, desc: `Professional reels and YouTube video editing for brands in ${townName}.` },
    { title: "Web Development", icon: Code2, desc: `Fast, conversion-optimized websites for local businesses in ${townName}.` },
    { title: "Digital Marketing", icon: TrendingUp, desc: `Targeted local SEO and social media marketing to dominate the ${townName} market.` }
  ];

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              <MapPin size={12} /> Local Service Area
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {isHQ ? (
              <>ZeenOx is based in <br className="hidden md:block" /><span className="font-serif-accent italic text-primary">{townName}</span></>
            ) : (
              <>Top Digital Agency in <br className="hidden md:block" /><span className="font-serif-accent italic text-primary">{townName}</span></>
            )}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {isHQ ? (
              <>ZeenOx Digital Agency is <strong>headquartered in Kariapatti</strong>, Virudhunagar district. We are the only full-service digital agency in town offering <strong>website development</strong>, <strong>video editing</strong>, <strong>SEO</strong>, and <strong>digital marketing</strong> — all under one roof.
              </>
            ) : (
              <>Looking for the best <strong>website development</strong>, <strong>video editing</strong>, or <strong>digital marketing</strong> services near {townName}? ZeenOx is a full-service digital agency helping local businesses scale online.</>
            )}
          </p>
          <div className="flex justify-center">
            <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {services.map((s, i) => (
            <div key={i} className="card-apple p-8 bg-card/50 backdrop-blur-md text-center">
              <s.icon size={36} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-lg prose-neutral max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">Why {townName} Businesses Choose ZeenOx</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isHQ
              ? `As a Kariapatti-born agency, we know exactly what local businesses need. We're not a far-off city agency that doesn't understand your market — we grew up here, and our team works from Kariapatti every day. That local insight is why our clients see results that big-city agencies can't deliver.`
              : `Unlike generic agencies, we understand the local market dynamics of ${townName} and the broader Virudhunagar district. We don't just build websites; we build complete digital ecosystems—combining high-retention video content, robust web platforms, and data-driven marketing automation.`
            }
          </p>
          <ul className="space-y-3 not-prose mb-8">
             {["100% In-House Team (No Outsourcing)", "Specialized in Local SEO & Meta Ads", "Cinematic Quality Video Production", "Fast Turnaround Times"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
             ))}
          </ul>
        </div>
        
        <div className="text-center card-apple p-12 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold mb-4">
            {isHQ ? `Come meet us in ${townName}!` : `Ready to grow your brand in ${townName}?`}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {isHQ
              ? `We're right here in Kariapatti. Reach out for a free face-to-face consultation or a digital audit for your business.`
              : `Get a free consultation and digital audit for your business.`
            }
          </p>
          <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
            Schedule a Strategy Call
          </Link>
        </div>
      </div>
    </main>
  );
}
