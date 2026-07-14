"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Calendar } from "lucide-react";

const Counter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate current value based on progress
      const current = Math.min(
        Math.floor((progress / (duration * 1000)) * (to - from) + from),
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
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{count}</span>;
};

const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp size={24} className="text-primary" />,
      iconBg: "bg-primary/10",
      number: 6,
      labelLine1: "PROJECTS",
      labelLine2: "DELIVERED",
      textColor: "text-muted-foreground",
      highlight: false,
    },
    {
      icon: <Users size={24} className="text-primary" />,
      iconBg: "bg-primary/10",
      number: 6,
      labelLine1: "BRANDS",
      labelLine2: "ARCHITECTED",
      textColor: "text-muted-foreground",
      highlight: false,
    },
    {
      icon: <Calendar size={24} className="text-primary" />,
      iconBg: "bg-primary/10",
      number: 6,
      labelLine1: "YEARS",
      labelLine2: "EXPERIENCE",
      textColor: "text-muted-foreground",
      highlight: false,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-start items-center gap-6 md:gap-8 w-full">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
          className={`flex flex-col items-center justify-center p-8 bg-card rounded-[2rem] w-full sm:flex-1 transition-all duration-500 shadow-sm hover:shadow-xl border border-border`}
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 hover:scale-110 bg-primary/10`}>
            {stat.icon}
          </div>
          
          <div className="flex items-baseline mb-3">
            <span className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
              <Counter from={0} to={stat.number} duration={2} />
            </span>
            <span className={`text-2xl md:text-4xl font-black ml-1 text-primary`}>+</span>
          </div>
          
          <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-center leading-relaxed flex flex-col items-center justify-center text-muted-foreground`}>
            <span>{stat.labelLine1}</span>
            <span>{stat.labelLine2}</span>
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;
