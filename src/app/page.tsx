import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectEstimator from "@/components/ProjectEstimator";
import PricingSection from "@/components/PricingSection";
import AutozeeSection from "@/components/AutozeeSection";
import ProcessSection from "@/components/ProcessSection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Above-the-fold: High-Impact Value Proposition Hero (Green Gradient) */}
      <HeroSection />

      {/* 2. Core Services (White) */}
      <ServicesSection />

      {/* 3. Lead Magnet: Free Website & Conversion Audit (Green Gradient) */}
      <LeadMagnetSection />

      {/* 4. Verified Live Production Case Studies (White) */}
      <PortfolioSection />

      {/* 5. 60s Interactive Project Cost Estimator (Green Gradient) */}
      <ProjectEstimator />

      {/* 6. Milestone Pricing & FAQ (White) */}
      <PricingSection />

      {/* 7. Autozee.ai - ZeenOx WhatsApp CRM SaaS Engine (Green Gradient) */}
      <AutozeeSection />

      {/* 8. 4-Step Engineering Roadmap (White) */}
      <ProcessSection />

      {/* 9. Founder Story & Truthful Proof (Green Gradient) */}
      <FounderSection />

      {/* 10. Verified Client Feedback & Google Review Link (White) */}
      <TestimonialsSection />

      {/* 11. Minimal Production Tech Stack Marquee (Green Gradient) */}
      <TechStackSection />

      {/* 12. 4-Field Lead Capture Contact Hub (White) */}
      <ContactSection />
    </main>
  );
}
