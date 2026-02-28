import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";

const metrics = [
  { label: "Revenue Increase", before: "₹2.4L/mo", after: "₹10.5L/mo", percent: 340 },
  { label: "Website Traffic", before: "1.2K/mo", after: "18K/mo", percent: 1400 },
  { label: "Social Reach", before: "5K", after: "85K", percent: 1600 },
  { label: "Conversion Rate", before: "1.2%", after: "4.8%", percent: 300 },
];

const AnimatedBar = ({ percent, delay }: { percent: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const displayPercent = Math.min(percent / 20, 100);

  return (
    <div ref={ref} className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${displayPercent}%` } : {}}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="absolute inset-y-0 left-0 rounded-full bg-primary"
      />
    </div>
  );
};

const CaseStudySection = () => {
  return (
    <section className="relative py-28">
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              ✦ Case Study
            </span>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              How We Helped a Local Brand Increase Sales by{" "}
              <span className="font-serif-accent gradient-text">340% in 90 Days</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 card-dark glow-border md:p-12"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <TrendingUp size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Herbal Roots — Complete Digital Transformation</h3>
                <p className="text-xs text-muted-foreground">90-Day Growth Sprint</p>
              </div>
            </div>

            <div className="space-y-6">
              {metrics.map((m, i) => (
                <div key={m.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{m.label}</span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-muted-foreground line-through">{m.before}</span>
                      <ArrowRight size={12} className="text-primary" />
                      <span className="font-semibold text-primary">{m.after}</span>
                    </div>
                  </div>
                  <AnimatedBar percent={m.percent} delay={i * 0.15} />
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Problem", text: "Zero online presence" },
                { label: "Strategy", text: "Full digital overhaul" },
                { label: "Execution", text: "Website + Social + Ads" },
                { label: "Result", text: "340% revenue growth" },
              ].map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-xl bg-secondary/50 p-4 text-center"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1">{step.label}</p>
                  <p className="text-xs text-foreground">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
