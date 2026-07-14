"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navItems = ["About", "Services", "Work", "Process", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-4 sm:top-6 left-0 right-0 mx-auto w-[92%] sm:w-[90%] max-w-5xl z-50 transition-all duration-500 rounded-full border shadow-2xl backdrop-blur-2xl ${
        scrolled ? "bg-background/60 py-3 border-white/10" : "bg-card/40 py-4 border-white/5"
      } px-6`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div 
              aria-label="ZeenOx Logo"
              className="h-6 sm:h-7 w-32 bg-primary"
              style={{
                maskImage: 'url(/images/logo2.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'left center',
                WebkitMaskImage: 'url(/images/logo2.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center',
              }}
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex rounded-full bg-foreground text-background px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:scale-105 hover:bg-white transition-all items-center gap-2"
          >
            Start a Project
          </Link>
          <button 
            className="md:hidden text-foreground p-2 hover:bg-white/5 rounded-full transition-colors" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-[110%] left-0 right-0 bg-background/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden p-8"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground transition-colors flex items-center justify-between group"
                >
                  {item}
                  <div className="h-px w-0 bg-foreground group-hover:w-8 transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-2xl bg-foreground text-background px-6 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3"
              >
                <ArrowRight size={14} />
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
