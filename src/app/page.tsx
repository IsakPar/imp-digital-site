'use client';

import HeroSection from "@/components/sections/HeroSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import SystemsInMotionSection from "@/components/sections/SystemsInMotionSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import AdvantageSection from "@/components/sections/AdvantageSection";
import ServiceModulesSection from "@/components/sections/ServiceModulesSection";
import CTASection from "@/components/sections/CTASection";
import { NavigationBar, Footer } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <NavigationBar />
      
      <main>
        <section className="min-h-screen" id="hero">
          <HeroSection />
        </section>
        
        <section id="about" className="min-h-screen">
          <WhoWeAreSection />
        </section>
        
        <section id="advantages" className="min-h-screen">
          <AdvantageSection />
        </section>

        <section id="systems-motion" className="min-h-screen">
          <SystemsInMotionSection />
        </section>

        <section id="services" className="min-h-screen">
          <ServiceModulesSection />
        </section>

        <section id="work" className="min-h-screen">
          <CaseStudiesSection />
        </section>
        
        <section id="contact" className="min-h-screen">
          <CTASection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
