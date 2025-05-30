import HeroSection from "@/components/sections/HeroSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import ServiceModulesSection from "@/components/sections/ServiceModulesSection";
import SystemsInMotionSection from "@/components/sections/SystemsInMotionSection";
import AdvantageSection from "@/components/sections/AdvantageSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { NavigationBar, Footer } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <NavigationBar />
      <ScrollProgress />
      <HeroSection />
      <div id="about">
        <WhoWeAreSection />
      </div>
      <div id="services">
        <ServiceModulesSection />
        <SystemsInMotionSection />
      </div>
      <AdvantageSection />
      <div id="work">
        <CaseStudiesSection />
      </div>
      <div id="contact">
        <ContactFormSection />
      </div>
      <Footer />
    </div>
  );
}
