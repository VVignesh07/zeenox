import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const skills = [
  "UI/UX Design",
  "Web Development",
  "Brand Identity",
  "Digital Marketing",
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
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              ✦ About Us
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Best Digital Agency{" "}
              <span className="font-serif-accent gradient-text">&amp; Developer</span>{" "}
              Studio
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Zeenox, we understand that success is just about delivering a product — it's
              about building relationships and making a meaningful impact for our clients across
              healthcare, fashion, jewellery, and wellness industries.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={14} className="text-primary" />
                  {skill}
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full btn-outline-glow px-6 py-3 text-sm"
            >
              Get In Touch Now
            </a>
          </motion.div>

          {/* Right — Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-1 rounded-2xl p-8 text-center card-dark card-dark-hover transition-all duration-300"
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
