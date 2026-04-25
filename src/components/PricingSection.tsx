import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, MessageCircle, Phone, Calendar, Send, MapPin, Sparkles, Star, Zap, ShieldCheck } from "lucide-react";
import { useState, useRef } from "react";

interface Package {
    name: string;
    price: string;
    description: string;
    features: string[];
    recommended?: boolean;
    duration: string;
}

const packageMap: Record<string, Package[]> = {
    website: [
        {
            name: "Premium Starter",
            price: "₹14,999",
            duration: "10-14 Days",
            description: "High-performance business presence with modern aesthetics.",
            features: [
                "Up to 5 Premium Pages",
                "Responsive Mobile Design",
                "SEO Fundamental Setup",
                "Contact Form Integration",
                "SSL Certificate + Security",
                "1 Month Support"
            ]
        },
        {
            name: "Elite Performance",
            price: "₹29,999",
            duration: "21-30 Days",
            recommended: true,
            description: "Full-scale digital ecosystem for growing brands.",
            features: [
                "Custom Dynamic Website",
                "Advanced SEO Strategy",
                "Content Management System",
                "Speed & Core Web Vitals Fix",
                "Social Media Integration",
                "3 Months Support"
            ]
        },
        {
            name: "Industrial Authority",
            price: "₹59,999",
            duration: "45-60 Days",
            description: "Comprehensive software engineering for market dominance.",
            features: [
                "E-commerce / Web App",
                "Custom Admin Dashboard",
                "Database Integration",
                "API Developments",
                "Ultra-Premium UI/UX",
                "Lifetime Core Support"
            ]
        }
    ],
    video: [
        {
            name: "Cinematic Starter",
            price: "₹19,999",
            duration: "5-7 Days",
            description: "High-end visual storytelling for social media.",
            features: [
                "3 Premium Reels/Shorts",
                "4K Professional Editing",
                "Sound Design & SFX",
                "Color Grading",
                "Trend-focused Content",
                "Subtitles & Motion Graphics"
            ]
        },
        {
            name: "Brand Evolution",
            price: "₹34,999",
            duration: "14-21 Days",
            recommended: true,
            description: "Immersive video production for brand scaling.",
            features: [
                "1 High-end Ad / Showreel",
                "Full Production Support",
                "Scripting & Storyboarding",
                "Advanced VFX & Motion",
                "Multi-platform Delivery",
                "Voiceover Integration"
            ]
        },
        {
            name: "Global Authority",
            price: "₹74,999",
            duration: "30-45 Days",
            description: "Enterprise-grade cinematic media production.",
            features: [
                "Full Brand Documentary / Ad",
                "Master-level VFX/CGI",
                "Professional VO & BGM",
                "Market-ready Strategy",
                "Premium Color Science",
                "Unlimited Revisions"
            ]
        }
    ],
    software: [
        {
            name: "Internal Tools",
            price: "₹24,999",
            duration: "2-3 Weeks",
            description: "Optimize your operations with custom automation.",
            features: [
                "Process Automation",
                "Custom Internal Dashboard",
                "Inventory / Task Tracker",
                "Basic User Auth",
                "Data Visualizations",
                "Mobile Responsive"
            ]
        },
        {
            name: "Enterprise ERP",
            price: "₹49,999",
            duration: "4-6 Weeks",
            recommended: true,
            description: "Robust industrial-grade software ecosystems.",
            features: [
                "Full-scale ERP/CRM",
                "Advanced Admin Control",
                "Role-based Permissions",
                "Payment Integrations",
                "Scalable Architecture",
                "Security & Encryption"
            ]
        },
        {
            name: "Custom Innovation",
            price: "₹99,999",
            duration: "8-12 Weeks",
            description: "Tailored software solutions for market leaders.",
            features: [
                "Machine Learning / AI",
                "Heavy Data Processing",
                "Custom SaaS Infrastructure",
                "Dedicated Server Setup",
                "24/7 Priority Support",
                "Industrial Scalability"
            ]
        }
    ]
};

const PricingSection = () => {
    const [activeTab, setActiveTab] = useState<"website" | "video" | "software">("website");
    const containerRef = useRef(null);

    const tabs = [
        { id: "website", label: "Web/Software", icon: Zap },
        { id: "video", label: "Cinematic Media", icon: Star },
        { id: "software", label: "Enterprise Solutions", icon: ShieldCheck },
    ];

    return (
        <section id="pricing" ref={containerRef} className="relative py-20 md:py-32 bg-background overflow-hidden">
            {/* Background architectural elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <motion.span 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest border border-primary/20"
                        >
                            Industrial Grade Pricing
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
                            Engineered for <br />
                            <span className="text-primary italic font-serif-accent">High-End Performance.</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground text-lg font-medium leading-relaxed">
                            Premium pricing for premium results. We don't just deliver projects; we engineer market authority and cinematic excellence.
                        </p>
                    </motion.div>

                    {/* Industrial Tabs */}
                    <div className="flex justify-center mb-16 md:mb-24">
                        <div className="inline-flex p-1.5 rounded-3xl bg-card border border-border shadow-xl backdrop-blur-md">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`relative px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-500 flex items-center gap-3 ${
                                        activeTab === tab.id
                                            ? "text-white"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="pricingTab"
                                            className="absolute inset-0 bg-primary rounded-2xl shadow-lg shadow-primary/20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-3">
                                        <tab.icon size={16} />
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {packageMap[activeTab].map((pkg, i) => (
                                <motion.div
                                    key={pkg.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative group flex flex-col p-8 sm:p-12 rounded-[2.5rem] bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 ${
                                        pkg.recommended ? "border-primary/30 ring-1 ring-primary/20 shadow-xl lg:scale-[1.05] z-10" : ""
                                    }`}
                                >
                                    {pkg.recommended && (
                                        <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                                            Most Requested
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{pkg.name}</h3>
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground">{pkg.price}</span>
                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">/ Project</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground font-medium leading-relaxed min-h-[40px]">
                                            {pkg.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-10 flex-grow">
                                        {pkg.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-3">
                                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 shrink-0">
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-border/50">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Timeline</span>
                                            <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                                                <Zap size={12} className="text-primary" /> {pkg.duration}
                                            </span>
                                        </div>
                                        <a
                                            href={`https://wa.me/917603917369?text=I'm interested in the ${pkg.name} package for ${activeTab}.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 transition-all duration-300 ${
                                                pkg.recommended 
                                                ? "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95" 
                                                : "bg-foreground/5 text-foreground hover:bg-primary hover:text-white"
                                            }`}
                                        >
                                            Inquire Now <MessageCircle size={14} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
