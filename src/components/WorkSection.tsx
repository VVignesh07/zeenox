"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    category: "Healthcare / UK Charity",
    outcome: "Rebuilt web presence for a UK-based charity, improving accessibility and lead capture.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Rehabilitation Center",
    outcome: "10th-anniversary campaign design for a special-needs rehabilitation center.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Jewellery Brand",
    outcome: "Social content system for a jewellery brand driving consistent engagement.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-[0.3em] text-primary shadow-sm">
              OUR WORK
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
              Work Across <br className="hidden sm:block" />
              <span className="font-serif-accent italic text-primary">Industries</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium text-balance">
              We've delivered results for clinics, fashion labels, jewellery brands, nonprofits, and more — proof that our process adapts to any industry without losing quality.
            </p>
          </div>
          <Link href="/work" className="btn-apple shrink-0 inline-flex items-center gap-2">
            View Full Portfolio <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <Link href="/work" className="block w-full h-full">
                <div className="aspect-[4/3] rounded-[2rem] bg-card mb-6 overflow-hidden relative card-apple transition-transform duration-500 group-hover:-translate-y-2 border border-white/5">
                  {/* Image */}
                  <img 
                    src={cs.image} 
                    alt={cs.outcome} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/20 backdrop-blur-sm z-10">
                    <span className="h-14 w-14 rounded-full bg-background flex items-center justify-center text-primary shadow-xl">
                      <ArrowUpRight size={24} />
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-3">
                    {cs.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground leading-snug">
                    {cs.outcome}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
