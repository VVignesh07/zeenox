"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Calendar } from "lucide-react";
import siteConfig from "@/data/siteConfig";

const Counter = ({ to, duration = 1.5 }: { to: number; duration?: number }) => {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? to : 0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-30px" });

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(to);
      return;
    }

    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const current = Math.min(
        Math.floor((progress / (duration * 1000)) * to),
        to
      );

      setCount(current);

      if (progress < duration * 1000) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [to, duration, inView, shouldReduceMotion]);

  return (
    <span ref={nodeRef} aria-label={`${to} plus`}>
      {/* Fallback for environments with JS disabled or delayed hydration */}
      <noscript>{to}</noscript>
      <span>{count}</span>
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="text-primary w-4 h-4 sm:w-6 sm:h-6" aria-hidden="true" />,
      number: siteConfig.proof.projectsDelivered,
      labelLine1: "PROJECTS",
      labelLine2: "DELIVERED",
    },
    {
      icon: <Users className="text-primary w-4 h-4 sm:w-6 sm:h-6" aria-hidden="true" />,
      number: siteConfig.proof.projectsDelivered,
      labelLine1: "BUSINESSES",
      labelLine2: "SERVED",
    },
    {
      icon: <Calendar className="text-primary w-4 h-4 sm:w-6 sm:h-6" aria-hidden="true" />,
      number: siteConfig.proof.yearsOfExperience,
      labelLine1: "YEARS",
      labelLine2: "EXPERIENCE",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2.5 sm:gap-6 w-full">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 bg-white/90 backdrop-blur-xl border border-white/90 rounded-2xl sm:rounded-[2rem] transition-all duration-300 shadow-xl shadow-emerald-950/[0.06] hover:shadow-2xl hover:scale-[1.02] text-center"
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 md:mb-6 transition-transform duration-300 hover:scale-110 bg-primary/10 shadow-xs">
            {stat.icon}
          </div>
          
          <div className="flex items-baseline mb-1 sm:mb-2">
            <span className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground tracking-tighter">
              <Counter to={stat.number} duration={1.5} />
            </span>
            <span className="text-lg sm:text-2xl md:text-4xl font-black ml-0.5 text-primary">+</span>
          </div>
          
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider leading-tight flex flex-col items-center justify-center text-muted-foreground">
            <span>{stat.labelLine1}</span>
            <span>{stat.labelLine2}</span>
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;
