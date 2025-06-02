'use client';

import React, { useState } from 'react';
import Logo from './Logo';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to subscribe');
      }

      setIsSubscribed(true);
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks: Record<string, FooterLink[]> = {
    Services: [
      { label: 'Full-Stack Development', href: '#services' },
      { label: 'Infrastructure Audits', href: '#services' },
      { label: 'AI Automation', href: '#services' },
      { label: 'Cloud Solutions', href: '#services' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Work', href: '#work' },
      { label: 'Case Studies', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
    Connect: [
      { label: 'LinkedIn', href: '#', external: true },
      { label: 'GitHub', href: '#', external: true },
      { label: 'Twitter', href: '#', external: true },
      { label: 'Email', href: 'mailto:hello@impdigital.com' },
    ],
  };

  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo 
              variant="compact" 
              size="lg" 
              href="/" 
              showText={true}
              color="#FAF9F6"
            />
            <p className="mt-6 text-ivory/70 leading-relaxed max-w-sm">
              Scaninavian precision meets enterprise power. We deliver digital excellence from concept to deployment.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <p className="text-ivory/70 text-sm">
                <span className="text-matcha font-medium">Email:</span>{' '}
                <a href="mailto:hello@impdigital.com" className="hover:text-matcha transition-colors duration-200">
                  hello@impdigital.com
                </a>
              </p>
              <p className="text-ivory/70 text-sm">
                <span className="text-matcha font-medium">Location:</span> Stockholm, Sweden
              </p>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-ivory mb-6">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-ivory/70 hover:text-matcha transition-colors duration-200 group flex items-center"
                      {...(link.external && { 
                        target: '_blank', 
                        rel: 'noopener noreferrer' 
                      })}
                    >
                      {link.label}
                      {link.external && (
                        <svg 
                          className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity duration-200" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-ivory/10">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-ivory mb-4">
              Stay Updated
            </h3>
            <p className="text-ivory/70 mb-6">
              Get insights on digital transformation and development best practices.
            </p>
            {isSubscribed ? (
              <div className="p-4 bg-matcha/20 border border-matcha/30 rounded-lg">
                <p className="text-matcha font-medium">✓ Successfully subscribed!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 bg-ivory/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:ring-2 focus:ring-matcha focus:border-transparent transition-all duration-200 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-matcha hover:bg-matcha-dark text-charcoal font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-matcha focus:ring-offset-2 focus:ring-offset-charcoal disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px]"
                >
                  {isSubmitting ? 'Sending...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-ivory/60 text-sm">
              © {currentYear} IMP Digital. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-8">
              <a 
                href="#privacy" 
                className="text-ivory/60 hover:text-matcha text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-ivory/60 hover:text-matcha text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="#cookies" 
                className="text-ivory/60 hover:text-matcha text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 