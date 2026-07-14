"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Play, ChevronLeft, ChevronRight, Pause, Volume2, VolumeX, Loader2, Film, Clapperboard, GraduationCap, Building, Home, Flag } from "lucide-react";

interface Reel {
  title: string;
  category: "education" | "corporate" | "real-estate" | "political" | "cinematic";
  videoUrl: string;
  instagramUrl: string;
  thumbnail: string;
  desc?: string;
}

const reels: Reel[] = [
  {
    title: "Kalvipaavai",
    category: "education",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/KALVIPAAVAI_tnbds5.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/KALVIPAAVAI_tnbds5.jpg",
    desc: "Educational brand film",
  },
  {
    title: "Kalvi Paavai Reel",
    category: "education",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/KALVI_PAAVAI_REEL_zznxiw.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/KALVI_PAAVAI_REEL_zznxiw.jpg",
    desc: "Viral educational reel",
  },
  {
    title: "Bit City Reel",
    category: "real-estate",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/BIT_CITY_REEL_femqmf.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/BIT_CITY_REEL_femqmf.jpg",
    desc: "Dynamic real-estate reel",
  },
  {
    title: "Election Strategy",
    category: "political",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/ELECTION2_bejlno.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/ELECTION2_bejlno.jpg",
    desc: "Political campaign video",
  },
  {
    title: "Auura Cinematic",
    category: "cinematic",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/AUURA_FINAL_1_e4kula.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/AUURA_FINAL_1_e4kula.jpg",
    desc: "Luxury brand cinematic",
  },
  {
    title: "Works Showcase",
    category: "cinematic",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/WORKS_FINAL_bw5yvu.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/WORKS_FINAL_bw5yvu.jpg",
    desc: "Agency portfolio reel",
  },
  {
    title: "Interest Analytics",
    category: "corporate",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/INTREST_p2ooin.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/INTREST_p2ooin.jpg",
    desc: "Financial explainer",
  },
  {
    title: "Chess Strategy",
    category: "corporate",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/CHESS_GAME_nqbjb8.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/CHESS_GAME_nqbjb8.jpg",
    desc: "Conceptual strategy film",
  },
  {
    title: "Financial Intelligence",
    category: "corporate",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/CHIT_FUND_mot5vm.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/CHIT_FUND_mot5vm.jpg",
    desc: "Finance brand story",
  },
];

const TABS = [
  { key: "all", label: "All", icon: Film },
  { key: "education", label: "Education", icon: GraduationCap },
  { key: "corporate", label: "Corporate & Finance", icon: Building },
  { key: "real-estate", label: "Real Estate", icon: Home },
  { key: "political", label: "Political", icon: Flag },
  { key: "cinematic", label: "Cinematic & Portfolio", icon: Clapperboard },
] as const;

const getOptimizedVideoUrl = (url: string) => {
  return url;
};

const CategoryCarousel = ({ category, label, icon: Icon, categoryReels }: { category: string, label: string, icon: any, categoryReels: Reel[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth || 1);
      const index = Math.round(scrollPercentage * (categoryReels.length - 1));
      setActiveIndex(Math.min(Math.max(0, index), categoryReels.length - 1));
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth * 0.4;
      const scrollTo = scrollRef.current.scrollLeft + (direction === "left" ? -cardWidth : cardWidth);
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (categoryReels.length === 0) return null;

  return (
    <div className="mb-24 last:mb-0 relative z-10">
      <div className="flex items-center gap-4 mb-10 px-6 md:px-12">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10 backdrop-blur-sm">
            <Icon size={24} className="text-primary" />
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight drop-shadow-sm">{label}</h3>
      </div>

      <div className="relative group">
        {/* Edge Masking for Smooth Fading */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide gap-6 md:gap-8 py-6 px-6 md:px-12 snap-x scroll-smooth"
          style={{ maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)", WebkitMaskImage: "-webkit-linear-gradient(left, transparent, black 4%, black 96%, transparent)" }}
        >
          {categoryReels.map((reel, index) => (
            <div key={`${reel.title}-${index}`} className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] snap-center">
              <ReelCard reel={reel} index={index} />
            </div>
          ))}
        </div>

        {/* Floating Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-6 md:right-6 flex justify-between pointer-events-none z-30">
          <button
            onClick={() => scroll("left")}
            className="h-14 w-14 rounded-full bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center justify-center text-foreground pointer-events-auto hover:bg-primary hover:text-white hover:border-primary/50 hover:scale-110 transition-all active:scale-95 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-500 ease-out"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-14 w-14 rounded-full bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center justify-center text-foreground pointer-events-auto hover:bg-primary hover:text-white hover:border-primary/50 hover:scale-110 transition-all active:scale-95 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-500 ease-out"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      {/* Elegant Dot Indicators */}
      <div className="flex justify-center items-center gap-3 mt-10">
        {categoryReels.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              if (scrollRef.current) {
                const { scrollWidth, clientWidth } = scrollRef.current;
                scrollRef.current.scrollTo({
                  left: ((scrollWidth - clientWidth) * i) / (categoryReels.length - 1 || 1),
                  behavior: "smooth",
                });
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              activeIndex === i ? "w-12 bg-primary shadow-[0_0_12px_rgba(var(--primary),0.6)]" : "w-3 bg-border hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const VideoReelsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredReels = activeTab === "all" ? reels : reels.filter((r) => r.category === activeTab);
  const activeTabInfo = TABS.find((t) => t.key === activeTab) || TABS[0];

  return (
    <section id="video-reels" className="py-24 md:py-32 bg-background border-t border-border/20 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 px-6 md:px-12 relative z-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
                <Film size={16} className="text-primary" />
              </div>
              <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Our Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              Mastering the <br />
              <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Visual Narrative.
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="max-w-md text-muted-foreground text-lg leading-relaxed md:text-right font-medium"
          >
            From high-converting reels to stunning cinematic brand films — every frame is engineered for ultimate impact.
          </motion.p>
        </div>

        {/* Premium Category Toggle Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-2 mb-16 p-2 bg-card/30 backdrop-blur-md rounded-3xl border border-white/5 shadow-xl max-w-max mx-auto relative z-10 mx-6 md:mx-auto"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-5 md:px-7 py-3 rounded-full text-xs md:text-sm font-bold tracking-wide transition-colors duration-300 outline-none ${
                  isActive ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-primary/80 backdrop-blur-sm rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] border border-primary/50"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2.5">
                  <TabIcon size={16} className={isActive ? "text-white" : "opacity-70"} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Carousel Display */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <CategoryCarousel 
                category={activeTab} 
                label={activeTabInfo.label} 
                icon={activeTabInfo.icon} 
                categoryReels={filteredReels} 
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 mx-6 md:mx-12 grid grid-cols-1 md:grid-cols-3 gap-6 p-10 rounded-[2.5rem] bg-card/40 backdrop-blur-lg border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          {[
            { value: "50+", label: "Videos Delivered" },
            { value: "4K/6K", label: "Cinematic Quality" },
            { value: "3x", label: "Engagement Boost" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center relative py-6">
              <p className="text-4xl md:text-5xl font-black text-foreground tracking-tighter drop-shadow-sm">{value}</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mt-3">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ReelCard = ({ reel, index }: { reel: Reel; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const safePause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playPromiseRef.current) {
      playPromiseRef.current.then(() => { video.pause(); }).catch(() => {});
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    if (!videoRef.current || isLoading || hasError) return;
    
    if (!isPlaying) {
      playPromiseRef.current = videoRef.current.play();
      playPromiseRef.current?.catch(() => {});
    }
  }, [isPlaying, isLoading, hasError]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      safePause();
      setIsMuted(true);
    } else {
      playPromiseRef.current = videoRef.current.play();
      playPromiseRef.current?.catch(() => {});
      setIsMuted(false);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const categoryColors: Record<string, string> = {
    education: "bg-blue-500",
    corporate: "bg-indigo-500",
    "real-estate": "bg-emerald-500",
    political: "bg-red-500",
    cinematic: "bg-violet-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl transition-all duration-700 cursor-pointer will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      {/* Outer Glow Effect on Hover */}
      <div className={`absolute inset-0 bg-primary/20 blur-2xl transition-opacity duration-700 pointer-events-none z-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      <video
        ref={videoRef}
        src={getOptimizedVideoUrl(reel.videoUrl)}
        poster={reel.thumbnail}
        loop
        muted={isMuted}
        playsInline
        autoPlay
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out z-10 ${isHovered ? "scale-110" : "scale-100"} ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={() => { setIsLoading(false); setHasError(true); }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Loading Skeleton */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-20 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="text-primary animate-spin" size={32} />
              <div className="h-2 w-16 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20 p-6 text-center backdrop-blur-md">
          <p className="text-white text-sm font-semibold mb-4 opacity-80">Media unavailable</p>
          <button
            onClick={(e) => { e.stopPropagation(); setHasError(false); setIsLoading(true); if (videoRef.current) videoRef.current.load(); }}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold tracking-widest uppercase transition-colors border border-white/10"
          >
            Retry
          </button>
        </div>
      )}

      {/* Premium Gradient Overlays */}
      <div className={`absolute inset-0 z-10 transition-all duration-700 ${
        isPlaying && !isHovered 
          ? "bg-gradient-to-t from-black/60 via-black/0 to-black/0" 
          : "bg-gradient-to-t from-black/95 via-black/30 to-black/60"
      }`} />

      {/* Category Badge */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg">
          <div className={`w-2 h-2 rounded-full ${categoryColors[reel.category] ?? "bg-primary"}`} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
            {reel.category}
          </span>
        </div>
      </div>

      {/* Audio Controls */}
      <div className="absolute top-6 right-6 z-20 flex gap-2">
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg flex items-center justify-center text-white transition-all hover:bg-black/60"
            >
              <Pause size={14} fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isLoading && !hasError && (
          <button
            onClick={toggleMute}
            className={`h-10 w-10 rounded-full backdrop-blur-xl border border-white/10 shadow-lg flex items-center justify-center text-white transition-all ${
              isMuted ? "bg-black/40 hover:bg-black/60" : "bg-primary text-white border-primary/50"
            }`}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        )}
      </div>

      {/* Interactive Play Button */}
      {!isPlaying && !isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative flex items-center justify-center">
            {/* Pulsing ring */}
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20" />
            
            <div className={`h-20 w-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl transition-all duration-500 transform ${
              isHovered ? "scale-110 bg-white/20" : "scale-100"
            }`}>
              <Play className="text-white fill-white ml-1.5" size={32} />
            </div>
          </div>
        </div>
      )}

      {/* Sophisticated Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 overflow-hidden pointer-events-none">
        <motion.div 
          initial={false}
          animate={{ y: isHovered || !isPlaying ? 0 : 20, opacity: isHovered || !isPlaying ? 1 : 0.6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2"
        >
          <div className={`overflow-hidden transition-all duration-500 ${isHovered || !isPlaying ? "max-h-20 opacity-100 mb-2" : "max-h-0 opacity-0 mb-0"}`}>
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] drop-shadow-md">
              {isPlaying ? "● Playing" : "Tap to Play"}
            </p>
          </div>
          
          <h3 className="text-xl md:text-2xl font-black text-white leading-tight drop-shadow-xl">{reel.title}</h3>
          
          {reel.desc && (
            <p className={`text-white/70 text-sm font-medium transition-all duration-500 line-clamp-2 ${
              isHovered || !isPlaying ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              {reel.desc}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoReelsSection;
