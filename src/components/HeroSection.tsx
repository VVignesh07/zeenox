"use client";

import { motion, useMotionValue, useTransform, useSpring, useInView, useScroll, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Play, ShieldCheck, Zap, Award, Star, TrendingUp, Users, CheckCircle2, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER — smooth count-up on scroll into view
   ═══════════════════════════════════════════════════════════ */
const AnimatedCounter = ({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const increment = target / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [isInView, target, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

/* ═══════════════════════════════════════════════════════════
   AURORA BACKGROUND — animated northern-lights gradient mesh
   ═══════════════════════════════════════════════════════════ */
const AuroraBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Aurora Layer 1 */}
        <motion.div
            className="absolute -top-[40%] -left-[20%] w-[140%] h-[80%]"
            style={{
                background: "conic-gradient(from 180deg at 50% 50%, hsl(142 72% 45% / 0.12) 0deg, transparent 120deg, hsl(180 60% 40% / 0.08) 240deg, transparent 360deg)",
                filter: "blur(100px)",
            }}
            animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
            }}
            transition={{
                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
        />
        {/* Aurora Layer 2 */}
        <motion.div
            className="absolute -bottom-[30%] -right-[20%] w-[120%] h-[70%]"
            style={{
                background: "conic-gradient(from 0deg at 50% 50%, hsl(160 50% 45% / 0.1) 0deg, transparent 90deg, hsl(142 72% 45% / 0.06) 180deg, transparent 360deg)",
                filter: "blur(120px)",
            }}
            animate={{
                rotate: [360, 0],
                scale: [1.1, 1, 1.1],
            }}
            transition={{
                rotate: { duration: 35, repeat: Infinity, ease: "linear" },
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }}
        />
        {/* Aurora Layer 3 - subtle blue accent */}
        <motion.div
            className="absolute top-[20%] left-[30%] w-[60%] h-[60%]"
            style={{
                background: "radial-gradient(ellipse, hsl(200 70% 50% / 0.04) 0%, transparent 70%)",
                filter: "blur(80px)",
            }}
            animate={{
                x: [-30, 30, -30],
                y: [-20, 20, -20],
                opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
    </div>
);

/* ═══════════════════════════════════════════════════════════
   MORPHING BLOB — organic SVG shape that continuously morphs
   ═══════════════════════════════════════════════════════════ */
const MorphingBlob = ({ className = "", color = "hsl(142 72% 45% / 0.06)", size = 400, duration = 12, delay = 0 }: {
    className?: string; color?: string; size?: number; duration?: number; delay?: number;
}) => {
    const paths = [
        "M44.5,-76.3C56.3,-69.2,63.8,-54.5,71.2,-39.8C78.6,-25.1,85.8,-10.4,84.8,3.8C83.8,18,74.6,31.6,64.3,42.6C54,53.5,42.6,61.8,30.1,68.5C17.5,75.2,3.9,80.3,-10.6,80.1C-25.1,79.9,-40.5,74.4,-52.8,65.1C-65.1,55.8,-74.3,42.7,-79.1,28.1C-83.9,13.4,-84.3,-2.8,-79.8,-17.5C-75.3,-32.2,-65.9,-45.4,-53.6,-52.2C-41.4,-59.1,-26.3,-59.6,-12.1,-61.8C2.1,-64,32.7,-83.4,44.5,-76.3Z",
        "M39.8,-68.8C50.6,-60.8,57.6,-47.5,64.1,-33.8C70.7,-20.1,76.8,-6.1,76.1,7.8C75.4,21.7,68,35.4,58.3,46.1C48.5,56.8,36.5,64.5,23.2,70.5C9.9,76.5,-4.7,80.8,-18.8,78.6C-32.9,76.3,-46.5,67.5,-57.6,56.1C-68.7,44.7,-77.3,30.7,-80.1,15.6C-82.9,0.5,-79.9,-15.7,-73.1,-29.7C-66.3,-43.7,-55.7,-55.5,-43.2,-62.7C-30.7,-69.9,-16.3,-72.5,-0.5,-71.7C15.3,-70.8,29,-76.8,39.8,-68.8Z",
        "M47.1,-80.4C59.8,-72.1,68.1,-56.2,74.5,-40.1C80.9,-24,85.4,-7.7,83.3,7.8C81.2,23.3,72.5,38,61.4,49.8C50.3,61.6,36.8,70.5,22.1,75.7C7.4,80.9,-8.5,82.4,-23.4,78.6C-38.3,74.8,-52.2,65.7,-62.3,53.4C-72.4,41.1,-78.7,25.6,-80.8,9.5C-82.9,-6.6,-80.8,-23.3,-73.3,-37.1C-65.8,-50.9,-52.9,-61.8,-39,-69.5C-25.1,-77.2,-10.2,-81.7,4,-87.2C18.2,-92.7,34.4,-88.7,47.1,-80.4Z",
    ];

    return (
        <motion.div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size }}>
            <svg viewBox="-100 -100 200 200" className="w-full h-full">
                <motion.path
                    d={paths[0]}
                    fill={color}
                    animate={{
                        d: paths,
                    }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay,
                        repeatType: "reverse",
                    }}
                />
            </svg>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════════════════════
   CURSOR SPOTLIGHT — follows mouse with glow effect
   ═══════════════════════════════════════════════════════════ */
const CursorSpotlight = () => {
    const x = useMotionValue(-200);
    const y = useMotionValue(-200);

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, [x, y]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[1] hidden md:block"
            style={{
                x,
                y,
                width: 600,
                height: 600,
                marginLeft: -300,
                marginTop: -300,
                background: "radial-gradient(circle, hsl(142 72% 45% / 0.06) 0%, transparent 60%)",
                filter: "blur(40px)",
            }}
        />
    );
};

/* ═══════════════════════════════════════════════════════════
   GEOMETRIC SHAPES — rotating 3D wireframe elements
   ═══════════════════════════════════════════════════════════ */
const GeometricShape = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
    <motion.div
        className={`absolute pointer-events-none ${className}`}
        style={{ perspective: "800px" }}
    >
        <motion.div
            className="w-16 h-16 border border-primary/[0.08] rounded-xl"
            animate={{
                rotateX: [0, 360],
                rotateY: [0, 180, 360],
                rotateZ: [0, 90, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay,
            }}
        />
    </motion.div>
);

/* ═══════════════════════════════════════════════════════════
   ANIMATED GRADIENT TEXT — color-shifting gradient on text
   ═══════════════════════════════════════════════════════════ */
const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <motion.span
        className={`relative inline-block bg-clip-text text-transparent ${className}`}
        style={{
            backgroundImage: "linear-gradient(90deg, hsl(142 72% 50%), hsl(160 70% 45%), hsl(180 60% 45%), hsl(142 72% 50%))",
            backgroundSize: "300% 100%",
        }}
        animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    >
        {children}
        {/* Shimmer overlay */}
        <motion.span
            className="absolute inset-0 pointer-events-none"
            style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
                mixBlendMode: "overlay",
            }}
            animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />
    </motion.span>
);

/* ═══════════════════════════════════════════════════════════
   MAGNETIC BUTTON — spring-physics cursor-following button
   ═══════════════════════════════════════════════════════════ */
const MagneticButton = ({ children, href, className = "", variant = "primary" }: {
    children: React.ReactNode; href: string; className?: string; variant?: "primary" | "secondary";
}) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    const handleMouse = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - (rect.left + rect.width / 2)) * 0.15);
        y.set((e.clientY - (rect.top + rect.height / 2)) * 0.15);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

    return (
        <motion.a
            ref={ref}
            href={href}
            className={`relative ${className}`}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
        >
            {children}
        </motion.a>
    );
};

/* ═══════════════════════════════════════════════════════════
   PARTICLE FIELD — high-density animated particle system
   Deterministic seeded positions to avoid SSR hydration mismatch
   ═══════════════════════════════════════════════════════════ */
const seededRandom = (seed: number) => {
    const x = Math.sin(seed * 9301 + 49297) * 49297;
    return x - Math.floor(x);
};

const ParticleField = () => {
    const particles = useMemo(() => Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.round(seededRandom(i * 3 + 1) * 10000) / 100,
        y: Math.round(seededRandom(i * 3 + 2) * 10000) / 100,
        size: Math.round((seededRandom(i * 3 + 3) * 2.5 + 0.5) * 100) / 100,
        duration: Math.round((seededRandom(i * 5 + 4) * 5 + 3) * 100) / 100,
        delay: Math.round(seededRandom(i * 5 + 5) * 400) / 100,
        opacity: Math.round((seededRandom(i * 5 + 6) * 0.5 + 0.2) * 100) / 100,
    })), []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-primary"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                    }}
                    animate={{
                        opacity: [0, p.opacity, 0],
                        scale: [0, 1.5, 0],
                        y: [0, -30],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

/* ═══════════════════════════════════════════════════════════
   ANIMATED BORDER CARD — gradient border animation
   ═══════════════════════════════════════════════════════════ */
const GlowCard = ({ children, className = "", delay = 0 }: {
    children: React.ReactNode; className?: string; delay?: number;
}) => (
    <motion.div
        className={`relative group ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    >
        {/* Animated gradient border */}
        <div className="absolute -inset-px rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <motion.div
                className="absolute inset-0"
                style={{
                    background: "conic-gradient(from 0deg, hsl(142 72% 45% / 0.4), transparent, hsl(160 60% 45% / 0.3), transparent, hsl(142 72% 45% / 0.4))",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
        </div>
        {/* Card content */}
        <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden">
            {/* Inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">{children}</div>
        </div>
    </motion.div>
);

/* ═══════════════════════════════════════════════════════════
   TYPING EFFECT — for the subheadline
   ═══════════════════════════════════════════════════════════ */
const TypingWords = () => {
    const words = ["standout content", "brand growth", "web experiences", "smart automation"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <span className="relative inline-block min-w-[200px] text-left">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    className="inline-block text-primary font-bold"
                    initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

/* ═══════════════════════════════════════════════════════════
   FLOATING PROOF CARD — social proof popups
   ═══════════════════════════════════════════════════════════ */
const FloatingProofCard = ({ children, position, floatDuration, floatDelay, entryDelay }: {
    children: React.ReactNode; position: string; floatDuration: number; floatDelay: number; entryDelay: number;
}) => (
    <motion.div
        className={`absolute hidden xl:block ${position}`}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
    >
        <motion.div
            className="p-4 rounded-2xl bg-card/70 border border-white/[0.08] shadow-2xl backdrop-blur-2xl hover:border-white/[0.15] hover:bg-card/90 transition-all duration-500 cursor-default"
            initial={{ opacity: 0, scale: 0.8, x: position.includes("left") ? -40 : 40 }}
            animate={{ opacity: 0.75, scale: 1, x: 0 }}
            whileHover={{ opacity: 1, scale: 1.05, boxShadow: "0 0 40px rgba(var(--primary), 0.1)" }}
            transition={{ delay: entryDelay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    </motion.div>
);

/* ═══════════════════════════════════════════════════════════════
   ██████  HERO SECTION — ULTRA PREMIUM MAIN COMPONENT  ██████
   ═══════════════════════════════════════════════════════════════ */

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => { setIsLoaded(true); }, []);

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            });
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

    /* ── Animation Variants ── */
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 35, filter: "blur(12px)" },
        visible: {
            opacity: 1, y: 0, filter: "blur(0px)",
            transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -60, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1, y: 0, rotateX: 0, scale: 1,
            transition: { duration: 0.9, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] },
        }),
    };

    const headingWords = [
        { text: "We", highlight: false },
        { text: "Build", highlight: false },
        { text: "Brands,", highlight: true },
        { text: "Run", highlight: false },
        { text: "Growth,", highlight: true },
        { text: "and", highlight: false },
        { text: "Automate", highlight: false },
        { text: "the", highlight: false },
        { text: "Rest.", highlight: false },
    ];

    const statsData = [
        { value: 50, suffix: "+", label: "Brands Served", icon: Users, gradient: "from-emerald-500/10 to-emerald-600/5" },
        { value: 200, suffix: "+", label: "Projects Done", icon: CheckCircle2, gradient: "from-teal-500/10 to-teal-600/5" },
        { value: 98, suffix: "%", label: "Client Retention", icon: TrendingUp, gradient: "from-cyan-500/10 to-cyan-600/5" },
        { value: 5, suffix: "★", label: "Avg. Rating", icon: Star, gradient: "from-yellow-500/10 to-amber-600/5" },
    ];

    const services = [
        { label: "Video Editing", icon: Play },
        { label: "Web Development", icon: Zap },
        { label: "SEO & Growth", icon: TrendingUp },
        { label: "Automation", icon: Sparkles },
        { label: "Motion Graphics", icon: Star },
        { label: "Digital Marketing", icon: Award },
    ];

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-28 pb-12 overflow-hidden bg-background"
        >
            {/* ═══════════ BACKGROUND LAYERS ═══════════ */}

            {/* Aurora Northern Lights */}
            <AuroraBackground />

            {/* Morphing Organic Blobs */}
            <MorphingBlob className="top-[-10%] left-[-5%]" size={500} color="hsl(142 72% 45% / 0.05)" duration={14} />
            <MorphingBlob className="bottom-[-15%] right-[-10%]" size={450} color="hsl(160 60% 45% / 0.04)" duration={18} delay={3} />
            <MorphingBlob className="top-[30%] right-[10%]" size={300} color="hsl(180 50% 40% / 0.03)" duration={16} delay={6} />

            {/* Cursor Spotlight */}
            <CursorSpotlight />

            {/* Geometric Wireframes */}
            <GeometricShape className="top-[15%] left-[8%] opacity-30" delay={0} />
            <GeometricShape className="top-[65%] right-[12%] opacity-20" delay={5} />
            <GeometricShape className="bottom-[20%] left-[15%] opacity-15" delay={10} />

            {/* Particle Field */}
            <ParticleField />

            {/* Subtle Grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Radial vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, hsl(224 10% 4% / 0.6) 100%)",
            }} />

            {/* Top & Bottom fade */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none z-[1]" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-[1]" />

            {/* Animated horizontal accent lines */}
            <motion.div
                className="absolute top-[22%] left-0 right-0 h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, hsl(142 72% 45% / 0.08), transparent)" }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 2.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
                className="absolute bottom-[28%] left-0 right-0 h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, hsl(142 72% 45% / 0.06), transparent)" }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 2.5, delay: 2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* ═══════════ MAIN CONTENT ═══════════ */}
            <motion.div
                className="container mx-auto px-6 relative z-10 flex flex-col items-center"
                style={{ y: parallaxY, opacity: parallaxOpacity }}
            >
                <AnimatePresence>
                    {isLoaded && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="max-w-5xl mx-auto text-center"
                        >
                            {/* ── EYEBROW BADGE ── */}
                            <motion.div variants={itemVariants} className="flex justify-center mb-10">
                                <motion.div
                                    className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    {/* Animated border gradient */}
                                    <div className="absolute inset-0 rounded-full p-px">
                                        <motion.div
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                background: "conic-gradient(from 0deg, hsl(142 72% 45% / 0.5), transparent, hsl(142 72% 45% / 0.3), transparent)",
                                            }}
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                    <div className="absolute inset-[1px] rounded-full bg-background/90 backdrop-blur-xl" />
                                    <motion.div
                                        className="relative z-10"
                                        animate={{ rotate: [0, 20, -20, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
                                    >
                                        <Sparkles size={14} className="text-primary" />
                                    </motion.div>
                                    <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/90">
                                        Full-Service Digital Agency
                                    </span>
                                    <motion.div
                                        className="relative z-10 h-1.5 w-1.5 rounded-full bg-primary"
                                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>
                            </motion.div>

                            {/* ── MAIN HEADING — 3D Word-by-Word Reveal ── */}
                            <div className="mb-8" style={{ perspective: "1200px" }}>
                                <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-bold tracking-tight text-foreground leading-[1.06] text-balance">
                                    <span className="sr-only">ZeenOx Digital Agency: We Build Brands, Run Growth, and Automate the Rest</span>
                                    <span aria-hidden="true">
                                        {headingWords.map((word, i) => (
                                            <motion.span
                                                key={i}
                                                custom={i}
                                                variants={letterVariants}
                                                initial="hidden"
                                                animate={isInView ? "visible" : "hidden"}
                                                className={`inline-block mr-[0.28em] ${
                                                    word.highlight ? "font-serif-accent" : ""
                                                }`}
                                                style={{ transformOrigin: "bottom center" }}
                                            >
                                                {word.highlight ? (
                                                    <GradientText>{word.text}</GradientText>
                                                ) : (
                                                    word.text
                                                )}
                                            </motion.span>
                                        ))}
                                    </span>
                                </h1>
                            </div>

                            {/* ── SUBHEADLINE with Typing Effect ── */}
                            <motion.div variants={itemVariants} className="relative mb-14">
                                <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                                    Full-service digital agency delivering{" "}
                                    <TypingWords />{" "}
                                    — video, marketing, web & automation, all under one roof.
                                </p>
                            </motion.div>

                            {/* ── CTA BUTTONS ── */}
                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
                                {/* Primary CTA */}
                                <MagneticButton
                                    href="/#contact"
                                    variant="primary"
                                    className="group flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-[18px] rounded-full bg-primary text-primary-foreground font-bold text-[15px] overflow-hidden shadow-[0_0_40px_-8px_hsl(142_72%_45%_/_0.5)] hover:shadow-[0_0_60px_-5px_hsl(142_72%_45%_/_0.6)] transition-shadow duration-700"
                                >
                                    {/* Animated shine */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg]"
                                        initial={{ x: "-150%" }}
                                        animate={{ x: "250%" }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                                    />
                                    {/* Pulse ring on hover */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-primary/50 opacity-0 group-hover:opacity-100"
                                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                    <span className="relative z-10 flex items-center gap-3">
                                        Start a Project
                                        <motion.span
                                            className="inline-flex"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ArrowRight size={18} strokeWidth={2.5} />
                                        </motion.span>
                                    </span>
                                </MagneticButton>

                                {/* Secondary CTA */}
                                <MagneticButton
                                    href="/#work"
                                    variant="secondary"
                                    className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-[18px] rounded-full overflow-hidden"
                                >
                                    {/* Animated border */}
                                    <div className="absolute inset-0 rounded-full p-px">
                                        <motion.div
                                            className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: "conic-gradient(from 0deg, hsl(142 72% 45% / 0.3), transparent 30%, transparent 70%, hsl(142 72% 45% / 0.3))",
                                            }}
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                    <div className="absolute inset-[1px] rounded-full bg-background/80 backdrop-blur-2xl group-hover:bg-white/[0.06] transition-colors duration-500" />
                                    <span className="relative z-10 flex items-center gap-3 font-bold text-[15px] text-foreground">
                                        <div className="relative">
                                            <Play size={14} fill="currentColor" className="text-primary" />
                                            <motion.div
                                                className="absolute inset-[-4px] rounded-full border border-primary/30"
                                                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </div>
                                        See Our Work
                                    </span>
                                </MagneticButton>
                            </motion.div>

                            {/* ── STATS ROW — with animated gradient borders ── */}
                            <motion.div
                                variants={itemVariants}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-4xl mx-auto mb-16"
                            >
                                {statsData.map((stat, i) => (
                                    <GlowCard key={stat.label} delay={1.2 + i * 0.12}>
                                        <div className="relative text-center p-6 md:p-7">
                                            {/* Accent gradient bg */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-50 rounded-2xl`} />
                                            <div className="relative z-10">
                                                <motion.div
                                                    whileHover={{ rotate: 15, scale: 1.2 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <stat.icon size={18} className="mx-auto mb-3 text-primary/60 group-hover:text-primary transition-colors" />
                                                </motion.div>
                                                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1.5 tracking-tight">
                                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2 + i * 0.3} />
                                                </div>
                                                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/60">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </div>
                                    </GlowCard>
                                ))}
                            </motion.div>

                            {/* ── SERVICES MARQUEE ── */}
                            <motion.div
                                variants={itemVariants}
                                className="relative w-full max-w-4xl mx-auto overflow-hidden mb-14"
                            >
                                {/* Gradient masks */}
                                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                                <div className="flex gap-4 animate-marquee">
                                    {[...services, ...services, ...services].map((service, i) => (
                                        <div
                                            key={`${service.label}-${i}`}
                                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm whitespace-nowrap hover:border-primary/20 hover:bg-primary/[0.04] transition-all duration-500 cursor-default"
                                        >
                                            <service.icon size={13} className="text-primary/60" />
                                            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/50">
                                                {service.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* ── TRUST INDICATORS ── */}
                            <motion.div
                                variants={itemVariants}
                                className="pt-8 border-t border-white/[0.04] flex flex-wrap justify-center gap-8 md:gap-14"
                            >
                                {[
                                    { icon: ShieldCheck, label: "Trusted by 50+ Brands" },
                                    { icon: Zap, label: "Lightning-Fast Delivery" },
                                    { icon: Award, label: "Premium Quality" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        className="flex items-center gap-2.5 group cursor-default"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={isInView ? { opacity: 0.45, y: 0 } : {}}
                                        whileHover={{ opacity: 1, y: -2 }}
                                        transition={{ delay: 2 + i * 0.15, duration: 0.8 }}
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 12, scale: 1.15 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <item.icon size={15} className="text-primary/60 group-hover:text-primary transition-colors duration-300" />
                                        </motion.div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/50 group-hover:text-foreground/90 transition-colors duration-300">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* ═══════════ FLOATING PROOF CARDS ═══════════ */}

            {/* Fast Delivery Card */}
            <FloatingProofCard position="top-[30%] left-6 xl:left-16" floatDuration={6} floatDelay={0} entryDelay={2.2}>
                <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/10">
                        <Zap size={18} className="text-primary" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-foreground/90">Fast Delivery</div>
                        <div className="text-[10px] text-muted-foreground/70 font-medium">48hr turnaround</div>
                    </div>
                </div>
            </FloatingProofCard>

            {/* 5 Star Rating Card */}
            <FloatingProofCard position="top-[52%] right-6 xl:right-16" floatDuration={7} floatDelay={1} entryDelay={2.6}>
                <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-yellow-500/15 to-amber-500/5 flex items-center justify-center border border-yellow-500/10">
                        <Star size={18} className="text-yellow-400" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-foreground/90">5.0 Rating</div>
                        <div className="flex gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 3 + i * 0.1, duration: 0.3 }}
                                >
                                    <Star size={9} fill="currentColor" className="text-yellow-400" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </FloatingProofCard>

            {/* Project Completed Card */}
            <FloatingProofCard position="bottom-[30%] left-6 xl:left-20" floatDuration={5.5} floatDelay={2} entryDelay={3}>
                <div className="flex items-center gap-3">
                    <motion.div
                        className="h-9 w-9 rounded-lg bg-gradient-to-br from-green-500/15 to-emerald-500/5 flex items-center justify-center border border-green-500/10"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                        <CheckCircle2 size={15} className="text-green-400" />
                    </motion.div>
                    <div>
                        <div className="text-[11px] font-bold text-foreground/80">New Project</div>
                        <div className="text-[9px] text-green-400/80 font-semibold">Just completed ✓</div>
                    </div>
                </div>
            </FloatingProofCard>

            {/* ═══════════ SCROLL INDICATOR ═══════════ */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                transition={{ delay: 3.5, duration: 1.5 }}
            >
                <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-muted-foreground/40">Explore</span>
                <motion.div className="w-5 h-8 rounded-full border border-white/[0.08] flex items-start justify-center p-1.5">
                    <motion.div
                        className="w-1 h-1.5 rounded-full bg-primary/50"
                        animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
