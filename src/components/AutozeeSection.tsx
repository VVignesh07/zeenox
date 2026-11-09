"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, ArrowRight, ExternalLink, Bot, Zap, Sparkles } from "lucide-react";
import siteConfig from "@/data/siteConfig";

export default function AutozeeSection() {
  return (
    <section id="autozee" className="relative py-20 sm:py-28 md:py-36 bg-gradient-to-b from-[#E7F3EB] via-[#D8EFE0] to-[#E3F2E8] overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "120px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-6xl mx-auto rounded-[2.5rem] bg-white/95 backdrop-blur-md sm:backdrop-blur-xl p-6 sm:p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(6,78,59,0.12)] border border-white/90 relative overflow-hidden transform-gpu will-change-transform"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-primary text-[11px] font-extrabold uppercase tracking-widest shadow-xs">
                <Bot size={14} />
                <span>{siteConfig.autozee.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-[1.15]">
                Turn WhatsApp into Your{" "}
                <span className="font-serif-accent italic text-primary">#1 Sales Machine.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#2D2D30] leading-relaxed font-medium">
                {siteConfig.autozee.description}
              </p>

              {/* 3 Key Benefits */}
              <div className="space-y-3 pt-2">
                {siteConfig.autozee.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-primary mt-0.5 shrink-0 shadow-2xs">
                      <CheckCircle2 size={13} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href={siteConfig.autozee.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button-shimmer w-full sm:w-auto px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-black/20 hover:bg-black active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Explore Autozee.ai</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    "Hi ZeenOx, I would like to book a live demo of Autozee.ai WhatsApp CRM."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#F5F5F7] border border-black/[0.08] text-[#1D1D1F] font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#1D1D1F] hover:text-white transition-all text-center"
                >
                  Book Live WhatsApp Demo
                </a>
              </div>
            </div>

            {/* Right Mockup Preview (5 cols) - Apple iPhone Frame */}
            <div className="lg:col-span-5">
              <div className="rounded-[2.2rem] bg-white border border-black/[0.08] p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] relative">
                {/* Dynamic Island on Phone */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-4" />

                {/* Mockup Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-black/[0.05] mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                      <MessageCircle size={18} className="fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1D1D1F]">Autozee WhatsApp Bot</p>
                      <p className="text-[10px] text-emerald-600 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Online • Automated Assistant
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-[#6E6E73] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#F5F5F7] border border-black/[0.04]">
                    Live Simulator
                  </span>
                </div>

                {/* Simulated Chat Messages */}
                <div className="space-y-3 text-xs">
                  {/* User Msg */}
                  <div className="p-3 rounded-2xl rounded-tr-none bg-emerald-500/10 text-[#1D1D1F] ml-6 shadow-2xs">
                    <p className="font-medium">Hi! Do you have slots for dental consultation this Saturday?</p>
                    <span className="text-[9px] text-[#6E6E73] mt-1 block text-right font-medium">10:42 AM</span>
                  </div>

                  {/* Bot Msg */}
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-[#F5F5F7] border border-black/[0.04] text-[#1D1D1F] mr-6 space-y-1.5">
                    <p className="font-bold text-primary">⚡ Autozee Bot (0.8s reply):</p>
                    <p className="text-[#6E6E73]">
                      Hello! Yes, we have 2 open doctor consultation slots for Saturday at our Kariapatti clinic:
                    </p>
                    <div className="space-y-1.5 pt-1">
                      <div className="p-2 rounded-xl bg-white text-[11px] font-bold text-[#1D1D1F] flex items-center justify-between shadow-2xs border border-emerald-500/20">
                        <span>Option A: 11:30 AM</span>
                        <span className="text-primary text-[10px] font-extrabold">Tap to Confirm</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white text-[11px] font-bold text-[#1D1D1F] flex items-center justify-between shadow-2xs border border-emerald-500/20">
                        <span>Option B: 04:30 PM</span>
                        <span className="text-primary text-[10px] font-extrabold">Tap to Confirm</span>
                      </div>
                    </div>
                    <span className="text-[9px] text-[#6E6E73] mt-1 block text-right font-medium">10:42 AM • Synced to CRM</span>
                  </div>
                </div>

                {/* Automation Stats Badge */}
                <div className="mt-4 pt-3 border-t border-black/[0.05] grid grid-cols-2 gap-2 text-center text-[10px]">
                  <div className="p-2.5 rounded-xl bg-[#F5F5F7] border border-black/[0.04]">
                    <p className="font-bold text-[#1D1D1F] text-xs">&lt; 10s</p>
                    <p className="text-[#6E6E73] font-medium">Lead Response</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F5F5F7] border border-black/[0.04]">
                    <p className="font-bold text-[#1D1D1F] text-xs">98%</p>
                    <p className="text-[#6E6E73] font-medium">Message Read Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
