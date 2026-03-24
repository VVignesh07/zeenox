import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    <section id="portfolio" className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-black/[0.06] bg-[#FAFAFA] text-neutral-600 text-[11px] font-semibold uppercase tracking-widest shadow-sm">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
            Our Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-500 to-neutral-800">
              Projects
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {/* First Row - Scrolling Right to Left */}
        <div className="relative group flex overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent" />
          
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...projects, ...projects].map((p, i) => (
              <ProjectCard key={`${p.title}-${i}`} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Left to Right (Reverse) */}
        <div className="relative group flex overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent" />
          
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
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
    initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: (index % projects.length) * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
    className="group relative flex-shrink-0 w-[300px] sm:w-[380px] md:w-[440px] px-3 sm:px-4 cursor-pointer"
    onClick={() => project.link && window.open(project.link, "_blank")}
  >
    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-white border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
        loading="lazy"
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Detail Panel */}
      <div className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 rounded-[1.5rem] bg-white/95 backdrop-blur-md border border-white/50 p-4 sm:p-5 shadow-[0_4px_20px_rgb(0,0,0,0.08)] transform transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-1">{project.industry}</p>
            <h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight">{project.title}</h3>
          </div>
          <span className="inline-flex rounded-full border border-black/5 bg-[#FAFAFA] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
            {project.category}
          </span>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <p className="text-[13px] sm:text-sm font-semibold text-neutral-600">{project.result}</p>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:shadow-md">
            <ArrowUpRight size={16} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default PortfolioSection;
