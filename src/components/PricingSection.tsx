import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const videoPackages: Package[] = [
    {
        name: "Basic Reel Package",
        price: "₹6,000",
        subtitle: "Best for small shops & Instagram beginners.",
        color: "bg-green-500/10 text-green-500 border-green-500/20",
        features: [
            "1–2 Hours Shoot",
            "2 Reels",
            "Basic Editing",
            "Captions & Background Music",
            "1 Revision",
            "Delivery: 3–4 Days",
        ],
    },
    {
        name: "Standard Content",
        price: "₹12,000",
        subtitle: "Professional reels to boost engagement.",
        recommended: true,
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        badge: "Most Recommended",
        features: [
            "3–4 Hours Shoot",
            "4 Reels",
            "Trend-Based Editing & Color Grading",
            "Hook Text Animation",
            "Thumbnail Design",
            "2 Revisions",
            "Delivery: 4–5 Days",
        ],
    },
    {
        name: "Monthly Content",
        price: "₹25,000",
        subtitle: "Best for serious businesses.",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        badge: "Scalable Model",
        features: [
            "1 Full Day Shoot",
            "8 Reels",
            "Content Planning & Caption Writing",
            "Basic Hashtag Strategy",
            "Performance Suggestions",
            "2 Revisions per Reel",
            "Weekly posting schedule",
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
    const [activeTab, setActiveTab] = useState<"website" | "app" | "video" | "ecommerce">("website");

    let packages = websitePackages;
    if (activeTab === "app") packages = appPackages;
    if (activeTab === "video") packages = videoPackages;
    if (activeTab === "ecommerce") packages = ecommercePackages;

    return (
        <section id="pricing" className="relative py-28 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                        ✦ Pricing Packages
                    </span>
                    <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                        Choose Your <span className="font-serif-accent gradient-text">Growth</span> Plan
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
                        We build conversion-focused, scalable, and tailored digital solutions for your business.
                    </p>

                    {/* Mobile: 2x2 grid | Desktop: pill row */}
                    <div className="mx-auto mt-10 w-full max-w-md sm:max-w-none sm:w-auto">
                        {/* Mobile grid */}
                        <div className="grid grid-cols-2 gap-3 sm:hidden">
                            {[
                                { key: "website", icon: "🌐", label: "Website" },
                                { key: "app", icon: "📱", label: "Mobile App" },
                                { key: "video", icon: "🎬", label: "Video Content" },
                                { key: "ecommerce", icon: "🛒", label: "E-Commerce" },
                            ].map(({ key, icon, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key as "website" | "app" | "video" | "ecommerce")}
                                    className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl border px-4 py-4 text-sm font-semibold transition-all duration-300 ${activeTab === key
                                            ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                            : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                                        }`}
                                >
                                    <span className="text-xl">{icon}</span>
                                    <span className="text-xs font-medium">{label}</span>
                                </button>
                            ))}
                        </div>
                        {/* Desktop pill row */}
                        <div className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/30 p-1.5 backdrop-blur-md">
                            <button
                                onClick={() => setActiveTab("website")}
                                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeTab === "website" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                Website Packages
                            </button>
                            <button
                                onClick={() => setActiveTab("app")}
                                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeTab === "app" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                Mobile App Packages
                            </button>
                            <button
                                onClick={() => setActiveTab("video")}
                                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeTab === "video" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                Video Content
                            </button>
                            <button
                                onClick={() => setActiveTab("ecommerce")}
                                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeTab === "ecommerce" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                E-Commerce
                            </button>
                        </div>
                    </div>
                </motion.div>

                <div className="mx-auto mt-16 max-w-7xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="grid gap-8 lg:grid-cols-3"
                        >
                            {packages.map((pkg, index) => (
                                <motion.div
                                    key={pkg.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-sm transition-all duration-300 ${pkg.recommended
                                        ? "border-primary glow-border bg-primary/5 shadow-[0_0_40px_-15px_rgba(255,255,255,0.2)] md:scale-105 z-10"
                                        : "border-border bg-card/60 hover:bg-card/80 hover:border-border/80"
                                        }`}
                                >
                                    {pkg.recommended && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg flex items-center gap-1.5">
                                            <Star size={14} className="fill-current" />
                                            {pkg.badge || "Recommended"}
                                        </div>
                                    )}
                                    {!pkg.recommended && pkg.badge && (
                                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider border bg-background shadow-sm ${pkg.color}`}>
                                            {pkg.badge}
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                                        <div className="mt-4 flex items-baseline gap-2">
                                            <span className="text-4xl font-bold tracking-tight text-foreground">{pkg.price}</span>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground min-h-[40px]">
                                            {pkg.subtitle}
                                        </p>
                                    </div>

                                    <hr className="mb-6 border-border" />

                                    <ul className={`mb-6 flex flex-col gap-4 ${!pkg.notIncluded || pkg.notIncluded.length === 0 ? "flex-1" : ""}`}>
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-0.5 shrink-0 rounded-full bg-primary/20 p-1 text-primary">
                                                    <Check size={12} className="stroke-[3]" />
                                                </div>
                                                <span className="text-sm text-foreground/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                                        <>
                                            <hr className="mb-6 border-border" />
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Not Included</h4>
                                            <ul className="mb-10 flex flex-1 flex-col gap-4 opacity-75">
                                                {pkg.notIncluded.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="mt-0.5 shrink-0 rounded-full bg-destructive/10 p-1 text-destructive">
                                                            <X size={12} className="stroke-[3]" />
                                                        </div>
                                                        <span className="text-sm text-foreground/70 line-through decoration-foreground/20">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    <div className="mt-auto flex flex-col gap-3">
                                        {pkg.note && (
                                            <p className="text-xs text-muted-foreground/80 italic text-center">
                                                Note: {pkg.note}
                                            </p>
                                        )}
                                        <a
                                            href="#contact"
                                            className={`inline-flex w-full items-center justify-center rounded-xl p-4 text-sm font-semibold transition-all duration-300 ${pkg.recommended
                                                ? "bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                                }`}
                                        >
                                            Choose {pkg.name.split(" ")[0]}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Additional Info section showing combo/maintenance/separate shoots depending on active tab */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center sm:p-12 relative overflow-hidden glass"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Star size={200} className="fill-current text-primary" />
                        </div>

                        <div className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3 text-left">
                            {activeTab === "video" ? (
                                <>
                                    <div className="col-span-1 lg:col-span-1">
                                        <h3 className="font-display text-2xl font-bold mb-4">Combo Offer 🔥</h3>
                                        <div className="rounded-xl border border-primary/30 bg-primary/10 p-5 mt-4">
                                            <p className="font-bold text-lg">Website + Content</p>
                                            <p className="text-3xl font-bold text-primary mt-2 flex items-center gap-2">₹22,000 <span className="text-sm line-through text-muted-foreground">₹27,000</span></p>
                                            <p className="text-sm text-muted-foreground mt-3">Business Website + Standard Reels Content Package.</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 lg:col-span-2">
                                        <h3 className="font-display text-2xl font-bold mb-4">Separate Charges</h3>
                                        <p className="text-sm text-muted-foreground mb-6">If you have custom requirements or just need specific services.</p>
                                        <div className="grid gap-6 sm:grid-cols-3">
                                            <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Half Day Shoot</p>
                                                <p className="text-xl font-bold">₹7,000</p>
                                            </div>
                                            <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Full Day Shoot</p>
                                                <p className="text-xl font-bold">₹15,000</p>
                                            </div>
                                            <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Editing Only</p>
                                                <p className="text-xl font-bold">₹1,500 <span className="text-xs text-muted-foreground font-normal">/reel</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : activeTab === "website" ? (
                                <>
                                    <div className="col-span-1 lg:col-span-3">
                                        <h3 className="font-display text-2xl font-bold mb-4 text-primary">Extra Charges <span className="text-muted-foreground text-lg font-normal">(Very Important)</span></h3>
                                        <p className="text-sm text-muted-foreground mb-6">These must always be separate based on actuals or specific requirements.</p>
                                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                                            {[
                                                { label: "Domain Cost", price: "Actual Price" },
                                                { label: "Hosting", price: "Actual Price" },
                                                { label: "Content Writing", price: "₹2,000 – ₹5,000" },
                                                { label: "Logo Design", price: "₹3,000+" },
                                                { label: "Payment Gateway", price: "₹5,000+" },
                                                { label: "Extra Revision", price: "₹1,000 / change" },
                                                { label: "Maintenance", price: "₹2,000 / month" },
                                            ].map((extra, i) => (
                                                <div key={i} className="rounded-xl border border-border/50 bg-background/50 p-4 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                                                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 relative z-10">{extra.label}</p>
                                                    <p className="text-lg font-bold relative z-10">{extra.price}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-span-1 lg:col-span-2">
                                        <h3 className="font-display text-2xl font-bold mb-4">Maintenance & Support</h3>
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <p className="font-semibold text-primary mb-1">Website Maintenance</p>
                                                <p className="text-2xl font-bold">₹1,500 - ₹3,000 <span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-primary mb-1">App Maintenance</p>
                                                <p className="text-2xl font-bold">₹2,500 - ₹5,000 <span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex flex-wrap gap-4">
                                            {["Bug Fixes", "Minor Updates", "Server Monitoring"].map(item => (
                                                <span key={item} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full border border-border/50">
                                                    <Check size={14} className="text-primary" /> {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm">
                                        <h3 className="font-display text-lg font-bold mb-4">Payment Terms</h3>
                                        <ul className="space-y-3 relative">
                                            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/80" />
                                            {[
                                                { percent: "50%", text: "Advance" },
                                                { percent: "40%", text: "Before Delivery" },
                                                { percent: "10%", text: "After Final Testing" }
                                            ].map((term, i) => (
                                                <li key={i} className="flex items-center gap-4 relative z-10">
                                                    <div className="w-3.5 h-3.5 rounded-full bg-primary/20 border-2 border-primary shrink-0" />
                                                    <span className="font-bold text-lg min-w-[3rem] text-primary">{term.percent}</span>
                                                    <span className="text-sm text-muted-foreground">{term.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
