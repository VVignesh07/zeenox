"use client";
import { motion } from "framer-motion";
import { Sparkles, Layers, Zap, MonitorPlay, ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const motionGraphicsProjects = [
  {
    title: "2D Character Animation",
    tag: "2D Animation",
    desc: "Smooth, expressive character animations built for brand storytelling and educational content.",
    gradient: "from-violet-500/20 to-purple-600/10",
    border: "border-violet-500/20",
    icon: Sparkles,
    accentColor: "text-violet-400",
    metrics: ["60fps Output", "SVG Ready", "Brand Sync"],
  },
  {
    title: "Kinetic Typography",
    tag: "Typography Motion",
    desc: "Text-driven animations that emphasize messaging with rhythm, motion, and precision timing.",
    gradient: "from-blue-500/20 to-cyan-600/10",
    border: "border-blue-500/20",
    icon: Zap,
    accentColor: "text-blue-400",
    metrics: ["Music Sync", "After Effects", "Export Ready"],
  },
  {
    title: "UI/UX Micro-Animations",
    tag: "UI Motion",
    desc: "Subtle, purposeful motion design that elevates digital interfaces and improves user experience.",
    gradient: "from-emerald-500/20 to-teal-600/10",
    border: "border-emerald-500/20",
    icon: Layers,
    accentColor: "text-emerald-400",
    metrics: ["Lottie Export", "Interactive", "Web Optimized"],
  },
  {
    title: "Brand Intro / Outro",
    tag: "Brand Identity",
    desc: "Cinematic logo reveals and brand stingers that create a powerful, memorable first impression.",
    gradient: "from-orange-500/20 to-red-600/10",
    border: "border-orange-500/20",
    icon: MonitorPlay,
    accentColor: "text-orange-400",
    metrics: ["4K Render", "Sound Design", "5–30 Sec"],
  },
  {
    title: "Explainer & Product Demo",
    tag: "Explainer Video",
    desc: "Clear, engaging animated explainers that turn complex ideas into a compelling visual story.",
    gradient: "from-pink-500/20 to-rose-600/10",
    border: "border-pink-500/20",
    icon: Play,
    accentColor: "text-pink-400",
    metrics: ["Voiceover Sync", "Script Writing", "Multi-Format"],
  },
  {
    title: "Social Media Motion Pack",
    tag: "Social Content",
    desc: "Scroll-stopping animated posts, stories, and reels tailored for every major social platform.",
    gradient: "from-primary/20 to-emerald-600/10",
    border: "border-primary/20",
    icon: Zap,
    accentColor: "text-primary",
    metrics: ["9:16 + 16:9", "Platform Optimised", "Daily Output"],
  },
];

const MotionGraphicsSection = () => {
  return (
    <section id="motion-graphics" className="py-16 md:py-32 bg-background border-t border-border/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-8 w-8 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Layers size={16} className="text-violet-400" />
              </div>
              <span className="text-violet-400 text-[11px] font-black uppercase tracking-[0.4em]">Motion Graphics</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              Motion That{" "}
              <span className="font-serif-accent italic text-violet-400">Speaks.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              We craft motion graphics that are not just beautiful — they are engineered to communicate, convert, and captivate.
            </motion.p>
          </div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {[
              { value: "100+", label: "Motion Projects" },
              { value: "After\nEffects", label: "Primary Tool" },
              { value: "4K", label: "Max Resolution" },
              { value: "48hrs", label: "Turnaround" },
            ].map(({ value, label }) => (
              <div key={label} className="p-5 rounded-2xl bg-card border border-border text-center">
                <p className="text-xl font-black text-foreground whitespace-pre-line leading-tight">{value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {motionGraphicsProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative p-7 rounded-[2rem] bg-gradient-to-br ${project.gradient} border ${project.border} bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Background glow */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity`} />

              {/* Icon + Tag */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className={`h-11 w-11 rounded-xl bg-card/80 border border-border flex items-center justify-center ${project.accentColor}`}>
                  <project.icon size={20} />
                </div>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${project.border} ${project.accentColor} bg-card/50`}>
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-black text-foreground mb-3 leading-tight">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.desc}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span key={m} className="px-3 py-1 rounded-full bg-card/70 border border-border text-[10px] font-bold text-muted-foreground">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <div className={`absolute bottom-7 right-7 h-9 w-9 rounded-full bg-card border border-border flex items-center justify-center ${project.accentColor} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0`}>
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-[2rem] bg-card border border-border"
        >
          <div>
            <h3 className="text-xl font-black text-foreground">Need custom motion graphics?</h3>
            <p className="text-muted-foreground text-sm mt-1">We'll bring your brand story to life, frame by frame.</p>
          </div>
          <Link
            href="#contact"
            className="btn-primary flex items-center gap-3 whitespace-nowrap"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MotionGraphicsSection;
