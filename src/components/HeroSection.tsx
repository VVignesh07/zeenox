import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yCircles = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

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
        hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] as any,
            }
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#FAFAFA] selection:bg-black/10">
            {/* Ultra-subtle Apple-style Background with Parallax */}
            <motion.div style={{ y: yBackground, opacity: opacityFade }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.015]" />
                <motion.div style={{ y: yCircles }} className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-gray-50/80 to-transparent blur-[100px]" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 pt-32 pb-24">
                <motion.div
                    style={{ y: yText, opacity: opacityFade }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-5xl mx-auto flex flex-col items-center text-center"
                >
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/[0.02] border border-black/[0.05] backdrop-blur-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:bg-black/[0.04]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/70">
                                Available for New Projects
                            </span>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative mb-8">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight text-neutral-900">
                            Architecting <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900">
                                Digital Excellence.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed text-neutral-500 font-medium tracking-tight">
                        Zeenox is a premier digital engineering studio. We craft high-performance 
                        experiences and intelligent automation for elite global brands.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-900 text-white font-medium text-[15px] tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
                        >
                            <span>Start Expansion</span>
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#portfolio"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-neutral-900 font-medium text-[15px] tracking-wide border border-black/[0.08] shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
                        >
                            <span>View Case Studies</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Ultra-minimal Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="h-16 w-[1px] bg-neutral-200 relative overflow-hidden">
                    <motion.div 
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: [0.7, 0, 0.3, 1] as any }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-neutral-800"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
