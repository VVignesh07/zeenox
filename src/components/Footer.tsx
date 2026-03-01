import { Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo2.png"
                alt="Zeenox Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Media. Technology. Automation.
              Building growth engines for brands worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Navigation</h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Portfolio", "Process", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Services</h4>
            <div className="flex flex-col gap-3">
              {["Web Development", "Brand Design", "Digital Marketing", "Automation", "App Development"].map((s) => (
                <span key={s} className="text-sm text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Connect</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground">hello@zeenox.agency</span>
              <span className="text-sm text-muted-foreground">+91 7603917369</span>
              <span className="text-sm text-muted-foreground">vakkanangundu, 626104</span>
              <a href="#" className="mt-2 inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 text-center md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zeenox. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a key={link} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
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
