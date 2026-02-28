import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh">
      {/* Floating shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute top-[15%] right-[10%] h-32 w-32 rounded-full border border-primary/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute bottom-[20%] left-[5%] h-20 w-20 rounded-lg border border-primary/10 rotate-45"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[30%] left-[20%] text-primary/15 text-7xl select-none"
      >
        ✳
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[30%] right-[15%] text-primary/10 text-5xl select-none"
      >
        ✦
      </motion.div>

      {/* Glow blobs */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/[0.03] blur-[180px] animate-glow-pulse" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/3 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[140px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 mx-auto px-6 pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-medium text-primary uppercase tracking-widest"
          >
            ✦ Media · Technology · Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            We Don't Just Build Brands.
            <br />
            <span className="font-serif-accent gradient-text glow-text">
              We Engineer Growth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Media. Technology. Automation. Everything Your Business Needs.
            We craft premium digital experiences that drive real revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full btn-outline-glow px-8 py-3.5 text-sm"
            >
              View Our Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full btn-primary-glow px-8 py-3.5 text-sm"
            >
              Start a Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="relative h-8 w-5 rounded-full border border-primary/30">
          <div className="absolute left-1/2 top-1.5 h-2 w-0.5 -translate-x-1/2 rounded-full bg-primary animate-scroll-indicator" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
