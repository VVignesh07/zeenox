"use client";

import { motion } from "framer-motion";
import { Video, TrendingUp, Globe, Cpu } from "lucide-react";
import Link from "next/link";

const services = [
  { 
    icon: Video, 
    title: "Video Editing", 
    desc: "High-retention edits for reels, ads, YouTube, and brand content — built to stop the scroll and hold attention.",
    bullets: ["Short-form & long-form editing", "Motion graphics & captions", "Ad creatives for paid campaigns"]
  },
  { 
    icon: TrendingUp, 
    title: "Digital Marketing", 
    desc: "Data-driven marketing that turns attention into customers.",
    bullets: ["Social media strategy & management", "Paid ads (Meta, Google)", "Content calendars & campaign planning"]
  },
  { 
    icon: Globe, 
    title: "Web Development", 
    desc: "Fast, modern, conversion-focused websites and web apps.",
    bullets: ["Business & portfolio websites", "E-commerce builds", "Website audits & performance optimization"]
  },
  { 
    icon: Cpu, 
    title: "Automation & Tech", 
    desc: "Systems that save time and reduce manual work.",
    bullets: ["Workflow automation", "CRM & internal tool setup", "Custom tech solutions for business operations"]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/80 shadow-sm">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            What We <span className="font-serif-accent text-primary">Do</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="card-apple group p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <s.icon size={120} className="text-primary" />
              </div>
              
              <div className="mb-8 relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 blur-[15px] rounded-full scale-100 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative h-16 w-16 flex items-center justify-center bg-card rounded-2xl shadow-sm border border-white/10 group-hover:border-primary/30 transition-colors duration-500">
                      <s.icon size={32} className="text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
              </div>
              
              <h3 className="mb-4 font-bold text-2xl tracking-tight text-foreground">
                  {s.title}
              </h3>
              <p className="text-base text-muted-foreground font-medium mb-8">
                  {s.desc}
              </p>
              
              <ul className="space-y-3">
                {s.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground font-medium mb-6">Not sure what you need? Let's talk — we'll map it out together.</p>
          <Link href="/#contact" className="btn-primary inline-flex">
            Book a Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
