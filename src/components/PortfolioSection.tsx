"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";

export default function PortfolioSection() {
  return (
    <section
      id="work"
      className="relative py-20 sm:py-28 md:py-36 bg-[#FAFAFC] overflow-hidden border-t border-b border-black/[0.04]"
    >
      {/* Subtle Overhead Ambient Spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.06),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "120px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-20"
        >
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-[#EBEBED] border border-black/[0.06] text-primary text-[10px] font-extrabold uppercase tracking-widest shadow-2xs">
            Live Production Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1] mb-4">
            Proven Results in{" "}
            <span className="font-serif-accent italic text-primary">
              Live Production.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#2D2D30] font-medium leading-relaxed max-w-xl mx-auto">
            Real platforms built for real businesses. Engineered for sub-second speeds, flawless mobile responsiveness, and measurable client revenue.
          </p>
        </motion.div>

        {/* Featured Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.35, delay: (index % 3) * 0.04, ease: "easeOut" }}
              className="group rounded-[2.2rem] bg-[#F5F5F7] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.05),0_12px_36px_rgba(6,78,59,0.05)] hover:shadow-[0_24px_60px_-10px_rgba(6,78,59,0.16)] hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden transform-gpu will-change-transform"
            >
              <div>
                {/* Browser Bezel Header */}
                <div className="px-5 py-3 border-b border-black/[0.05] bg-white/70 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
                  </div>
                  <span className="text-[10px] font-mono text-[#6E6E73] font-medium">
                    {project.category} • {project.location}
                  </span>
                  <div className="w-8" />
                </div>

                {/* Visual Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Metric Floating Badge */}
                  {project.verified && project.metric && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.06] text-[#1D1D1F] font-extrabold text-xs shadow-md flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-primary" />
                        <span>{project.metric}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {project.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed mb-4 font-medium line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1D1D1F] bg-white p-3 rounded-xl border border-black/[0.04] shadow-xs mb-4">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    <span className="line-clamp-1">{project.result}</span>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-medium text-[#6E6E73] bg-white border border-black/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <a
                  href={project.liveUrl || `/work/${project.slug}`}
                  target={project.liveUrl ? "_blank" : undefined}
                  rel={project.liveUrl ? "noopener noreferrer" : undefined}
                  className="apple-button-shimmer w-full py-3 px-4 rounded-full bg-[#1D1D1F] text-white hover:bg-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                >
                  <span>Explore Live Platform</span>
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
