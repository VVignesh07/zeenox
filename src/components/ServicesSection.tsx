import { motion } from "framer-motion";
import {
  Globe, Smartphone, Layers, Zap, Settings, Database
} from "lucide-react";

const mediaServices = [
  { image: "/images/service-content-creation.png", title: "Content Creation", desc: "Premium photography and content that captures attention." },
  { image: "/images/service-video-production.png", title: "Video Production", desc: "Cinematic videos, reels, and brand stories." },
  { image: "/images/service-social-media.png", title: "Social Media Management", desc: "Strategic social presence across all platforms." },
  { image: "/images/service-brand-design.png", title: "Brand Design", desc: "Visual identities that stand out in the market." },
];

const techServices = [
  { image: "/images/tech-website-dev.svg", title: "Website Development", desc: "High-performance websites built for conversion." },
  { image: "/images/tech-app-dev.svg", title: "App Development", desc: "Native and cross-platform mobile applications." },
  { image: "/images/tech-saas-dev.svg", title: "SaaS Development", desc: "Scalable software products from concept to launch." },
  { image: "/images/tech-automation.svg", title: "Business Automation", desc: "Intelligent workflows that save time and money." },
  { image: "/images/tech-crm.svg", title: "CRM & Admin Panels", desc: "Custom dashboards and management tools." },
  { image: "/images/tech-api.svg", title: "API & Integrations", desc: "Connect your tools into one powerful ecosystem." },
];

const ServiceCard = ({ image, icon: Icon, title, desc, delay }: {
  image?: string; icon?: any; title: string; desc: string; delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
    className="group rounded-2xl overflow-hidden card-dark card-dark-hover transition-all duration-300 cursor-pointer"
    style={{ transformStyle: "preserve-3d" }}
  >
    <div className="relative h-44 w-full overflow-hidden bg-secondary/30 flex items-center justify-center">
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </>
      ) : (
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Neon Glow Background */}
          <div className="absolute h-20 w-20 rounded-full bg-primary/10 blur-[40px] group-hover:bg-primary/20 transition-colors" />
          <Icon
            size={42}
            strokeWidth={1.5}
            className="text-primary/70 group-hover:text-primary transition-colors group-hover:scale-110 duration-500"
          />
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="mb-2 font-display text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
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
