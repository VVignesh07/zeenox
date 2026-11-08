"use client";

import { CheckCircle2, MessageCircle, ArrowRight, ShieldAlert, Sparkles, ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import siteConfig from "@/data/siteConfig";

interface NicheConfig {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  targetIndustry: string;
  painPoints: string[];
  solutions: string[];
  featuredCaseStudySlug: string;
  whatsappPrefilledText: string;
}

export default function NicheLandingPage({ niche }: { niche: NicheConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featuredCaseStudy = siteConfig.caseStudies.find(
    (cs) => cs.slug === niche.featuredCaseStudySlug
  ) || siteConfig.caseStudies[0];

  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    niche.whatsappPrefilledText
  )}`;

  return (
    <main className="min-h-screen pt-28 sm:pt-36 pb-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
          <Sparkles size={13} />
          <span>Specialized Industry Solution • {niche.targetIndustry}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-balance text-[#1D1D1F]">
          {niche.headline}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
          {niche.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1D1D1F] text-white hover:bg-black font-semibold text-xs tracking-wide shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
          >
            <MessageCircle size={18} className="fill-current text-white" />
            <span>Chat With Us on WhatsApp</span>
            <ArrowRight size={16} />
          </a>

          <a
            href={`tel:${siteConfig.contact.primaryPhone}`}
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-black/[0.08] bg-white text-[#1D1D1F] hover:bg-black/[0.04] font-semibold text-xs tracking-wide shadow-sm transition-all flex items-center justify-center"
          >
            Call {siteConfig.contact.primaryPhone}
          </a>
        </div>
      </section>

      {/* Pain Points vs Solutions Comparison Grid */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl mb-20 sm:mb-28">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Industry Comparison</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] mt-1">
            Common Bottlenecks vs Our Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Pain Points */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-red-500/20 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-red-500 font-bold text-sm uppercase tracking-wider">
              <ShieldAlert size={16} />
              <span>Challenges You Face</span>
            </div>
            <div className="space-y-3 pt-2">
              {niche.painPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Solutions */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-primary/40 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <CheckCircle2 size={16} />
              <span>How ZeenOx Solves It</span>
            </div>
            <div className="space-y-3 pt-2">
              {niche.solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1F] font-medium leading-relaxed">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Case Study Feature */}
      {featuredCaseStudy && (
        <section className="container mx-auto px-4 sm:px-6 max-w-5xl mb-20 sm:mb-28">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Proof in Action</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] mt-1">
              Featured Case Study
            </h2>
          </div>

          <div className="rounded-3xl bg-white border border-black/[0.06] overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-sm">
            <div className="md:col-span-6 relative aspect-[16/10] md:aspect-auto bg-muted/20">
              <Image
                src={featuredCaseStudy.image}
                alt={featuredCaseStudy.title}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {featuredCaseStudy.category} • {featuredCaseStudy.location}
                </span>
                <h3 className="text-2xl font-bold text-[#1D1D1F] mt-1 mb-3">
                  {featuredCaseStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {featuredCaseStudy.summary}
                </p>
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-[#1D1D1F]">
                  Result: {featuredCaseStudy.result}
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Link
                  href={`/work/${featuredCaseStudy.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={13} />
                </Link>
                {featuredCaseStudy.liveUrl && (
                  <a
                    href={featuredCaseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Direct Niche FAQ */}
      <section className="container mx-auto px-4 sm:px-6 max-w-3xl mb-20">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Frequently Asked</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] mt-1">Questions & Delivery</h2>
        </div>

        <div className="space-y-3">
          {siteConfig.pricing.faq.slice(0, 4).map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="rounded-2xl bg-white border border-black/[0.06] overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#1D1D1F] hover:text-primary transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-black/[0.04] pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#F5F5F7] to-white border border-black/[0.06] shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Ready to upgrade your {niche.targetIndustry} digital presence?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
            Direct collaboration with technical lead Arun Pandian. Fixed pricing, rapid sprints, and direct WhatsApp support.
          </p>
          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1D1D1F] text-white hover:bg-black font-semibold text-xs tracking-wide shadow-md hover:scale-[1.02] active:scale-95 transition-all"
            >
              <MessageCircle size={16} />
              <span>Get Started on WhatsApp</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
