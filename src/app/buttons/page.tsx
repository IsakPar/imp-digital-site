'use client';

import React from 'react';
import { NavigationBar, Footer, PrimaryButton, SecondaryButton } from '@/components/ui';
import { ArrowRight, Download, Play, Heart, Star, Check } from 'lucide-react';

export default function ButtonsPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <NavigationBar />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Button Components
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              A showcase of our button components with various styles and states.
            </p>
          </div>

          {/* Primary Buttons */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-charcoal mb-8">Primary Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Default</h3>
                <PrimaryButton animate={false}>
                  Get Started
                </PrimaryButton>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">With Arrow</h3>
                <PrimaryButton hasArrow animate={false}>
                  Learn More
                </PrimaryButton>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Loading</h3>
                <PrimaryButton loading animate={false}>
                  Processing
                </PrimaryButton>
              </div>
            </div>
          </section>

          {/* Secondary Buttons */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-charcoal mb-8">Secondary Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Default</h3>
                <SecondaryButton variant="secondary" animate={false}>
                  Learn More
                </SecondaryButton>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Loading</h3>
                <SecondaryButton variant="secondary" loading animate={false}>
                  Loading
                </SecondaryButton>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Disabled</h3>
                <SecondaryButton variant="secondary" disabled animate={false}>
                  Disabled
                </SecondaryButton>
              </div>
            </div>
          </section>

          {/* Button Sizes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-charcoal mb-8">Button Sizes</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-wrap gap-4 items-center">
                <PrimaryButton className="text-sm px-4 py-2" animate={false}>
                  Small
                </PrimaryButton>
                <PrimaryButton animate={false}>
                  Medium
                </PrimaryButton>
                <PrimaryButton className="text-lg px-8 py-4" animate={false}>
                  Large
                </PrimaryButton>
              </div>
            </div>
          </section>

          {/* Button with Icons */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-8">Buttons with Icons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <PrimaryButton className="w-full" animate={false}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </PrimaryButton>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <PrimaryButton className="w-full" animate={false}>
                  <Play className="w-4 h-4 mr-2" />
                  Play Video
                </PrimaryButton>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <SecondaryButton variant="secondary" className="w-full" animate={false}>
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </SecondaryButton>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <SecondaryButton variant="secondary" className="w-full" animate={false}>
                  <Star className="w-4 h-4 mr-2" />
                  Favorite
                </SecondaryButton>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 