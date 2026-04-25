import { Download, Instagram, Github, Linkedin, ArrowUpRight } from "lucide-react";

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
              <img
                src="/images/logo2.png"
                alt="Zeenox Logo"
                className="h-9 w-auto invert opacity-80"
              />
            </div>
            <p className="max-w-sm text-lg text-muted-foreground leading-relaxed font-medium mb-10">
              A premium ecosystem merging high-end media production with next-gen technology. We build growth engines.
            </p>
            <div className="flex gap-4">
                {[
                    { icon: Instagram, href: "https://www.instagram.com/zeenox.agency/" },
                    { icon: Linkedin, href: "#" },
                    { icon: Github, href: "#" }
                ].map((social, i) => (
                    <a key={i} href={social.href} className="h-12 w-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card hover:shadow-lg transition-all duration-300">
                        <social.icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-12 sm:grid-cols-3">
            {/* Quick Links */}
            <div>
                <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Systems</h4>
                <div className="flex flex-col gap-4">
                {["About", "Services", "Showreels", "Portfolio", "Pricing", "Contact"].map((item) => (
                    <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-bold text-muted-foreground/60 hover:text-primary flex items-center gap-2 group transition-all"
                    >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                    </a>
                ))}
                </div>
            </div>

            {/* Specialties */}
            <div>
                <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Core Tech</h4>
                <div className="flex flex-col gap-4">
                {["Cloud Apps", "E-Commerce", "AI Automation", "Cinematic Media", "UX Strategy"].map((s) => (
                    <span key={s} className="text-sm font-bold text-muted-foreground/40">{s}</span>
                ))}
                </div>
            </div>

            {/* Connect */}
            <div>
                <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Liaison</h4>
                <div className="flex flex-col gap-5">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground/30 mb-1">Inquiries</p>
                        <p className="text-sm font-bold text-foreground">hello@zeenox.agency</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground/30 mb-1">Direct Line</p>
                        <p className="text-sm font-bold text-foreground">+91 7603917369</p>
                    </div>
                    <a href="#contact" className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg">
                        <Download size={14} /> Asset Kit
                    </a>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Zeenox Production. Engineered for Growth.
          </p>
          <div className="flex gap-8">
            {["Privacy Protocol", "Legal Framework"].map((link) => (
              <a key={link} href="#" className="text-[10px] font-bold text-muted-foreground/40 hover:text-primary uppercase tracking-widest transition-colors">
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
