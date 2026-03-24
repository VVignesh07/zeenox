import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Check, Star, X, ArrowRight } from "lucide-react";

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
        color: "bg-primary/10 text-primary border-primary/20",
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
        color: "bg-primary/10 text-primary border-primary/20",
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
        color: "bg-primary/10 text-primary border-primary/20",
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
        color: "bg-primary/10 text-primary border-primary/20",
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
        <section id="pricing" ref={containerRef} className="relative py-32 bg-[#FAFAFA] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                    className="mb-20 flex flex-col items-center text-center"
                >
                    <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-black/[0.06] bg-white text-neutral-600 text-[11px] font-semibold uppercase tracking-widest shadow-sm">
                        Transparent Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                        Investment for <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-500 to-neutral-800">
                            Scale & Success.
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-[17px] text-neutral-500 leading-relaxed font-medium tracking-tight">
                        High-end digital solutions shouldn't be a mystery. Choose a plan that fuels your business evolution.
                    </p>

                    <div className="mx-auto mt-14 w-full max-w-4xl">
                        {/* Tab Switcher */}
                        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-black/[0.04] border border-black/[0.03] backdrop-blur-md">
                            {[
                                { key: "video", label: "Video Production" },
                                { key: "website", label: "Websites" },
                                { key: "app", label: "Mobile Apps" },
                                { key: "ecommerce", label: "E-Commerce" },
                            ].map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key as any)}
                                    className={`relative px-6 py-2.5 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-300 ${activeTab === key
                                        ? "text-neutral-900"
                                        : "text-neutral-500 hover:text-neutral-800"
                                        }`}
                                >
                                    {activeTab === key && (
                                        <motion.div
                                            layoutId="activeTabPricing"
                                            className="absolute inset-0 bg-white shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-black/[0.04]"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                                            style={{ borderRadius: '9999px' }}
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
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                            className={`grid gap-8 items-stretch md:grid-cols-2 ${activeTab === 'video' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}
                        >
                            {packages.map((pkg, index) => (
                                <motion.div
                                    key={pkg.name}
                                    whileHover={{ y: -5 }}
                                    className={`relative flex flex-col p-10 rounded-[2rem] transition-all duration-500 group ${pkg.recommended
                                        ? "bg-white border border-black/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] lg:scale-[1.02] z-20"
                                        : "bg-white border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
                                        }`}
                                >
                                    {pkg.recommended && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 z-30 whitespace-nowrap">
                                            <Star size={12} className="fill-current text-yellow-400" />
                                            {pkg.badge || "MOST POPULAR"}
                                        </div>
                                    )}

                                    <div className="mb-10 text-center lg:text-left">
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block ${pkg.recommended ? 'text-neutral-900' : 'text-neutral-400'}`}>
                                            {pkg.badge || (index === 0 ? "Starter" : "Standard")}
                                        </span>
                                        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-2">
                                            {pkg.name}
                                        </h3>
                                        <div className="mt-6">
                                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                                <span className={`font-extrabold tracking-tight text-neutral-900 leading-none ${pkg.price.includes('–') || pkg.price.includes('-') ? 'text-4xl' : 'text-5xl'}`}>
                                                    {pkg.price}
                                                </span>
                                                <span className="text-neutral-400 text-[11px] font-semibold uppercase tracking-widest mt-2">
                                                    {pkg.note === 'One Time' ? 'one time setup' : (activeTab === 'video' ? 'per month' : 'per project')}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-[14px] leading-relaxed text-neutral-500 font-medium min-h-[48px]">
                                            {pkg.subtitle}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-12 flex-1 relative z-10">
                                        {pkg.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                <span className="text-[14px] font-medium text-neutral-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                                        <div className="pt-8 mt-auto border-t border-black/[0.04] relative z-10">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-5 block">Not Included</span>
                                            <div className="space-y-4 mb-8">
                                                {pkg.notIncluded.slice(0, 5).map((feature, i) => (
                                                    <div key={i} className="flex items-start gap-4">
                                                        <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center text-neutral-300">
                                                            <X size={12} strokeWidth={3} />
                                                        </div>
                                                        <span className="text-[14px] font-medium text-neutral-400">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-auto pt-6 relative z-10">
                                        <a
                                            href="#contact"
                                            className={`relative group/btn inline-flex w-full items-center justify-center h-14 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-500 overflow-hidden ${pkg.recommended
                                                ? "bg-neutral-900 text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:bg-black hover:scale-[1.02]"
                                                : "bg-[#FAFAFA] border border-black/[0.04] text-neutral-900 hover:bg-neutral-100 hover:scale-[1.02]"
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
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                        className="mt-20"
                    >
                        <div className="rounded-[2.5rem] bg-white p-10 sm:p-14 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.04]">
                            <div className="grid gap-12 lg:grid-cols-12 items-center">
                                <div className="lg:col-span-5 relative z-10">
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight text-neutral-900">Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-800">Custom</span> Solution?</h3>
                                    <p className="text-neutral-500 leading-relaxed mb-8 font-medium text-[15px]">
                                        For larger enterprises or specialized requirements, we offer custom development tailored strictly to your exact performance metrics.
                                    </p>
                                    <a href="#contact" className="inline-flex flex-col items-start gap-1 group">
                                        <span className="font-semibold text-neutral-900 flex items-center gap-2">
                                            Consult our experts <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                        <div className="h-px w-full bg-neutral-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
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
                                            <div key={i} className="p-5 rounded-2xl bg-[#FAFAFA] border border-black/[0.04] transition-colors hover:bg-white hover:shadow-sm">
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1">{item.label}</p>
                                                <p className="font-bold text-base text-neutral-900 tracking-tight">{item.val}</p>
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
                                            <div key={i} className="p-5 rounded-2xl bg-[#FAFAFA] border border-black/[0.04] transition-colors hover:bg-white hover:shadow-sm">
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1">{item.label}</p>
                                                <p className="font-bold text-base text-neutral-900 tracking-tight">{item.val}</p>
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
