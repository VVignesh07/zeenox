"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import siteConfig from "@/data/siteConfig";

export default function ScrollNudge() {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      const isDismissed = localStorage.getItem("zeenox_nudge_dismissed");
      if (isDismissed) {
        setDismissed(true);
        return;
      }
      setDismissed(false);
    } catch {
      setDismissed(false);
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const scrollPercent = (window.scrollY / totalHeight) * 100;

      if (scrollPercent >= 60) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
    try {
      localStorage.setItem("zeenox_nudge_dismissed", "true");
    } catch {
      // Ignore localStorage restrictions
    }
  };

  if (dismissed || !isVisible) return null;

  const prefilledWa = "Hi ZeenOx, I was browsing your website and I'm not sure which service is best for my business. Can we chat?";
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(prefilledWa)}`;

  return (
    <aside
      aria-label="Help and assistance"
      className="fixed bottom-20 md:bottom-6 left-4 sm:left-6 z-[70] max-w-sm rounded-2xl bg-white/90 shadow-2xl shadow-emerald-950/15 backdrop-blur-2xl animate-fade-up flex items-center gap-3 p-3.5 sm:p-4"
    >
      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-xs">
        <MessageCircle size={18} />
      </div>

      <div className="flex-1 pr-2">
        <p className="text-xs font-bold text-foreground leading-tight">
          Not sure what you need?
        </p>
        <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
          Ask our tech team on WhatsApp.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 rounded-lg bg-primary text-white text-[11px] font-bold uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all"
        >
          Chat
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss message"
        >
          <X size={14} />
        </button>
      </div>
    </aside>
  );
}
