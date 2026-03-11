import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yCircles = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const rotateShapes = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any,
            }
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-background noise-texture">
            {/* Layered Background with Parallax */}
            <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-dot-grid opacity-30" />
                <motion.div style={{ y: yCircles }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[150px]" />
                <motion.div style={{ y: yCircles, x: "20%" }} className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[120px]" />
            </motion.div>

            {/* Premium Floating Elements with Parallax Rotation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ rotate: rotateShapes, opacity: opacityFade }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
            >
                {/* 3D Social Icons with floating and parallax */}
                <motion.div
                    animate={{ 
                        y: [-15, 15, -15],
                        rotate: [-10, 10, -10]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[10%] w-28 h-28 md:w-40 md:h-40 z-10"
                >
                    <img 
                        src="/images/3d-meta.png" 
                        alt="3D Meta" 
                        className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,129,255,0.4)] mix-blend-screen brightness-110 contrast-110" 
                        style={{ maskImage: "radial-gradient(circle at center, black 50%, transparent 85%)" }}
                    />
                </motion.div>

                <motion.div
                    animate={{ 
                        y: [-20, 20, -20],
                        rotate: [10, -10, 10]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[10%] w-32 h-32 md:w-48 md:h-48 z-10"
                >
                    <img 
                        src="/images/3d-instagram.png" 
                        alt="3D Instagram" 
                        className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(214,41,118,0.5)] mix-blend-screen brightness-110 contrast-110" 
                        style={{ maskImage: "radial-gradient(circle at center, black 50%, transparent 85%)" }}
                    />
                </motion.div>

                <motion.div
                    animate={{ 
                        y: [20, -20, 20],
                        rotate: [-15, 15, -15]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] left-[8%] w-32 h-32 md:w-44 md:h-44 z-10"
                >
                    <img 
                        src="/images/3d-whatsapp.png" 
                        alt="3D WhatsApp" 
                        className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(37,211,102,0.5)] mix-blend-screen brightness-110 contrast-110" 
                        style={{ maskImage: "radial-gradient(circle at center, black 50%, transparent 85%)" }}
                    />
                </motion.div>

                <motion.div
                    animate={{ 
                        y: [-15, 15, -15],
                        rotate: [5, -5, 5]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[60%] right-[5%] w-24 h-24 md:w-36 md:h-36 z-10"
                >
                    <img 
                        src="/images/3d-youtube.png" 
                        alt="3D YouTube" 
                        className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(255,0,0,0.4)] mix-blend-screen brightness-110 contrast-110" 
                        style={{ maskImage: "radial-gradient(circle at center, black 50%, transparent 85%)" }}
                    />
                </motion.div>

                <motion.div
                    animate={{ 
                        rotate: 360,
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] right-[5%] h-64 w-64 rounded-[40px] border border-white/[0.03] rotate-[15deg] backdrop-blur-[1px]"
                />
                <motion.div
                    animate={{ 
                        rotate: -360,
                        x: [0, -30, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] left-[5%] h-48 w-48 rounded-full border border-primary/5 border-dashed"
                />
            </motion.div>

            <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto flex flex-col items-center text-center"
                >
                    <motion.div variants={itemVariants} className="mb-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/5 shadow-2xl">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/80">
                                Available for New Projects
                            </span>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative mb-8">
                        <span className="mb-4 block text-xs font-black uppercase tracking-[0.4em] text-primary/80">
                            ✦ Agency · Production · Automation ✦
                        </span>
                        <h1 className="font-display text-5xl font-extrabold leading-[1] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                            Build Your <br className="hidden sm:block" />
                            <span className="font-serif-accent italic gradient-text">Digital Empire.</span>
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground/80 font-medium">
                        Zeenox is a hybrid digital agency merging high-end media production 
                        with next-gen automation. We don't just create content; we build 
                        scalable revenue engines.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full btn-primary-glow w-full sm:w-auto"
                        >
                            <span className="text-sm font-black uppercase tracking-widest">Start a Project</span>
                            <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" />
                        </a>
                        <a
                            href="#portfolio"
                            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full text-foreground hover:text-primary transition-colors duration-500 w-full sm:w-auto overflow-hidden bg-white/5 border border-white/10 hover:border-primary/20 backdrop-blur-md"
                        >
                            <span className="text-sm font-black uppercase tracking-widest">View Portfolio</span>
                            <Sparkles size={18} className="transition-transform duration-500 group-hover:scale-125" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Refined Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="h-12 w-[1px] bg-gradient-to-b from-primary/50 to-transparent animate-bounce" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 vertical-text py-2">Scroll</span>
            </motion.div>

            <style>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
