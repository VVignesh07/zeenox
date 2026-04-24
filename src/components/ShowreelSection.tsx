import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Play, ChevronLeft, ChevronRight } from "lucide-react";

interface Showreel {
  title: string;
  videoUrl?: string; // Direct .mp4 link for a clean look
  instagramUrl: string;
  thumbnail: string;
}

const showreels: Showreel[] = [
  {
    title: "Chess Game Strategy",
    videoUrl: "/showreel/CHESS GAME.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Financial Intelligence",
    videoUrl: "/showreel/CHIT FUND.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Election Strategy",
    videoUrl: "/showreel/ELECTION2.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Cinematic Final 01",
    videoUrl: "/showreel/FINAL1.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://images.unsplash.com/photo-1492691523567-61723c275df1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Cinematic Final 02",
    videoUrl: "/showreel/FINAL2.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Interest Analytics",
    videoUrl: "/showreel/INTREST.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Works Showcase",
    videoUrl: "/showreel/WORKS FINAL.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Zero Loss System",
    videoUrl: "/showreel/ZERO-LOSS.mp4",
    instagramUrl: "https://www.instagram.com/",
    thumbnail: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=800",
  },
];

const ShowreelSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.3)); // 0.3 is approximate width of card
      setActiveIndex(Math.min(index, showreels.length - 1));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollToVideo = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 340 + 24; // Card width + gap
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section id="showreels" className="py-32 bg-background border-t border-border">
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
            A dedicated collection of our best video editing work, directly from our Instagram portfolio.
          </motion.p>
        </div>

        {/* Manual Sliding Layout with Arrows */}
        <div className="relative group">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide gap-6 py-10 px-4 md:px-0 snap-x scroll-smooth"
          >
            {showreels.map((reel, index) => (
              <div key={`${reel.title}-${index}`} className="flex-shrink-0 w-[280px] sm:w-[340px] snap-center">
                <ReelCard reel={reel} index={index} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
            <button
              onClick={() => scroll('left')}
              className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-md border border-border shadow-xl flex items-center justify-center text-foreground pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-md border border-border shadow-xl flex items-center justify-center text-foreground pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {showreels.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToVideo(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${activeIndex === i
                  ? "w-8 bg-primary shadow-lg shadow-primary/20"
                  : "w-2.5 bg-border hover:bg-muted-foreground"
                }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-[2.5rem] bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Instagram className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Follow our creative journey</h3>
              <p className="text-background/60">Get daily doses of digital excellence and behind-the-scenes content.</p>
            </div>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform"
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
      className="group relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-black border border-border shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        if (!isPlaying) videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!isPlaying) {
          videoRef.current?.pause();
          if (videoRef.current) videoRef.current.currentTime = 0;
        }
      }}
      onClick={togglePlay}
    >
      {/* Native Video Player (No Instagram Frame) */}
      <video
        ref={videoRef}
        src={`${reel.videoUrl}#t=0.001`} // Force first frame to load as thumbnail
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />

      {/* Premium Overlay for Play/Pause */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100 bg-black/20'}`}>
        <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 scale-90 group-hover:scale-100 transition-transform">
          {isPlaying ? <div className="flex gap-1.5"><div className="w-1.5 h-8 bg-white rounded-full animate-pulse" /><div className="w-1.5 h-8 bg-white rounded-full animate-pulse delay-75" /></div> : <Play className="text-white fill-white ml-1" size={32} />}
        </div>
      </div>

      {/* Hover Status Tag */}
      {!isPlaying && (
        <div className="absolute top-6 right-6 z-20">
          <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Preview
          </div>
        </div>
      )}

      {/* Info Overlay */}
      <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <Instagram size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{reel.title}</h3>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
              {isPlaying ? 'Now Playing' : (isHovered ? 'Previewing...' : 'Tap to Play')}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowreelSection;
