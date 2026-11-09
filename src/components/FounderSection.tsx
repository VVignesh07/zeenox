"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import StatsSection from "./StatsSection";
import siteConfig from "@/data/siteConfig";

export default function FounderSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const founderWaUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi Arun, I saw your founder profile on the ZeenOx website and would like to discuss my project directly with you."
  )}`;

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-b from-[#E7F3EB] via-[#D8EFE0] to-[#E3F2E8]"
    >
      {/* ── Layered Atmospheric Emerald Mesh & Dot Texture ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(5, 150, 105, 0.16) 0%, rgba(16, 185, 129, 0.08) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 95, 70, 0.14) 0%, rgba(20, 184, 166, 0.07) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #065f46 1.2px, transparent 1.2px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "120px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-6xl mx-auto rounded-[2.5rem] bg-white/95 backdrop-blur-md sm:backdrop-blur-xl p-6 sm:p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(6,78,59,0.12)] border border-white/90 relative overflow-hidden transform-gpu will-change-transform"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid gap-10 sm:gap-14 lg:gap-16 lg:grid-cols-12 items-center relative z-10">
            {/* Left — Founder Portrait & Studio Capsule (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto aspect-[4/5] max-w-sm sm:max-w-md overflow-hidden rounded-3xl sm:rounded-[2.2rem] shadow-2xl shadow-emerald-950/20 bg-white/90 border border-white/90">
                <Image
                  src="/images/founder-arun.webp"
                  alt="Arun Pandian - Founder & Technical Director of ZeenOx"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />

                {/* Floating Glassmorphic Founder Badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-5 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl shadow-black/10 border border-white/80">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-11 w-11 flex items-center justify-center rounded-2xl bg-[#1D1D1F] text-white shadow-md shadow-black/20 shrink-0">
                      <Quote size={18} className="fill-current text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#1D1D1F] leading-none">
                        Arun Pandian
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <p className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                          Founder & Lead Architect
                        </p>
                        <span className="h-1 w-1 rounded-full bg-black/20" />
                        <p className="text-[10px] font-semibold text-[#6E6E73] uppercase tracking-wider">
                          ZeenOx
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Engineering Story + Truthful Stats (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-primary text-[10px] font-extrabold uppercase tracking-widest shadow-2xs">
                  <Sparkles size={12} />
                  <span>Direct Founder Accountability</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight mb-4 text-[#1D1D1F] text-balance">
                  Engineering Value, <br />
                  <span className="font-serif-accent italic text-primary">
                    Guaranteed Transparency.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#4A4A4D] leading-relaxed mb-6 font-medium text-balance">
                  "I partner with growing businesses, clinics, and consumer brands across Tamil Nadu and internationally to bridge the gap between high-performance web platforms, custom web apps, and automated WhatsApp CRM systems. We eliminate agency bloat: you speak directly with engineers who deliver fast 48-hour working drafts and 100% clean source code."
                </p>

                {/* Founder Core Commitments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  <div className="p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.04] flex items-center gap-2.5 text-xs font-semibold text-[#1D1D1F]">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    <span>Direct Founder Communication</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.04] flex items-center gap-2.5 text-xs font-semibold text-[#1D1D1F]">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    <span>48-Hour Clickable Draft Delivery</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.04] flex items-center gap-2.5 text-xs font-semibold text-[#1D1D1F]">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    <span>100% Full Source Code Ownership</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.04] flex items-center gap-2.5 text-xs font-semibold text-[#1D1D1F]">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    <span>{siteConfig.proof.servedLocationsText}</span>
                  </div>
                </div>

                {/* Animated Stats Grid */}
                <div className="mb-8">
                  <StatsSection />
                </div>

                {/* Direct Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                  <a
                    href={founderWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-button-shimmer w-full sm:w-auto px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-black/20 hover:bg-black active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 group"
                  >
                    <MessageCircle size={16} className="fill-current text-[#25D366]" />
                    <span>Chat Directly with Arun</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <span className="text-xs text-[#6E6E73] font-medium text-center sm:text-left">
                    Response typically under 1 hour during business hours.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
