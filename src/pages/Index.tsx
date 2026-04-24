import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FounderSection from "@/components/FounderSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ShowreelSection from "@/components/ShowreelSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RoadmapSection from "@/components/RoadmapSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CursorFollower from "@/components/CursorFollower";
import RevealSection from "@/components/ui/RevealSection";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <CursorFollower />
      <div className={loaded ? "opacity-100" : "opacity-0 transition-opacity duration-1000"}>
        <Navbar />
        <main>
          <HeroSection />

          <RevealSection delay={0.2}>
            <TechStackSection />
          </RevealSection>

          <RevealSection delay={0.3}>
            <FounderSection />
          </RevealSection>

          <RevealSection delay={0.2}>
            <ShowreelSection />
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
            <PortfolioSection />
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
        <Footer />
      </div>
    </>
  );
};

export default Index;
