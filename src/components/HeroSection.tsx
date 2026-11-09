"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Layers,
  Users,
  Calendar,
  Settings2,
  Cpu,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { lang } = useLanguage();
  const isTamil = lang === "ta";

  const prefilledWa = "Hi Arun / ZeenOx Team, I'd like to explore unified digital solutions for my business.";
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(prefilledWa)}`;

  const handleHeroWaClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "whatsapp_click",
        location: "hero_primary",
      });
    }
  };

  const pillars = [
    { name: "ERP", icon: Layers, href: "/#services", desc: "Enterprise Resource Planning" },
    { name: "CRM", icon: Users, href: "/#services", desc: "Customer Relationship Management" },
    { name: "HRM", icon: Calendar, href: "/#services", desc: "Human Resource & Payroll" },
    { name: "Automations", icon: Settings2, href: "/#services", desc: "Workflows & Autozee AI" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-12 overflow-hidden bg-white selection:bg-[#00D664]/30"
    >
      {/* ── Background High-Tech Atmospheric Matrix & Ambient Spotlights ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Architectural Dot Grid for Tech Feel */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #065f46 1.2px, transparent 1.2px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Soft mint ambient glow on right */}
        <div
          className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 214, 100, 0.14) 0%, rgba(230, 248, 238, 0.45) 45%, transparent 70%)",
          }}
        />

        {/* Soft background light on left */}
        <div
          className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-7xl my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ═══════════ LEFT COLUMN: HEADLINE, COPY & CTA ═══════════ */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            {/* Tech Authority Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00A844] text-[11px] font-extrabold uppercase tracking-widest shadow-2xs"
            >
              <Sparkles size={13} className="text-[#00D664]" />
              <span>{isTamil ? "மீடியா • தொழில்நுட்பம் • ஆட்டோமேஷன்" : "Enterprise Media • Technology • AI Automation"}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-extrabold tracking-tight text-[#082817] leading-[1.08] sm:leading-[1.04] [text-wrap:balance]"
            >
              {isTamil ? (
                <>
                  உங்கள் வணிகம். <br />
                  <span className="text-[#05381E]">இணைக்கப்பட்டு சிறந்தது.</span>
                </>
              ) : (
                <>
                  Your business. <br />
                  <span className="text-[#05381E]">Better connected.</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-sm sm:text-base md:text-xl text-[#2B4B38] font-medium leading-relaxed max-w-xl text-balance"
            >
              {isTamil
                ? "வணிக செயல்பாடுகளை சீராக்க, உங்கள் குழுக்களை இணைக்க மற்றும் நம்பிக்கையுடன் வளர ஒருங்கிணைந்த டிஜிட்டல் தீர்வுகள்."
                : "Unified digital solutions to streamline operations, connect your teams, and grow with confidence."}
            </motion.p>

            {/* CTA Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              {/* Primary Green Pill Button */}
              <Link
                href="/#services"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-[#00D664] hover:bg-[#00BF58] text-[#052B16] font-extrabold text-sm sm:text-[15px] tracking-wide shadow-[0_12px_28px_rgba(0,214,100,0.32)] hover:shadow-[0_16px_36px_rgba(0,214,100,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 shrink-0 group cursor-pointer text-center"
              >
                <span>{isTamil ? "தீர்வுகளைக் காண்க" : "Explore solutions"}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary WhatsApp Pill */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleHeroWaClick}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-[#F5F5F7] text-[#082817] font-bold text-sm sm:text-[15px] tracking-wide border border-black/[0.08] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-center"
              >
                <MessageCircle size={18} className="text-[#25D366] fill-current" />
                <span>{isTamil ? "வாட்ஸ்அப் ஆலோசனை" : "Get a Quote"}</span>
              </a>
            </motion.div>

            {/* Enterprise Technology Proof Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-4 border-t border-black/[0.06] flex items-center justify-between sm:justify-start gap-3 sm:gap-8"
            >
              <div>
                <div className="text-lg sm:text-2xl font-black text-[#082817] tracking-tight">50+</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#2B4B38]/70 uppercase tracking-wider">Enterprise Systems</div>
              </div>
              <div className="h-6 sm:h-7 w-px bg-black/[0.08]" />
              <div>
                <div className="text-lg sm:text-2xl font-black text-[#082817] tracking-tight">99.9%</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#2B4B38]/70 uppercase tracking-wider">Uptime SLA</div>
              </div>
              <div className="h-6 sm:h-7 w-px bg-black/[0.08]" />
              <div>
                <div className="text-lg sm:text-2xl font-black text-[#082817] tracking-tight">48-Hr</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#2B4B38]/70 uppercase tracking-wider">Rapid Deployment</div>
              </div>
            </motion.div>
          </div>

          {/* ═══════════ RIGHT COLUMN: 3D ENTERPRISE TECHNOLOGY ECOSYSTEM ═══════════ */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[280px] sm:min-h-[440px] lg:min-h-[560px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Dynamic Floating 3D Technology Hub */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full max-w-[620px] aspect-[4/3] relative flex items-center justify-center transform-gpu will-change-transform"
              >
                {/* 3D Photorealistic Technology Ecosystem Render */}
                <div className="relative w-full h-full drop-shadow-[0_25px_50px_rgba(6,78,59,0.12)]">
                  <picture>
                    <source srcSet="/images/hero-tech-ecosystem.webp" type="image/webp" />
                    <img
                      src="/images/hero-tech-ecosystem.png"
                      alt="ZeenOx 3D Enterprise Technology Architecture"
                      className="w-full h-full object-contain pointer-events-none select-none"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                </div>

                {/* Floating Glassmorphism Telemetry Card 1 (Top Left) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 left-1 sm:-left-3 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md sm:backdrop-blur-xl border border-black/[0.08] shadow-[0_12px_28px_rgba(6,78,59,0.12)] flex items-center gap-2 sm:gap-2.5 pointer-events-none transform-gpu will-change-transform"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#00C853] shrink-0">
                    <Cpu size={14} className="animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#082817]">Autozee AI Engine</div>
                    <div className="text-[8px] sm:text-[9px] text-[#2B4B38]/80 font-semibold">Autonomous Sync • Live</div>
                  </div>
                </motion.div>

                {/* Floating Glassmorphism Telemetry Card 2 (Bottom Right) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 right-1 sm:-right-4 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md sm:backdrop-blur-xl border border-black/[0.08] shadow-[0_12px_28px_rgba(6,78,59,0.12)] flex items-center gap-2 sm:gap-2.5 pointer-events-none transform-gpu will-change-transform"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#00C853] shrink-0">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#082817]">Cloud ERP & CRM</div>
                    <div className="text-[8px] sm:text-[9px] text-[#2B4B38]/80 font-semibold">99.99% Uptime • AES-256</div>
                  </div>
                </motion.div>

                {/* Floating Glassmorphism Telemetry Card 3 (Top Right) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-6 right-1 sm:-right-5 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white/95 backdrop-blur-md sm:backdrop-blur-xl border border-black/[0.08] shadow-[0_8px_20px_rgba(6,78,59,0.1)] flex items-center gap-1.5 pointer-events-none transform-gpu will-change-transform"
                >
                  <Zap size={12} className="text-[#00D664] fill-current" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wide text-[#082817]">Sub-Second Edge</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ═══════════ BOTTOM DOCK: ERP • CRM • HRM • AUTOMATIONS ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full pt-10 sm:pt-14 md:pt-16"
        >
          <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-2xl border border-black/[0.07] shadow-[0_12px_36px_rgba(6,78,59,0.06)] px-4 py-3 sm:py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 items-center">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Link
                    key={pillar.name}
                    href={pillar.href}
                    className={`flex items-center justify-center gap-3 py-2.5 px-3 rounded-xl hover:bg-emerald-500/10 transition-all duration-200 group cursor-pointer ${
                      idx !== 0 ? "md:border-l md:border-black/[0.08]" : ""
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#00C853] group-hover:scale-110 group-hover:bg-[#00D664] group-hover:text-black transition-all shrink-0">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <span className="text-sm sm:text-base font-extrabold text-[#082817] tracking-tight group-hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {pillar.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
