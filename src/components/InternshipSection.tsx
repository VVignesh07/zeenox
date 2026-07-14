"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Users, Star } from "lucide-react";

const InternshipSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-primary/5 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none mix-blend-multiply" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary shadow-sm">
            OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-8">
            We Don't Just Hire Talent — <br className="hidden sm:block" />
            <span className="font-serif-accent italic text-primary">We Build It.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium text-balance mb-12">
            ZeenOx runs a structured internship program that trains interns in real client work, mentored by our core team. It means every project is backed by both experienced leadership and fresh, motivated hands — and it means we're always growing our capacity without compromising quality.
          </p>

          <Link href="/#contact" className="btn-apple inline-flex items-center gap-3">
            <GraduationCap size={18} /> Learn About Our Internship Program
          </Link>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden lg:flex h-16 w-16 rounded-full bg-card items-center justify-center shadow-2xl border border-primary/20 text-primary"
      >
        <Users size={24} />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 hidden lg:flex h-20 w-20 rounded-full bg-card items-center justify-center shadow-2xl border border-primary/20 text-primary"
      >
        <Star size={32} />
      </motion.div>
    </section>
  );
};

export default InternshipSection;
