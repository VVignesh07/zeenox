"use client";
import { motion } from "framer-motion";
import { Globe, Code2, Smartphone, ShoppingCart, Zap, ArrowRight, CheckCircle2, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const websiteTypes = [
  {
    title: "Landing Pages",
    tag: "Conversion",
    desc: "High-converting landing pages engineered to turn traffic into paying customers with every pixel purposeful.",
    icon: Zap,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    features: ["A/B Test Ready", "CTA Optimised", "Fast Load", "SEO Structured"],
  },
  {
    title: "E-Commerce Stores",
    tag: "Shopify / WooCommerce",
    desc: "Full-featured online stores with seamless checkout, inventory management, and mobile-first design.",
    icon: ShoppingCart,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    features: ["Payment Gateway", "Inventory Sync", "Mobile First", "Cart Recovery"],
  },
  {
    title: "Business Websites",
    tag: "Corporate",
    desc: "Professional, brand-aligned websites that establish authority and build trust with your target audience.",
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    features: ["Multi-page", "Contact Forms", "Google Maps", "SSL Secure"],
  },
  {
    title: "Portfolio & Personal",
    tag: "Creative",
    desc: "Stunning, bespoke portfolio sites that showcase your work and personal brand with maximum visual impact.",
    icon: LayoutDashboard,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    features: ["Custom Design", "CMS Backed", "Blog Ready", "Dark/Light Mode"],
  },
  {
    title: "Web Applications",
    tag: "React / Next.js",
    desc: "Scalable, performant web apps built with modern frameworks — from MVPs to enterprise-grade platforms.",
    icon: Code2,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    features: ["API Integration", "Auth System", "Dashboard", "Real-time"],
  },
  {
    title: "Mobile-Responsive UIs",
    tag: "UI/UX Design",
    desc: "Pixel-perfect responsive interfaces that deliver a flawless experience across every device and screen size.",
    icon: Smartphone,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    features: ["Figma Source", "Accessibility", "Touch Optimised", "PWA Support"],
  },
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Prisma", category: "Database ORM" },
  { name: "Vercel", category: "Deploy" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-Commerce" },
];

const WebsiteSection = () => {
  return (
    <section id="website-projects" className="py-16 md:py-32 bg-background border-t border-border/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-8 w-8 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Globe size={16} className="text-blue-400" />
              </div>
              <span className="text-blue-400 text-[11px] font-black uppercase tracking-[0.4em]">Web Development</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              Websites That{" "}
              <br />
              <span className="font-serif-accent italic text-blue-400">Convert.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              We build fast, modern, fully-responsive websites and web applications engineered to generate leads and drive measurable revenue.
            </motion.p>
          </div>

          {/* Process steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-3 lg:min-w-[260px]"
          >
            {[
              { step: "01", label: "Discovery & Wireframe" },
              { step: "02", label: "Design & Prototype" },
              { step: "03", label: "Build & Integrate" },
              { step: "04", label: "Launch & Optimise" },
            ].map(({ step, label }) => (
              <div key={step} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                <span className="text-[11px] font-black text-primary uppercase tracking-widest w-8">{step}</span>
                <div className="flex-1 h-px bg-border" />
                <span className="text-[12px] font-bold text-foreground">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Website Type Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mb-16">
          {websiteTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative p-7 rounded-[2rem] bg-card border ${type.border} hover:border-opacity-100 overflow-hidden transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Background glow */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${type.bg} blur-3xl opacity-20 group-hover:opacity-50 transition-opacity`} />

              {/* Icon + Tag */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className={`h-12 w-12 rounded-2xl ${type.bg} border ${type.border} flex items-center justify-center ${type.color}`}>
                  <type.icon size={22} />
                </div>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${type.bg} border ${type.border} ${type.color}`}>
                  {type.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-black text-foreground mb-3">{type.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{type.desc}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {type.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className={type.color} />
                      <span className="text-[11px] font-semibold text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <div className={`absolute bottom-7 right-7 h-9 w-9 rounded-full ${type.bg} border ${type.border} flex items-center justify-center ${type.color} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0`}>
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-6">Our Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <span className="text-sm font-bold text-foreground">{tech.name}</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{tech.category}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-[2.5rem] bg-foreground overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-background">Ready to build your website?</h3>
              <p className="text-background/60 text-base mt-2 max-w-md">
                From a simple landing page to a full-stack web application — we'll build it fast and build it right.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="px-8 py-4 rounded-full bg-primary text-white font-black text-[12px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center gap-2"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/#process"
                className="px-8 py-4 rounded-full bg-background/10 border border-background/20 text-background font-black text-[12px] uppercase tracking-widest hover:bg-background/20 transition-all flex items-center gap-2"
              >
                View Process
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteSection;
