import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Smartphone, ArrowRight, Video, Camera, Instagram, Palette, Rocket, Cpu, BarChart3, Link2
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
                ease: [0.16, 1, 0.3, 1] as any,
            }
        }
    };
    return (
  <motion.div
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="group relative p-6 sm:p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-700 hover:bg-card hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
        <ArrowRight className="text-primary" size={20} />
    </div>
    
    <div className="mb-10 relative inline-flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20 blur-[20px] rounded-full scale-100 group-hover:scale-150 transition-transform duration-700" />
        <div className="relative h-14 w-14 flex items-center justify-center bg-card rounded-2xl shadow-sm border border-border/50 group-hover:border-primary/30 transition-colors duration-500">
            <Icon
                size={28}
                strokeWidth={1.5}
                className="text-primary transition-all duration-500 group-hover:scale-110"
            />
        </div>
    </div>
    
    <h3 className="mb-4 font-bold text-xl tracking-tight text-foreground transition-colors group-hover:text-primary">
        {title}
    </h3>
    <p className="text-sm leading-relaxed text-muted-foreground font-medium group-hover:text-muted-foreground/100">
        {desc}
    </p>

    {/* Subtle animated light effect */}
    <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:w-full transition-all duration-700" />
  </motion.div>
    );
};

const ServicesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="services" ref={containerRef} className="relative py-12 md:py-32 overflow-hidden bg-background">
      {/* Decorative background glow */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-block px-4 py-1.5 rounded-full border border-border bg-card text-muted-foreground text-[11px] font-bold uppercase tracking-widest shadow-sm"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Engineering Digital <br />
            <span className="font-serif-accent italic text-primary">Masterpieces.</span>
          </h2>
        </motion.div>

        {/* Media Division */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary whitespace-nowrap">
                Media Division
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
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
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary whitespace-nowrap">
                Tech Division
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
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
