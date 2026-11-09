"use client";

import { Instagram, Mail, Phone, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";

const Footer = () => {
  return (
    <footer className="relative bg-[#F5F5F7] border-t border-black/[0.05] pt-24 sm:pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-12 mb-16">
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" aria-label="ZeenOx Home" className="inline-block hover:opacity-90 transition-opacity">
                <picture>
                  <source srcSet="/images/logo.webp" type="image/webp" />
                  <img
                    src="/images/logo.png"
                    alt="ZeenOx Digital Solution"
                    className="h-11 sm:h-13 md:h-14 w-auto object-contain"
                  />
                </picture>
              </Link>
            </div>
            
            <p className="max-w-sm text-sm sm:text-base text-muted-foreground leading-relaxed font-medium mb-6 text-balance">
              {siteConfig.tagline} {siteConfig.shortDescription}
            </p>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs text-muted-foreground/80 mb-6 max-w-sm font-medium">
              <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
              <span>{siteConfig.contact.address.full}</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: siteConfig.contact.instagramUrl, label: "Instagram" },
                { icon: Mail, href: `mailto:${siteConfig.contact.email}`, label: "Email" },
                { icon: Phone, href: `tel:${siteConfig.contact.primaryPhone}`, label: "Phone" }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="h-11 w-11 rounded-xl bg-white/90 backdrop-blur-md shadow-md hover:shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links (7 cols) */}
          <div className="lg:col-span-7 grid gap-8 grid-cols-2 sm:grid-cols-3">
            {/* Core Services */}
            <div>
              <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-primary">Services</h4>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Web Development", href: "/services/web-development" },
                  { name: "ERP, HRM & CRM Software", href: "/#services" },
                  { name: "Mobile & Web Apps", href: "/#services" },
                  { name: "Automation & CRM", href: "/services/automation" },
                  { name: "Video Production", href: "/services/video-editing" },
                  { name: "SEO & Growth", href: "/services/seo" },
                  { name: "Autozee.ai SaaS", href: siteConfig.autozee.url, external: true },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Niche Pages */}
            <div>
              <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-primary">Solutions</h4>
              <div className="flex flex-col gap-3">
                {siteConfig.niches.slice(0, 5).map((niche) => (
                  <Link
                    key={niche.slug}
                    href={`/${niche.slug}`}
                    className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-colors"
                  >
                    <span>{niche.targetIndustry}</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </Link>
                ))}
                <Link
                  href="/blog"
                  className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-colors"
                >
                  <span>Agency Blog</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </Link>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-primary">Direct Contact</h4>
              <div className="flex flex-col gap-4 text-xs sm:text-sm">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Primary Call</p>
                  <a href={`tel:${siteConfig.contact.primaryPhone}`} className="font-bold text-foreground hover:text-primary transition-colors">
                    {siteConfig.contact.primaryPhone}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">{siteConfig.contact.secondaryContactLabel}</p>
                  <a href={`tel:${siteConfig.contact.secondaryPhone}`} className="font-bold text-foreground hover:text-primary transition-colors">
                    {siteConfig.contact.secondaryPhone}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Email Support</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="font-bold text-foreground hover:text-primary transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Hours</p>
                  <p className="text-muted-foreground text-[11px] font-medium">{siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal + Copyright */}
        <div className="pt-8 border-t border-black/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-medium text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="h-1 w-1 rounded-full bg-black/10" />
            <Link 
              href="/terms" 
              className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <span className="h-1 w-1 rounded-full bg-black/10" />
            <Link 
              href="/internship" 
              className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
