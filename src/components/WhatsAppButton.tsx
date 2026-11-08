"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SiWhatsapp } from "react-icons/si";
import siteConfig from "@/data/siteConfig";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [pageContext, setPageContext] = useState("your services");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    if (typeof document !== "undefined") {
      const title = document.title ? document.title.split("|")[0].split("—")[0].trim() : "";
      if (title && !title.toLowerCase().includes("zeenox")) {
        setPageContext(title);
      } else if (pathname === "/") {
        setPageContext("Website & Web App Development");
      } else if (pathname.includes("clinic")) {
        setPageContext("Clinic Website Solutions");
      } else if (pathname.includes("real-estate")) {
        setPageContext("Real Estate Video & Media");
      } else if (pathname.includes("automation")) {
        setPageContext("WhatsApp Automation & CRM");
      } else if (pathname.includes("pricing")) {
        setPageContext("Pricing Packages");
      } else {
        setPageContext("your digital agency services");
      }
    }

    const tipTimer = setTimeout(() => setShowTooltip(true), 2500);
    const hideTimer = setTimeout(() => setShowTooltip(false), 9000);
    return () => {
      clearTimeout(tipTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  const prefilledText = `Hi ZeenOx, I found you on your website and I'm interested in ${pageContext}.`;
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(prefilledText)}`;

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "whatsapp_click",
        location: "sticky_floating",
        context: pageContext,
      });
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-[90] flex flex-col items-end pointer-events-auto">
      {/* Tooltip Message */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="mb-3 bg-white/95 backdrop-blur-2xl shadow-[0_12px_36px_-6px_rgba(6,78,59,0.18)] rounded-2xl p-3.5 max-w-[220px] sm:max-w-[240px] relative origin-bottom-right"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground p-1 transition-colors"
              aria-label="Close message preview"
            >
              <X size={13} />
            </button>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-foreground">Online Now</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">
              Have a question about {pageContext}? Tap to chat on WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-[#25D366]/20"
        aria-label="Chat directly on WhatsApp with ZeenOx Agency"
      >
        <SiWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white group-hover:rotate-6 transition-transform duration-300" />
        
        {/* Active Ping Dot */}
        <span className="absolute top-0 right-0 flex h-4 w-4 -mt-0.5 -mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
        </span>

        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
