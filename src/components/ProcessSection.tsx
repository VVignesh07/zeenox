"use client";

import { motion } from "framer-motion";
import { Search, Map, Code, TrendingUp, CheckCircle2, Clock } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Architecture Blueprint",
    timeline: "Days 1 – 2",
    desc: "We analyze your target market, competitors in Tamil Nadu, and technical requirements. No guesswork — we map out the exact site structure, user journeys, and conversion funnels.",
    deliverable: "Architecture Blueprint & Wireframes",
  },
  {
    step: "02",
    icon: Map,
    title: "High-Fidelity UI/UX & Storyboard",
    timeline: "Days 3 – 5",
    desc: "We design pixel-perfect, mobile-first layouts in Figma and storyboard video narratives. You review and approve the design before a single line of production code is deployed.",
    deliverable: "Interactive Clickable Prototype",
  },
  {
    step: "03",
    icon: Code,
    title: "Engineering & API Integrations",
    timeline: "Days 6 – 12",
    desc: "Our senior developers build clean, modular code using modern Next.js or Shopify. We connect your payment gateways (Razorpay/Stripe), WhatsApp APIs, and automated CRM workflows.",
    deliverable: "Fully Functional Staging Link",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "QA Testing, Launch & Autopilot Scaling",
    timeline: "Day 14 & Beyond",
    desc: "Rigorous Core Web Vitals speed tests across iOS and Android devices, live domain DNS migration, Google Search Console indexing, and 30-day post-launch warranty monitoring.",
    deliverable: "Live Production Platform + Full Source Code",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-28 md:py-36 bg-[#FAFAFC] overflow-hidden border-t border-b border-black/[0.04]"
    >
      {/* Subtle Overhead Ambient Spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.06),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "120px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-[#EBEBED] border border-black/[0.06] text-[10px] font-extrabold uppercase tracking-widest text-primary shadow-2xs">
            Structured Execution
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1] mb-4">
            How We <span className="font-serif-accent italic text-primary">Work.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#2D2D30] leading-relaxed max-w-xl mx-auto font-medium">
            A battle-tested 4-step engineering roadmap. Clear milestones, continuous visibility, and zero tech debt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "120px" }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: "easeOut" }}
                className="group p-6 sm:p-7 rounded-[2rem] bg-[#F5F5F7] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.05),0_12px_36px_rgba(6,78,59,0.05)] hover:shadow-[0_24px_60px_-10px_rgba(6,78,59,0.14)] hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between transform-gpu will-change-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-primary/50 group-hover:text-primary transition-colors">
                      {step.step}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-muted-foreground bg-white border border-black/[0.06] px-2.5 py-1 rounded-full shadow-xs">
                      <Clock size={11} className="text-primary" />
                      {step.timeline}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.04] shadow-xs flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/[0.06] flex items-center gap-2 text-xs font-semibold text-foreground/90 bg-white/70 p-2.5 rounded-xl border border-black/[0.03]">
                  <CheckCircle2 size={14} className="text-primary shrink-0" />
                  <span className="line-clamp-1">{step.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
