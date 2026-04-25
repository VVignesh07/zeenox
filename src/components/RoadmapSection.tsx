import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Server, Laptop, Rocket, Settings, Sparkles, CheckCircle2, ChevronRight, Zap, Target, PenTool, Camera, Film, TrendingUp, Users, Presentation, LineChart, PlayCircle } from "lucide-react";

const RoadmapSection = () => {
    const [activeTab, setActiveTab] = useState<"software" | "video">("software");

    return (
        <section id="roadmap" className="relative py-12 md:py-32 overflow-hidden bg-background">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                    className="mb-16 text-center"
                >
                    <span className="mb-6 inline-block px-4 py-1.5 rounded-full border border-border bg-card text-muted-foreground text-[11px] font-semibold uppercase tracking-widest shadow-sm">
                        Process Architect
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
                        Our Execution <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground">Roadmap.</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-[17px] text-muted-foreground leading-relaxed font-medium tracking-tight">
                        A structured, transparent path designed to engineer explosive growth and high-performance digital presence.
                    </p>

                    <div className="mx-auto mt-14 w-full max-w-sm">
                        <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-black/[0.04] border border-black/[0.03] backdrop-blur-md w-full">
                            {[
                                { key: "software", label: "Software Engineering" },
                                { key: "video", label: "Video Production" },
                            ].map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key as any)}
                                    className={`relative flex-1 py-2.5 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-300 ${activeTab === key
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {activeTab === key && (
                                        <motion.div
                                            layoutId="activeRoadmapTab"
                                            className="absolute inset-0 bg-card shadow-sm border border-border"
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

                <div className="relative max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                        >
                            {activeTab === "software" ? <SoftwareRoadmap /> : <VideoRoadmap />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const SoftwareRoadmap = () => (
    <div className="space-y-12 lg:space-y-0">
        <div className="hidden lg:block relative">
            <div className="flex justify-center mb-16 relative">
                <PhaseHeader title="Phase 1: Planning" color="bg-foreground" />
            </div>

            <svg className="absolute top-[38px] left-1/2 -translate-x-1/2 w-[600px] h-[80px] pointer-events-none overflow-visible" viewBox="0 0 1000 80" preserveAspectRatio="none">
                <path d="M500 0V40H250V80M500 40H750V80" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" className="text-foreground opacity-10" />
            </svg>

            <div className="grid grid-cols-2 gap-24 items-start pt-8">
                <div className="relative">
                    <div className="flex justify-center mb-12">
                        <PhaseHeader title="Phase 2: Platform Selection" color="bg-muted-foreground" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 relative">
                        <RoadmapCard number="1" icon={<Globe className="text-foreground" size={20} />} title="Choose Domain" items={["GoDaddy", "Hostinger", "Namecheap"]} />
                        <RoadmapCard number="2" icon={<Server className="text-foreground" size={20} />} title="Choose Hosting" items={["Hostinger", "Bluehost", "Namecheap"]} />
                        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-px h-24 bg-border" />
                    </div>
                </div>

                <div className="relative">
                    <div className="flex justify-center mb-12">
                        <PhaseHeader title="Phase 3: Setup" color="bg-muted-foreground" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 relative">
                        <RoadmapCard number="3" icon={<Settings className="text-foreground" size={20} />} title="Server Config" items={["SSL Setup", "E-mail Config", "CDN Integration"]} />
                        <RoadmapCard number="4" icon={<Zap className="text-foreground" size={20} />} title="Choose Plan" items={["Classic", "Pro", "Ultra"]} />
                        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-px h-24 bg-border" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-24 mt-24">
                <Phase4CardLeft
                    iconBg={<Laptop size={120} />}
                    title="Build Your Website"
                    step1={{ icon: <Laptop size={24} className="text-foreground" />, label: "Setup Site" }}
                    step2={{ icon: <Sparkles size={24} className="text-foreground" />, label: "Customize" }}
                />
                <Phase4CardRight
                    iconBg={<Rocket size={120} />}
                    title="Launch & Optimize"
                    step1={{
                        icon: <Settings size={14} className="text-foreground" />, title: "Construct",
                        items: ["Theme Selection", "Customize Design"]
                    }}
                    step2={{
                        icon: <Rocket size={14} className="text-foreground" />, title: "Optimize",
                        items: ["SEO Setup", "Speed Optimization"]
                    }}
                />
            </div>
        </div>

        {/* Mobile Software */}
        <div className="lg:hidden relative">
            {/* Vertical Connector Line */}
            <div className="absolute left-[26px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-foreground/20 via-border to-transparent z-0" />
            
            <div className="space-y-12 relative z-10">
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center shadow-lg font-black text-xs">P1</div>
                    <div className="flex-1 pt-4">
                        <PhaseHeader title="Phase 1: Planning" color="bg-foreground" />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-md font-black text-[10px] text-muted-foreground">P2</div>
                    <div className="flex-1 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-primary">Platform Selection</h4>
                        <div className="grid gap-3">
                            <RoadmapCard number="1" icon={<Globe className="text-foreground" size={16} />} title="Domain" items={["GoDaddy", "Hostinger"]} />
                            <RoadmapCard number="2" icon={<Server className="text-foreground" size={16} />} title="Hosting" items={["Hostinger", "Bluehost"]} />
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-md font-black text-[10px] text-muted-foreground">P3</div>
                    <div className="flex-1 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-primary">Technical Setup</h4>
                        <div className="grid gap-3">
                            <RoadmapCard number="3" icon={<Settings className="text-foreground" size={16} />} title="Server" items={["SSL", "CDN"]} />
                            <RoadmapCard number="4" icon={<Zap className="text-foreground" size={16} />} title="Plan" items={["Pro", "Elite"]} />
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-md font-black text-[10px] text-muted-foreground">P4</div>
                    <div className="flex-1">
                        <div className="p-6 bg-card border border-border rounded-[2rem] shadow-lg">
                            <h3 className="text-lg font-bold mb-3 text-foreground">Build & Launch</h3>
                            <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">Full customization, performance optimization, and global deployment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const VideoRoadmap = () => (
    <div className="space-y-12 lg:space-y-0">
        <div className="hidden lg:block relative">
            <div className="flex justify-center mb-16 relative">
                <PhaseHeader title="Phase 1: Business Analysis" color="bg-primary" />
            </div>

            <svg className="absolute top-[38px] left-1/2 -translate-x-1/2 w-[600px] h-[80px] pointer-events-none overflow-visible" viewBox="0 0 1000 80" preserveAspectRatio="none">
                <path d="M500 0V40H250V80M500 40H750V80" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" className="text-primary opacity-20" />
            </svg>

            <div className="grid grid-cols-2 gap-24 items-start pt-8">
                <div className="relative">
                    <div className="flex justify-center mb-12">
                        <PhaseHeader title="Phase 2: Strategy & Script" color="bg-primary/80" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 relative">
                        <RoadmapCard number="1" icon={<Target className="text-primary" size={20} />} title="Content Plan" items={["Market Gap Check", "Audience Targets"]} />
                        <RoadmapCard number="2" icon={<PenTool className="text-primary" size={20} />} title="Scripting" items={["Viral Hooks", "Storyboarding"]} />
                        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-px h-24 bg-border" />
                    </div>
                </div>

                <div className="relative">
                    <div className="flex justify-center mb-12">
                        <PhaseHeader title="Phase 3: Production Engine" color="bg-primary/80" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 relative">
                        <RoadmapCard number="3" icon={<Camera className="text-primary" size={20} />} title="Shoot" items={["Cinematic 4K/6K", "Pro Lighting & Audio"]} />
                        <RoadmapCard number="4" icon={<Film className="text-primary" size={20} />} title="Edit" items={["Dynamic Cuts", "Color Grade & VFX"]} />
                        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-px h-24 bg-border" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-24 mt-24">
                <Phase4CardLeft
                    iconBg={<PlayCircle size={120} />}
                    title="Solve & Distribute"
                    step1={{ icon: <Presentation size={24} className="text-primary" />, label: "Solve Problems" }}
                    step2={{ icon: <Globe size={24} className="text-primary" />, label: "Publish Works" }}
                    colorClass="text-primary"
                    borderHover="hover:border-primary/20"
                />
                <Phase4CardRight
                    iconBg={<LineChart size={120} />}
                    title="Generate Leads & Sale"
                    step1={{
                        icon: <Users size={14} className="text-primary" />, title: "Leads",
                        items: ["Funnel Integration", "Targeted Traffic"]
                    }}
                    step2={{
                        icon: <TrendingUp size={14} className="text-primary" />, title: "Scale",
                        items: ["Sales Conversion", "Growth Tracking"]
                    }}
                    colorClass="text-primary"
                    bgClass="bg-primary/10"
                    borderHover="hover:border-primary/20"
                />
            </div>
        </div>

        {/* Mobile Video */}
        <div className="lg:hidden relative">
            {/* Vertical Connector Line */}
            <div className="absolute left-[26px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/20 via-primary/40 to-transparent z-0" />

            <div className="space-y-12 relative z-10">
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg font-black text-xs">P1</div>
                    <div className="flex-1 pt-4">
                        <PhaseHeader title="Phase 1: Analysis" color="bg-primary" />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-md font-black text-[10px] text-primary">P2</div>
                    <div className="flex-1 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-primary">Strategy & Script</h4>
                        <div className="grid gap-3">
                            <RoadmapCard number="1" icon={<Target className="text-primary" size={16} />} title="Research" items={["Audience", "Pain Points"]} />
                            <RoadmapCard number="2" icon={<PenTool className="text-primary" size={16} />} title="Script" items={["Viral Hooks", "Storyboarding"]} />
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-md font-black text-[10px] text-primary">P3</div>
                    <div className="flex-1 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-primary">Production</h4>
                        <div className="grid gap-3">
                            <RoadmapCard number="3" icon={<Camera className="text-primary" size={16} />} title="Shoot" items={["4K Output", "Pro Audio"]} />
                            <RoadmapCard number="4" icon={<Film className="text-primary" size={16} />} title="Edit" items={["Dynamic Cuts", "Color Grade"]} />
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-md font-black text-[10px] text-primary">P4</div>
                    <div className="flex-1">
                        <div className="p-6 bg-card border border-border rounded-[2rem] shadow-lg">
                            <h3 className="text-lg font-bold mb-3 text-foreground">Leads & Sales</h3>
                            <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">Solving client problems through targeted media and driving verified revenue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PhaseHeader = ({ title, color }: { title: string; color: string }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className={`${color} text-primary-foreground px-6 sm:px-10 py-3 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-widest shadow-xl shadow-black/5 relative z-20 transition-all text-center`}
    >
        {title}
    </motion.div>
);

const RoadmapCard = ({ number, icon, title, items }: { number: string; icon: any; title: string, items: string[] }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-card border border-border rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl p-4 sm:p-6 relative group transition-all"
    >
        <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-[9px] font-bold shadow-lg z-10">
            {number}
        </div>
        <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted/30 border border-border flex items-center justify-center mb-3 sm:mb-4 transition-all">
                {icon}
            </div>
            <h4 className="font-bold text-[10px] sm:text-[11px] mb-3 sm:mb-4 uppercase tracking-widest text-foreground">{title}</h4>
            <ul className="space-y-1.5 sm:space-y-2 w-full">
                {items.map((item, i) => (
                    <li key={i} className="text-[10px] sm:text-[10.5px] font-semibold text-muted-foreground flex items-center gap-2 text-left justify-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-border" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const Phase4CardLeft = ({ iconBg, title, step1, step2, colorClass="text-foreground", borderHover="hover:border-primary/20" }: any) => (
    <div className={`bg-card border border-border rounded-[2.5rem] p-10 relative overflow-hidden group ${borderHover} transition-all duration-700 shadow-sm hover:shadow-xl`}>
        <div className={`absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity ${colorClass}`}>
            {iconBg}
        </div>
        <div className="relative z-10 text-center">
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${colorClass} mb-3 block`}>Phase 4</span>
            <h3 className="text-2xl font-bold mb-8 text-foreground">{title}</h3>
            <div className="flex justify-around items-center">
                <div className="text-center group/item cursor-default">
                    <div className={`w-16 h-16 rounded-2xl bg-muted/30 border border-border flex items-center justify-center mb-3 transition-colors`}>
                        {step1.icon}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{step1.label}</p>
                </div>
                <ChevronRight className="text-border" />
                <div className="text-center group/item cursor-default">
                    <div className={`w-16 h-16 rounded-2xl bg-muted/30 border border-border flex items-center justify-center mb-3 transition-colors`}>
                        {step2.icon}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{step2.label}</p>
                </div>
            </div>
        </div>
    </div>
);

const Phase4CardRight = ({ iconBg, title, step1, step2, colorClass="text-foreground", bgClass="bg-muted/30", borderHover="hover:border-primary/20" }: any) => (
    <div className={`bg-card border border-border rounded-[2.5rem] p-10 relative overflow-hidden group ${borderHover} transition-all duration-700 shadow-sm hover:shadow-xl`}>
        <div className={`absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity ${colorClass}`}>
            {iconBg}
        </div>
        <div className="relative z-10 text-center">
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${colorClass} mb-3 block`}>Phase 4</span>
            <h3 className="text-2xl font-bold mb-8 text-foreground">{title}</h3>
            <div className="grid grid-cols-2 gap-6">
                {[step1, step2].map((step, idx) => (
                    <div key={idx} className="bg-muted/10 p-4 rounded-2xl border border-border text-left hover:bg-card hover:shadow-sm transition-all shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <div className={`w-8 h-8 rounded-lg ${bgClass} flex items-center justify-center`}>
                                {step.icon}
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">{step.title}</p>
                        </div>
                        <ul className="space-y-2">
                            {step.items.map((t: string) => (
                                <li key={t} className={`text-[10.5px] font-semibold flex items-center gap-2 text-muted-foreground`}>
                                    <CheckCircle2 size={10} className={colorClass} /> {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default RoadmapSection;
