'use client';

import React from 'react';
import { NavigationBar, Footer } from '@/components/ui';
import { Home, ArrowLeft, Search, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-matcha/5 text-charcoal">
      <NavigationBar />
      
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Static background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${60 + i * 30}px`,
                height: `${60 + i * 30}px`,
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
                background: `linear-gradient(135deg, ${i % 2 === 0 ? '#D9E5C1' : '#B8C9A3'} 0%, transparent 70%)`,
                filter: 'blur(15px)'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 
              className="text-[12rem] lg:text-[16rem] font-black text-transparent bg-gradient-to-r from-matcha via-matcha-dark to-matcha bg-clip-text leading-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Page Not Found
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into the digital wilderness. 
              Don't worry, we'll help you find your way back.
            </p>
          </div>

          {/* Simple Illustration */}
          <div className="mb-12">
            <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
              <Search className="w-32 h-32 text-matcha opacity-50" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="btn-enhanced-matcha text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-3 px-8 py-4 border-2 border-matcha text-matcha rounded-lg font-semibold hover:bg-matcha hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>

            <button 
              onClick={() => window.location.reload()}
              className="flex items-center gap-3 px-6 py-4 bg-white border border-matcha/30 text-matcha rounded-lg font-medium hover:bg-matcha/5 hover:border-matcha transition-all duration-300 hover:scale-105"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 pt-8 border-t border-matcha/20">
            <p className="text-charcoal/60 mb-4">Or explore our main sections:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/#services", label: "Services" },
                { href: "/#about", label: "About" },
                { href: "/#case-studies", label: "Case Studies" },
                { href: "/#contact", label: "Contact" }
              ].map((link, index) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-matcha hover:text-matcha-dark hover:bg-matcha/5 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 