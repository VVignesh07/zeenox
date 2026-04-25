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
import RevealSection from "@/components/ui/RevealSection";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const Index = () => {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
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
    </>
  );
};

export default Index;
