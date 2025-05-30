'use client';

import { NavigationBar, Section, Container, H1, H2, H3, H4, H5, H6, Paragraph, TextBalance } from "@/components/ui";

export default function TypographyPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <NavigationBar />
      
      <Section className="pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Page Header */}
            <div className="text-center space-y-6">
              <H1>Typography System</H1>
              <TextBalance>
                <Paragraph className="text-xl text-charcoal/80" animate>
                  Showcasing our complete typography hierarchy built with Space Grotesk, 
                  responsive design, and smooth Framer Motion animations.
                </Paragraph>
              </TextBalance>
            </div>

            {/* Typography Scale */}
            <div className="space-y-12">
              <div className="space-y-6">
                <H2>Heading Hierarchy</H2>
                <Paragraph animate>
                  Each heading level is carefully sized for optimal readability across devices,
                  with responsive scaling from mobile to desktop.
                </Paragraph>
              </div>

              {/* H1 Demo */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">
                  H1 - Hero Headlines
                </div>
                <H1 delay={0.1}>
                  Transform Your Digital Vision
                </H1>
                <div className="text-sm text-charcoal/50">
                  96px desktop • 72px tablet • 48px mobile
                </div>
              </div>

              {/* H2 Demo */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">
                  H2 - Section Headlines
                </div>
                <H2 delay={0.2}>
                  Our <span className="gradient-text">Services</span>
                </H2>
                <div className="text-sm text-charcoal/50">
                  48px desktop • 40px tablet • 32px mobile
                </div>
              </div>

              {/* H3 Demo */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">
                  H3 - Subsection Headlines
                </div>
                <H3 delay={0.3}>
                  Full-Stack Development Excellence
                </H3>
                <div className="text-sm text-charcoal/50">
                  32px desktop • 28px tablet • 24px mobile
                </div>
              </div>

              {/* H4 Demo */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">
                  H4 - Component Headlines
                </div>
                <H4 delay={0.4}>
                  Card Titles and Feature Headers
                </H4>
                <div className="text-sm text-charcoal/50">
                  Responsive scaling with 1.25 ratio
                </div>
              </div>

              {/* H5 Demo */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">
                  H5 - Small Headlines
                </div>
                <H5 delay={0.5}>
                  Navigation Items and Labels
                </H5>
                <div className="text-sm text-charcoal/50">
                  Medium weight for subtle emphasis
                </div>
              </div>

              {/* H6 Demo */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">
                  H6 - Micro Headlines
                </div>
                <H6 delay={0.6}>
                  Form Labels and Fine Print Headers
                </H6>
                <div className="text-sm text-charcoal/50">
                  Base size with medium weight
                </div>
              </div>
            </div>

            {/* Animation Demo */}
            <div className="space-y-6">
              <H2 delay={0.7}>Animation Variants</H2>
              <Paragraph animate delay={0.8}>
                All typography components include Framer Motion animations with staggered delays:
              </Paragraph>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card space-y-3">
                  <H4 delay={0.9}>H1 Movement</H4>
                  <Paragraph>40px fade-up with 100ms delay</Paragraph>
                </div>
                <div className="card space-y-3">
                  <H4 delay={1.0}>H2 Movement</H4>
                  <Paragraph>30px fade-up with 200ms delay</Paragraph>
                </div>
                <div className="card space-y-3">
                  <H4 delay={1.1}>H3-H6 Movement</H4>
                  <Paragraph>20px fade-up with 300ms delay</Paragraph>
                </div>
              </div>
            </div>

            {/* Typography in Context */}
            <div className="space-y-6">
              <H2 delay={1.2}>Typography in Context</H2>
              <div className="card space-y-6">
                <H3 delay={1.3}>Article Layout Example</H3>
                <Paragraph animate delay={1.4}>
                  This paragraph demonstrates how our typography system works in real content. 
                  The Space Grotesk font provides excellent readability while maintaining a modern, 
                  technical aesthetic that aligns with our brand values.
                </Paragraph>
                <H4 delay={1.5}>Key Features</H4>
                <ul className="space-y-2 text-charcoal">
                  <li>• Responsive scaling across all device sizes</li>
                  <li>• Consistent vertical rhythm and spacing</li>
                  <li>• Optimized line heights for readability</li>
                  <li>• Smooth Framer Motion animations</li>
                </ul>
                <H5 delay={1.6}>Technical Implementation</H5>
                <Paragraph animate delay={1.7}>
                  Built with TypeScript, Tailwind CSS, and Framer Motion, our typography system 
                  provides type safety, utility-first styling, and performant animations out of the box.
                </Paragraph>
              </div>
            </div>

            {/* Responsive Behavior */}
            <div className="space-y-6">
              <H2 delay={1.8}>Responsive Design</H2>
              <Paragraph animate delay={1.9}>
                The typography system automatically adapts to different screen sizes using 
                Tailwind's responsive prefixes and custom pixel values for precise control.
              </Paragraph>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-silver/20">
                      <th className="text-left py-3 px-4 font-medium">Element</th>
                      <th className="text-left py-3 px-4 font-medium">Mobile (≤768px)</th>
                      <th className="text-left py-3 px-4 font-medium">Tablet (769-1023px)</th>
                      <th className="text-left py-3 px-4 font-medium">Desktop (≥1024px)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-silver/10">
                      <td className="py-3 px-4 font-medium">H1</td>
                      <td className="py-3 px-4">48px</td>
                      <td className="py-3 px-4">72px</td>
                      <td className="py-3 px-4">96px</td>
                    </tr>
                    <tr className="border-b border-silver/10">
                      <td className="py-3 px-4 font-medium">H2</td>
                      <td className="py-3 px-4">32px</td>
                      <td className="py-3 px-4">40px</td>
                      <td className="py-3 px-4">48px</td>
                    </tr>
                    <tr className="border-b border-silver/10">
                      <td className="py-3 px-4 font-medium">H3</td>
                      <td className="py-3 px-4">24px</td>
                      <td className="py-3 px-4">28px</td>
                      <td className="py-3 px-4">32px</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Accessibility */}
            <div className="space-y-6">
              <H2 delay={2.0}>Accessibility Features</H2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card space-y-3">
                  <H4 delay={2.1}>Reduced Motion</H4>
                  <Paragraph>
                    Respects `prefers-reduced-motion` settings by disabling animations 
                    for users who prefer static interfaces.
                  </Paragraph>
                </div>
                <div className="card space-y-3">
                  <H4 delay={2.2}>High Contrast</H4>
                  <Paragraph>
                    Adapts to `prefers-contrast: high` with enhanced color contrast 
                    for better visibility.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
} 