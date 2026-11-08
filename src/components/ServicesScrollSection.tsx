"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Database, Briefcase, Globe, ShoppingBag, LayoutTemplate, ArrowRight } from "lucide-react";

const services = [
    {
        title: "CRM & Automation",
        description: "Streamline operations with smart, automated workflows and powerful CRM integrations.",
        icon: Database,
        image: "/images/services/crm.jpg",
        color: "from-blue-500/10 to-blue-600/5",
        badge: "Internal Operations",
    },
    {
        title: "Corporate Website",
        description: "Enterprise-grade websites built for scale, security, and premium brand positioning.",
        icon: Briefcase,
        image: "/images/services/corporate.jpg",
        color: "from-emerald-500/10 to-emerald-600/5",
        badge: "Brand Identity",
    },
    {
        title: "Commercial Website",
        description: "High-conversion web platforms designed specifically to drive sales and generate leads.",
        icon: Globe,
        image: "/images/services/commercial.jpg",
        color: "from-purple-500/10 to-purple-600/5",
        badge: "Lead Generation",
    },
    {
        title: "Shopify E-commerce",
        description: "Custom e-commerce experiences optimized for high conversion rates and seamless shopping.",
        icon: ShoppingBag,
        image: "/images/services/shopify.jpg",
        color: "from-green-500/10 to-green-600/5",
        badge: "Direct Sales",
    },
    {
        title: "WordPress CMS",
        description: "Flexible, fast, and scalable content management systems tailored to your business needs.",
        icon: LayoutTemplate,
        image: "/images/services/wordpress.jpg",
        color: "from-sky-500/10 to-sky-600/5",
        badge: "Content Mastery",
    },
];

interface CardProps {
    service: typeof services[0];
    index: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const DesktopCard = ({ service, index, progress, range, targetScale }: CardProps) => {
    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, 0.5]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div 
                style={{ scale, opacity, top: `calc(10vh + ${index * 30}px)` }}
                className={`relative w-full max-w-5xl h-[560px] rounded-[2.5rem] border border-white/10 bg-card overflow-hidden shadow-2xl p-8 flex flex-row gap-8 items-center origin-top bg-gradient-to-br ${service.color}`}
            >
                {/* Content Side */}
                <div className="w-1/2 p-4 flex flex-col justify-center h-full z-10 relative">
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 w-fit">
                        <service.icon size={14} className="text-primary" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/80">{service.badge}</span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                        {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                        {service.description}
                    </p>

                    <Link href="/#contact" className="flex items-center gap-2 text-primary font-semibold group w-fit hover:opacity-80 transition-opacity">
                        Explore Solution
                        <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                </div>

                {/* Image Side */}
                <div className="w-1/2 h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </motion.div>
        </div>
    );
};

const MobileCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className={`relative rounded-3xl border border-white/10 bg-card overflow-hidden shadow-xl p-5 sm:p-7 flex flex-col gap-5 bg-gradient-to-br ${service.color}`}
        >
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-md">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md">
                    <service.icon size={12} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">{service.badge}</span>
                </div>
            </div>

            <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-foreground mb-2.5 tracking-tight">
                    {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                </p>
                <Link 
                    href="/#contact" 
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold group w-fit"
                >
                    Explore Solution
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

const ServicesScrollSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative bg-background py-16 sm:py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 sm:mb-6">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-primary">Core Expertise</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
                        Digital <span className="text-primary font-serif-accent">Ecosystems.</span>
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                        We build robust, scalable, and premium digital platforms designed to accelerate your business growth.
                    </p>
                </motion.div>
            </div>

            {/* Desktop Sticky Scroll Stacking */}
            <div className="hidden md:block relative">
                {services.map((service, index) => {
                    const targetScale = 1 - ((services.length - index) * 0.05);
                    return (
                        <DesktopCard 
                            key={`desktop-${index}`} 
                            index={index} 
                            service={service} 
                            progress={scrollYProgress} 
                            range={[index * 0.2, 1]} 
                            targetScale={targetScale} 
                        />
                    );
                })}
            </div>

            {/* Mobile Responsive Stack */}
            <div className="md:hidden container mx-auto px-4 flex flex-col gap-6">
                {services.map((service, index) => (
                    <MobileCard key={`mobile-${index}`} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ServicesScrollSection;
