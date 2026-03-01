import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Category = "All" | "Media" | "Tech" | "Branding" | "Automation";

const projects = [
  { title: "Aura Clinic", category: "Tech" as Category, industry: "Healthcare", result: "+300% bookings", image: "/images/project-aura-clinic.webp" },
  { title: "Luxe Jewels", category: "Branding" as Category, industry: "Jewellery", result: "+180% brand awareness", image: "/images/project-luxe-jewels.webp" },
  { title: "Urban Thread", category: "Media" as Category, industry: "Fashion", result: "+3x online sales", image: "/images/project-urban-thread.webp" },
  { title: "Herbal Roots", category: "Tech" as Category, industry: "Wellness", result: "+250% web traffic", image: "/images/project-herbal-roots.webp" },
  { title: "FitPro CRM", category: "Automation" as Category, industry: "Fitness", result: "40hrs/mo saved", image: "/images/project-fitpro-crm.webp" },
  { title: "StyleVault", category: "Media" as Category, industry: "Fashion", result: "+500K reach", image: "/images/project-stylevault.webp" },
  { title: "MediConnect", category: "Automation" as Category, industry: "Healthcare", result: "+90% efficiency", image: "/images/project-mediconnect.webp" },
  { title: "GoldCraft", category: "Branding" as Category, industry: "Jewellery", result: "+220% engagement", image: "/images/project-goldcraft.webp" },
];

const filters: Category[] = ["All", "Media", "Tech", "Branding", "Automation"];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-28">
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            ✦ Portfolio
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Featured{" "}
            <span className="font-serif-accent gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                active === f
                  ? "btn-primary-glow"
                  : "border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl card-dark card-dark-hover transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div>
                    <span className="inline-flex rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {p.category}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{p.industry}</p>
                    <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-xs font-medium text-primary">{p.result}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full btn-primary-glow px-5 py-2.5 text-xs">
                  View Case Study <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
