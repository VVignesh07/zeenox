import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
    <div ref={ref} className="relative h-1 w-full overflow-hidden rounded-full bg-neutral-100">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${displayPercent}%` } : {}}
        transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] as any }}
        className="absolute inset-y-0 left-0 rounded-full bg-neutral-900"
      />
    </div>
  );
};

const CaseStudySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yCard = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      {/* Parallax Background Decorations */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neutral-100/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
            className="mb-16 text-center"
          >
            <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-black/[0.06] bg-black/[0.01] text-neutral-600 text-[11px] font-semibold uppercase tracking-widest shadow-sm">
              Featured Case Study
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
              How we scaled a local brand by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-500 to-neutral-800">
                340% in 90 days.
              </span>
            </h2>
          </motion.div>

          <motion.div
            style={{ y: yCard }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="group relative rounded-[2rem] p-8 md:p-14 bg-white border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.08)] transition-all duration-700"
          >
            <div className="mb-14 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FAFAFA] border border-black/[0.04] text-neutral-900 shadow-sm group-hover:scale-105 transition-transform duration-500">
                <TrendingUp size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Herbal Roots Transformation</h3>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mt-2">90-Day Growth Sprint</p>
              </div>
            </div>

            <div className="space-y-10">
              {metrics.map((m, i) => (
                <div key={m.label}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[15px] md:text-base font-medium text-neutral-700">{m.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-neutral-400 line-through">{m.before}</span>
                      <ArrowRight size={14} className="text-neutral-300" />
                      <span className="text-[15px] md:text-base font-semibold text-neutral-900">{m.after}</span>
                    </div>
                  </div>
                  <AnimatedBar percent={m.percent} delay={0.2 + i * 0.15} />
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { label: "Problem", text: "Zero online presence" },
                { label: "Strategy", text: "Full digital overhaul" },
                { label: "Execution", text: "Web + Social + Ads" },
                { label: "Result", text: "340% revenue growth" },
              ].map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                  className="rounded-2xl bg-[#FAFAFA] p-6 border border-black/[0.03] transition-colors duration-300 hover:bg-white hover:shadow-sm"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">{step.label}</p>
                  <p className="text-[15px] text-neutral-900 font-medium tracking-tight">{step.text}</p>
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
