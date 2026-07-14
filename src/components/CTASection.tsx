"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="section-divider-primary mb-12 md:mb-20" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] p-8 sm:p-12 md:p-24 text-center card-apple shadow-xl border-border"
          style={{
            background: "radial-gradient(circle at top right, hsla(110,100%,61%,0.05) 0%, var(--card) 100%)",
          }}
        >
          {/* Decorative Elite Elements */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-sm">
                LET'S GO
            </span>
            <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-7xl text-foreground leading-[1.1] tracking-tight mb-6">
                Let's Build Something <br className="hidden sm:block" />
                <span className="font-serif-accent italic text-primary">That Works</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-muted-foreground font-medium leading-relaxed mb-12 text-balance">
                Whether it's one video, one campaign, or your entire digital presence — ZeenOx is ready.
            </p>
            <Link href="/#contact" className="btn-apple group inline-flex items-center gap-4">
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Get in Touch</span>
              <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
