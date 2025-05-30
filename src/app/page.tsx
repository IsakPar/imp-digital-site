import { H2, H3, Paragraph, TextBalance, PrimaryButton, Logo, NavigationBar } from "@/components/ui";
import HeroSection from "@/components/sections/HeroSection";
import AdvantageSection from "@/components/sections/AdvantageSection";
import SystemsInMotionSection from "@/components/sections/SystemsInMotionSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import ServiceModulesSection from "@/components/sections/ServiceModulesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar />
      
      {/* Hero Section - now includes its own logo and layout */}
      <HeroSection />

      {/* IMP Advantage Section */}
      <AdvantageSection />

      {/* Systems in Motion Section */}
      <SystemsInMotionSection />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Service Modules Section */}
      <ServiceModulesSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <H2 delay={1.2}>
            Ready to Transform Your Digital Presence?
          </H2>
          <TextBalance>
            <Paragraph className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto" animate delay={1.3}>
              Let&apos;s discuss your project and explore how we can bring your vision to life.
            </Paragraph>
          </TextBalance>
          <PrimaryButton 
            hasArrow
            ariaLabel="Start your project with us"
            className="bg-white text-charcoal hover:bg-white/90 border-0"
          >
            Start Your Project
          </PrimaryButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-ivory py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Logo 
                variant="compact" 
                size="sm" 
                showText={false}
                color="#FAF9F6"
              />
              <span className="text-lg font-semibold">Digital Services</span>
            </div>
            
            <div className="text-sm text-ivory/60">
              © 2025 IMP Digital Services. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
