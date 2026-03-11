import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Check, Star, X } from "lucide-react";

interface Package {
    name: string;
    price: string;
    subtitle: string;
    features: string[];
    notIncluded?: string[];
    recommended?: boolean;
    color: string;
    note?: string;
    badge?: string;
}

const websitePackages: Package[] = [
    {
        name: "Starter Website",
        price: "₹5,000",
        subtitle: "Purpose: Entry level small shops.",
        color: "bg-green-500/10 text-green-500 border-green-500/20",
        badge: "Lead Magnet",
        features: [
            "1 Page (Scrolling Landing Page)",
            "Template-Based Design",
            "Mobile Responsive",
            "Contact Form",
            "WhatsApp Button",
            "Google Map Integration",
            "Basic Hosting Setup Support",
            "1 Revision Only",
            "Delivery in 4–5 Days",
        ],
        notIncluded: [
            "Admin Panel",
            "Custom UI Design",
            "SEO Optimization",
            "Blog / Product Section",
            "Speed Optimization",
            "Multiple Revisions",
            "Content Writing",
            "Domain & Hosting Cost",
            "Payment Gateway",
            "Logo Design",
        ],
    },
    {
        name: "Business Website",
        price: "₹15,000",
        subtitle: "Purpose: Small businesses who want lead generation.",
        recommended: true,
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        badge: "Most Recommended",
        features: [
            "5–6 Pages (Home, About, Services, Contact, etc.)",
            "Basic Admin Panel (Content Edit – 1 Module)",
            "Lead Capture Form",
            "Mobile Responsive",
            "Basic On-Page SEO Setup",
            "Basic Speed Optimization",
            "WhatsApp & Google Map",
            "2 Revisions",
            "15 Days Bug Support",
            "Delivery in 7–10 Days",
            "1 Year Free Domain & Hosting",
            "Payment Gateway Integration",
        ],
        notIncluded: [
            "Advanced Dashboard",
            "Multiple Admin Roles",
            "E-commerce System",
            "Advanced Animations",
            "Custom UI from Scratch",
            "API Integrations",
            "Unlimited Revisions",
            "Ongoing SEO",
            "Content Writing (Extra Cost)",
        ],
    },
    {
        name: "Growth Website",
        price: "₹28,000",
        subtitle: "For businesses that want scalability and control.",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        features: [
            "Dynamic Website",
            "Full Admin Dashboard",
            "Blog / Product Management",
            "Database Integration",
            "Advanced Forms",
            "Basic Security Setup",
            "Speed Optimization",
            "1 Month Technical Support",
            "2–3 Revisions",
            "Delivery in 10–15 Days",
            "1 Year Free Domain & Hosting",
            "Payment Gateway Integration",
        ],
        notIncluded: [
            "Custom Web Application Logic",
            "Complex Reports",
            "Third-Party API Heavy Integration",
            "Custom Animation Development",
            "Lifetime Free Maintenance",
        ],
    },
];

const videoPackages: Package[] = [
    {
        name: "Starter Package",
        price: "₹10,000",
        subtitle: "Small Business",
        color: "bg-green-500/10 text-green-500 border-green-500/20",
        features: [
            "1 Shoot Day",
            "4 Instagram Reels",
            "Basic Video Editing",
            "Reel Posting",
            "Caption Writing",
            "Hashtags",
        ],
    },
    {
        name: "Business Growth",
        price: "₹20,000",
        subtitle: "Most Recommended",
        recommended: true,
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        badge: "MOST POPULAR",
        features: [
            "1 Shoot Day per month",
            "8 Reels",
            "Professional Editing",
            "Color Grading",
            "Reel Posting",
            "Caption + Hashtags",
            "Content Planning",
        ],
    },
    {
        name: "Premium Brand",
        price: "₹45,000",
        subtitle: "Cinematic & Strategy",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        features: [
            "2 Shoot Days",
            "12–15 Reels",
            "Cinematic Editing",
            "Trend Based Reels",
            "Content Strategy",
            "Reel Posting",
            "Caption + Hashtags",
            "Monthly Growth Plan",
        ],
    },
    {
        name: "Real Estate Special",
        price: "₹40,000",
        subtitle: "Construction & Real Estate",
        color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        features: [
            "Property Shoot",
            "10 Reels",
            "Walkthrough Video",
            "Professional Editing",
            "Instagram Handling",
        ],
    },
];

const appPackages: Package[] = [
    {
        name: "Starter App",
        price: "₹18,000",
        subtitle: "Best for MVP or basic business apps.",
        color: "bg-green-500/10 text-green-500 border-green-500/20",
        features: [
            "3–4 Screens",
            "Login / Signup",
            "Basic Dashboard",
            "Firebase Backend",
            "APK File Delivery",
            "1 Revision",
            "Delivery in 15–20 Days",
        ],
    },
    {
        name: "Business App",
        price: "₹35,000",
        subtitle: "For businesses requiring database & admin control.",
        recommended: true,
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        badge: "Profit Engine",
        features: [
            "5–8 Screens",
            "User Login",
            "Web-Based Admin Panel",
            "Database Integration",
            "Push Notifications",
            "API Integration",
            "Basic Play Store Guidance",
            "1 Month Support",
        ],
    },
    {
        name: "Advanced App",
        price: "₹60,000+",
        subtitle: "For scalable & advanced solutions.",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        features: [
            "Role-Based Access",
            "Payment Gateway Integration",
            "Custom Backend",
            "Reports & Analytics",
            "Full Deployment Support",
            "Performance Optimization",
        ],
    },
];


const ecommercePackages: Package[] = [
    {
        name: "Starter E-Commerce",
        price: "₹20,000",
        subtitle: "Best for small brands starting online.",
        color: "bg-green-500/10 text-green-500 border-green-500/20",
        badge: "Entry Level",
        features: [
            "Professional Theme Setup",
            "Up to 30 Products Upload",
            "Category Setup",
            "Cart & Secure Checkout",
            "Payment Gateway Integration",
            "Shipping Setup",
            "Mobile Responsive Design",
            "Basic On-Page SEO",
            "2 Revisions",
            "15 Days Technical Support",
        ],
        notIncluded: [
            "Custom UI Design",
            "Unlimited Products",
            "Advanced Analytics",
            "Marketing Automation",
            "Multi-Vendor System",
            "Ongoing SEO / Ads",
        ],
    },
    {
        name: "Business E-Commerce",
        price: "₹30,000",
        subtitle: "Best for growing brands.",
        recommended: true,
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        badge: "Recommended Plan",
        features: [
            "Custom Homepage Design",
            "Unlimited Product Upload",
            "Admin Dashboard",
            "Order & Customer Management",
            "Coupon / Discount System",
            "Payment & Shipping Integration",
            "Basic Sales Reports",
            "Speed Optimization",
            "1 Month Support",
            "3 Revisions",
        ],
        notIncluded: [
            "ERP Integration",
            "Complex Inventory Automation",
            "Multi-Warehouse System",
            "Custom Mobile App",
        ],
    },
    {
        name: "Advanced E-Commerce",
        price: "Custom Pricing",
        subtitle: "For serious scalable brands.",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        features: [
            "Fully Custom UI/UX",
            "Advanced Admin Panel",
            "Role-Based Access",
            "Detailed Sales Analytics",
            "Performance Optimization",
            "Security Hardening",
            "2 Months Support",
        ],
    },
];

const PricingSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    const [activeTab, setActiveTab] = useState<"video" | "website" | "app" | "ecommerce">("video");

    let packages = videoPackages;
    if (activeTab === "website") packages = websitePackages;
    if (activeTab === "app") packages = appPackages;
    if (activeTab === "ecommerce") packages = ecommercePackages;

    return (
        <section id="pricing" ref={containerRef} className="relative py-32 bg-background overflow-hidden">
            {/* Background elements for depth with Parallax */}
            <motion.div style={{ y: y1 }} className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <motion.div style={{ y: y2 }} className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col items-center text-center"
                >
                    <motion.span 
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
                        className="mb-6 text-[10px] font-black uppercase text-primary/80"
                    >
                        ✦ Transparent Pricing ✦
                    </motion.span>
                    <h2 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                        Investment for <br />
                        <span className="font-serif-accent italic gradient-text">Scale & Success.</span>
                    </h2>
                    <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground/80 leading-relaxed font-medium">
                        High-end digital solutions shouldn't be a mystery. Choose a plan that fuels your business evolution.
                    </p>

                    <div className="mx-auto mt-16 w-full max-w-4xl">
                        {/* Tab Switcher */}
                        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-[2rem] bg-secondary/30 border border-white/5 backdrop-blur-3xl shadow-2xl">
                            {[
                                { key: "video", label: "Video Production" },
                                { key: "website", label: "Websites" },
                                { key: "app", label: "Mobile Apps" },
                                { key: "ecommerce", label: "E-Commerce" },
                            ].map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key as any)}
                                    className={`relative px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all duration-500 overflow-hidden ${activeTab === key
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground/60 hover:text-foreground hover:bg-white/5"
                                        }`}
                                >
                                    {activeTab === key && (
                                        <motion.div
                                            layoutId="activeTabPricing"
                                            className="absolute inset-0 bg-primary shadow-[0_12px_40px_-10px_rgba(172,255,26,0.6)]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{label}</span>
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
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className={`grid gap-8 items-stretch md:grid-cols-2 ${activeTab === 'video' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}
                        >
                            {packages.map((pkg, index) => (
                                <motion.div
                                    key={pkg.name}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 group ${pkg.recommended
                                        ? "bg-gradient-to-br from-primary/10 via-background to-background border-primary shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),0_0_20px_rgba(172,255,26,0.1)] lg:scale-105 z-20"
                                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                                        }`}
                                >
                                    {pkg.recommended && (
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest shadow-[0_8px_30px_rgba(172,255,26,0.5)] flex items-center gap-2 z-30 whitespace-nowrap whitespace-nowrap">
                                            <Star size={12} className="fill-current" />
                                            {pkg.badge || "MOST POPULAR"}
                                        </div>
                                    )}

                                    <div className="mb-10 text-center lg:text-left">
                                        <h3 className="font-display text-2xl font-bold tracking-tight mb-2 min-h-[64px] flex items-end justify-center lg:justify-start">
                                            {pkg.name}
                                        </h3>
                                        <div className="mt-6">
                                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                                <span className={`font-black tracking-tighter text-foreground leading-none ${pkg.price.includes('–') || pkg.price.includes('-') ? 'text-4xl' : 'text-5xl'}`}>
                                                    {pkg.price}
                                                </span>
                                                <span className="text-muted-foreground/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                                                    {pkg.note === 'One Time' ? 'one time setup' : (activeTab === 'video' ? 'per month' : 'per project')}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-sm leading-relaxed text-muted-foreground/80 font-medium min-h-[40px]">
                                            {pkg.subtitle}
                                        </p>
                                    </div>

                                    <div className="space-y-5 mb-10 flex-1">
                                        {pkg.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-4 group/item">
                                                <div className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center text-primary transition-transform duration-300 group-hover/item:scale-110">
                                                    <Check size={12} strokeWidth={4} />
                                                </div>
                                                <span className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground transition-colors">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                                        <div className="pt-8 mt-4 border-t border-white/5">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 mb-6 block">Excluded</span>
                                            <div className="space-y-4 mb-10">
                                                {pkg.notIncluded.slice(0, 5).map((feature, i) => (
                                                    <div key={i} className="flex items-start gap-4 opacity-50 grayscale">
                                                        <div className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center text-muted-foreground">
                                                            <X size={10} strokeWidth={4} />
                                                        </div>
                                                        <span className="text-sm font-medium line-through decoration-white/20">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-auto pt-6">
                                        <a
                                            href="#contact"
                                            className={`relative group/btn inline-flex w-full items-center justify-center h-16 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-300 overflow-hidden ${pkg.recommended
                                                ? "bg-primary text-primary-foreground hover:shadow-[0_10px_30px_rgba(172,255,26,0.3)]"
                                                : "bg-white/5 text-foreground hover:bg-white/10"
                                                }`}
                                        >
                                            <span className="relative z-10">Choose Plan</span>
                                            {pkg.recommended && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                                            )}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Footer Info */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-24 p-1 rounded-[3rem] bg-gradient-to-r from-primary/20 via-transparent to-primary/20"
                    >
                        <div className="rounded-[2.9rem] bg-background p-10 sm:p-14 relative overflow-hidden backdrop-blur-3xl border border-white/5">
                            <div className="grid gap-16 lg:grid-cols-12 items-center">
                                <div className="lg:col-span-4">
                                    <h3 className="font-display text-3xl font-bold mb-6">Need a <span className="gradient-text">Custom</span> Solution?</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                                        For larger enterprises or specialized requirements, we offer custom development tailored to your exact business metrics.
                                    </p>
                                    <a href="#contact" className="inline-flex items-center gap-3 font-black uppercase tracking-widest text-sm text-primary hover:gap-5 transition-all">
                                        Contact our experts <Star size={16} fill="currentColor" />
                                    </a>
                                </div>

                                <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {activeTab === "website" ? (
                                        [
                                            { label: "Domain & Hosting", val: "Market Actuals" },
                                            { label: "Content Support", val: "Premium Copy" },
                                            { label: "SEO Campaign", val: "Quarterly" },
                                            { label: "Security", val: "End-to-End" },
                                            { label: "Maintenance", val: "Monthly" },
                                            { label: "Integration", val: "Pay-as-go" }
                                        ].map((item, i) => (
                                            <div key={i} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all group">
                                                <p className="text-[10px] font-black uppercase text-primary/60 mb-2 group-hover:text-primary transition-colors">{item.label}</p>
                                                <p className="font-bold text-lg">{item.val}</p>
                                            </div>
                                        ))
                                    ) : (
                                        [
                                            { label: "Advance", val: "50%" },
                                            { label: "Pre-Delivery", val: "40%" },
                                            { label: "Final Hook", val: "10%" },
                                            { label: "Support", val: "24/7" },
                                            { label: "Testing", val: "Intense" },
                                            { label: "Release", val: "Global" }
                                        ].map((item, i) => (
                                            <div key={i} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all group">
                                                <p className="text-[10px] font-black uppercase text-primary/60 mb-2 group-hover:text-primary transition-colors">{item.label}</p>
                                                <p className="font-bold text-lg">{item.val}</p>
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
