import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Services", "Portfolio", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-6 left-0 right-0 mx-auto w-[90%] max-w-5xl z-50 card-apple py-3 px-6 shadow-2xl backdrop-blur-2xl border-white/50"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/images/logo2.png"
              alt="Zeenox Logo"
              className="h-7 w-auto invert"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:7603917369" className="hidden sm:inline-flex rounded-full bg-primary text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95">
            Call Now
          </a>
          <button className="md:hidden text-foreground p-2 hover:bg-black/5 rounded-full transition-colors" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden card-apple border-t border-black/5 overflow-hidden mt-4"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="tel:7603917369"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-primary text-white px-6 py-3.5 text-center text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
