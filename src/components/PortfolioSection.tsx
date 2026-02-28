import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Aura Clinic",
    category: "Healthcare",
    gradient: "from-[hsla(190,100%,50%,0.15)] to-[hsla(220,80%,60%,0.1)]",
  },
  {
    title: "Luxe Jewels",
    category: "Jewellery",
    gradient: "from-[hsla(45,80%,50%,0.15)] to-[hsla(30,70%,40%,0.1)]",
  },
  {
    title: "Urban Thread",
    category: "Fashion",
    gradient: "from-[hsla(280,60%,50%,0.15)] to-[hsla(260,50%,40%,0.1)]",
  },
  {
    title: "Herbal Roots",
    category: "Herbal & Wellness",
    gradient: "from-[hsla(140,60%,40%,0.15)] to-[hsla(160,50%,30%,0.1)]",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Our Work
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glow-border glow-border-hover transition-all cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${p.gradient} aspect-[16/10] flex items-center justify-center`}>
                <div className="text-center">
                  <h3 className="font-display text-2xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                  View Case Study <ExternalLink size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
