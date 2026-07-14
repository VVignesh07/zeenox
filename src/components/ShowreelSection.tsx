"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Play, ChevronLeft, ChevronRight, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";

interface Showreel {
  title: string;
  videoUrl: string;
  instagramUrl: string;
  thumbnail: string;
}

const showreels: Showreel[] = [
  {
    title: "Kalvipaavai",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/KALVIPAAVAI_tnbds5.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/KALVIPAAVAI_tnbds5.jpg",
  },
  {
    title: "Kalvi Paavai Reel",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/KALVI_PAAVAI_REEL_zznxiw.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/KALVI_PAAVAI_REEL_zznxiw.jpg",
  },
  {
    title: "Bit City Reel",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/BIT_CITY_REEL_femqmf.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/BIT_CITY_REEL_femqmf.jpg",
  },
  {
    title: "Election Strategy",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/ELECTION2_bejlno.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/ELECTION2_bejlno.jpg",
  },
  {
    title: "Auura Cinematic Final",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/AUURA_FINAL_1_e4kula.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/AUURA_FINAL_1_e4kula.jpg",
  },
  {
    title: "Works Showcase",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/WORKS_FINAL_bw5yvu.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/WORKS_FINAL_bw5yvu.jpg",
  },
  {
    title: "Interest Analytics",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/INTREST_p2ooin.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/INTREST_p2ooin.jpg",
  },
  {
    title: "Chess Strategy",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/CHESS_GAME_nqbjb8.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/CHESS_GAME_nqbjb8.jpg",
  },
  {
    title: "Financial Intelligence",
    videoUrl: "https://res.cloudinary.com/dtjnm2nc8/video/upload/CHIT_FUND_mot5vm.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://res.cloudinary.com/dtjnm2nc8/video/upload/so_0,f_auto,q_auto/CHIT_FUND_mot5vm.jpg",
  },
];

const getOptimizedVideoUrl = (url: string) => {
  return url;
};

const ShowreelSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth || 1);
      const index = Math.round(scrollPercentage * (showreels.length - 1));
      setActiveIndex(Math.min(Math.max(0, index), showreels.length - 1));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollToVideo = (index: number) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = (scrollWidth - clientWidth) * (index / (showreels.length - 1 || 1));
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section id="showreels" className="py-12 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5 text-primary text-[11px] font-semibold uppercase tracking-widest mb-6"
            >
              Showreels
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
            >
              Editing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Showreels.
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-muted-foreground text-lg leading-relaxed"
          >
            A dedicated collection of our best video editing work, optimized for performance and quality.
          </motion.p>
        </div>

        <div className="relative group">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide gap-6 md:gap-8 py-10 px-4 md:px-0 snap-x scroll-smooth"
            style={{ scrollPadding: '0 16px' }}
          >
            {showreels.map((reel, index) => (
              <div key={`${reel.title}-${index}`} className="flex-shrink-0 w-[270px] xs:w-[300px] sm:w-[380px] snap-center">
                <ReelCard reel={reel} index={index} />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none z-30">
            <button
              onClick={() => scroll('left')}
              className="h-14 w-14 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-2xl flex items-center justify-center text-foreground pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-90 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="h-14 w-14 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-2xl flex items-center justify-center text-foreground pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-90 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 mt-12">
          {showreels.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToVideo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i
                ? "w-10 bg-primary shadow-lg shadow-primary/30"
                : "w-2 bg-border hover:bg-muted-foreground"
                }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[3rem] bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5"
        >
          <div className="flex items-center gap-8">
            <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center shadow-inner">
              <Instagram className="text-primary" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Follow our creative journey</h3>
              <p className="text-background/60 text-lg">Daily doses of digital excellence and behind-the-scenes content.</p>
            </div>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
          >
            Visit Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ReelCard = ({ reel, index }: { reel: Showreel; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  const toggleFullPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        safePause();
        setIsMuted(true);
      } else {
        playPromiseRef.current = videoRef.current.play();
        playPromiseRef.current?.catch(() => {});
        setIsMuted(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
      className="group relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-black border border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-700 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleFullPlay}
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
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${isHovered ? 'scale-105' : 'scale-100'} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10"
          >
            <Loader2 className="text-primary animate-spin" size={40} />
          </motion.div>
        )}
      </AnimatePresence>

      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-20 p-6 text-center">
          <p className="text-white text-sm font-medium mb-4">Failed to load video</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setHasError(false);
              setIsLoading(true);
              if (videoRef.current) videoRef.current.load();
            }}
            className="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold"
          >
            Retry
          </button>
        </div>
      )}

      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />

      {!isPlaying && !isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/30 scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl">
            <Play className="text-white fill-white ml-1" size={32} />
          </div>
        </div>
      )}

      <div className="absolute top-6 left-6 z-20 flex gap-2">
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
            >
              <Pause size={16} fill="white" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isLoading && !hasError && (
          <button
            onClick={toggleMute}
            className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors pointer-events-auto"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        )}
      </div>

      <div className="absolute top-6 right-6 z-20">
        <div className={`px-4 py-1.5 rounded-full bg-primary backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest transition-all duration-500 ${isHovered && !isPlaying && !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          Previewing
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-xl">
            <Instagram size={22} className="text-white" />
          </div>
          <div className="overflow-hidden">
            <h3 className="text-xl font-bold text-white leading-tight truncate">{reel.title}</h3>
            <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest mt-1">
              {isPlaying ? 'Now Playing' : (isLoading ? 'Loading...' : (isHovered ? 'Hover to Preview' : 'Tap to Play Full'))}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowreelSection;
