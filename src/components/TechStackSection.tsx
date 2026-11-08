"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiShopify,
  SiWhatsapp,
  SiSupabase,
  SiPostgresql,
  SiFigma,
  SiPython,
  SiDocker,
  SiVercel,
  SiStripe,
} from "react-icons/si";

interface TechItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

const rowOne: TechItem[] = [
  {
    name: "Next.js 15",
    category: "Full-Stack React Framework",
    icon: SiNextdotjs,
    iconColor: "text-[#1D1D1F]",
  },
  {
    name: "React 18",
    category: "Component UI Engine",
    icon: SiReact,
    iconColor: "text-[#61DAFB]",
  },
  {
    name: "TypeScript",
    category: "Type-Safe Architecture",
    icon: SiTypescript,
    iconColor: "text-[#3178C6]",
  },
  {
    name: "Tailwind CSS",
    category: "Design System & Utility",
    icon: SiTailwindcss,
    iconColor: "text-[#38BDF8]",
  },
  {
    name: "Node.js",
    category: "High-Performance Backend",
    icon: SiNodedotjs,
    iconColor: "text-[#339933]",
  },
  {
    name: "Shopify Storefront",
    category: "E-Commerce Infrastructure",
    icon: SiShopify,
    iconColor: "text-[#96BF48]",
  },
  {
    name: "WhatsApp Cloud API",
    category: "Conversational Automation",
    icon: SiWhatsapp,
    iconColor: "text-[#25D366]",
  },
];

const rowTwo: TechItem[] = [
  {
    name: "Supabase",
    category: "Cloud Database & Auth",
    icon: SiSupabase,
    iconColor: "text-[#3ECF8E]",
  },
  {
    name: "PostgreSQL",
    category: "Relational Enterprise DB",
    icon: SiPostgresql,
    iconColor: "text-[#4169E1]",
  },
  {
    name: "Figma",
    category: "UX & Prototype Architecture",
    icon: SiFigma,
    iconColor: "text-[#F24E1E]",
  },
  {
    name: "Python / FastAPI",
    category: "AI & Data Pipelines",
    icon: SiPython,
    iconColor: "text-[#3776AB]",
  },
  {
    name: "Docker",
    category: "Containerized Microservices",
    icon: SiDocker,
    iconColor: "text-[#2496ED]",
  },
  {
    name: "Vercel Edge",
    category: "Global CDN & Serverless",
    icon: SiVercel,
    iconColor: "text-[#1D1D1F]",
  },
  {
    name: "Stripe & Razorpay",
    category: "Secure Payment Gateways",
    icon: SiStripe,
    iconColor: "text-[#635BFF]",
  },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 sm:py-28 md:py-36 bg-gradient-to-b from-[#E7F3EB] via-[#D8EFE0] to-[#E3F2E8] overflow-hidden relative">
      {/* ── Layered Atmospheric Emerald Mesh & Dot Texture ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(5, 150, 105, 0.16) 0%, rgba(16, 185, 129, 0.08) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 95, 70, 0.14) 0%, rgba(20, 184, 166, 0.07) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #065f46 1.2px, transparent 1.2px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center max-w-3xl relative z-10">
        <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-primary border border-emerald-500/20 text-[10px] font-extrabold uppercase tracking-widest shadow-2xs">
          Core Production Stack
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-tight mb-4">
          Engineered With{" "}
          <span className="font-serif-accent italic text-primary">Industry-Standard Tooling.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#2D2D30] leading-relaxed max-w-xl mx-auto font-medium">
          We build on enterprise-grade frameworks that guarantee sub-second speed, 99.9% uptime, and scalable business logic.
        </p>
      </div>

      {/* Marquee Wrapper with side fade masks */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6 z-10">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 md:w-52 bg-gradient-to-r from-[#E7F3EB] via-[#D8EFE0]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 md:w-52 bg-gradient-to-l from-[#E7F3EB] via-[#D8EFE0]/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left (Forward) */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          {[...rowOne, ...rowOne, ...rowOne].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`r1-${idx}`}
                className="group mx-3 sm:mx-4 flex items-center gap-4 px-6 sm:px-8 py-5 sm:py-6 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/90 shadow-xl shadow-emerald-950/[0.06] hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[280px] sm:min-w-[320px] shrink-0"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50/80 group-hover:bg-primary/10 flex items-center justify-center transition-colors text-3xl shrink-0 shadow-xs">
                  <Icon className={`${tech.iconColor} transition-transform group-hover:scale-110`} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] group-hover:text-primary transition-colors leading-tight">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                    {tech.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Scrolling Right (Reverse) */}
        <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...rowTwo, ...rowTwo, ...rowTwo].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`r2-${idx}`}
                className="group mx-3 sm:mx-4 flex items-center gap-4 px-6 sm:px-8 py-5 sm:py-6 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/90 shadow-xl shadow-emerald-950/[0.06] hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[280px] sm:min-w-[320px] shrink-0"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50/80 group-hover:bg-primary/10 flex items-center justify-center transition-colors text-3xl shrink-0 shadow-xs">
                  <Icon className={`${tech.iconColor} transition-transform group-hover:scale-110`} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] group-hover:text-primary transition-colors leading-tight">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                    {tech.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
