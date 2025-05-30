'use client';

import { useState } from 'react';
import { NavigationBar, Section, Container, H1, H2, H3, H4, Paragraph, PrimaryButton, SecondaryButton, Button } from "@/components/ui";

export default function ButtonsPage() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-ivory">
      <NavigationBar />
      
      <Section className="pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Page Header */}
            <div className="text-center space-y-6">
              <H1>Button Components</H1>
              <Paragraph className="text-xl text-charcoal/80" animate>
                Comprehensive button system with exact PRD specifications, 
                accessibility features, and smooth animations.
              </Paragraph>
            </div>

            {/* Primary Buttons */}
            <div className="space-y-8">
              <H2>Primary Buttons</H2>
              <Paragraph animate>
                Primary buttons use the exact gradient specified in the PRD with hover effects,
                scaling animations, and optional arrow icons.
              </Paragraph>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <H4>Standard Primary</H4>
                  <div className="space-y-4">
                    <PrimaryButton>
                      Standard Button
                    </PrimaryButton>
                    <div className="text-sm text-charcoal/60">
                      • Gradient: linear-gradient(135deg, #D9E5C1 0%, #B8C9A3 100%)<br/>
                      • Hover: Reversed gradient + scale(1.02)<br/>
                      • Active: scale(0.98)
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <H4>With Arrow Icon</H4>
                  <div className="space-y-4">
                    <PrimaryButton hasArrow>
                      Explore Services
                    </PrimaryButton>
                    <div className="text-sm text-charcoal/60">
                      • Arrow animates 4px to the right on hover<br/>
                      • Gap increases from 8px to 12px<br/>
                      • Smooth 300ms transitions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="space-y-8">
              <H2>Secondary Buttons</H2>
              <Paragraph animate>
                Secondary buttons feature transparent backgrounds with 2px solid borders
                that fill with gradient on hover.
              </Paragraph>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <H4>Standard Secondary</H4>
                  <div className="space-y-4">
                    <SecondaryButton variant="secondary">
                      Book Consultation
                    </SecondaryButton>
                    <div className="text-sm text-charcoal/60">
                      • Transparent background<br/>
                      • 2px solid #D9E5C1 border<br/>
                      • Hover: fills with gradient background
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <H4>Disabled State</H4>
                  <div className="space-y-4">
                    <SecondaryButton variant="secondary" disabled>
                      Disabled Button
                    </SecondaryButton>
                    <div className="text-sm text-charcoal/60">
                      • 50% opacity<br/>
                      • No hover effects<br/>
                      • Cursor: not-allowed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Measurements & Specifications */}
            <div className="space-y-8">
              <H2>Exact Measurements</H2>
              <Paragraph animate>
                All buttons follow exact PRD specifications for consistent sizing and spacing.
              </Paragraph>
              
              <div className="bg-white p-8 rounded-xl border border-silver/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <H4>Dimensions</H4>
                    <ul className="space-y-2 text-sm text-charcoal">
                      <li><strong>Padding:</strong> 20px vertical, 40px horizontal</li>
                      <li><strong>Border radius:</strong> 8px</li>
                      <li><strong>Font size:</strong> 18px</li>
                      <li><strong>Min height:</strong> 60px</li>
                      <li><strong>Font weight:</strong> Medium (500)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <H4>Colors & Effects</H4>
                    <ul className="space-y-2 text-sm text-charcoal">
                      <li><strong>Primary gradient:</strong> #D9E5C1 → #B8C9A3</li>
                      <li><strong>Border color:</strong> #D9E5C1</li>
                      <li><strong>Text color:</strong> #1F1F1F (charcoal)</li>
                      <li><strong>Transition:</strong> 200ms ease-out</li>
                      <li><strong>Scale on hover:</strong> 1.02</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* States & Interactions */}
            <div className="space-y-8">
              <H2>States & Interactions</H2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <H4>Loading State</H4>
                  <PrimaryButton 
                    loading={loading}
                    onClick={handleLoadingDemo}
                  >
                    {loading ? 'Loading...' : 'Try Loading'}
                  </PrimaryButton>
                  <Paragraph className="text-sm">
                    Shows spinner and "Loading..." text
                  </Paragraph>
                </div>

                <div className="space-y-4">
                  <H4>Disabled State</H4>
                  <PrimaryButton disabled>
                    Disabled
                  </PrimaryButton>
                  <Paragraph className="text-sm">
                    50% opacity, no interactions
                  </Paragraph>
                </div>

                <div className="space-y-4">
                  <H4>Focus State</H4>
                  <PrimaryButton>
                    Tab to Focus
                  </PrimaryButton>
                  <Paragraph className="text-sm">
                    2px offset ring for keyboard navigation
                  </Paragraph>
                </div>
              </div>
            </div>

            {/* Accessibility Features */}
            <div className="space-y-8">
              <H2>Accessibility Features</H2>
              <Paragraph animate>
                All buttons are built with accessibility as a priority, following WCAG guidelines.
              </Paragraph>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-silver/20 space-y-4">
                  <H4>Keyboard Navigation</H4>
                  <ul className="space-y-2 text-sm text-charcoal">
                    <li>• <strong>Tab:</strong> Navigate between buttons</li>
                    <li>• <strong>Enter/Space:</strong> Activate button</li>
                    <li>• <strong>Focus visible:</strong> Clear focus ring</li>
                    <li>• <strong>Skip links:</strong> Proper tab order</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-silver/20 space-y-4">
                  <H4>Screen Readers</H4>
                  <ul className="space-y-2 text-sm text-charcoal">
                    <li>• <strong>ARIA labels:</strong> Descriptive text</li>
                    <li>• <strong>ARIA busy:</strong> Loading state indication</li>
                    <li>• <strong>Role:</strong> Button semantics</li>
                    <li>• <strong>State:</strong> Disabled/enabled context</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usage Examples */}
            <div className="space-y-8">
              <H2>Usage Examples</H2>
              <div className="bg-charcoal p-6 rounded-xl text-ivory">
                <pre className="text-sm overflow-x-auto">
{`// Primary button with arrow
<PrimaryButton hasArrow ariaLabel="Explore our services">
  Explore Services
</PrimaryButton>

// Secondary button
<SecondaryButton variant="secondary" ariaLabel="Book consultation">
  Book Consultation
</SecondaryButton>

// Loading state
<PrimaryButton loading={isLoading} onClick={handleSubmit}>
  Submit Form
</PrimaryButton>

// Custom styling
<PrimaryButton className="w-full" disabled={!isValid}>
  Continue
</PrimaryButton>`}
                </pre>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="space-y-8">
              <H2>Interactive Demo</H2>
              <div className="bg-white p-8 rounded-xl border border-silver/20">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <PrimaryButton hasArrow ariaLabel="Primary with arrow">
                      Primary Arrow
                    </PrimaryButton>
                    <PrimaryButton ariaLabel="Standard primary">
                      Primary Standard
                    </PrimaryButton>
                    <SecondaryButton variant="secondary" ariaLabel="Secondary button">
                      Secondary
                    </SecondaryButton>
                  </div>
                  
                  <Paragraph className="text-sm text-charcoal/60">
                    Try hovering, clicking, and using keyboard navigation (Tab + Enter) 
                    to test all interaction states and animations.
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