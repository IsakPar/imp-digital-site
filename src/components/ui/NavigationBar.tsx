'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationItem } from '@/types';
import Logo from './Logo';

interface NavigationBarProps {
  items?: NavigationItem[];
  className?: string;
}

// PRD Navigation Items - Default configuration
const defaultNavigationItems: NavigationItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const NavigationBar: React.FC<NavigationBarProps> = ({ 
  items = defaultNavigationItems,
  className = '' 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before showing interactive features
  useEffect(() => {
    setMounted(true);
  }, []);

  // PRD Specification: Sticky behavior after 100px scroll
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    if (!mounted) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, mounted]);

  // Mobile Menu Toggle Button
  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha transition-colors duration-200"
      aria-label="Toggle mobile menu"
      aria-expanded={isMobileMenuOpen}
      type="button"
    >
      <div className="w-6 h-6 flex flex-col justify-center space-y-1">
        <span
          className={`w-full h-0.5 bg-charcoal origin-center transition-transform duration-200 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0'
          }`}
        />
        <span
          className={`w-full h-0.5 bg-charcoal transition-opacity duration-200 ${
            isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`w-full h-0.5 bg-charcoal origin-center transition-transform duration-200 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0'
          }`}
        />
      </div>
    </button>
  );

  // Desktop Navigation Links
  const DesktopNavigation = () => (
    <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-charcoal hover:text-matcha-dark transition-colors duration-200 font-medium relative group py-2"
        >
          {item.label}
          
          {/* Hover underline effect */}
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-matcha scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
        </a>
      ))}
    </nav>
  );

  // CTA Button
  const CTAButton = () => (
    <a
      href="#contact"
      className="btn-primary text-sm px-6 py-3 hidden md:inline-flex"
    >
      Get Started
    </a>
  );

  // Prevent hydration mismatch by not showing scrolled state until mounted
  const navigationClasses = `
    h-20 md:h-20 px-4 md:px-8 flex items-center justify-between
    transition-all duration-500 ease-out
    ${mounted && isScrolled 
      ? 'bg-ivory/80 backdrop-blur-[16px] shadow-lg border-b border-silver/30 backdrop-saturate-[180%]' 
      : 'bg-transparent'
    }
  `;

  return (
    <>
      {/* Main Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out ${className}`}
        style={{
          backdropFilter: mounted && isScrolled ? 'blur(16px) saturate(180%)' : 'none',
        }}
      >
        <div className={navigationClasses}>
          <Logo 
            variant="compact" 
            size="md" 
            href="/" 
            showText={mounted}
            color="#1F1F1F"
          />
          <DesktopNavigation />
          <div className="flex items-center space-x-4">
            <CTAButton />
            <MobileMenuButton />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Only render when mounted */}
      {mounted && (
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-[9998] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                className="fixed top-20 left-4 right-4 bg-ivory rounded-xl shadow-xl border border-silver/20 z-[9999] md:hidden"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <nav className="p-6">
                  {items.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="block py-4 text-lg font-medium text-charcoal hover:text-matcha-dark transition-colors duration-200 border-b border-silver/10 last:border-b-0"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1,
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.a
                    href="#contact"
                    className="btn-primary w-full justify-center mt-6"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: items.length * 0.1,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                  >
                    Get Started
                  </motion.a>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default NavigationBar; 