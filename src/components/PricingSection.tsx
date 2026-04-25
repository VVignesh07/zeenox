import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Check, X, ArrowRight, Star, Shield, Zap, Sparkles, Trophy } from "lucide-react";

interface Package {
    name: string;
    price: string;
    subtitle: string;
    features: string[];
    notIncluded?: string[];
    recommended?: boolean;
    badge?: string;
    note?: string;
}

const packageMap: Record<string, Package[]> = {
    website: [
        {
            name: "The Classic Engine",
            price: "₹3,999",
            subtitle: "Essential performance for emerging businesses seeking a professional digital storefront.",
            features: [
                "Single Landing Page Architecture",
                "Mobile-First Responsive Engineering",
                "Advanced SEO Foundation",
                "WhatsApp API Integration",
                "Social Media Asset Linking",
                "High-Speed Asset Optimization"
            ],
            notIncluded: [
                "E-commerce Functionality",
                "Custom Dynamic Backend",
                "Premium Domain & Hosting"
            ],
            note: "One Time"
        },
        {
            name: "The Pro Performance",
            price: "₹6,999",
            subtitle: "Advanced multi-page architecture designed for established brands scaling their reach.",
            features: [
                "Multi-Page Brand Ecosystem (5+)",
                "Elite UI/UX Experience",
                "Performance-Grade CMS",
                "Premium Contact & Lead Funnels",
                "Priority SEO Indexing",
                "Enhanced Visual Content"
            ],
            notIncluded: [
                "Full E-commerce Suite",
                "Advanced Database Scaling"
            ],
            recommended: true,
            badge: "HIGH ROI",
            note: "One Time"
        },
        {
            name: "The Ultra Ecosystem",
            price: "₹9,999",
            subtitle: "Uncompromising digital dominance with full-scale E-commerce & industrial-grade design.",
            features: [
                "Full E-commerce Integration",
                "Unlimited Page Architecture",
                "Advanced Product Inventory",
                "Secure Payment Infrastructure",
                "Premium Animation Suite",
                "Lifetime Technical Support"
            ],
            note: "One Time"
        }
    ],
    video: [
        {
            name: "Reel Spark",
            price: "₹4,999",
            subtitle: "High-impact short-form content designed for immediate viral traction.",
            features: [
                "5-7 High-End Social Reels",
                "Viral Hook Engineering",
                "Cinematic Color Grading",
                "Dynamic Captioning",
                "Strategic Sound Design",
                "Weekly Performance Review"
            ],
            note: "Per Month"
        },
        {
            name: "Content Engine",
            price: "₹9,999",
            subtitle: "Sustainable growth architecture with consistent high-volume premium output.",
            features: [
                "10-12 Industrial Reels",
                "2 Cinematic Long-form Edits",
                "Advanced Storyboarding",
                "Trend-Jumping Execution",
                "Custom Graphics & VFX",
                "Full Brand Voice Calibration"
            ],
            recommended: true,
            badge: "BEST VALUE",
            note: "Per Month"
        },
        {
            name: "The Legacy Suite",
            price: "₹19,999",
            subtitle: "Complete digital media takeover for brands demanding total market authority.",
            features: [
                "20-25 High-Frequency Reels",
                "4 Documentary-Style Edits",
                "On-Site Production Strategy",
                "Multi-Platform Distribution",
                "Dedicated Growth Architect",
                "Full Portfolio Management"
            ],
            note: "Per Month"
        }
    ],
    software: [
        {
            name: "Custom Utility",
            price: "₹4,999",
            subtitle: "Focused automation tools to eliminate manual friction and boost efficiency.",
            features: [
                "Core Logic Development",
                "Basic API Integration",
                "Automated Reporting",
                "Cloud Deployment",
                "3 Months Support",
                "Security Hardening"
            ],
            note: "Per Project"
        },
        {
            name: "Full Stack Nexus",
            price: "₹9,999",
            subtitle: "End-to-end software ecosystems designed to manage entire business operations.",
            features: [
                "Custom Dashboard & Admin",
                "Advanced Database (SQL/NoSQL)",
                "Full API Suite Integration",
                "Real-time Data Streams",
                "Role-Based Auth (RBAC)",
                "Enterprise Maintenance"
            ],
            recommended: true,
            badge: "MOST POPULAR",
            note: "Per Project"
        },
        {
            name: "Enterprise Core",
            price: "₹19,999",
            subtitle: "Industrial-grade platforms built for high-concurrency scaling & complex logic.",
            features: [
                "Microservices Architecture",
                "High-Availability Infrastructure",
                "Custom AI/ML Integrations",
                "Deep-Level Data Analytics",
                "Dedicated Server Cluster",
                "24/7 Priority Ops"
            ],
            note: "Per Project"
        }
    ],
    ads: [
        {
            name: "Starter Funnel",
            price: "₹4,999",
            subtitle: "Launch your presence with precision-targeted testing and initial lead generation.",
            features: [
                "Meta Ads Setup & Launch",
                "Lead Funnel Architecture",
                "Creative Asset Design",
                "Daily Budget Optimization",
                "Basic Audience Research",
                "Weekly ROI Reports"
            ],
            note: "Per Month"
        },
        {
            name: "Growth Engine",
            price: "₹9,999",
            subtitle: "Aggressive scaling strategy with advanced retargeting and high-volume lead capture.",
            features: [
                "Meta & Google Omnichannel",
                "Advanced Retargeting Pixel",
                "High-Conversion Ad Copy",
                "Competitor Intelligence",
                "Scale-Ready Infrastructure",
                "Dedicated Ad Manager"
            ],
            recommended: true,
            badge: "ELITE SCALING",
            note: "Per Month"
        },
        {
            name: "Total Authority",
            price: "₹19,999",
            subtitle: "Dominant market presence through saturated ad coverage and premium brand awareness.",
            features: [
                "Total Brand Immersion Ads",
                "Dynamic Remarketing Engine",
                "High-Frequency Creative Refresh",
                "Full Funnel Lifecycle Management",
                "Premium CRM Integration",
                "Bespoke Scaling Strategy"
            ],
            note: "Per Month"
        }
    ]
};

const PricingSection = () => {
    const [activeTab, setActiveTab] = useState("website");
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const packages = packageMap[activeTab];

    return (
        <section id="pricing" ref={containerRef} className="relative py-12 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest">
                        Strategic Investment
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                        Precision Plans. <br />
                        <span className="font-serif-accent italic text-primary">Predictable Scaling.</span>
                    </h2>

                    <div className="mx-auto mt-12 w-full max-w-2xl overflow-x-auto scrollbar-hide">
                        <div className="flex items-center justify-start sm:justify-center p-1 rounded-full bg-foreground/5 border border-border min-w-max">
                            {Object.keys(packageMap).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                                        ? "text-background"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activePricingTab"
                                            className="absolute inset-0 bg-foreground"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                                            style={{ borderRadius: '9999px' }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="mx-auto max-w-7xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap justify-center gap-8"
                        >
                            {packages.map((pkg, index) => (
                                <motion.div
                                    key={pkg.name}
                                    whileHover={{ y: -5 }}
                                    className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm relative flex flex-col p-6 sm:p-10 rounded-[2.5rem] transition-all duration-500 group ${pkg.recommended
                                        ? "bg-card border-2 border-primary shadow-2xl lg:scale-[1.02] z-20"
                                        : "bg-card border border-border shadow-sm hover:shadow-xl"
                                        }`}
                                >
                                    {pkg.recommended && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-foreground text-background text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 z-30 whitespace-nowrap">
                                            <Star size={12} className="fill-current text-yellow-400" />
                                            {pkg.badge || "MOST POPULAR"}
                                        </div>
                                    )}

                                    <div className="mb-10 text-center lg:text-left">
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block ${pkg.recommended ? 'text-primary' : 'text-muted-foreground'}`}>
                                            {pkg.badge || (index === 0 ? "Starter" : "Standard")}
                                        </span>
                                        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                                            {pkg.name}
                                        </h3>
                                        <div className="mt-6">
                                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                                <span className={`font-extrabold tracking-tight text-foreground leading-none ${pkg.price.includes('–') || pkg.price.includes('-') ? 'text-4xl' : 'text-5xl'}`}>
                                                    {pkg.price}
                                                </span>
                                                <span className="text-muted-foreground text-[11px] font-semibold uppercase tracking-widest mt-2">
                                                    {pkg.note === 'One Time' ? 'one time setup' : (activeTab === 'video' ? 'per month' : 'per project')}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground font-medium min-h-[48px]">
                                            {pkg.subtitle}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-12 flex-1 relative z-10">
                                        {pkg.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                <span className="text-[14px] font-medium text-foreground/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                                        <div className="pt-8 mt-auto border-t border-border relative z-10">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-5 block">Not Included</span>
                                            <div className="space-y-4 mb-8">
                                                {pkg.notIncluded.slice(0, 5).map((feature, i) => (
                                                    <div key={i} className="flex items-start gap-4">
                                                        <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center text-muted-foreground/30">
                                                            <X size={12} strokeWidth={3} />
                                                        </div>
                                                        <span className="text-[14px] font-medium text-muted-foreground">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-auto pt-6 relative z-10">
                                        <a
                                            href="#contact"
                                            className={`relative group/btn inline-flex w-full items-center justify-center h-14 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-500 overflow-hidden ${pkg.recommended
                                                ? "bg-primary text-primary-foreground shadow-lg hover:brightness-110 hover:scale-[1.02]"
                                                : "bg-background border border-border text-foreground hover:bg-foreground/5 hover:scale-[1.02]"
                                                }`}
                                        >
                                            <span className="relative z-10">Select Strategy</span>
                                            <ArrowRight size={16} className="ml-2 transition-transform duration-500 group-hover/btn:translate-x-1" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Footer Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-20"
                    >
                        <div className="rounded-[2.5rem] bg-card p-10 sm:p-14 relative overflow-hidden shadow-xl border border-border">
                            <div className="grid gap-12 lg:grid-cols-12 items-center">
                                <div className="lg:col-span-5 relative z-10">
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight text-foreground">Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Custom</span> Solution?</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-8 font-medium text-[15px]">
                                        For larger enterprises or specialized requirements, we offer custom development tailored strictly to your exact performance metrics.
                                    </p>
                                    <a href="#contact" className="inline-flex flex-col items-start gap-1 group">
                                        <span className="font-semibold text-foreground flex items-center gap-2">
                                            Consult our experts <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                        <div className="h-px w-full bg-foreground scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                                    </a>
                                </div>

                                <div className="lg:col-span-7 grid gap-4 grid-cols-2 sm:grid-cols-3 relative z-10">
                                    {activeTab === "website" ? (
                                        [
                                            { label: "Domain & Hosting", val: "Premium" },
                                            { label: "Content", val: "Tailored Copy" },
                                            { label: "SEO Plan", val: "Quarterly" },
                                            { label: "Security", val: "End-to-End" },
                                            { label: "Maintenance", val: "Monthly" },
                                            { label: "Integration", val: "Native APIs" }
                                        ].map((item, i) => (
                                            <div key={i} className="p-5 rounded-2xl bg-foreground/[0.02] border border-border transition-colors hover:bg-card hover:shadow-sm">
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                                                <p className="font-bold text-base text-foreground tracking-tight">{item.val}</p>
                                            </div>
                                        ))
                                    ) : (
                                        [
                                            { label: "Architecture", val: "Scalable" },
                                            { label: "Pre-Delivery", val: "Rigorous CI/CD" },
                                            { label: "Database", val: "Redundant" },
                                            { label: "Support", val: "24/7 Priority" },
                                            { label: "Testing", val: "End-to-End" },
                                            { label: "Release", val: "Global" }
                                        ].map((item, i) => (
                                            <div key={i} className="p-5 rounded-2xl bg-foreground/[0.02] border border-border transition-colors hover:bg-card hover:shadow-sm">
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                                                <p className="font-bold text-base text-foreground tracking-tight">{item.val}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
