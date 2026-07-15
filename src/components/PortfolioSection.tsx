"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Category = "All" | "Media" | "Tech" | "Branding" | "Automation";

const projects = [
  { 
    title: "Venu's Health Care", 
    category: "Tech" as Category, 
    industry: "Healthcare", 
    result: "+300% bookings", 
    image: "/images/project-aura-clinic.webp", 
    link: "https://www.venushealthcare.online/" 
  },
  { 
    title: "KVP Jewellery", 
    category: "Tech" as Category, 
    industry: "Jewellery", 
    result: "+180% brand awareness", 
    image: "/images/project-luxe-jewels.webp", 
    link: "https://kvpjewellery.vercel.app/" 
  },
  { 
    title: "Zero Fashion", 
    category: "Tech" as Category, 
    industry: "Fashion", 
    result: "+3x online sales", 
    image: "/images/project-urban-thread.webp", 
    link: "https://www.zerofashions.in/" 
  },
  { 
    title: "Lovein", 
    category: "Tech" as Category, 
    industry: "Wellness", 
    result: "+250% web traffic", 
    image: "/images/project-herbal-roots.webp", 
    link: "https://lovein-in.vercel.app/" 
  },
  { 
    title: "Digital Campaign", 
    category: "Media" as Category, 
    industry: "Lifestyle", 
    result: "+500K reach", 
    image: "/images/project-stylevault.webp",
    instagramUrl: "https://www.instagram.com/"
  },
  { 
    title: "Brand Story", 
    category: "Branding" as Category, 
    industry: "Fashion", 
    result: "40hrs/mo saved", 
    image: "/images/project-fitpro-crm.webp",
    instagramUrl: "https://www.instagram.com/"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-12 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-border bg-card text-muted-foreground text-[11px] font-bold uppercase tracking-widest shadow-sm">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Our Featured{" "}
            <span className="font-serif-accent italic text-primary">
              Projects.
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-12 md:gap-16">
        {/* First Row - Scrolling Right to Left */}
        <div className="relative group flex overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-32 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-32 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent" />
          
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-4">
            {[...projects, ...projects, ...projects].map((p, i) => (
              <ProjectCard key={`${p.title}-${i}`} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Left to Right (Reverse) */}
        <div className="relative group flex overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-32 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-32 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent" />
          
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap py-4">
            {[...projects.slice().reverse(), ...projects.slice().reverse(), ...projects.slice().reverse()].map((p, i) => (
              <ProjectCard key={`${p.title}-rev-${i}`} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface Project {
  title: string;
  category: string;
  industry: string;
  result: string;
  image: string;
  link?: string;
  instagramUrl?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % projects.length) * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
      className="group relative flex-shrink-0 w-[280px] sm:w-[380px] md:w-[480px] px-4 cursor-pointer"
      onClick={() => {
        const target = project.instagramUrl || project.link;
        if (target) window.open(target, "_blank");
      }}
    >
      <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-card border border-border/50 shadow-sm transition-all duration-700 hover:shadow-2xl hover:border-primary/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Visual Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-700 transform translate-y-4 sm:group-hover:translate-y-0">
          <div className="flex items-center gap-3 mb-3">
             <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[9px] font-bold uppercase tracking-widest text-primary-foreground">
              {project.category}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{project.industry}</span>
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">{project.title}</h3>
              <p className="text-sm font-semibold text-primary">{project.result}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>

        {/* Static category tag for non-hover state on mobile */}
        <div className="absolute top-6 left-6 sm:hidden">
             <span className="px-3 py-1 rounded-full bg-card/80 backdrop-blur-md border border-border text-[9px] font-bold uppercase tracking-widest text-foreground">
              {project.category}
            </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;
