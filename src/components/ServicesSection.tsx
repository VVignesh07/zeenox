"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cpu,
  Video,
  TrendingUp,
  ArrowRight,
  Database,
  Users,
  Workflow,
  Zap,
  Sparkles,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";

interface ServiceItem {
  name: string;
  title: string;
  highlightTitle?: boolean;
  desc: string;
  icon: any;
  bullets: string[];
  href: string;
  badge?: string;
}

const enterpriseServices: ServiceItem[] = [
  {
    name: "Custom ERP Software",
    title: "Custom ERP Software",
    highlightTitle: true,
    desc: "Centralize your company operations. Multi-branch inventory tracking, automated GST billing, vendor payables, and live financial accounting.",
    icon: Database,
    badge: "Enterprise Core",
    bullets: [
      "Multi-Warehouse & Branch Stock Control",
      "Automated GST Billing & Invoicing Engine",
      "Role-Based Staff Access & Live Audit Logs",
    ],
    href: "/contact?service=erp",
  },
  {
    name: "Intelligent HRM Software",
    title: "Intelligent HRM Software",
    desc: "Eliminate payroll errors and workforce chaos. 1-click automated salary calculation with PF/ESI, biometric machine sync, and mobile GPS attendance.",
    icon: Users,
    badge: "HRM & Payroll",
    bullets: [
      "1-Click Salary, PF, ESI & TDS Calculations",
      "Biometric Device & GPS Mobile Geo-Fenced Clock-In",
      "Employee Self-Service Portal & Leave Approvals",
    ],
    href: "/contact?service=hrm",
  },
  {
    name: "Custom CRM Platforms",
    title: "Custom CRM Platforms",
    desc: "Turn leads into paying clients with zero leakage. Visual drag-and-drop sales pipelines, official WhatsApp Cloud API auto-replies, and sales team accountability.",
    icon: Workflow,
    badge: "CRM & Pipelines",
    bullets: [
      "Visual Drag-and-Drop Deal Kanban Board",
      "WhatsApp Cloud API & Multi-Channel Sequences",
      "Automatic Lead Scoring & Sales Rep Routing",
    ],
    href: "/contact?service=crm",
  },
];

const digitalServices: ServiceItem[] = [
  {
    name: "Web Development & E-Commerce",
    title: "Web Development & E-Commerce",
    highlightTitle: true,
    desc: "Next.js, React, and Shopify platforms engineered for sub-second speeds, mobile-first indexing, and high lead conversion.",
    icon: Globe,
    badge: "Web Flagship",
    bullets: [
      "Custom Corporate & Business Portals",
      "High-Conversion Shopify & WooCommerce Stores",
      "Core Web Vitals Optimization (95+ Google Score)",
    ],
    href: "/services/web-development",
  },
  {
    name: "Custom Web & Mobile Apps",
    title: "Custom Web & Mobile Apps",
    desc: "Production-grade SaaS platforms, client portals, internal dashboards, and cross-platform iOS/Android applications.",
    icon: Smartphone,
    badge: "Mobile & SaaS",
    bullets: [
      "SaaS MVP & Scalable Cloud Architecture",
      "Internal Business Dashboards & Role Management",
      "API Integrations & Secure Database Pipelines",
    ],
    href: "/services/web-development",
  },
  {
    name: "AI & Business Automation",
    title: "AI & Business Automation",
    desc: "Replace 20+ hours of manual work every week with intelligent WhatsApp bots, CRM pipelines, and operations autopilot.",
    icon: Cpu,
    badge: "Autozee.ai SaaS",
    bullets: [
      "24/7 WhatsApp Lead Qualifier (Autozee.ai)",
      "CRM & Google Sheets Multi-App Workflows",
      "Automated Invoicing & Payment Reminders",
    ],
    href: "/services/automation",
  },
];

const mediaGrowthServices: ServiceItem[] = [
  {
    name: "Video & Brand Motion Graphics",
    title: "Video & Brand Motion Graphics",
    highlightTitle: true,
    desc: "Scroll-stopping 4K video editing, color science, and dynamic motion graphics designed specifically to drive high retention and high ROAS on Meta Ads.",
    icon: Video,
    badge: "4K Post-Production",
    bullets: [
      "4K DaVinci / Premiere Color Science & Grading",
      "85%+ 3-Second Hook Retention Video Cuts",
      "High-Converting Meta Ads & Social Creatives",
    ],
    href: "/services/video-editing",
  },
  {
    name: "Local SEO & Market Dominance",
    title: "Local SEO & Market Dominance",
    desc: "Targeted local SEO and Google Maps ranking dominance for Tamil Nadu clinics, retail stores, and service brands looking to capture high-intent buyers.",
    icon: TrendingUp,
    badge: "#1 Google Map Pack",
    bullets: [
      "Google Business Profile #1 Map Pack Ranking",
      "Local Tamil Nadu Keyword Dominance & Citations",
      "Automated 5-Star Google Review Generation Playbook",
    ],
    href: "/services/seo",
  },
  {
    name: "Paid Ads & Conversion Funnels",
    title: "Performance Ads & Paid Growth",
    desc: "Data-driven Meta and Google Ads campaigns paired with high-converting custom sales funnels and automated lead tracking for predictable ROI.",
    icon: Zap,
    badge: "Paid Ads & ROAS",
    bullets: [
      "Meta & Google Ads Campaign Management",
      "High-Converting Funnel & Landing Page Design",
      "End-to-End Pixel & WhatsApp Conversion Tracking",
    ],
    href: "/services/digital-marketing",
  },
];

export default function ServicesSection() {
  const getWaQuote = (serviceName: string) =>
    `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      `Hi ZeenOx, I would like to get a quote for ${serviceName}.`
    )}`;

  const renderCard = (service: ServiceItem, index: number) => {
    const IconComponent = service.icon;

    return (
      <motion.div
        key={service.name}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6, scale: 1.012 }}
        className="rounded-[2.2rem] bg-white border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.04),0_12px_36px_rgba(6,78,59,0.04)] hover:shadow-[0_22px_55px_rgba(6,78,59,0.12)] hover:border-emerald-500/30 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden transform-gpu will-change-transform"
      >
        {/* Animated Top Emerald Shimmer Beam on Hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/60 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div>
          {/* Top Row: Icon Container (Fixed 48x48px Squircle — NEVER Stretches) */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] border border-emerald-200/50 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-2xs">
              <IconComponent size={22} strokeWidth={2} />
            </div>

            {service.badge && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-primary border border-emerald-500/20 text-[10px] font-extrabold uppercase tracking-widest shadow-2xs">
                {service.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-3 transition-colors ${
              service.highlightTitle
                ? "text-primary group-hover:text-emerald-700"
                : "text-[#1D1D1F] group-hover:text-primary"
            }`}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#2D2D30] leading-relaxed font-medium mb-6 min-h-[44px]">
            {service.desc}
          </p>

          {/* Bullet List with Emerald Dot Indicators */}
          <ul className="space-y-2.5 mb-8">
            {service.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1D1D1F] font-semibold leading-snug"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Row: LEARN MORE -> on left, GET QUOTE with WhatsApp on right */}
        <div className="pt-5 border-t border-black/[0.06] flex items-center justify-between gap-3 mt-auto">
          <Link
            href={service.href}
            className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#3A3A3C] hover:text-[#1D1D1F] flex items-center gap-1.5 group/link transition-colors"
          >
            <span>LEARN MORE</span>
            <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href={getWaQuote(service.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#1D1D1F] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-black hover:scale-105 active:scale-95 flex items-center gap-1.5 transition-all shrink-0"
          >
            <span>GET QUOTE</span>
            <SiWhatsapp className="text-[#25D366] text-xs" />
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 md:py-36 bg-[#FAFAFC] overflow-hidden border-t border-b border-black/[0.04]"
    >
      {/* Subtle Overhead Ambient Spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.06),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-[#EBEBED] border border-black/[0.06] text-[10px] font-extrabold uppercase tracking-widest text-primary shadow-2xs">
            Engineered Capabilities • Enterprise, Web & Automation
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1] mb-4">
            Custom Software & Digital Systems,{" "}
            <span className="font-serif-accent italic text-primary">Zero Fragmentation.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#2D2D30] leading-relaxed max-w-xl mx-auto font-medium">
            From high-conversion Next.js platforms to enterprise ERP, HRM, and custom CRM systems — unified engineering with zero agency bloat.
          </p>
        </motion.div>

        {/* ── SECTION PART 1: Enterprise Software Engineering Suite (Custom Build) ── */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#1D1D1F]">
              Enterprise Software Engineering Suite (Custom Build)
            </h3>
            <span className="h-px bg-black/[0.06] flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {enterpriseServices.map((service, idx) => renderCard(service, idx))}
          </div>
        </div>

        {/* ── SECTION PART 2: Digital Systems, Web & Automation Flagships (Image 1 Layout) ── */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#1D1D1F]">
              Digital Engineering & Automation Flagships
            </h3>
            <span className="h-px bg-black/[0.06] flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {digitalServices.map((service, idx) => renderCard(service, idx))}
          </div>
        </div>

        {/* ── SECTION PART 3: Creative Media & Local Market Dominance ── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#1D1D1F]">
              Creative Media & Local Market Dominance
            </h3>
            <span className="h-px bg-black/[0.06] flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {mediaGrowthServices.map((service, idx) => renderCard(service, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}
