import { motion, useScroll, useTransform } from "framer-motion";
import { Film, Globe, BarChart3, PenTool } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // 3D Parallax Transforms
    const yHeading = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const zDepth = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Floating Elements Parallax
    const floatY1 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const floatY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    const floatRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, rotateX: -10 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as any,
            }
        }
    };

    const features = [
        {
            icon: <Film className="text-primary" size={24} />,
            title: "Reels & Video",
            desc: "High-converting content that gets attention."
        },
        {
            icon: <Globe className="text-primary" size={24} />,
            title: "Websites",
            desc: "Modern, fast & responsive websites that convert."
        },
        {
            icon: <BarChart3 className="text-primary" size={24} />,
            title: "CRM & Automation",
            desc: "Smart systems to automate & scale your business."
        },
        {
            icon: <PenTool className="text-primary" size={24} />,
            title: "Branding",
            desc: "Strong identity that builds trust & recognition."
        }
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-between pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-background [perspective:1200px]">
            {/* 3D Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div 
                    style={{ y: floatY1, rotate: floatRotate }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-[4rem] blur-3xl opacity-50"
                />
                <motion.div 
                    style={{ y: floatY2, rotate: -floatRotate }}
                    className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] opacity-30"
                />
                {/* Decorative 3D lines */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--border)_1px,transparent_1px)] [background-size:100px_100px] opacity-20" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 flex-1 flex flex-col items-center justify-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ y: yHeading, rotateX, z: zDepth, opacity: opacityFade }}
                    className="max-w-6xl mx-auto flex flex-col items-center text-center transition-all duration-300 ease-out"
                >
                    {/* Main Heading */}
                    <motion.h1 
                        variants={itemVariants} 
                        className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-10 [text-wrap:balance]"
                    >
                        We Build Brands.<br />
                        <span className="text-primary relative inline-block">
                            We Drive Results.
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1, duration: 1 }}
                                className="absolute -bottom-2 left-0 h-1 bg-primary/20 rounded-full"
                            />
                        </span>
                    </motion.h1>

                    {/* Z Divider */}
                    <motion.div variants={itemVariants} className="flex items-center gap-5 mb-10 w-full max-w-[280px]">
                        <div className="h-[1px] flex-1 bg-border/60" />
                        <span className="text-xl font-black text-primary tracking-tighter opacity-80">Z</span>
                        <div className="h-[1px] flex-1 bg-border/60" />
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div variants={itemVariants} className="max-w-3xl px-4">
                        <p className="text-base md:text-lg lg:text-xl text-muted-foreground/90 leading-relaxed font-medium">
                            Zeenox is a digital engineering studio helping businesses grow with<br className="hidden md:block" />
                            <span className="relative inline-block font-bold text-foreground mx-1">
                                powerful content,
                                <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-primary/40" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                                    <path d="M1 5.5C40.5 2.5 120.5 1.5 199 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>{" "}
                            <span className="font-bold text-foreground">smart websites & intelligent automation.</span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Feature Grid - Positioned at bottom */}
            <div className="container relative z-10 mx-auto px-6 md:px-12 mt-20">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 w-full max-w-7xl mx-auto"
                >
                    {features.map((feature, i) => (
                        <motion.div key={i} variants={itemVariants} className="relative flex flex-col items-center px-4 md:px-8 group">
                            {/* Vertical Divider (Desktop) */}
                            {i !== 0 && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border hidden lg:block opacity-50" />}
                            
                            <div className="h-14 w-14 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-500 group-hover:shadow-md group-hover:border-primary/20">
                                {feature.icon}
                            </div>
                            <h3 className="text-[15px] font-bold text-foreground mb-1.5">{feature.title}</h3>
                            <p className="text-[12px] text-muted-foreground/80 leading-relaxed max-w-[180px] text-center">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA Text */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[15px] md:text-base font-semibold tracking-tight">
                        <span className="text-muted-foreground">Let's build. Let's grow.</span>{" "}
                        <span className="relative inline-block font-bold text-primary ml-1 group cursor-pointer">
                            Together.
                            <svg className="absolute -bottom-1 left-0 w-full h-1 text-primary transition-transform duration-300 group-hover:scale-x-110" viewBox="0 0 100 6" fill="none" preserveAspectRatio="none">
                                <path d="M1 4.5C20.5 1.5 60.5 1.5 99 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
