"use client";

import { motion } from "framer-motion";
import { Users, Zap, ShieldCheck, GraduationCap } from "lucide-react";

const reasons = [
  { icon: Users, title: "One Team, Full Stack", desc: "Video, marketing, web, and automation without switching vendors." },
  { icon: Zap, title: "Built for Speed", desc: "Lean team, fast turnarounds, no bureaucracy." },
  { icon: ShieldCheck, title: "Quality Bar, Every Time", desc: "Every deliverable is client-ready, not 'good enough.'" },
  { icon: GraduationCap, title: "We Grow Talent", desc: "Our internship program trains the next generation of digital talent, so fresh energy and rigor go into every project." },
];

const WhyZeenoxSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background text-foreground overflow-hidden border-y border-white/5">
      {/* Dark mode glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary shadow-sm">
            WHY ZEENOX
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Why Businesses <br className="hidden sm:block" />
            <span className="font-serif-accent italic text-primary">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-primary/30 transition-all duration-500"
            >
              <div className="mb-6 text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform origin-left">
                <r.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{r.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-medium group-hover:text-white/80 transition-colors">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyZeenoxSection;
