import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, MessageCircle, ShieldCheck } from "lucide-react";
import siteConfig from "@/data/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.caseStudies.find((cs) => cs.slug === slug);

  if (!project) return { title: "Case Study Not Found | ZeenOx" };

  return {
    title: `${project.title} Case Study | ZeenOx Digital Agency`,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.siteUrl}/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study | ZeenOx`,
      description: project.summary,
      url: `${siteConfig.siteUrl}/work/${project.slug}`,
      images: [{ url: `${siteConfig.siteUrl}${project.image}` }],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = siteConfig.caseStudies.find((cs) => cs.slug === slug);

  if (!project) notFound();

  // Find corresponding testimonial if exists
  const testimonial = siteConfig.testimonials.find(
    (t) => t.business.toLowerCase().includes(project.client.toLowerCase().split(" ")[0])
  );

  const prefilledWa = `Hi ZeenOx, I read your case study on ${project.title} and I'd like to achieve similar results for my business.`;
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(prefilledWa)}`;

  return (
    <main className="min-h-screen pt-28 sm:pt-36 pb-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
          >
            <ArrowLeft size={14} /> Back to All Work
          </Link>
        </div>

        {/* Hero Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              • {project.industry} • {project.location}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </div>

        {/* Key Result Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-primary/30 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">
              Verified Project Outcome
            </span>
            <div className="flex items-baseline gap-3 mt-1">
              {project.verified && project.metric ? (
                <span className="text-3xl sm:text-4xl font-black text-foreground">
                  {project.metric}
                </span>
              ) : null}
              <span className="text-base sm:text-lg font-bold text-foreground">
                {project.result}
              </span>
            </div>
            {project.metricSource && (
              <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-primary" />
                Source: {project.metricSource}
              </p>
            )}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground/5 hover:bg-primary hover:text-white border border-border text-xs font-bold uppercase tracking-wider transition-all shrink-0"
            >
              <span>Visit Live Platform</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Visual Preview Screenshot */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-muted/20 border border-border/70 mb-14 shadow-2xl">
          <Image
            src={project.image}
            alt={`${project.title} live production interface`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top"
          />
        </div>

        {/* Structured Case Study Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left Column: Problem & What We Did (8 cols) */}
          <div className="md:col-span-8 space-y-10">
            {/* The Challenge / Problem */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                The Business Challenge
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* What We Did */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                What We Engineered
              </h2>
              <div className="space-y-3">
                {project.whatWeDid.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-card border border-border">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial if available */}
            {testimonial && (
              <section className="p-6 sm:p-8 rounded-3xl bg-primary/[0.04] border border-primary/20 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                  Client Feedback
                </span>
                <blockquote className="text-sm sm:text-base text-foreground font-medium italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-xs font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-[11px] text-muted-foreground">{testimonial.role}, {testimonial.business}</p>
                  </div>
                  <div className="flex text-amber-400">
                    {"★".repeat(testimonial.rating)}
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Tech Stack & Overview (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-card border border-border space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  Client
                </span>
                <p className="text-sm font-bold text-foreground">{project.client}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  Industry
                </span>
                <p className="text-sm font-bold text-foreground">{project.industry}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  Scope Delivered
                </span>
                <p className="text-sm font-bold text-foreground">{project.category}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-foreground/[0.04] border border-border text-[11px] font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-card to-card/90 border border-primary/30 text-center space-y-4">
              <h3 className="text-base font-bold text-foreground">
                Want similar results for your business?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Chat with Founder Arun Pandian to review your project scope and get a fixed quote.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

