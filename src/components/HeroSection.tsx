"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, ShieldCheck, Zap, Award } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    const floatVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    };

    const trustItems = [
        { icon: ShieldCheck, label: "Trusted by 50+ Brands" },
        { icon: Zap, label: "Lightning-Fast Delivery" },
        { icon: Award, label: "Premium Quality" },
    ];

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32 pb-20 overflow-hidden bg-background">
            {/* Background Architectural Elements - Refined */}
            <div className="absolute inset-0 z-0 flex justify-center">
                <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <motion.div 
                    animate={{ 
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" 
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Eyebrow Badge */}
                    <motion.div variants={itemVariants} className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
                            <Sparkles size={14} className="text-primary animate-pulse" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/80">Media · Tech · Automation</span>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        variants={itemVariants} 
                        className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 text-balance"
                    >
                        We Build <span className="text-primary font-serif-accent">Brands,</span> Run{" "}
                        <span className="text-primary font-serif-accent">Growth,</span> and{" "}
                        Automate the Rest
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p 
                        variants={itemVariants}
                        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed font-medium mb-12"
                    >
                        ZeenOx is a full-service digital agency helping businesses create standout content, grow online, and streamline operations — with video, marketing, web, and automation, all under one roof.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/#contact" 
                            className="btn-primary flex items-center justify-center gap-3 w-full sm:w-auto"
                        >
                            Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                            href="/#work" 
                            className="btn-apple bg-card border border-white/10 flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-white/10 text-foreground"
                        >
                            <Play size={14} fill="currentColor" className="text-primary" />
                            See Our Work
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-all duration-500"
                    >
                        {trustItems.map((item) => (
                            <div key={item.label} className="flex items-center gap-2">
                                <item.icon size={16} className="text-primary" />
                                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/80">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Decorative Objects */}
            <motion.div 
                variants={floatVariants}
                animate="animate"
                className="absolute top-1/4 left-10 hidden xl:block p-4 rounded-3xl bg-card border border-white/5 shadow-2xl backdrop-blur-xl opacity-60"
            >
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Zap size={18} />
                    </div>
                    <div className="space-y-1">
                        <div className="h-2 w-16 bg-white/20 rounded-full" />
                        <div className="h-2 w-10 bg-white/10 rounded-full" />
                    </div>
                </div>
            </motion.div>

            <motion.div 
                variants={floatVariants}
                animate="animate"
                transition={{ delay: 1 }}
                className="absolute bottom-1/3 right-10 hidden xl:block p-4 rounded-3xl bg-card border border-white/5 shadow-2xl backdrop-blur-xl opacity-60"
            >
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Play size={18} fill="currentColor" />
                    </div>
                    <div className="space-y-1">
                        <div className="h-2 w-20 bg-white/20 rounded-full" />
                        <div className="h-2 w-12 bg-white/10 rounded-full" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;

