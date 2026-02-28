import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute top-20 right-[15%] h-20 w-20 rounded-lg border border-primary/20 opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute bottom-32 left-[10%] h-16 w-16 rounded-full border border-primary/15 opacity-20"
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
        >
          <Sparkles size={14} />
          Media · Technology · Automation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          We Build{" "}
          <span className="gradient-text glow-text">Brands</span>
          <br />
          We Build{" "}
          <span className="gradient-text glow-text">Systems</span>
          <br />
          We Build{" "}
          <span className="gradient-text glow-text">Growth&nbsp;Engines</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          A full-service digital agency crafting premium experiences for
          clinics, fashion brands, jewellery houses, and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_hsla(190,100%,50%,0.5)]"
          >
            Start a Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/60 hover:shadow-[0_0_20px_hsla(190,100%,50%,0.2)]"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
