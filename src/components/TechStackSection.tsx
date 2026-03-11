import { motion } from "framer-motion";

const techStack = [
  "React", "Next.js", "Node.js", "Firebase", "AWS", "Figma",
  "Tailwind", "TypeScript", "Supabase", "Stripe", "Vercel",
  "Premiere Pro", "After Effects", "DaVinci", "CapCut", "Photoshop", "Blender", "Meta Ads"
];

const TechStackSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background/50">
      {/* Background depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            className="mb-6 block text-[10px] font-black uppercase text-primary/80"
          >
            ✦ Engineering Excellence ✦
          </motion.span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Technologies We <br />
            <span className="font-serif-accent italic gradient-text">Master & Deploy.</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling marquee - Row 1 */}
      <div className="relative z-10 mb-6">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-1/4 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-1/4 bg-gradient-to-l from-background via-background/40 to-transparent" />
        
        <div className="flex animate-marquee py-4">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div
              key={`${tech}-r1-${i}`}
              className="mx-6 flex-shrink-0 rounded-[2rem] border border-white/5 bg-secondary/30 backdrop-blur-2xl px-12 py-8 text-xl font-black uppercase tracking-widest text-foreground/60 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-primary/5 hover:text-primary group"
            >
              <span className="relative z-10">{tech}</span>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] blur-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling marquee - Row 2 (Reverse) */}
      <div className="relative z-10">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-1/4 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-1/4 bg-gradient-to-l from-background via-background/40 to-transparent" />
        
        <div className="flex animate-marquee-reverse py-4">
          {[...techStack.slice().reverse(), ...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
            <div
              key={`${tech}-r2-${i}`}
              className="mx-6 flex-shrink-0 rounded-[2rem] border border-white/5 bg-secondary/30 backdrop-blur-2xl px-12 py-8 text-xl font-black uppercase tracking-widest text-foreground/60 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-primary/5 hover:text-primary group"
            >
              <span className="relative z-10">{tech}</span>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
