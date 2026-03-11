import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Category = "All" | "Media" | "Tech" | "Branding" | "Automation";

const projects = [
  { title: "Venu's Health Care", category: "Tech" as Category, industry: "Healthcare", result: "+300% bookings", image: "/images/project-aura-clinic.webp", link: "https://www.venushealthcare.online/" },
  { title: "KVP Jewellery", category: "Tech" as Category, industry: "Jewellery", result: "+180% brand awareness", image: "/images/project-luxe-jewels.webp", link: "https://kvpjewellery.vercel.app/" },
  { title: "Zero Fashion", category: "Tech" as Category, industry: "Fashion", result: "+3x online sales", image: "/images/project-urban-thread.webp", link: "https://www.zerofashions.in/" },
  { title: "Lovein", category: "Tech" as Category, industry: "Wellness", result: "+250% web traffic", image: "/images/project-herbal-roots.webp", link: "https://lovein-in.vercel.app/" },
  { title: "FitPro CRM", category: "Automation" as Category, industry: "Fitness", result: "40hrs/mo saved", image: "/images/project-fitpro-crm.webp" },
  { title: "StyleVault", category: "Media" as Category, industry: "Fashion", result: "+500K reach", image: "/images/project-stylevault.webp" },
  { title: "MediConnect", category: "Automation" as Category, industry: "Healthcare", result: "+90% efficiency", image: "/images/project-mediconnect.webp" },
  { title: "GoldCraft", category: "Branding" as Category, industry: "Jewellery", result: "+220% engagement", image: "/images/project-goldcraft.webp" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-28 overflow-hidden">
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            ✦ Portfolio
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Featured{" "}
            <span className="font-serif-accent gradient-text">Projects</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-10">
        {/* First Row - Scrolling Right to Left */}
        <div className="relative group">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-72 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-72 bg-gradient-to-l from-background to-transparent" />
          
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[...projects, ...projects].map((p, i) => (
              <ProjectCard key={`${p.title}-${i}`} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Left to Right (Reverse) */}
        <div className="relative group">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-72 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-72 bg-gradient-to-l from-background to-transparent" />
          
          <div className="flex animate-marquee direction-reverse [animation-direction:reverse] hover:[animation-play-state:paused]">
            {[...projects.slice().reverse(), ...projects.slice().reverse()].map((p, i) => (
              <ProjectCard key={`${p.title}-rev-${i}`} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: (index % projects.length) * 0.05, duration: 0.3 }}
    className="group relative flex-shrink-0 w-[320px] sm:w-[380px] mx-4 overflow-hidden rounded-2xl card-dark card-dark-hover transition-all cursor-pointer"
    onClick={() => project.link && window.open(project.link, "_blank")}
  >
    <div className="aspect-[4/3] relative">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div>
          <span className="inline-flex rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            {project.category}
          </span>
        </div>
        <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
          <p className="text-xs text-muted-foreground mb-1">{project.industry}</p>
          <h3 className="font-display text-lg font-bold text-foreground">{project.title}</h3>
          <p className="mt-1 text-xs font-medium text-primary">{project.result}</p>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="inline-flex items-center gap-2 rounded-full btn-primary-glow px-5 py-2.5 text-xs">
        {project.link ? "Visit Website" : "View Case Study"} <ArrowUpRight size={14} />
      </span>
    </div>
  </motion.div>
);

export default PortfolioSection;
