import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Aura Clinic",
    text: "Zeenox completely transformed our digital presence. Patient bookings increased by 3x within two months.",
  },
  {
    name: "Arjun Mehta",
    role: "Luxe Jewels",
    text: "The branding and website they built captured the essence of our luxury brand perfectly. Truly premium work.",
  },
  {
    name: "Sanya Kapoor",
    role: "Urban Thread",
    text: "From strategy to execution, Zeenox delivered beyond expectations. Our online sales tripled.",
  },
];

const logos = ["BoltShift", "Lightbox", "FeatherDev", "Spherule", "GlobalBank"];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-center justify-center gap-8"
        >
          {logos.map((name) => (
            <span key={name} className="text-sm font-medium text-muted-foreground/50 tracking-wide">
              ✦ {name}
            </span>
          ))}
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-8 card-dark card-dark-hover transition-all duration-300"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
