import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, ShieldCheck, Zap } from "lucide-react";

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const floatVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32 pb-20 overflow-hidden bg-background">
            {/* Background Architectural Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(0,113,227,0.08),transparent_50%)]" />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" 
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/5 backdrop-blur-md shadow-sm">
                            <Sparkles size={14} className="text-primary animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Next Gen Digital Studio</span>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        variants={itemVariants} 
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-extrabold tracking-tight text-foreground leading-[1.05] mb-8 [text-wrap:balance]"
                    >
                        We Build Brands.<br />
                        <span className="text-primary relative inline-block">
                            That Dominate.
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
                                className="absolute -bottom-2 left-0 h-2 bg-primary/10 rounded-full -z-10"
                            />
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p 
                        variants={itemVariants}
                        className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-12"
                    >
                        Partner with Zeenox to engineer high-end software ecosystems and cinematic media production. We don't just build, we expand your market authority.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a 
                            href="#contact" 
                            className="group relative inline-flex w-full sm:w-auto items-center justify-center px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 hover:shadow-primary/40 active:scale-95 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Start Your Expansion <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                        </a>
                        <a 
                            href="#showreels" 
                            className="group flex w-full sm:w-auto items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-border bg-card/50 backdrop-blur-md font-bold uppercase tracking-widest text-foreground hover:bg-card hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Play size={14} fill="currentColor" />
                            </div>
                            View Showreels
                        </a>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-20 pt-10 border-t border-border/50 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    >
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest">Enterprise Security</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest">Industrial Speed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest">Premium Quality</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Decorative Objects */}
            <motion.div 
                variants={floatVariants}
                animate="animate"
                className="absolute top-1/3 left-10 hidden xl:block p-4 rounded-3xl bg-card border border-border shadow-2xl backdrop-blur-md opacity-50"
            >
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Zap size={18} />
                    </div>
                    <div className="space-y-1">
                        <div className="h-2 w-16 bg-border rounded-full" />
                        <div className="h-2 w-10 bg-border/50 rounded-full" />
                    </div>
                </div>
            </motion.div>

            <motion.div 
                variants={floatVariants}
                animate="animate"
                transition={{ delay: 1 }}
                className="absolute bottom-1/3 right-10 hidden xl:block p-4 rounded-3xl bg-card border border-border shadow-2xl backdrop-blur-md opacity-50"
            >
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Play size={18} fill="currentColor" />
                    </div>
                    <div className="space-y-1">
                        <div className="h-2 w-20 bg-border rounded-full" />
                        <div className="h-2 w-12 bg-border/50 rounded-full" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
