"use client";
import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00D664] via-[#10B981] to-[#047857] z-[101] origin-left shadow-[0_0_12px_rgba(0,214,100,0.7)] pointer-events-none transform-gpu will-change-transform"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
