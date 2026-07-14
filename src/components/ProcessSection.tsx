"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Code, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", desc: "We learn your business, goals, and audience." },
  { icon: Map, title: "Plan", desc: "We map the right mix of services for your needs." },
  { icon: Code, title: "Build", desc: "Our team executes — video, design, code, or campaigns." },
  { icon: TrendingUp, title: "Grow", desc: "We track, refine, and scale what works." },
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="mb-24 text-center"
        >
          <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-[0.3em] text-primary shadow-sm">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            How We <span className="font-serif-accent italic text-primary">Work</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline background line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
          
          {/* Timeline animated line */}
          <motion.div 
            style={{ height: lineHeight }} 
            className="absolute left-6 top-0 w-px bg-primary md:left-1/2 md:-translate-x-px origin-top transition-all duration-100 shadow-[0_0_10px_rgba(57,255,20,0.5)]" 
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className={`relative mb-16 flex items-start gap-8 md:gap-0 group ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 w-14 h-14 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                  className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-card border border-primary/30 text-primary shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500"
                >
                  <step.icon size={22} strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="rounded-[1.5rem] p-8 md:p-10 card-apple hover:-translate-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-3 text-[15px] md:text-base leading-relaxed text-muted-foreground font-medium tracking-tight">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
