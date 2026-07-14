import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Digital Agency Case Studies & Portfolio | ZeenOx Work",
  description: "Explore ZeenOx's portfolio of work. See how our digital marketing, web development, and video editing services have transformed businesses across healthcare, fashion, retail, and more.",
  keywords: [
    "digital agency portfolio India",
    "case study digital marketing",
    "web development portfolio",
    "video editing portfolio India",
    "ZeenOx work",
    "ZeenOx case studies",
    "best digital agency work samples",
    "healthcare marketing case study",
    "fashion brand digital marketing",
  ],
  alternates: { canonical: "https://zeenox.agency/work" },
  openGraph: {
    title: "Digital Agency Case Studies & Portfolio | ZeenOx",
    description: "See how ZeenOx has transformed businesses with video editing, web development, and digital marketing. Real results for real brands.",
    url: "https://zeenox.agency/work",
  },
};

const caseStudies = [
  {
    category: "Healthcare Marketing Agency Case Study",
    client: "UK Charity",
    outcome: "Rebuilt web presence for a UK-based charity, improving accessibility and lead capture by 140%.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Web Development", "SEO", "UX Design"]
  },
  {
    category: "Clinic Marketing Case Study",
    client: "Rehabilitation Center",
    outcome: "10th-anniversary campaign design and digital rollout for a special-needs rehabilitation center.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1200&auto=format&fit=crop",
    tags: ["Digital Marketing", "Video Editing", "Branding"]
  },
  {
    category: "Fashion & Retail",
    client: "KVP Jewellery",
    outcome: "Social content system and high-end video production driving consistent engagement and foot traffic.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    tags: ["Video Editing", "Social Media", "Paid Ads"]
  },
  {
    category: "Medical & Health",
    client: "Venu's Health Care",
    outcome: "Complete digital transformation including patient portal automation and localized SEO.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop",
    tags: ["Web Development", "Automation", "Local SEO"]
  }
];

export default function WorkPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ZeenOx Digital Agency — Portfolio & Case Studies",
    "description": "A curated collection of ZeenOx's best work across digital marketing, web development, and video production.",
    "url": "https://zeenox.agency/work",
    "publisher": {
      "@type": "Organization",
      "name": "ZeenOx Digital Agency",
      "url": "https://zeenox.agency"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": caseStudies.map((cs, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${cs.client}: ${cs.category}`,
        "description": cs.outcome
      }))
    }
  };

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Work That <br className="hidden md:block" />
            <span className="font-serif-accent italic text-primary">Drives Results</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We partner with ambitious brands to solve complex digital challenges. Here is a selection of our recent work spanning video production, marketing, and engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {caseStudies.map((cs, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-[2rem] bg-card mb-8 overflow-hidden relative card-apple transition-transform duration-500 group-hover:-translate-y-2 border border-white/5">
                {/* Image */}
                <img 
                  src={cs.image} 
                  alt={cs.client} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/20 backdrop-blur-sm z-10">
                  <span className="h-16 w-16 rounded-full bg-background flex items-center justify-center text-primary shadow-2xl">
                    <ArrowUpRight size={28} />
                  </span>
                </div>
              </div>
              <div className="px-2">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-3">
                  {cs.category}
                </p>
                <h2 className="text-2xl font-bold text-foreground leading-snug mb-4">
                  {cs.client}: {cs.outcome}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-border text-xs font-medium text-muted-foreground bg-card">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="border-t border-border pt-4 mt-auto">
                   <SocialShare url={`https://zeenox.agency/work`} title={`${cs.client}: ${cs.category} by ZeenOx`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center card-apple p-12 bg-primary/5 border-primary/20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-muted-foreground mb-8">We are currently accepting new clients for Q3 and Q4.</p>
          <Link href="/#contact" className="btn-apple inline-flex">
            Start a Conversation
          </Link>
        </div>
      </div>
    </main>
  );
}
