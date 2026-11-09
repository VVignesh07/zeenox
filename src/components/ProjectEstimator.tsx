"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  Calculator,
  ShieldCheck,
  Zap,
  Database
} from "lucide-react";

interface ServiceOption {
  id: string;
  title: string;
  desc: string;
  icon: typeof Globe;
  basePrice: number;
  timelineWeeks: string;
}

const services: ServiceOption[] = [
  {
    id: "website",
    title: "High-Converting Website",
    desc: "Next.js 15 / Shopify platform engineered for speed, SEO & qualified lead generation.",
    icon: Globe,
    basePrice: 14999,
    timelineWeeks: "1-2 Weeks",
  },
  {
    id: "enterprise",
    title: "ERP, HRM & Custom CRM",
    desc: "Multi-branch inventory, 1-click automated payroll, biometric sync & WhatsApp sales CRM.",
    icon: Database,
    basePrice: 44999,
    timelineWeeks: "3-5 Weeks",
  },
  {
    id: "app",
    title: "Custom Web / Mobile App",
    desc: "Full-stack web application, client dashboard, SaaS MVP, or cross-platform mobile app.",
    icon: Smartphone,
    basePrice: 34999,
    timelineWeeks: "3-5 Weeks",
  },
  {
    id: "automation",
    title: "AI & Business Automation",
    desc: "Automated WhatsApp lead engines, CRM workflows, webhook pipelines & operations autopilot.",
    icon: Cpu,
    basePrice: 11999,
    timelineWeeks: "1-2 Weeks",
  },
  {
    id: "full-stack",
    title: "All-in-One Digital Engine",
    desc: "Complete business ecosystem: High-performance website + client portal + automated workflows.",
    icon: Sparkles,
    basePrice: 54999,
    timelineWeeks: "4-6 Weeks",
  },
];

interface FeatureOption {
  id: string;
  label: string;
  price: number;
  category: "all" | "website" | "app" | "automation";
}

const featuresList: FeatureOption[] = [
  { id: "seo", label: "Advanced SEO & Core Web Vitals (99+ Score Guarantee)", price: 4000, category: "all" },
  { id: "erp_billing", label: "Multi-Branch Inventory & GST Automated Billing (ERP)", price: 8000, category: "all" },
  { id: "hrm_payroll", label: "1-Click Payroll & Biometric Attendance Sync (HRM)", price: 7000, category: "all" },
  { id: "cms", label: "Dynamic CMS / Admin Content & Blog Manager", price: 6000, category: "website" },
  { id: "payment", label: "Payment Gateway Integration (Razorpay / Stripe / UPI)", price: 5000, category: "all" },
  { id: "auth", label: "User Authentication & Role-Based Access Control", price: 8000, category: "app" },
  { id: "whatsapp_bot", label: "24/7 Automated WhatsApp Bot & CRM Lead Notification", price: 6000, category: "all" },
  { id: "api", label: "Custom REST/GraphQL API & Scalable Database", price: 9000, category: "app" },
  { id: "analytics", label: "Conversion Funnel Tracking & Heatmap Suite", price: 3000, category: "all" },
];

const timelines = [
  { id: "express", label: "⚡ Express Sprint", multiplier: 1.15, note: "Top priority delivery" },
  { id: "standard", label: "🎯 Standard Production", multiplier: 1.0, note: "Recommended timeline" },
  { id: "flexible", label: "🌱 Flexible Milestone", multiplier: 0.95, note: "Paced delivery" },
];

export default function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState<string>("website");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "seo",
    "whatsapp_bot",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentService = useMemo(() => {
    return services.find((s) => s.id === selectedService) || services[0];
  }, [selectedService]);

  const calculation = useMemo(() => {
    const base = currentService.basePrice;
    const addOnTotal = selectedFeatures.reduce((acc, featId) => {
      const feat = featuresList.find((f) => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);

    const timelineOption = timelines.find((t) => t.id === selectedTimeline);
    const multiplier = timelineOption ? timelineOption.multiplier : 1;

    const rawTotal = (base + addOnTotal) * multiplier;
    // Ballpark range ± 10%
    const minPrice = Math.round((rawTotal * 0.9) / 500) * 500;
    const maxPrice = Math.round((rawTotal * 1.1) / 500) * 500;

    return { minPrice, maxPrice, timelineWeeks: currentService.timelineWeeks };
  }, [currentService, selectedFeatures, selectedTimeline]);

  const generateWhatsAppUrl = () => {
    const chosenFeatureNames = selectedFeatures
      .map((id) => featuresList.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    const timelineName = timelines.find((t) => t.id === selectedTimeline)?.label;

    const message = `👋 Hi Arun / ZeenOx Team!

I just calculated a custom project estimate on your website:

📌 *Service:* ${currentService.title}
⚡ *Target Timeline:* ${timelineName} (${calculation.timelineWeeks})
🛠 *Selected Features:* ${chosenFeatureNames || "Standard Stack"}
💰 *Estimated Budget:* ₹${calculation.minPrice.toLocaleString("en-IN")} - ₹${calculation.maxPrice.toLocaleString("en-IN")}

Can we discuss starting this project and lock in the architecture plan?`;

    return `https://wa.me/917603917369?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="estimator" className="relative py-20 sm:py-28 md:py-36 bg-gradient-to-b from-[#E7F3EB] via-[#D8EFE0] to-[#E3F2E8] overflow-hidden">
      {/* ── Layered Atmospheric Emerald Mesh & Dot Texture ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(5, 150, 105, 0.16) 0%, rgba(16, 185, 129, 0.08) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 95, 70, 0.14) 0%, rgba(20, 184, 166, 0.07) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #065f46 1.2px, transparent 1.2px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "120px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-white/90 text-primary text-[11px] font-extrabold uppercase tracking-widest mb-4 shadow-sm whitespace-nowrap">
            <Calculator size={13} className="text-primary shrink-0" />
            <span>Interactive Lead Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1] mb-4">
            Calculate Your Project in{" "}
            <span className="font-serif-accent italic text-primary">60 Seconds.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#2D2D30] font-medium leading-relaxed max-w-xl mx-auto">
            Select your requirements to see an instant, transparent ballpark cost. No sales fluff — just direct engineering clarity.
          </p>
        </motion.div>

        {/* Estimator Card Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-9 rounded-[2.2rem] bg-white/95 backdrop-blur-md sm:backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(6,78,59,0.12)] border border-white/90">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#3A3A3C] mb-3">
                1. Select Core Solution
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedService === service.id;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                        isSelected
                          ? "bg-primary/[0.06] border-primary text-[#1D1D1F] shadow-sm ring-1 ring-primary/30"
                          : "bg-[#F5F5F7] border-black/[0.04] text-[#6E6E73] hover:border-black/[0.15] hover:text-[#1D1D1F]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shadow-2xs ${
                            isSelected
                              ? "bg-primary text-white"
                              : "bg-white text-[#1D1D1F]"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={18} className="text-primary" />
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-[#1D1D1F] mb-1">
                        {service.title}
                      </h4>
                      <p className="text-[11px] leading-relaxed line-clamp-2 text-[#6E6E73] font-medium">
                        {service.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Key Features & Addons */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#6E6E73] mb-3">
                2. Key Capabilities & Integrations
              </label>
              <div className="space-y-2.5">
                {featuresList.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between gap-3 ${
                        isChecked
                          ? "bg-primary/[0.05] border-primary/50 text-[#1D1D1F] ring-1 ring-primary/20"
                          : "bg-[#F5F5F7] border-black/[0.04] text-[#6E6E73] hover:border-black/[0.12]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-primary border-primary text-white"
                              : "border-black/[0.15] bg-white"
                          }`}
                        >
                          {isChecked && <CheckCircle2 size={13} />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                          {feat.label}
                        </span>
                      </div>
                      <span className="text-xs font-extrabold text-primary shrink-0">
                        +₹{feat.price.toLocaleString("en-IN")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#6E6E73] mb-3">
                3. Delivery Timeline Priority
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {timelines.map((time) => {
                  const isSelected = selectedTimeline === time.id;
                  return (
                    <button
                      key={time.id}
                      type="button"
                      onClick={() => setSelectedTimeline(time.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-primary/[0.06] border-primary text-[#1D1D1F] ring-1 ring-primary/20"
                          : "bg-[#F5F5F7] border-black/[0.04] text-[#6E6E73] hover:border-black/[0.12]"
                      }`}
                    >
                      <p className="text-xs font-bold text-[#1D1D1F] mb-0.5">
                        {time.label}
                      </p>
                      <p className="text-[10px] text-[#6E6E73] font-medium">{time.note}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Quote Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-[2rem] bg-white/95 backdrop-blur-md sm:backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(6,78,59,0.14)] border border-white/90 relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-black/[0.06] mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    Estimated Ballpark
                  </span>
                  <h3 className="text-xl font-bold text-[#1D1D1F] mt-0.5">
                    Investment Scope
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-xs">
                  <Calculator size={18} />
                </div>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
                  ₹{calculation.minPrice.toLocaleString("en-IN")}{" "}
                  <span className="text-[#6E6E73] text-xl font-normal">–</span>{" "}
                  ₹{calculation.maxPrice.toLocaleString("en-IN")}
                </div>
                <p className="text-xs text-[#6E6E73] mt-1.5 flex items-center gap-1.5 font-medium">
                  <Clock size={13} className="text-primary" />
                  Estimated Turnaround:{" "}
                  <strong className="text-[#1D1D1F] font-bold">
                    {calculation.timelineWeeks}
                  </strong>
                </p>
              </div>

              {/* What is Included Checklist */}
              <div className="space-y-2.5 mb-8 pt-4 border-t border-black/[0.06]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#6E6E73]">
                  Included in this quote:
                </p>
                {[
                  "100% Full Source Code & Asset Ownership",
                  "Mobile-First Responsive Engineering",
                  "Direct Tech Lead & Architecture Support",
                  "30 Days Post-Launch Bug-Free Warranty",
                  "Zero Hidden Monthly Platform Retainers",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#1D1D1F] font-semibold">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Primary Direct Action: Send to WhatsApp */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button-shimmer w-full py-4 px-6 rounded-full bg-[#1D1D1F] text-white font-bold text-sm tracking-wide shadow-xl shadow-black/20 hover:bg-black hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group text-center"
              >
                <MessageCircle size={18} className="fill-current text-[#25D366] group-hover:rotate-12 transition-transform" />
                <span>Lock Scope on WhatsApp</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[11px] text-center text-[#6E6E73] mt-3 font-medium">
                ⚡ Instant WhatsApp reply from Founder Arun Pandian
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
