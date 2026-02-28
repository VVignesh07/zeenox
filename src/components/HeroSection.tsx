import { motion } from "framer-motion";
import { ArrowRight, Download, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute top-1/3 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[150px] animate-glow-pulse" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-primary/[0.06] blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Geometric decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute top-32 right-[12%] text-primary/20 text-6xl font-bold select-none"
      >
        ✳
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute bottom-40 left-[8%] text-primary/15 text-5xl select-none"
      >
        ✦
      </motion.div>
      <div className="pointer-events-none absolute top-1/2 right-[20%] h-24 w-24 rounded-full border border-primary/10 animate-glow-pulse" />
      <div className="pointer-events-none absolute top-[20%] left-[15%] h-16 w-16 rounded-lg border border-primary/10 rotate-45 animate-float" />

      {/* Vertical side text */}
      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="h-16 w-px bg-primary/20" />
        <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground uppercase [writing-mode:vertical-lr] rotate-180">
          Best Skills On
        </span>
        <div className="h-16 w-px bg-primary/20" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 text-sm text-primary"
          >
            <span className="text-lg">👋</span> We Are Zeenox Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            A Digital Agency
            <br />
            <span className="font-serif-accent gradient-text glow-text">& Growth Engine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We craft premium digital experiences for clinics, fashion brands,
            jewellery houses, and beyond — with 10+ years of expertise in design,
            development & automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full btn-primary-glow px-8 py-3.5 text-sm"
            >
              <Download size={16} />
              Start a Project
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm text-foreground hover:text-primary transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary group-hover:bg-primary/10 transition-colors">
                <Play size={14} className="ml-0.5" />
              </span>
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
