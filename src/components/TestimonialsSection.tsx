import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "CEO, Venu's Health Care",
    text: "Zeenox completely transformed our digital presence. Patient bookings increased by 3x within two months. Their strategic approach and attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Founder, KVP Jewellery",
    text: "The branding and website they built captured the essence of our luxury brand perfectly. Sales went up 180% after the rebrand. Truly premium work.",
    rating: 5,
  },
  {
    name: "Sanya Kapoor",
    role: "Director, Zero Fashion",
    text: "From strategy to execution, Zeenox delivered beyond expectations. Our online sales tripled and social engagement skyrocketed. Best agency decision we ever made.",
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
    <section className="relative py-28">
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            ✦ Testimonials
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Client Loved{" "}
            <span className="font-serif-accent gradient-text">Testimonial</span>
          </h2>
        </motion.div>

        {/* Logos */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-8">
          {["Venu's Health Care", "KVP Jewellery", "Zero Fashion", "FitPro", "Lovein"].map((name) => (
            <span key={name} className="text-xs font-medium text-muted-foreground/40 uppercase tracking-wider">
              ✦ {name}
            </span>
          ))}
        </div>

        {/* Card */}
        <div className="mx-auto max-w-3xl">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl p-6 glass glow-border sm:p-8 md:p-12"
          >
            <div className="mb-6 flex gap-1">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              "{t.text}"
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-2 self-end sm:self-auto">
                <button
                  onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-1.5 bg-secondary"
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
