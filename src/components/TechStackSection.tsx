import { motion } from "framer-motion";

const techStack = [
  "React", "Next.js", "Node.js", "Firebase", "AWS", "Figma",
  "Adobe Suite", "Tailwind", "TypeScript", "Supabase", "Stripe", "Vercel",
];

const TechStackSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="section-divider mb-20" />
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            ✦ Tech Stack
          </span>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Technologies We{" "}
            <span className="font-serif-accent gradient-text">Master</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-1/3 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-1/3 bg-gradient-to-l from-background via-background/80 to-transparent" />
        <div className="flex animate-marquee">
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="mx-4 flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-medium text-foreground/80 shadow-[0_8px_32px_0_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-foreground hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
