"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("zeenox_cookie_consent");
      if (!consent) {
        setShow(true);
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("zeenox_cookie_consent", "accepted");
    } catch {
      // Ignore
    }
    setShow(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("zeenox_cookie_consent", "declined");
    } catch {
      // Ignore
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Cookie consent"
      className="fixed bottom-20 md:bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[90] p-4 rounded-2xl bg-card border border-border/80 shadow-2xl backdrop-blur-xl animate-fade-up"
    >
      <div className="flex flex-col gap-3">
        <p className="text-xs text-muted-foreground leading-relaxed">
          We use essential cookies to analyze site traffic and improve conversion performance. See our{" "}
          <Link href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={handleDecline}
            className="px-3 py-1.5 rounded-lg border border-border text-[11px] font-bold text-muted-foreground hover:text-foreground transition-all"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-3.5 py-1.5 rounded-lg bg-primary text-white text-[11px] font-bold uppercase tracking-wider transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}

