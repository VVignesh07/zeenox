import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 6, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Brands Worked With" },
  { value: 20, suffix: "K+", label: "Revenue Generated" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-foreground sm:text-4xl">
      {count}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

const FounderSection = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left — Founder image area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-3xl glow-border">
              <img
                src="/images/founder-arun.webp"
                alt="Arun Pandian - Founder & CEO of Zeenox"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <h3 className="font-display text-xl font-bold text-foreground">Arun Pandian</h3>
                <p className="text-sm text-primary mt-1">Founder & CEO</p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full border border-primary/20 animate-float" />
            <div className="absolute -bottom-4 -right-4 h-8 w-8 rounded-lg border border-primary/15 rotate-45 animate-float" style={{ animationDelay: "2s" }} />
          </motion.div>

          {/* Right — Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              ✦ About The Founder
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Hi, I'm Arun Pandian.{" "}
              <span className="font-serif-accent gradient-text">Founder</span> of Zeenox.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I help brands scale using content, technology, and automation systems.
              With 8+ years of experience across healthcare, fashion, jewellery, and wellness
              industries, I've built Zeenox into a powerhouse agency that delivers measurable results.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every project we take on is a partnership — we don't just deliver, we transform
              businesses from the ground up with strategy, design, and cutting-edge tech.
            </p>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-6 text-center card-dark card-dark-hover transition-all duration-300"
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
