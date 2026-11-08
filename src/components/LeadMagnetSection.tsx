"use client";

import { useState } from "react";
import { CheckCircle2, Search, ArrowRight, ShieldCheck, Zap, Sparkles, Smartphone, Gauge } from "lucide-react";
import siteConfig from "@/data/siteConfig";

export default function LeadMagnetSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      type: "audit",
      name: (formData.get("businessName") as string) || "Business Owner",
      businessName: formData.get("businessName") as string,
      websiteOrSocial: formData.get("websiteOrSocial") as string,
      phone: formData.get("phone") as string,
      service: "Free Website & Conversion Audit",
      website_hp: (formData.get("website_hp") as string) || "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSubmitted(true);

      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "audit_request",
          business: payload.businessName,
        });
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please reach out on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="lead-magnet"
      className="relative py-20 sm:py-28 md:py-36 bg-gradient-to-b from-[#E7F3EB] via-[#D8EFE0] to-[#E3F2E8] overflow-hidden"
    >
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
        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-white/95 backdrop-blur-3xl shadow-[0_30px_90px_-15px_rgba(6,78,59,0.14)] border border-white/90 p-6 sm:p-10 md:p-14 relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/8 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            {/* Left Description (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-primary text-[10px] font-extrabold uppercase tracking-widest shadow-2xs">
                <Search size={12} />
                <span>Zero Cost • Actionable Engineering Teardown</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-[1.15]">
                Get a Free Website & <br className="hidden sm:inline" />
                <span className="font-serif-accent italic text-primary">Conversion Audit.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#2D2D30] leading-relaxed font-medium">
                We'll personally analyze your current website or Instagram profile, test your mobile loading speed, review your local Google search ranking in Tamil Nadu, and provide 3 concrete improvements to increase your qualified inquiries.
              </p>

              {/* 3 Value Points */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    icon: Gauge,
                    title: "Mobile Speed & Core Web Vitals Diagnostic",
                    desc: "Find out if slow loading is causing 50%+ of your visitors to bounce before seeing your offer.",
                  },
                  {
                    icon: Smartphone,
                    title: "WhatsApp Lead Capture & Funnel Teardown",
                    desc: "Analyze how many clicks it takes for a high-intent prospect to start chatting with your sales team.",
                  },
                  {
                    icon: Zap,
                    title: "Direct Actionable Voice/Video Notes",
                    desc: "Delivered straight to your WhatsApp within 24 business hours. No spam, no aggressive sales pitch.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] flex items-start gap-3 transition-all hover:bg-white hover:shadow-xs"
                    >
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-2xs">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#3A3A3C] font-semibold leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Form (6 cols) */}
            <div className="lg:col-span-6">
              {submitted ? (
                <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F5F7] border border-black/[0.06] text-center space-y-4 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-primary mx-auto shadow-xs">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1D1D1F]">
                    Audit Request Confirmed!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed max-w-sm mx-auto font-medium">
                    Our technical lead is analyzing your platform. You will receive custom teardown notes and speed benchmarks directly on your WhatsApp within 24 business hours.
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary px-3 py-1.5 rounded-full bg-emerald-500/10">
                      <Sparkles size={13} />
                      <span>Priority Queue Activated</span>
                    </span>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6 bg-white p-7 sm:p-10 rounded-[2.2rem] border border-black/[0.06] shadow-[0_20px_60px_-15px_rgba(6,78,59,0.08)] relative overflow-hidden"
                >
                  {/* Apple Top Shimmer Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0" />
                  
                  <div className="pb-4 border-b border-black/[0.06] flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#1D1D1F] tracking-tight">
                        Claim Your 100% Free Audit
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#48484A] font-medium mt-0.5">
                        24h Turnaround • Delivered on WhatsApp
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-extrabold text-emerald-700 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Queue</span>
                    </div>
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="audit_hp">Leave empty</label>
                    <input id="audit_hp" name="website_hp" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="audit-business" className="block text-xs font-bold uppercase tracking-wider text-[#3A3A3C]">
                      Business or Clinic Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="audit-business"
                      name="businessName"
                      type="text"
                      required
                      placeholder="e.g. Apex Dental Clinic / ZeenOx Retail"
                      className="w-full h-12 sm:h-14 rounded-2xl bg-[#F5F5F7] border border-black/[0.08] px-4 sm:px-5 text-xs sm:text-[13px] font-medium text-[#1D1D1F] focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none placeholder:text-[#6E6E73]/50 transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="audit-link" className="block text-xs font-bold uppercase tracking-wider text-[#3A3A3C]">
                      Website URL or Instagram Profile <span className="text-primary">*</span>
                    </label>
                    <input
                      id="audit-link"
                      name="websiteOrSocial"
                      type="text"
                      required
                      placeholder="e.g. yourclinic.in or @yourbrand"
                      className="w-full h-12 sm:h-14 rounded-2xl bg-[#F5F5F7] border border-black/[0.08] px-4 sm:px-5 text-xs sm:text-[13px] font-medium text-[#1D1D1F] focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none placeholder:text-[#6E6E73]/50 transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="audit-phone" className="block text-xs font-bold uppercase tracking-wider text-[#3A3A3C]">
                      WhatsApp Mobile Number <span className="text-primary">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 sm:left-5 flex items-center gap-2.5 pointer-events-none z-10">
                        <span className="text-xs sm:text-[13px] font-bold text-[#1D1D1F] tracking-wide">+91</span>
                        <span className="h-4 w-px bg-black/[0.15]" />
                      </div>
                      <input
                        id="audit-phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={15}
                        placeholder="98765 43210"
                        className="w-full h-12 sm:h-14 rounded-2xl bg-[#F5F5F7] border border-black/[0.08] pl-20 sm:pl-22 pr-4 sm:pr-5 text-xs sm:text-[13px] font-medium text-[#1D1D1F] focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none placeholder:text-[#6E6E73]/50 transition-all tracking-wide shadow-sm"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-red-500 font-semibold p-3 rounded-xl bg-red-50 border border-red-200">
                      {errorMsg}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 sm:py-5 px-7 rounded-full bg-[#1D1D1F] text-white font-extrabold text-xs sm:text-[13px] uppercase tracking-wider shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:bg-black hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-50 group cursor-pointer"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Analyzing Your Platform...</span>
                        </div>
                      ) : (
                        <>
                          <span className="whitespace-nowrap">Claim My Free Audit (Zero Cost)</span>
                          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 pb-1 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#48484A] font-medium text-center">
                    <ShieldCheck size={14} className="text-primary shrink-0" />
                    <span>100% Private. No sales calls. Notes delivered via WhatsApp.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
