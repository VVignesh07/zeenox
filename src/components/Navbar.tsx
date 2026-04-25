import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navItems = ["About", "Services", "Showreels", "Portfolio", "Pricing", "Contact"];

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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className={`fixed top-4 sm:top-6 left-0 right-0 mx-auto w-[92%] sm:w-[90%] max-w-5xl z-50 transition-all duration-500 rounded-[2rem] border border-border shadow-2xl backdrop-blur-2xl ${
        scrolled ? "bg-background/80 py-3" : "bg-card/90 py-4"
      } px-6`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/images/logo2.png"
              alt="Zeenox Logo"
              className="h-6 sm:h-7 w-auto invert"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a href="tel:7603917369" className="hidden sm:inline-flex rounded-full bg-primary text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 items-center gap-2">
            <Phone size={12} />
            Call Now
          </a>
          <button 
            className="md:hidden text-foreground p-2 hover:bg-foreground/5 rounded-full transition-colors" 
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
            className="md:hidden absolute top-[110%] left-0 right-0 bg-card/95 backdrop-blur-3xl border border-border rounded-[2.5rem] shadow-2xl overflow-hidden p-8"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <motion.a
                  variants={itemVariants}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {item}
                  <div className="h-px w-0 bg-primary group-hover:w-8 transition-all duration-300" />
                </motion.a>
              ))}
              <motion.a
                variants={itemVariants}
                href="tel:7603917369"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-2xl bg-primary text-white px-6 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
              >
                <Phone size={14} />
                Call Expert Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
