"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F5F5F7]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-12"
          >
            <div className="relative">
                <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full"
                />
                <Image
                  src="/images/logo2.png"
                  alt="Zeenox"
                  width={300}
                  height={100}
                  className="relative h-20 w-auto invert filter drop-shadow-2xl opacity-90"
                />
            </div>
            
            <div className="flex flex-col items-center gap-4">
                <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-black/5">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_20px_rgba(0,113,227,0.5)]"
                    style={{ width: `${progress}%` }}
                    transition={{ type: "spring", bounce: 0, duration: 1 }}
                  />
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">{progress}%</span>
                    <span className="h-1 w-1 rounded-full bg-black/10" />
                    <span className="text-[9px] font-bold text-black/20 uppercase tracking-[0.2em]">Initialising Engine</span>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
