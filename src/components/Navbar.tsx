"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Languages } from "lucide-react";
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

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.estimator, href: "/#estimator" },
    { label: t.nav.autozee, href: "/#autozee" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi ZeenOx, I would like to consult with your digital engineering team."
  )}`;

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed top-2.5 sm:top-5 left-0 right-0 mx-auto w-[94%] sm:w-[92%] max-w-6xl z-50 transition-all duration-300 rounded-full backdrop-blur-3xl border ${
          scrolled
            ? "bg-white/95 py-2 sm:py-2.5 border-black/[0.08] shadow-[0_12px_32px_-8px_rgba(6,78,59,0.12),inset_0_1px_1px_rgba(255,255,255,1)]"
            : "bg-white/85 py-2.5 sm:py-3 border-white/80 shadow-[0_8px_24px_-6px_rgba(6,78,59,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)]"
        } px-3.5 sm:px-6`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Studio Live Dot */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity shrink-0"
            aria-label="ZeenOx Home"
            onClick={() => setOpen(false)}
          >
            <picture className="shrink-0 flex items-center">
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img
                src="/images/logo.png"
                alt="ZeenOx Digital Solution"
                width={140}
                height={35}
                className="h-7 sm:h-9 md:h-10 w-auto max-h-7 sm:max-h-9 md:max-h-10 max-w-[115px] sm:max-w-[145px] md:max-w-[170px] object-contain shrink-0"
                loading="eager"
                decoding="async"
              />
            </picture>
            <span
              className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#00D664] animate-pulse shrink-0"
              title="ZeenOx Studio Live & Available"
            />
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
              className="px-2.5 py-1 sm:py-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] hover:bg-emerald-500/10 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#1D1D1F] flex items-center gap-1 sm:gap-1.5 transition-all whitespace-nowrap shrink-0 active:scale-95"
              aria-label={`Switch language to ${lang === "en" ? "Tamil" : "English"}`}
              title={`Switch to ${lang === "en" ? "Tamil" : "English"}`}
            >
              <Languages size={12} className="text-[#00C853] shrink-0" />
              <span>{lang === "en" ? "தமிழ்" : "EN"}</span>
            </button>

            {/* Primary Navbar CTA: Desktop Only */}
            <Link
              href="/#services"
              className="hidden sm:inline-flex rounded-full bg-[#00D664] hover:bg-[#00BF58] text-[#052B16] px-4 sm:px-5 py-2 text-[11px] xl:text-xs font-extrabold uppercase tracking-wider transition-all items-center gap-1.5 shadow-[0_4px_16px_rgba(0,214,100,0.3)] hover:shadow-[0_6px_22px_rgba(0,214,100,0.45)] hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>{t.nav.getQuote}</span>
              <ArrowRight size={13} className="shrink-0" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="lg:hidden text-[#082817] p-1.5 sm:p-2 hover:bg-black/[0.05] active:scale-95 rounded-full transition-all focus:outline-none flex items-center justify-center shrink-0"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X size={20} className="stroke-[2.5]" /> : <Menu size={20} className="stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu (Anchored Directly Below Navbar) */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-white/98 backdrop-blur-3xl border border-black/[0.08] rounded-3xl shadow-[0_24px_60px_-10px_rgba(6,78,59,0.22)] p-4 sm:p-5 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold uppercase tracking-[0.12em] text-[#082817] hover:bg-emerald-500/10 active:bg-emerald-500/15 transition-all group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    <ArrowRight
                      size={14}
                      className="text-[#00D664] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="my-3 h-px bg-black/[0.06]" />

              {/* Mobile Drawer Action Buttons */}
              <div className="flex flex-col gap-2 pt-1">
                <Link
                  href="/#services"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-2xl bg-[#00D664] hover:bg-[#00BF58] text-[#052B16] py-3 text-center text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(0,214,100,0.3)] active:scale-[0.98] transition-all"
                >
                  <span>{t.nav.getQuote}</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-2xl bg-black/[0.03] hover:bg-black/[0.06] text-[#082817] py-2.5 text-center text-xs font-bold tracking-wide flex items-center justify-center gap-2 border border-black/[0.06] active:scale-[0.98] transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>WhatsApp Direct Tech Desk</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Dimmed backdrop when mobile menu is open to dismiss on outside tap */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>
    </>
  );
}

