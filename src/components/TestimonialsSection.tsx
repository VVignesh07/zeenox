"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink, ShieldCheck } from "lucide-react";
import siteConfig from "@/data/siteConfig";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 md:py-36 bg-[#FAFAFC] overflow-hidden border-t border-b border-black/[0.04]"
    >
      {/* Subtle Overhead Ambient Spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.06),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-[#EBEBED] border border-black/[0.06] text-primary text-[10px] font-extrabold uppercase tracking-widest shadow-2xs">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1D1D1F] leading-[1.1] mb-4">
            Trusted by Growing Businesses in{" "}
            <span className="font-serif-accent italic text-primary">Tamil Nadu & Beyond.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#2D2D30] leading-relaxed max-w-xl mx-auto font-medium">
            Real feedback from clinics, retail brands, and non-profits who partnered with ZeenOx.
          </p>
        </div>

        {/* Testimonials Grid (Apple UI, High-Contrast Distinct Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {siteConfig.testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-[2rem] bg-[#F5F5F7] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.05),0_12px_36px_rgba(6,78,59,0.05)] hover:shadow-[0_24px_60px_-10px_rgba(6,78,59,0.14)] hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gpu-smooth"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex text-amber-400 gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={15} className="fill-current text-amber-400" />
                    ))}
                  </div>

                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                      <ShieldCheck size={11} /> Verified Client
                    </span>
                  )}
                </div>

                <blockquote className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed mb-6 italic">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground font-medium">
                    {item.role} • <strong className="text-foreground/80 font-semibold">{item.business}</strong>
                  </p>
                </div>

                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    aria-label={`View ${item.business} live project`}
                  >
                    <span>View Work</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review on Google Action Bar */}
        <div className="text-center pt-4">
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/[0.08] shadow-sm hover:shadow-md hover:bg-[#1D1D1F] hover:text-white text-xs font-bold uppercase tracking-wider text-muted-foreground transition-all hover:scale-105 active:scale-95"
          >
            <Star size={13} className="text-amber-400 fill-current" />
            <span>Review Us on Google Business Profile</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
