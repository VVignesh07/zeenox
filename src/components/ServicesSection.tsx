import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Smartphone, Layers, Zap, Settings, Database, ArrowRight, Video, Camera, Instagram, Palette, Rocket, Cpu, BarChart3, Link2
} from "lucide-react";

const mediaServices = [
  { icon: Camera, title: "Content Creation", desc: "High-end photography that captures your brand's essence and vision." },
  { icon: Video, title: "Video Production", desc: "Cinematic storytelling, brand films, and high-impact commercial reels." },
  { icon: Instagram, title: "Social Management", desc: "Full-scale social strategy, handling, and community engagement." },
  { icon: Palette, title: "Visual Identity", desc: "Premium brand design, aesthetic direction, and visual storytelling." },
];

const techServices = [
  { icon: Globe, title: "High-End Websites", desc: "Vite & Next.js engines optimized for speed, SEO, and conversion." },
  { icon: Smartphone, title: "Mobile Ecosystems", desc: "Native-feel applications that provide seamless user experiences." },
  { icon: Rocket, title: "SaaS Architecture", desc: "Scalable software solutions designed from concept to market launch." },
  { icon: Cpu, title: "Industrial Automation", desc: "Smart logic and intelligent workflows to remove manual bottlenecks." },
  { icon: BarChart3, title: "Data & Admin Panels", desc: "Proprietary dashboards that give you real-time business control." },
  { icon: Link2, title: "API Orchestration", desc: "Seamlessly connecting your entire tech stack into one engine." },
];

const ServiceCard = ({ icon: Icon, title, desc, index }: {
  icon: any; title: string; desc: string; index: number;
}) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any,
            }
        }
    };
    return (
  <motion.div
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative p-8 card-apple card-apple-hover"
  >
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <ArrowRight className="text-primary/40" size={24} />
    </div>
    
    <div className="mb-8 relative inline-flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20 blur-[25px] rounded-full scale-110 group-hover:scale-150 transition-transform duration-700" />
        <div className="relative h-16 w-16 flex items-center justify-center transition-colors duration-500">
            <Icon
                size={34}
                strokeWidth={1.5}
                className="text-primary filter drop-shadow-[0_0_8px_rgba(var(--primary),0.5)] transition-all duration-500 group-hover:scale-110"
            />
        </div>
    </div>
    
    <h3 className="mb-4 font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
        {title}
    </h3>
    <p className="text-sm leading-relaxed text-muted-foreground/80 font-medium">
        {desc}
    </p>
  </motion.div>
    );
};

const ServicesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="services" ref={containerRef} className="relative py-32 overflow-hidden bg-background">
      <motion.div style={{ y: y1 }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-foreground">
            Powering Your <br />
            <span className="font-serif-accent italic text-primary">Next Evolution.</span>
          </h2>
        </motion.div>

        {/* Media Division */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-foreground/40 whitespace-nowrap">
                Media & Creative
            </h3>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mediaServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>

        {/* Tech Division */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-foreground/40 whitespace-nowrap">
                Tech & Performance
            </h3>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
