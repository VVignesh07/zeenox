"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-[0.3em] text-primary shadow-sm">
            WHO WE ARE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-8">
            One Agency. <br className="hidden sm:block" />
            <span className="font-serif-accent italic text-primary">Every Digital Need.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium text-balance">
            From short-form video edits to full website builds to marketing systems that run on autopilot — ZeenOx is built to be the only digital partner a growing business needs. No juggling five vendors. No mismatched branding. Just one team that gets it done, right.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
