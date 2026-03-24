import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "CEO, Venu's Health Care",
    text: "Zeenox completely transformed our digital presence. Patient bookings increased by 3x within two months. Their strategic approach and attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Balasundari",
    role: "Founder, KVP Jewellery",
    text: "You did a really nice job on the KVP store website. It looks clean, professional, and easy to navigate. The branding feels consistent, and the shopping flow is smooth. Overall great work!",
    rating: 5,
  },

  {
    name: "Vikram Singh",
    role: "COO, FitPro",
    text: "The automation systems they built saved us 40+ hours per month. Their CRM transformed how we handle clients. Incredible ROI.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="relative py-32 bg-white">
      <div className="section-divider mb-32" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.3em] shadow-sm"
          >
            Proof of Excellence
          </motion.span>
          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-7xl text-foreground text-balance">
            Trusted by the <br />
            <span className="font-serif-accent italic text-primary">Next Generation of Leaders.</span>
          </h2>
        </motion.div>

        {/* Elite Brand Logos Marquee */}
        <div className="mb-32 w-full overflow-hidden relative group">
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <motion.div
                className="flex gap-16 md:gap-32 w-max opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 hover:[animation-play-state:paused]"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            >
                {[
                  ...[
                    { name: "Venu's Health Care", industry: "Medical" },
                    { name: "KVP Jewellery", industry: "Luxury" },
                    { name: "FitPro", industry: "Performance" },
                    { name: "Elite Realty", industry: "Real Estate" },
                    { name: "Aura Clinic", industry: "Healthcare" },
                  ],
                  ...[
                    { name: "Venu's Health Care", industry: "Medical" },
                    { name: "KVP Jewellery", industry: "Luxury" },
                    { name: "FitPro", industry: "Performance" },
                    { name: "Elite Realty", industry: "Real Estate" },
                    { name: "Aura Clinic", industry: "Healthcare" },
                  ],
                  ...[
                    { name: "Venu's Health Care", industry: "Medical" },
                    { name: "KVP Jewellery", industry: "Luxury" },
                    { name: "FitPro", industry: "Performance" },
                    { name: "Elite Realty", industry: "Real Estate" },
                    { name: "Aura Clinic", industry: "Healthcare" },
                  ],
                  ...[
                    { name: "Venu's Health Care", industry: "Medical" },
                    { name: "KVP Jewellery", industry: "Luxury" },
                    { name: "FitPro", industry: "Performance" },
                    { name: "Elite Realty", industry: "Real Estate" },
                    { name: "Aura Clinic", industry: "Healthcare" },
                  ],
                ].map((brand, i) => (
                    <div key={`${brand.name}-${i}`} className="flex flex-col items-center justify-center shrink-0">
                        <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-foreground mb-1">
                            {brand.name}
                        </span>
                        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                            {brand.industry}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>

        {/* Card */}
        <div className="mx-auto max-w-4xl relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="card-apple p-10 sm:p-20 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] relative overflow-hidden text-center lg:text-left"
          >
            {/* Quote Icon Background */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12">
                <Quote size={200} fill="currentColor" />
            </div>

            <div className="mb-10 flex gap-1.5 justify-center lg:justify-start">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
              <span className="ml-4 text-[10px] font-black uppercase tracking-widest text-primary/40">Verified Partner</span>
            </div>

            <p className="mb-14 text-2xl sm:text-3xl leading-[1.4] text-foreground font-medium tracking-tight text-balance">
              "{t.text}"
            </p>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between pt-12 border-t border-black/[0.03]">
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <div className="h-16 w-16 shrink-0 rounded-2xl bg-primary/5 text-primary flex items-center justify-center font-black text-xl shadow-inner overflow-hidden border border-black/5">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="relative z-10"
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </motion.div>
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground leading-tight tracking-tight">{t.name}</p>
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mt-2 opacity-60">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="rounded-2xl h-14 w-14 flex items-center justify-center border border-black/5 bg-white text-foreground transition-all hover:bg-black/5 hover:border-black/10 hover:-translate-x-1 active:scale-95 shadow-sm"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={() => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="rounded-2xl h-14 w-14 flex items-center justify-center border border-black/5 bg-white text-foreground transition-all hover:bg-black/5 hover:border-black/10 hover:translate-x-1 active:scale-95 shadow-sm"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Pagination Indicators */}
          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-12 bg-primary shadow-[0_0_12px_rgba(0,113,227,0.3)]" : "w-1.5 bg-black/10"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
