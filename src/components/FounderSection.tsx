import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote, Sparkles, TrendingUp, Users, Calendar } from "lucide-react";

const stats = [
  { value: 6, suffix: "+", label: "Global Projects", icon: TrendingUp },
  { value: 6, suffix: "+", label: "Brands Worked With", icon: Users },
  { value: 1, suffix: "+", label: "Years Experience", icon: Calendar },
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
    <span ref={ref} className="font-display text-4xl font-black text-foreground">
      {count}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

const FounderSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const rotateOrbit = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden bg-background">
      {/* Background Decorative */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          {/* Left — Founder image area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl">
              <img
                src="/images/founder-arun.webp"
                alt="Arun Pandian - Founder & CEO of Zeenox"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center">
                        <Quote size={20} className="text-primary fill-current" />
                    </div>
                    <div>
                        <h3 className="font-display text-lg font-black text-foreground leading-none">Arun Pandian</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Founder & CEO</p>
                            <span className="h-1 w-1 rounded-full bg-primary/30" />
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Age 23</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Decorative orbit with Parallax */}
            <motion.div style={{ rotate: rotateOrbit }} className="absolute -top-10 -right-10 pointer-events-none">
                <div className="h-40 w-40 rounded-full border border-dashed border-primary/10" />
            </motion.div>
          </motion.div>

          {/* Right — Text + Stats */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Founder's Note</span>
              </div>
              <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl mb-8">
                Vision Driven. <br />
                <span className="font-serif-accent italic gradient-text">Result Oriented.</span>
              </h2>
              <p className="text-lg text-muted-foreground/90 leading-relaxed font-medium mb-6">
                I help ambitious brands scale by bridging the gap between high-end media and intelligent technology. At Zeenox, we don't just build websites or shoot videos; we engineer growth engines.
              </p>
              <p className="text-base text-muted-foreground/70 leading-relaxed font-normal mb-12">
                With a deep focus on healthcare, jewellery, and luxury markets, I've seen how the right automation combined with premium content can completely transform a business's bottom line.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group p-6 rounded-3xl bg-secondary/20 border border-white/5 hover:border-primary/20 transition-all duration-500"
                  >
                    <div className="absolute top-4 right-4">
                        <stat.icon size={16} className="text-primary/20 group-hover:text-primary transition-colors" />
                    </div>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mt-3 group-hover:text-foreground transition-colors">
                        {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
