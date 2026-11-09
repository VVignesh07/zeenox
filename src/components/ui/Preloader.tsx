"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Show only once per browser session
    try {
      const hasLoaded = sessionStorage.getItem("zeenox_preloaded");
      if (!hasLoaded) {
        setLoading(true);
        const timer = setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("zeenox_preloaded", "1");
        }, 700);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if sessionStorage is disabled
      setLoading(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.35, ease: "easeOut" }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            <picture className="mb-4">
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img
                src="/images/logo.png"
                alt="ZeenOx Digital Solution"
                width={160}
                height={40}
                className="h-10 sm:h-12 md:h-14 w-auto max-h-14 object-contain"
              />
            </picture>
            
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6E6E73]">
              Media · Tech · Automation
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
