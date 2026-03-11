import { motion } from "framer-motion";
import { Globe, Server, Laptop, Rocket, Settings, Sparkles, CheckCircle2, ChevronRight, Zap } from "lucide-react";

const RoadmapSection = () => {
    return (
        <section id="roadmap" className="relative py-32 overflow-hidden bg-background">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary/80">
                        ✦ Success Blueprint ✦
                    </span>
                    <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight">
                        Our Execution <span className="font-serif-accent italic gradient-text">Roadmap</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground/80 leading-relaxed">
                        A structured, transparent path from initial planning to a high-performance digital launch.
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Desktop Flow Layout */}
                    <div className="hidden lg:block relative">
                        {/* Phase 1: Planning */}
                        <div className="flex justify-center mb-16 relative">
                            <PhaseHeader title="Phase 1: Planning" color="bg-primary" />
                        </div>

                        {/* Connection from Phase 1 to Phase 2/3 */}
                        <svg className="absolute top-[38px] left-1/2 -translate-x-1/2 w-full h-[80px] pointer-events-none overflow-visible" viewBox="0 0 1000 80" preserveAspectRatio="none">
                            <path 
                                d="M500 0V40H250V80M500 40H750V80" 
                                stroke="hsl(var(--primary))" 
                                strokeWidth="3" 
                                fill="none"
                                strokeLinecap="round"
                                className="opacity-60" 
                            />
                        </svg>

                        <div className="grid grid-cols-2 gap-24 items-start pt-8">
                            {/* Left Side: Phase 2 */}
                            <div className="relative">
                                <div className="flex justify-center mb-12">
                                    <PhaseHeader title="Phase 2: Platform Selection" color="bg-primary/80" />
                                </div>

                                <div className="grid grid-cols-2 gap-6 relative">
                                    <RoadmapCard
                                        number="1"
                                        icon={<Globe className="text-primary" size={20} />}
                                        title="Choose Domain"
                                        items={["GoDaddy", "Hostinger", "Namecheap"]}
                                    />
                                    <RoadmapCard
                                        number="2"
                                        icon={<Server className="text-primary" size={20} />}
                                        title="Choose Hosting"
                                        items={["Hostinger", "Bluehost", "WebSpaceKit", "AWS"]}
                                    />

                                    {/* Connection to Phase 4 Build */}
                                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-px h-24 bg-primary/60" />
                                </div>
                            </div>

                            {/* Right Side: Phase 3 */}
                            <div className="relative">
                                <div className="flex justify-center mb-12">
                                    <PhaseHeader title="Phase 3: Setup" color="bg-primary/80" />
                                </div>

                                <div className="grid grid-cols-2 gap-6 relative">
                                    <RoadmapCard
                                        number="3"
                                        icon={<Settings className="text-primary" size={20} />}
                                        title="Server Config"
                                        items={["SSL Setup", "E-mail Config", "CDN Integration"]}
                                    />
                                    <RoadmapCard
                                        number="4"
                                        icon={<Zap className="text-primary" size={20} />}
                                        title="Choose Plan"
                                        items={["Basic", "Grow", "Advanced"]}
                                    />

                                    {/* Connection to Phase 4 Launch */}
                                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-px h-24 bg-primary/60" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Phase 4 row */}
                        <div className="grid grid-cols-2 gap-24 mt-24">
                            <div className="rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-8 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Laptop size={120} />
                                </div>
                                <div className="relative z-10 text-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Phase 4</span>
                                    <h3 className="text-2xl font-bold mb-8">Build Your Website</h3>
                                    <div className="flex justify-around items-center">
                                        <div className="text-center group/item cursor-default">
                                            <div className="w-16 h-16 rounded-2xl bg-background border border-primary/20 flex items-center justify-center mb-3 group-hover/item:border-primary transition-colors">
                                                <Laptop size={24} className="text-primary" />
                                            </div>
                                            <p className="text-xs font-bold uppercase tracking-wider">Setup Site</p>
                                        </div>
                                        <ChevronRight className="text-primary/30" />
                                        <div className="text-center group/item cursor-default">
                                            <div className="w-16 h-16 rounded-2xl bg-background border border-primary/20 flex items-center justify-center mb-3 group-hover/item:border-primary transition-colors">
                                                <Sparkles size={24} className="text-primary" />
                                            </div>
                                            <p className="text-xs font-bold uppercase tracking-wider">Customize</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-8 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Rocket size={120} />
                                </div>
                                <div className="relative z-10 text-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Phase 4</span>
                                    <h3 className="text-2xl font-bold mb-8 text-white">Launch & Optimize</h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-background/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5 text-left">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                                    <Settings size={14} className="text-primary" />
                                                </div>
                                                <p className="text-xs font-black uppercase tracking-widest">Construct</p>
                                            </div>
                                            <ul className="space-y-2">
                                                {["Theme Selection", "Customize Design"].map(t => (
                                                    <li key={t} className="text-[10px] font-medium flex items-center gap-2 text-muted-foreground">
                                                        <CheckCircle2 size={10} className="text-primary" /> {t}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-background/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5 text-left">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                                    <Rocket size={14} className="text-primary" />
                                                </div>
                                                <p className="text-xs font-black uppercase tracking-widest">Optimize</p>
                                            </div>
                                            <ul className="space-y-2">
                                                {["SEO Setup", "SMTP Speed"].map(t => (
                                                    <li key={t} className="text-[10px] font-medium flex items-center gap-2 text-muted-foreground">
                                                        <CheckCircle2 size={10} className="text-primary" /> {t}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout - Simplified Vertical List */}
                    <div className="lg:hidden space-y-12">
                        <div className="flex flex-col items-center">
                            <PhaseHeader title="Phase 1: Planning" color="bg-primary" />
                            <div className="w-px h-12 bg-primary/30 my-4" />

                            <PhaseHeader title="Phase 2: Platform" color="bg-primary/80" />
                            <div className="grid gap-4 mt-6 w-full">
                                <RoadmapCard number="1" icon={<Globe className="text-primary" size={20} />} title="Domain" items={["GoDaddy", "Hostinger"]} />
                                <RoadmapCard number="2" icon={<Server className="text-primary" size={20} />} title="Hosting" items={["Hostinger", "AWS"]} />
                            </div>

                            <div className="w-px h-12 bg-primary/30 my-8" />

                            <PhaseHeader title="Phase 3: Setup" color="bg-primary/80" />
                            <div className="grid gap-4 mt-6 w-full">
                                <RoadmapCard number="3" icon={<Settings className="text-primary" size={20} />} title="Server" items={["SSL", "CDN"]} />
                                <RoadmapCard number="4" icon={<Zap className="text-primary" size={20} />} title="Plan" items={["Grow", "Pro"]} />
                            </div>

                            <div className="w-px h-12 bg-primary/30 my-8" />

                            <div className="w-full p-8 rounded-3xl bg-secondary/20 border border-primary/20 text-center">
                                <h3 className="text-xl font-bold mb-4">Phase 4: Build & Launch</h3>
                                <p className="text-sm text-muted-foreground">Comprehensive setup, customization, and performance optimization for a global release.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PhaseHeader = ({ title, color }: { title: string; color: string }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className={`${color} text-black px-10 py-4 rounded-[1.2rem] font-bold text-lg shadow-[0_10px_30px_rgba(172,255,26,0.2)] relative z-20`}
    >
        {title}
    </motion.div>
);

const RoadmapCard = ({ number, icon, title, items }: { number: string; icon: any; title: string, items: string[] }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative group transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.05]"
    >
        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-black shadow-lg z-10">
            {number}
        </div>
        <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">{title}</h4>
            <ul className="space-y-2 w-full">
                {items.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2 text-left justify-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

export default RoadmapSection;
