import React from 'react';
import { NavigationBar, Footer } from '@/components/ui';

export default function TypographyPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <NavigationBar />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Typography System
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              A comprehensive typography system with consistent spacing and hierarchy.
            </p>
          </div>

          {/* Headings */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-charcoal mb-8">Headings</h2>
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-6xl font-bold text-charcoal">Heading 1</h1>
              <h2 className="text-5xl font-bold text-charcoal">Heading 2</h2>
              <h3 className="text-4xl font-bold text-charcoal">Heading 3</h3>
              <h4 className="text-3xl font-bold text-charcoal">Heading 4</h4>
              <h5 className="text-2xl font-bold text-charcoal">Heading 5</h5>
              <h6 className="text-xl font-bold text-charcoal">Heading 6</h6>
            </div>
          </section>

          {/* Body Text */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-charcoal mb-8">Body Text</h2>
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
              <p className="text-xl text-charcoal">Large body text for important content and introductions.</p>
              <p className="text-lg text-charcoal">Medium body text for general content and descriptions.</p>
              <p className="text-base text-charcoal">Regular body text for standard content and paragraphs.</p>
              <p className="text-sm text-charcoal">Small text for captions, labels, and secondary information.</p>
            </div>
          </section>

          {/* Colors */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-8">Text Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Primary Colors</h3>
                <div className="space-y-2">
                  <p className="text-charcoal">Charcoal - Primary text</p>
                  <p className="text-charcoal/70">Charcoal 70% - Secondary text</p>
                  <p className="text-charcoal/50">Charcoal 50% - Muted text</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Accent Colors</h3>
                <div className="space-y-2">
                  <p className="text-matcha">Matcha - Brand accent</p>
                  <p className="text-matcha-dark">Matcha Dark - Hover states</p>
                  <p className="text-blue-600">Blue - Links and actions</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 