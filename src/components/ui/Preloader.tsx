"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            <div className="mb-8 flex items-center justify-center space-x-1">
              {"ZeenOx".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 0, opacity: 0.5 }}
                  animate={{ y: [-8, 0, -8], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                  className="text-4xl sm:text-5xl font-black text-green-500 tracking-wider"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground"
            >
              Media · Tech · Automation
            </motion.p>
          </div>

          {/* Background decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
