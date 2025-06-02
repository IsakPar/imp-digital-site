'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { DeviceCapabilities } from '@/lib/performance';

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationBarProps {
  items?: NavigationItem[];
  className?: string;
}

// PRD Navigation Items - Default configuration
const defaultNavigationItems: NavigationItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '/about' },
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

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  };

  if (!mounted) {
    // Return a static version during SSR to prevent hydration issues
    return (
      <nav className="fixed top-0 left-0 right-0 z-[9999] h-20 px-4 sm:px-6 md:px-16 lg:px-20 flex items-center justify-between bg-ivory/95 backdrop-blur-sm border-b border-silver/20">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-charcoal hover:text-matcha transition-colors duration-200">
            IMP
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-charcoal hover:text-matcha transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[9999] h-20 px-4 sm:px-6 md:px-16 lg:px-20 flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? 'bg-ivory/95 backdrop-blur-sm border-b border-silver/20 shadow-sm' 
            : 'bg-transparent'
        } ${className}`}
        onKeyDown={handleKeyDown}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-charcoal hover:text-matcha transition-colors duration-200"
            aria-label="IMP Digital Home"
          >
            IMP
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-charcoal hover:text-matcha transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-charcoal hover:text-matcha transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Simple Mobile Menu - No animations for better performance */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-[9998] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-20 left-4 right-4 bg-ivory rounded-xl shadow-xl border border-silver/20 z-[9999] md:hidden">
            <div className="p-6 space-y-4">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-lg font-medium text-charcoal hover:text-matcha transition-colors duration-200 py-2"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavigationBar; 