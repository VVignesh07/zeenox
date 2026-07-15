"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles } from "lucide-react";
import Image from "next/image";
import StatsSection from "./StatsSection";

const FounderSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const rotateOrbit = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="about" ref={containerRef} className="relative py-12 md:py-32 lg:py-40 overflow-hidden bg-background">
      {/* Background Decorative - Apple Glows */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none opacity-60" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-24 lg:grid-cols-2 items-center">
          {/* Left — Founder image area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-lg overflow-visible sm:overflow-hidden rounded-[3rem] border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] bg-card">
              <Image
                src="/images/founder-arun.webp"
                alt="Arun Pandian - Founder & CEO of Zeenox"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-1000 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
              
              <div className="absolute -bottom-6 sm:bottom-10 left-4 sm:left-10 right-4 sm:right-10 p-4 sm:p-8 glass-strong rounded-[1.5rem] sm:rounded-[2rem] border border-white/60 shadow-2xl z-20">
                <div className="flex items-center gap-3 sm:gap-5">
                    <div className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/20">
                        <Quote size={18} className="text-white fill-current sm:hidden" />
                        <Quote size={24} className="text-white fill-current hidden sm:block" />
                    </div>
                    <div>
                        <h3 className="text-base sm:text-xl font-bold text-foreground leading-none">Arun Pandian</h3>
                        <div className="flex items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2.5">
                            <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.2em]">Founder & CEO</p>
                            <span className="h-1.5 w-1.5 rounded-full bg-black/5" />
                            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em]">ZeenOx</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            {/* Decorative orbit */}
            <motion.div style={{ rotate: rotateOrbit }} className="absolute -top-16 -right-16 pointer-events-none opacity-30 hidden lg:block">
                <div className="h-64 w-64 rounded-full border border-dashed border-primary/40" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary" />
            </motion.div>
          </motion.div>

          {/* Right — Text + Stats */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-primary/30" />
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/60">The Founder's Vision</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight lg:text-8xl mb-6 md:mb-10 text-foreground text-balance">
                Precision Driven. <br />
                <span className="font-serif-accent italic text-primary">Profit Oriented.</span>
              </h2>
              <p className="text-xl text-muted-foreground/80 leading-relaxed mb-8 font-medium text-balance">
                "I partner with elite brands to bridge the gap between high-end media production and industrial-grade automation engines. At Zeenox, we don't just build, we engineer expansion."
              </p>
              
              {/* Trust Tag */}
              <div className="flex items-center gap-2 mb-10 px-4 py-2 rounded-xl bg-foreground/5 border border-border w-fit">
                <Sparkles size={14} className="text-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Trusted by Global Luxury Brands</span>
              </div>

              {/* Injected Stats Section */}
              <StatsSection />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
