"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { Database, Briefcase, Globe, ShoppingBag, LayoutTemplate } from "lucide-react";

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

const Card = ({ service, index, progress, range, targetScale }: CardProps) => {
    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, 0.5]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div 
                style={{ scale, opacity, top: `calc(10vh + ${index * 30}px)` }}
                className={`relative w-full max-w-5xl h-[600px] rounded-[2rem] border border-white/10 bg-card overflow-hidden shadow-2xl p-0 md:p-8 flex flex-col md:flex-row gap-8 items-center origin-top bg-gradient-to-br ${service.color}`}
            >
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-4 flex flex-col justify-center h-full z-10 relative">
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 w-fit">
                        <service.icon size={14} className="text-primary" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/80">{service.badge}</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                        {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                        {service.description}
                    </p>

                    <button className="flex items-center gap-2 text-primary font-semibold group w-fit">
                        Explore Solution
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:hidden" />
                </div>
            </motion.div>
        </div>
    );
};

const ServicesScrollSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative bg-background pt-32 pb-32">
            <div className="container mx-auto px-6 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Core Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                        Digital <span className="text-primary font-serif-accent">Ecosystems.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        We build robust, scalable, and premium digital platforms designed to accelerate your business growth.
                    </p>
                </motion.div>
            </div>

            <div className="relative">
                {services.map((service, index) => {
                    const targetScale = 1 - ((services.length - index) * 0.05);
                    return (
                        <Card 
                            key={index} 
                            index={index} 
                            service={service} 
                            progress={scrollYProgress} 
                            range={[index * 0.2, 1]} 
                            targetScale={targetScale} 
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesScrollSection;
