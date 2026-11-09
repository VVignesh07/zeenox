"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import siteConfig from "@/data/siteConfig";

export default function MobileStickyBar() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Hide bar when virtual keyboard opens or user focuses an input/textarea
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT")
      ) {
        setIsKeyboardOpen(true);
      }
    };

    const handleFocusOut = () => {
      setIsKeyboardOpen(false);
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  const prefilledWa = `Hi ZeenOx, I found you on your website and would like to discuss a project.`;
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(prefilledWa)}`;

  const handleCallClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "call_click",
        location: "mobile_sticky_bar",
      });
    }
  };

  const handleWaClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "whatsapp_click",
        location: "mobile_sticky_bar",
      });
    }
  };

  if (isKeyboardOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[75] md:hidden px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-xl border-t border-black/[0.05] shadow-[0_-8px_30px_rgba(6,78,59,0.08)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${siteConfig.contact.primaryPhone}`}
          onClick={handleCallClick}
          className="flex items-center justify-center gap-2 h-12 rounded-xl bg-white text-foreground font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
          aria-label={`Call ZeenOx at ${siteConfig.contact.primaryPhone}`}
        >
          <Phone size={15} className="text-primary" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/25 active:scale-95 transition-all"
          aria-label="Message ZeenOx on WhatsApp"
        >
          <MessageCircle size={17} className="fill-current text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
