import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Target, Paintbrush, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "Deep dive into your business, audience, and goals." },
  { icon: Target, title: "Strategy", desc: "Data-driven roadmap tailored for maximum impact." },
  { icon: Paintbrush, title: "Design & Development", desc: "Pixel-perfect execution with cutting-edge tech." },
  { icon: Rocket, title: "Launch", desc: "Go live with confidence and performance optimization." },
  { icon: TrendingUp, title: "Scale & Optimize", desc: "Continuous improvement and growth acceleration." },
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="relative py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="mb-24 text-center"
        >
          <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-border bg-card text-muted-foreground text-[11px] font-semibold uppercase tracking-widest shadow-sm">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
            Our <span className="font-serif-accent italic text-muted-foreground/60">Process</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline background line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
          
          {/* Timeline animated line */}
          <motion.div 
            style={{ height: lineHeight }} 
            className="absolute left-6 top-0 w-px bg-foreground md:left-1/2 md:-translate-x-px origin-top transition-all duration-100" 
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className={`relative mb-16 flex items-start gap-8 md:gap-0 group ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 w-14 h-14 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                  className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-card border border-border text-foreground shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500"
                >
                  <step.icon size={22} strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="rounded-[1.5rem] p-8 md:p-10 bg-card border border-border shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-3 text-[15px] md:text-base leading-relaxed text-muted-foreground font-medium tracking-tight">{step.desc}</p>
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
