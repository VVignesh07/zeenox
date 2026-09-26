import HeroSection from "@/components/HeroSection";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import PaymentIntegrations from "@/components/PaymentIntegrations";
import TechStackSection from "@/components/TechStackSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import VideoReelsSection from "@/components/VideoReelsSection";
import MotionGraphicsSection from "@/components/MotionGraphicsSection";
import WebsiteSection from "@/components/WebsiteSection";
import RoadmapSection from "@/components/RoadmapSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import WhyZeenoxSection from "@/components/WhyZeenoxSection";
import WorkSection from "@/components/WorkSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import InternshipSection from "@/components/InternshipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import RevealSection from "@/components/ui/RevealSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      <ServicesScrollSection />
      <PaymentIntegrations />

      <RevealSection delay={0.2}>
        <TechStackSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <AboutSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <FounderSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <VideoReelsSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <MotionGraphicsSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <WebsiteSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <RoadmapSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <PricingSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <ServicesSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <WhyZeenoxSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <WorkSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <PortfolioSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <ProcessSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <InternshipSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <TestimonialsSection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <CTASection />
      </RevealSection>

      <RevealSection delay={0.2}>
        <ContactSection />
      </RevealSection>
    </main>
  );
}
