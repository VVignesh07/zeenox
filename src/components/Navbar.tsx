"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Languages, Sparkles } from "lucide-react";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.estimator, href: "/#estimator" },
    { label: t.nav.autozee, href: "/#autozee" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-3 sm:top-5 left-0 right-0 mx-auto w-[95%] sm:w-[94%] max-w-6xl z-50 transition-all duration-300 rounded-full backdrop-blur-3xl border border-white/80 ${
        scrolled
          ? "bg-white/90 py-2.5 sm:py-3 shadow-[0_16px_40px_-10px_rgba(6,78,59,0.12),inset_0_1px_1px_rgba(255,255,255,1)]"
          : "bg-white/80 py-3 sm:py-3.5 shadow-[0_10px_30px_-8px_rgba(6,78,59,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)]"
      } px-3.5 sm:px-6`}
    >
      <div className="flex items-center justify-between gap-2 lg:gap-4">
        {/* Brand Logo & Studio Live Dot */}
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity shrink-0" aria-label="ZeenOx Home">
          <div 
            aria-hidden="true"
            className="h-6 sm:h-7 w-28 sm:w-32 bg-[#1D1D1F]"
            style={{
              maskImage: 'url(/images/logo2.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'left center',
              WebkitMaskImage: 'url(/images/logo2.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'left center',
            }}
          />
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="ZeenOx Studio Live & Available" />
        </Link>

        {/* Desktop Nav Links (Strictly Single-Line Locked, No Breaking) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0 flex-nowrap">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2.5 xl:px-3 py-1.5 text-[11px] xl:text-[12px] font-bold uppercase tracking-[0.05em] text-[#1D1D1F]/80 hover:text-[#082817] hover:bg-emerald-500/10 rounded-full transition-all whitespace-nowrap shrink-0 inline-block"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions: Language Toggle + Emerald Pill CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-nowrap">
          {/* EN / தமிழ் Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-full border border-black/[0.07] bg-black/[0.03] hover:bg-emerald-500/10 text-[10px] font-extrabold uppercase tracking-wider text-[#1D1D1F] flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0"
            aria-label={`Switch language to ${lang === "en" ? "Tamil" : "English"}`}
            title={`Switch to ${lang === "en" ? "Tamil" : "English"}`}
          >
            <Languages size={12} className="text-[#00C853]" />
            <span>{lang === "en" ? "தமிழ்" : "EN"}</span>
          </button>

          {/* Primary Navbar CTA: Luminous Emerald Green Pill (Matches Image 4 Laptop Reference) */}
          <Link
            href="/#services"
            className="hidden sm:inline-flex rounded-full bg-[#00D664] hover:bg-[#00BF58] text-[#052B16] px-5 py-2 text-[11px] xl:text-xs font-extrabold uppercase tracking-wider transition-all items-center gap-1.5 shadow-[0_4px_16px_rgba(0,214,100,0.3)] hover:shadow-[0_6px_22px_rgba(0,214,100,0.45)] hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>{t.nav.getQuote}</span>
            <ArrowRight size={13} className="shrink-0" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="lg:hidden text-[#1D1D1F] p-1.5 hover:bg-black/[0.04] rounded-full transition-colors focus:outline-none" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[115%] left-0 right-0 bg-white/95 backdrop-blur-3xl border border-white/90 rounded-3xl shadow-2xl p-6 shadow-[0_20px_50px_rgba(6,78,59,0.15)]"
          >
            <div className="flex flex-col gap-3.5">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-xs font-bold uppercase tracking-[0.15em] text-[#1D1D1F]/80 hover:text-[#00C853] py-1.5 flex items-center justify-between whitespace-nowrap"
                >
                  <span>{item.label}</span>
                  <ArrowRight size={13} className="text-[#00C853]/70" />
                </Link>
              ))}

              <Link
                href="/#services"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[#00D664] text-[#052B16] py-3 text-center text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#00D664]/30"
              >
                <span>{t.nav.getQuote}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
