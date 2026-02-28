import { motion } from "framer-motion";
import {
  Camera, Video, Share2, Palette,
  Globe, Smartphone, Layers, Zap, Settings, Database
} from "lucide-react";

const mediaServices = [
  { icon: Camera, title: "Content Creation", desc: "Premium photography and content that captures attention." },
  { icon: Video, title: "Video Production", desc: "Cinematic videos, reels, and brand stories." },
  { icon: Share2, title: "Social Media Management", desc: "Strategic social presence across all platforms." },
  { icon: Palette, title: "Brand Design", desc: "Visual identities that stand out in the market." },
];

const techServices = [
  { icon: Globe, title: "Website Development", desc: "High-performance websites built for conversion." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile applications." },
  { icon: Layers, title: "SaaS Development", desc: "Scalable software products from concept to launch." },
  { icon: Zap, title: "Business Automation", desc: "Intelligent workflows that save time and money." },
  { icon: Settings, title: "CRM & Admin Panels", desc: "Custom dashboards and management tools." },
  { icon: Database, title: "API & Integrations", desc: "Connect your tools into one powerful ecosystem." },
];

const ServiceCard = ({ icon: Icon, title, desc, delay }: {
  icon: typeof Camera; title: string; desc: string; delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
    className="group rounded-2xl p-7 card-dark card-dark-hover transition-all duration-300 cursor-pointer"
    style={{ transformStyle: "preserve-3d" }}
  >
    <div className="mb-5 inline-flex rounded-xl bg-secondary p-3.5 text-primary transition-all group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_hsla(90,100%,54%,0.2)]">
      <Icon size={22} />
    </div>
    <h3 className="mb-2 font-display text-base font-semibold text-foreground">{title}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-28">
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            ✦ What We Do
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Best Quality{" "}
            <span className="font-serif-accent gradient-text">Services</span>
          </h2>
        </motion.div>

        {/* Media Division */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="h-px flex-1 bg-primary/10" />
            <span className="rounded-full border border-primary/30 bg-primary/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              🔥 Media Division
            </span>
            <div className="h-px flex-1 bg-primary/10" />
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mediaServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>

        {/* Tech Division */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="h-px flex-1 bg-primary/10" />
            <span className="rounded-full border border-primary/30 bg-primary/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              ⚡ Tech Division
            </span>
            <div className="h-px flex-1 bg-primary/10" />
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
