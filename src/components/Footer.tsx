"use client";

import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-background pt-32 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-border/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div 
                aria-label="ZeenOx Logo"
                className="h-9 w-40 bg-primary opacity-90"
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
            </div>
            <p className="max-w-sm text-lg text-muted-foreground leading-relaxed font-medium mb-10 text-balance">
              ZeenOx — Media · Tech · Automation
            </p>
            <div className="flex gap-4">
                {[
                    { icon: Instagram, href: "https://www.instagram.com/zeenox.agency/" },
                    { icon: Mail, href: "mailto:hello@zeenox.agency" },
                    { icon: Phone, href: "tel:+917603917369" }
                ].map((social, i) => (
                    <a key={i} href={social.href} className="h-12 w-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                        <social.icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-12 sm:grid-cols-3">
            {/* Services */}
            <div>
                <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Services</h4>
                <div className="flex flex-col gap-4">
                {["Video Editing", "Digital Marketing", "Web Development", "Automation"].map((item) => (
                    <Link
                      key={item}
                      href={`/services/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm font-bold text-muted-foreground/60 hover:text-primary flex items-center gap-2 group transition-all"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </Link>
                ))}
                </div>
            </div>

            {/* Company */}
            <div>
                <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Company</h4>
                <div className="flex flex-col gap-4">
                {["About", "Work", "Blog", "Internship Program", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={item === "Internship Program" ? "/internship" : item === "Work" ? "/work" : item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`}
                      className="text-sm font-bold text-muted-foreground/60 hover:text-primary flex items-center gap-2 group transition-all"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </Link>
                ))}
                </div>
            </div>

            {/* Connect */}
            <div>
                <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Connect</h4>
                <div className="flex flex-col gap-5">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground/80 mb-1">Email</p>
                        <a href="mailto:hello@zeenox.agency" className="text-sm font-bold text-foreground hover:text-primary transition-colors">hello@zeenox.agency</a>
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground/80 mb-1">Phone</p>
                        <a href="tel:+917603917369" className="text-sm font-bold text-foreground hover:text-primary transition-colors">+91 7603917369</a>
                    </div>
                    <a href="https://www.instagram.com/zeenox.agency/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                      Instagram
                    </a>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} ZeenOx Media Tech Automation. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a key={link} href="#" className="text-[10px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
