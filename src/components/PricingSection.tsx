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
            name: "The Classic Engine",
            price: "₹3,999",
            duration: "5-7 Days",
            description: "High-performance business presence with modern aesthetics.",
            features: [
                "Single Page Design",
                "Mobile Responsive",
                "Basic SEO Setup",
                "Contact Form",
                "Social Media Icons",
                "1 Week Support"
            ]
        },
        {
            name: "The Pro Performance",
            price: "₹6,999",
            duration: "10-14 Days",
            recommended: true,
            description: "Full-scale digital ecosystem for growing brands.",
            features: [
                "Up to 5 Pages",
                "Advanced SEO",
                "Dynamic Elements",
                "Speed Optimization",
                "Google Maps Integration",
                "1 Month Support"
            ]
        },
        {
            name: "The Ultra Ecosystem",
            price: "₹9,999",
            duration: "21-30 Days",
            description: "Comprehensive software engineering for market dominance.",
            features: [
                "E-commerce Ready",
                "Admin Dashboard",
                "Custom Animations",
                "Advanced Security",
                "Analytics Integration",
                "3 Months Support"
            ]
        }
    ],
    video: [
        {
            name: "Starter Edit",
            price: "₹4,999",
            duration: "3-5 Days",
            description: "Professional video editing for social impact.",
            features: [
                "1 High-quality Reel",
                "Basic Color Grading",
                "Trend Music Sync",
                "Text Overlays",
                "Sound Design",
                "Standard Revision"
            ]
        },
        {
            name: "Brand Story",
            price: "₹9,999",
            duration: "7-10 Days",
            recommended: true,
            description: "Cinematic storytelling for brand authority.",
            features: [
                "3 Premium Reels",
                "Professional VO",
                "Advanced VFX",
                "Cinematic Grading",
                "Script Support",
                "Social Media Strategy"
            ]
        },
        {
            name: "Market Dominance",
            price: "₹19,999",
            duration: "14-21 Days",
            description: "Industrial-grade media production for market leaders.",
            features: [
                "5-7 Ultra Reels",
                "4K Production Edit",
                "Full Brand Strategy",
                "Custom Assets",
                "Dedicated Team",
                "Priority Revisions"
            ]
        }
    ],
    software: [
        {
            name: "Automation Tool",
            price: "₹4,999",
            duration: "7-10 Days",
            description: "Streamline your operations with custom automation.",
            features: [
                "Process Automation",
                "Basic CRM Tool",
                "Data Entry System",
                "Email Notification",
                "Dashboard Access",
                "Technical Support"
            ]
        },
        {
            name: "Industrial Hub",
            price: "₹9,999",
            duration: "14-21 Days",
            recommended: true,
            description: "Scalable software ecosystems for enterprise growth.",
            features: [
                "Full ERP / CRM",
                "Role-based Access",
                "Inventory Tracking",
                "Payment Gateway",
                "Advanced Reports",
                "Security Shield"
            ]
        },
        {
            name: "Legacy System",
            price: "₹19,999",
            duration: "30-45 Days",
            description: "Custom software innovation for market authority.",
            features: [
                "Multi-platform App",
                "Real-time Data Sync",
                "AI/ML Integration",
                "Cloud Infrastructure",
                "High Availability",
                "Enterprise Support"
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
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <motion.span 
                            className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20"
                        >
                            Exclusive Pricing
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
                            Flexible Plans for <br />
                            <span className="text-primary italic font-serif-accent">Every Growth Stage.</span>
                        </h2>
                    </motion.div>

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
                            className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {packageMap[activeTab].map((pkg, i) => (
                                <motion.div
                                    key={pkg.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative group flex flex-col p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 ${
                                        pkg.recommended ? "border-primary/30 ring-1 ring-primary/20 shadow-xl lg:scale-[1.05] z-10" : ""
                                    }`}
                                >
                                    {pkg.recommended && (
                                        <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                                            Recommended
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
