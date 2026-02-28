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
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-marquee">
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="mx-4 flex-shrink-0 rounded-xl border border-border bg-card px-8 py-4 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
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
