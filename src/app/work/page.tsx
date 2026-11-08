import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import SocialShare from "@/components/SocialShare";
import siteConfig from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Case Studies & Live Production Portfolio | ZeenOx Digital Agency",
  description: "Explore ZeenOx's verified portfolio of work. Real results, live platforms, and performance metrics across healthcare, real estate, retail, and business automation.",
  alternates: { canonical: `${siteConfig.siteUrl}/work` },
  openGraph: {
    title: "Case Studies & Live Production Portfolio | ZeenOx",
    description: "Explore ZeenOx's verified portfolio of work across web apps, digital platforms, and automation systems.",
    url: `${siteConfig.siteUrl}/work`,
  },
};

export default function WorkPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ZeenOx Digital Agency — Portfolio & Case Studies",
    "description": "A curated collection of ZeenOx's best work across web apps, platforms, and business automation.",
    "url": `${siteConfig.siteUrl}/work`,
    "publisher": {
      "@type": "Organization",
      "name": "ZeenOx Digital Agency",
      "url": siteConfig.siteUrl,
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": siteConfig.caseStudies.map((cs, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${cs.client}: ${cs.title}`,
        "description": cs.summary,
      })),
    },
  };

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-[10px] font-bold uppercase tracking-widest text-primary shadow-xs">
            Engineered Results
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-[#1D1D1F]">
            Work That <br className="hidden md:block" />
            <span className="font-serif-accent italic text-primary">Drives Verifiable Growth</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
            We partner with ambitious founders in Tamil Nadu and worldwide to build high-converting websites, web apps, and automated workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          {siteConfig.caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="group flex flex-col justify-between rounded-3xl bg-[#FBFBFD] shadow-[0_12px_36px_-6px_rgba(6,78,59,0.06)] overflow-hidden hover:shadow-[0_20px_50px_-10px_rgba(6,78,59,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Link href={`/work/${cs.slug}`} className="block aspect-[16/10] bg-muted/20 relative overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Metric Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1D1D1F] font-extrabold text-xs shadow-md flex items-center gap-1.5">
                      {cs.verified && <ShieldCheck size={13} className="text-primary" />}
                      <span>{cs.result}</span>
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/95 backdrop-blur-md text-[#1D1D1F] group-hover:bg-[#1D1D1F] group-hover:text-white transition-colors flex items-center justify-center shadow-md">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                      {cs.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">• {cs.location}</span>
                  </div>

                  <Link href={`/work/${cs.slug}`}>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-3 leading-snug group-hover:text-primary transition-colors">
                      {cs.client}: {cs.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2 font-medium">
                    {cs.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cs.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-[#6E6E73] bg-[#F5F5F7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 border-t border-black/[0.05] pt-4 mt-auto flex items-center justify-between">
                <Link
                  href={`/work/${cs.slug}`}
                  className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Read Full Case Study <ArrowUpRight size={13} />
                </Link>
                <div>
                  <SocialShare url={`${siteConfig.siteUrl}/work/${cs.slug}`} title={`${cs.client}: ${cs.title} by ZeenOx`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center rounded-3xl p-10 sm:p-14 bg-[#FBFBFD] shadow-[0_12px_36px_-6px_rgba(6,78,59,0.06)] max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Start a Project</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
            Ready to build a high-performance digital presence?
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto font-medium">
            Direct collaboration with technical lead Arun Pandian. Fixed pricing, rapid sprints, and direct WhatsApp support.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white hover:bg-black font-semibold text-xs tracking-wide shadow-md transition-all"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
