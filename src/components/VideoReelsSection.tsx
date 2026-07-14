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
    <div className="mb-20 last:mb-0">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon size={20} className="text-primary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">{label}</h3>
      </div>

      <div className="relative group">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide gap-5 md:gap-7 py-4 px-2 snap-x scroll-smooth"
        >
          {categoryReels.map((reel, index) => (
            <div key={`${reel.title}-${index}`} className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[360px] snap-center">
              <ReelCard reel={reel} index={index} />
            </div>
          ))}
        </div>

        {/* Nav Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none z-30">
          <button
            onClick={() => scroll("left")}
            className="h-12 w-12 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-2xl flex items-center justify-center text-foreground pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-90 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-12 w-12 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-2xl flex items-center justify-center text-foreground pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-90 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2.5 mt-8">
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
            className={`h-2 rounded-full transition-all duration-500 ${
              activeIndex === i ? "w-10 bg-primary shadow-lg shadow-primary/30" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const VideoReelsSection = () => {
  const categories = TABS.filter(tab => tab.key !== "all");

  return (
    <section id="video-reels" className="py-16 md:py-32 bg-background border-t border-border/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Film size={16} className="text-primary" />
              </div>
              <span className="text-primary text-[11px] font-black uppercase tracking-[0.4em]">Video Editing</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              Showreels &{" "}
              <br />
              <span className="font-serif-accent italic text-primary">Cinematic Work.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm text-muted-foreground text-lg leading-relaxed md:text-right"
          >
            From viral reels to cinematic brand films — every frame is engineered for impact.
          </motion.p>
        </div>

        {/* Category Rows */}
        <div className="flex flex-col">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <CategoryCarousel 
                category={cat.key} 
                label={cat.label} 
                icon={cat.icon} 
                categoryReels={reels.filter(r => r.category === cat.key)} 
              />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4 p-8 rounded-[2rem] bg-card/60 border border-border"
        >
          {[
            { value: "50+", label: "Videos Delivered" },
            { value: "4K/6K", label: "Cinematic Quality" },
            { value: "3x", label: "Avg. Engagement Boost" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl md:text-3xl font-black text-primary">{value}</p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
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
    cinematic: "bg-violet-500",
    reel: "bg-pink-500",
    corporate: "bg-blue-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-black border border-white/10 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-700 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={getOptimizedVideoUrl(reel.videoUrl)}
        poster={reel.thumbnail}
        loop
        muted={isMuted}
        playsInline
        autoPlay
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${isHovered ? "scale-105" : "scale-100"} ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={() => { setIsLoading(false); setHasError(true); }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Loading */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/40 z-10"
          >
            <Loader2 className="text-primary animate-spin" size={36} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-20 p-6 text-center">
          <p className="text-white text-sm font-medium mb-4">Failed to load</p>
          <button
            onClick={(e) => { e.stopPropagation(); setHasError(false); setIsLoading(true); if (videoRef.current) videoRef.current.load(); }}
            className="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold"
          >Retry</button>
        </div>
      )}

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 transition-opacity duration-500 ${isPlaying ? "opacity-30" : "opacity-100"}`} />

      {/* Category badge */}
      <div className="absolute top-5 left-5 z-20">
        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white ${categoryColors[reel.category] ?? "bg-primary"}`}>
          {reel.category}
        </span>
      </div>

      {/* Controls top right */}
      <div className="absolute top-5 right-5 z-20 flex gap-2">
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
            >
              <Pause size={14} fill="white" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isLoading && !hasError && (
          <button
            onClick={toggleMute}
            className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        )}
      </div>

      {/* Center play button */}
      {!isPlaying && !isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-18 w-18 h-[72px] w-[72px] rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/30 scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl">
            <Play className="text-white fill-white ml-1" size={28} />
          </div>
        </div>
      )}

      {/* Hover preview badge */}
      <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-primary text-white text-[9px] font-black uppercase tracking-widest transition-all duration-300 pointer-events-none ${isHovered && !isPlaying && !isLoading ? "opacity-100" : "opacity-0"}`}>
        Hover Preview
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-7 left-7 right-7 z-20 pointer-events-none">
        <h3 className="text-lg font-black text-white leading-tight">{reel.title}</h3>
        {reel.desc && <p className="text-white/60 text-[11px] font-semibold mt-1">{reel.desc}</p>}
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-2">
          {isPlaying ? "● Now Playing" : isLoading ? "Loading…" : isHovered ? "Click to Play" : "Hover to Preview"}
        </p>
      </div>
    </motion.div>
  );
};

export default VideoReelsSection;
