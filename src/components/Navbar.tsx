import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Services", "Portfolio", "About", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold tracking-tight">
          <span className="gradient-text">✦ Zeenox</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full btn-primary-glow px-6 py-2 text-sm"
          >
            Get In Touch
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full btn-primary-glow px-6 py-2.5 text-center text-sm"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
