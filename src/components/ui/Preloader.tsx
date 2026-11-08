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
            <div className="mb-4 flex items-center justify-center space-x-1">
              {"ZeenOx".split("").map((letter, i) => (
                <span
                  key={i}
                  className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight"
                >
                  {letter}
                </span>
              ))}
              <span className="h-2 w-2 rounded-full bg-primary ml-1 animate-pulse" />
            </div>
            
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
