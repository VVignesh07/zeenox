import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aura Clinic",
    category: "Healthcare",
    color: "from-emerald-500/10 to-teal-600/5",
  },
  {
    title: "Luxe Jewels",
    category: "Jewellery",
    color: "from-amber-500/10 to-yellow-600/5",
  },
  {
    title: "Urban Thread",
    category: "Fashion",
    color: "from-violet-500/10 to-purple-600/5",
  },
  {
    title: "Herbal Roots",
    category: "Herbal & Wellness",
    color: "from-lime-500/10 to-green-600/5",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24">
      {/* Decorative */}
      <div className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 text-primary/10 text-[120px] font-bold select-none hidden lg:block">
        ✳
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            ✦ Portfolio
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Featured{" "}
            <span className="font-serif-accent gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl card-dark card-dark-hover transition-all cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${p.color} aspect-[16/10] flex items-end p-8`}>
                <div className="flex w-full items-end justify-between">
                  <div>
                    <p className="text-xs text-primary font-medium mb-1">{p.category}</p>
                    <h3 className="font-display text-2xl font-bold text-foreground">{p.title}</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-primary/30 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a href="#" className="inline-flex rounded-full btn-outline-glow px-6 py-3 text-sm">
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
