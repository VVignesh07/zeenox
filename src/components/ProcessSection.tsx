import { motion } from "framer-motion";
import { Search, Target, Paintbrush, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "Deep dive into your business, audience, and goals." },
  { icon: Target, title: "Strategy", desc: "Data-driven roadmap tailored for maximum impact." },
  { icon: Paintbrush, title: "Design & Development", desc: "Pixel-perfect execution with cutting-edge tech." },
  { icon: Rocket, title: "Launch", desc: "Go live with confidence and performance optimization." },
  { icon: TrendingUp, title: "Scale & Optimize", desc: "Continuous improvement and growth acceleration." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-28">
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            ✦ How We Work
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="font-serif-accent gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent md:left-1/2 md:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background border-2 border-primary/30 text-primary shadow-[0_0_20px_hsla(90,100%,54%,0.15)]">
                  <step.icon size={18} />
                </div>
              </div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="rounded-xl p-5 card-dark card-dark-hover transition-all duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
