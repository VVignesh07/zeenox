import { motion } from "framer-motion";
import { Globe, Palette, Megaphone, Zap, Code, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance websites and web apps built with cutting-edge technology.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Compelling visual identities that resonate with your audience and market.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven campaigns across social, search, and programmatic channels.",
  },
  {
    icon: Zap,
    title: "Automation",
    desc: "Streamline your business with intelligent workflows and integrations.",
  },
  {
    icon: Code,
    title: "App Development",
    desc: "Native and cross-platform mobile apps with seamless user experiences.",
  },
  {
    icon: BarChart3,
    title: "Analytics & SEO",
    desc: "Turn data into insights with advanced analytics and search optimization.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl p-8 glass glow-border glow-border-hover transition-all duration-300 cursor-pointer"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <s.icon size={24} />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
