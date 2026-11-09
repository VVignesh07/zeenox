"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageCircle, Globe, Video, Cpu, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import siteConfig from "@/data/siteConfig";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"website" | "video" | "automation">("website");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs = [
    { id: "website", label: "Websites & Stores", icon: Globe, available: siteConfig.pricing.website.length > 0 },
    { id: "automation", label: "Automation & CRM", icon: Cpu, available: siteConfig.pricing.automation.length > 0 },
    { id: "video", label: "Video & Creative", icon: Video, available: siteConfig.pricing.video.length > 0 },
  ].filter((t) => t.available);

  const currentPackages = siteConfig.pricing[activeTab] || [];

  const handlePricingClick = (pkgName: string) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "pricing_cta_click",
        plan: pkgName,
        category: activeTab,
      });
    }
  };

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 md:py-36 bg-[#FAFAFC] overflow-hidden border-t border-b border-black/[0.04]"
    >
      {/* Subtle Overhead Ambient Spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.06),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
          >
            <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-[#EBEBED] border border-black/[0.06] text-primary text-[10px] font-extrabold uppercase tracking-widest shadow-2xs">
              Clear & Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-[#1D1D1F] leading-[1.1]">
              Fixed Scope Pricing,{" "}
              <span className="text-primary italic font-serif-accent">Zero Hidden Fees.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#2D2D30] leading-relaxed max-w-xl mx-auto font-medium">
              Straightforward pricing with 100% code ownership. No monthly lock-ins, no hostage fees.
            </p>
          </motion.div>

          {/* Apple Segmented Control Tabs */}
          <div className="flex justify-center mb-12 px-2">
            <div className="flex flex-col sm:flex-row w-full sm:w-auto p-1.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] shadow-inner gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-6 sm:px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 grow ${
                    activeTab === tab.id
                      ? "bg-[#1D1D1F] text-white shadow-md"
                      : "text-[#6E6E73] hover:text-[#1D1D1F]"
                  }`}
                >
                  <tab.icon size={15} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Cards Grid (Apple UI, High-Contrast Distinct Cards) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 gpu-smooth"
            >
              {currentPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                    pkg.recommended
                      ? "bg-white border-2 border-primary/40 shadow-[0_20px_50px_-10px_rgba(6,78,59,0.14)] lg:scale-[1.03] z-10"
                      : "bg-[#F5F5F7] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.05),0_12px_36px_rgba(6,78,59,0.05)] hover:shadow-[0_24px_60px_-10px_rgba(6,78,59,0.14)] hover:border-emerald-500/40 hover:-translate-y-1"
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute top-0 right-6 sm:right-8 -translate-y-1/2 px-3.5 py-1 rounded-full bg-[#1D1D1F] text-white text-[9px] font-black uppercase tracking-widest shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#1D1D1F]">{pkg.name}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6E6E73] px-2.5 py-1 rounded-full bg-white border border-black/[0.06] shadow-2xs">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">{pkg.price}</span>
                      <span className="text-xs font-semibold text-[#6E6E73]">starting from</span>
                    </div>
                    <p className="text-xs text-[#6E6E73] font-medium leading-relaxed min-h-[36px]">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 shrink-0">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="text-xs font-medium text-[#1D1D1F]/85 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-black/[0.06]">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                        `Hi ZeenOx, I'm interested in the ${pkg.name} (${pkg.price}) package for ${activeTab}. Can we discuss the requirements?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handlePricingClick(pkg.name)}
                      className={`w-full py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-all duration-300 ${
                        pkg.recommended
                          ? "bg-[#1D1D1F] text-white shadow-md shadow-black/15 hover:bg-black hover:scale-[1.02] active:scale-95"
                          : "bg-white border border-black/[0.08] text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white"
                      }`}
                    >
                      <MessageCircle size={15} className="text-[#25D366]" />
                      <span>Lock This Plan</span>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Custom Scope Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">
              Need something custom or a phased roadmap?
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6E73] mb-4 font-medium">
              Get a custom architecture plan and fixed quote in 1 business day.
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hi ZeenOx, I have a custom project requirement and I'd like a quote in 1 business day."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D1D1F] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-black transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              <span>Request Custom Quote on WhatsApp</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Pricing FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Got Questions?</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] mt-1">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-3">
              {siteConfig.pricing.faq.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#F5F5F7] border border-black/[0.06] shadow-xs hover:border-emerald-500/30 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#1D1D1F] hover:text-primary transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#6E6E73] transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#6E6E73] leading-relaxed border-t border-black/[0.05] mt-1 pt-3 font-medium bg-white/50">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
