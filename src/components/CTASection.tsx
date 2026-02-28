import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-28">
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-12 text-center glow-border md:p-20"
          style={{
            background: "radial-gradient(ellipse at center, hsla(90,100%,54%,0.05) 0%, hsl(240,6%,9%) 70%)",
          }}
        >
          {/* Decorative */}
          <div className="pointer-events-none absolute top-0 left-0 h-32 w-32 rounded-full bg-primary/5 blur-[80px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-primary/5 blur-[100px]" />

          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to Build Something{" "}
            <span className="font-serif-accent gradient-text glow-text">Powerful?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            Let's turn your vision into a high-performing digital reality. Start your project today.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full btn-primary-glow px-10 py-4 text-sm"
          >
            Start Your Project
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
