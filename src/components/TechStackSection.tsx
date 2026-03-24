import { motion } from "framer-motion";

const techStack = [
  "React", "Next.js", "Node.js", "Firebase", "AWS", "Figma",
  "Tailwind", "TypeScript", "Supabase", "Stripe", "Vercel",
  "Premiere Pro", "After Effects", "DaVinci", "CapCut", "Photoshop", "Blender", "Meta Ads"
];

const TechStackSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Background depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest"
          >
            Engineering Excellence
          </motion.span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-foreground">
            Technologies We <br />
            <span className="font-serif-accent italic text-primary">Master & Deploy.</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling marquee - Row 1 */}
      <div className="relative z-10 mb-8">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        
        <div className="flex animate-marquee py-4">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div
              key={`${tech}-r1-${i}`}
              className="mx-4 flex-shrink-0 card-apple card-apple-hover px-10 py-6 text-lg font-bold tracking-tight text-foreground/80 hover:text-primary transition-all group cursor-default"
            >
              <span className="relative z-10">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling marquee - Row 2 (Reverse) */}
      <div className="relative z-10">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        
        <div className="flex animate-marquee-reverse py-4">
          {[...techStack.slice().reverse(), ...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
            <div
              key={`${tech}-r2-${i}`}
              className="mx-4 flex-shrink-0 card-apple card-apple-hover px-10 py-6 text-lg font-bold tracking-tight text-foreground/80 hover:text-primary transition-all group cursor-default"
            >
              <span className="relative z-10">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
