import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 bg-background">
      <div className="section-divider mb-32" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] p-12 text-center card-apple shadow-xl md:p-24 border-border"
          style={{
            background: "radial-gradient(circle at top right, hsla(221,83%,53%,0.05) 0%, var(--card) 100%)",
          }}
        >
          {/* Decorative Elite Elements */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="mb-6 inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.3em] shadow-sm">
                Next-Gen Expansion
            </span>
            <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-7xl text-foreground leading-[1.1] tracking-tight">
                Ready to Architect Your <br />
                <span className="font-serif-accent italic text-primary">Unstoppable Growth?</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-xl text-muted-foreground/80 font-medium leading-relaxed">
                Stop settling for standard. Partner with Zeenox to deploy elite 
                media production and industrial-grade automation engines.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                    onClick={() => window.location.href='#contact'}
                    className="btn-apple group inline-flex items-center gap-4 px-12 py-5 shadow-2xl shadow-primary/30"
                >
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">Launch Project</span>
                    <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" />
                </button>
                <div className="flex -space-x-4 opacity-40 hover:opacity-100 transition-opacity">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-black/5" />
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                        +50
                    </div>
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
