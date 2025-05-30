'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '@/components/ui';

// Abstract Geometric Composition Component
const GeometricComposition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Create stable particles array to prevent hydration mismatches
  const particles = useState(() => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: 20 + i * 10,
    top: 30 + (i % 3) * 20,
    animationDuration: 15 + i * 2,
    animationDelay: i * 0.5
  })))[0];

  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Intersection Observer for scroll animation
  useEffect(() => {
    if (!isMounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMounted]);

  // Subtle mouse parallax effect
  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      const moveX = xPercent * 15; // 15px max movement
      const moveY = yPercent * 15;
      
      containerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMounted]);

  return (
    <div className="relative w-full h-full overflow-hidden" suppressHydrationWarning>
      <div ref={containerRef} className="relative w-full h-full transition-transform duration-300 ease-out">
        {/* Connecting Lines SVG */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          style={{ zIndex: 1 }}
        >
          {/* Line from large circle to medium circle */}
          <path
            d="M 60% 35% Q 45% 45% 35% 55%"
            stroke="#D9E5C1"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            strokeDasharray="5,5"
            className={`transition-all duration-1000 ease-out ${
              isMounted && isVisible ? 'animate-draw-line' : ''
            }`}
            style={{
              strokeDashoffset: isMounted && isVisible ? '0' : '100',
            }}
          />
          
          {/* Line from medium circle to small circle */}
          <path
            d="M 45% 60% Q 55% 65% 65% 75%"
            stroke="#B8C9A3"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            strokeDasharray="3,7"
            className={`transition-all duration-1200 ease-out delay-300 ${
              isMounted && isVisible ? 'animate-draw-line' : ''
            }`}
            style={{
              strokeDashoffset: isMounted && isVisible ? '0' : '80',
            }}
          />
          
          {/* Line from rectangle to large circle */}
          <path
            d="M 35% 40% L 55% 30%"
            stroke="#FAF9F6"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
            strokeDasharray="2,4"
            className={`transition-all duration-800 ease-out delay-500 ${
              isMounted && isVisible ? 'animate-draw-line' : ''
            }`}
            style={{
              strokeDashoffset: isMounted && isVisible ? '0' : '60',
            }}
          />
          
          {/* Line from bottom rectangle to small circle */}
          <path
            d="M 55% 70% Q 60% 72% 65% 75%"
            stroke="#D9E5C1"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
            strokeDasharray="4,6"
            className={`transition-all duration-1000 ease-out delay-700 ${
              isMounted && isVisible ? 'animate-draw-line' : ''
            }`}
            style={{
              strokeDashoffset: isMounted && isVisible ? '0' : '70',
            }}
          />
          
          {/* Curved connection across the composition */}
          <path
            d="M 25% 45% Q 50% 35% 75% 50% Q 60% 65% 45% 75%"
            stroke="#B8C9A3"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
            strokeDasharray="8,12"
            className={`transition-all duration-1500 ease-out delay-200 ${
              isMounted && isVisible ? 'animate-draw-line' : ''
            }`}
            style={{
              strokeDashoffset: isMounted && isVisible ? '0' : '200',
            }}
          />
        </svg>

        {/* Large background circle */}
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, #FAF9F6 0%, #D9E5C1 100%)',
            filter: 'blur(40px)',
            zIndex: 2,
          }}
        />
        
        {/* Medium circle with rotation animation */}
        <div 
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-30 animate-slow-spin"
          style={{
            background: 'linear-gradient(45deg, #D9E5C1 0%, #B8C9A3 100%)',
            filter: 'blur(20px)',
            animationDuration: '20s',
            zIndex: 2,
          }}
        />
        
        {/* Small floating circle */}
        <div 
          className="absolute top-3/4 right-1/2 w-32 h-32 rounded-full opacity-25 animate-float"
          style={{
            background: 'radial-gradient(circle, #D9E5C1 0%, transparent 70%)',
            filter: 'blur(15px)',
            zIndex: 2,
          }}
        />
        
        {/* Abstract rectangles */}
        <div 
          className="absolute top-1/3 left-1/4 w-48 h-24 opacity-15 rotate-12"
          style={{
            background: 'linear-gradient(90deg, #FAF9F6 0%, #D9E5C1 50%, transparent 100%)',
            filter: 'blur(25px)',
            borderRadius: '16px',
            zIndex: 2,
          }}
        />
        
        <div 
          className="absolute bottom-1/3 right-1/3 w-40 h-40 opacity-20 -rotate-12"
          style={{
            background: 'linear-gradient(135deg, #B8C9A3 0%, #D9E5C1 100%)',
            filter: 'blur(30px)',
            borderRadius: '20px',
            zIndex: 2,
          }}
        />
        
        {/* Floating particles */}
        {isMounted && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-matcha rounded-full opacity-40"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float-up ${particle.animationDuration}s linear infinite`,
              animationDelay: `${particle.animationDelay}s`,
              zIndex: 3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Main Hero Section Component
export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-ivory overflow-hidden pt-20" suppressHydrationWarning>
      {/* Subtle noise texture overlay - only render on client */}
      {isMounted && (
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
      
      {/* Main content container */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-[55%_45%]" suppressHydrationWarning>
        {/* Left Content Side */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-20 py-12 lg:py-20">
          {/* Main Content */}
          <div className="max-w-2xl">
            {/* Main Headline */}
            <h1 className="mb-8" suppressHydrationWarning>
              <span 
                className="block text-charcoal leading-none"
                style={isMounted ? {
                  fontSize: 'clamp(48px, 8vw, 96px)',
                  letterSpacing: '-0.03em',
                  fontWeight: '900',
                  textShadow: '0 2px 4px rgba(0,0,0,0.02)',
                } : {
                  fontSize: '48px',
                  letterSpacing: '-0.03em',
                  fontWeight: '900',
                  textShadow: '0 2px 4px rgba(0,0,0,0.02)',
                }}
              >
                DIGITAL
              </span>
              <span 
                className="block text-charcoal leading-none"
                style={isMounted ? {
                  fontSize: 'clamp(48px, 8vw, 96px)',
                  letterSpacing: 'normal',
                  fontWeight: '900',
                  textShadow: '0 2px 4px rgba(0,0,0,0.02)',
                } : {
                  fontSize: '48px',
                  letterSpacing: 'normal',
                  fontWeight: '900',
                  textShadow: '0 2px 4px rgba(0,0,0,0.02)',
                }}
              >
                EXCELLENCE.
              </span>
              <span 
                className="block leading-none mt-2"
                style={isMounted ? {
                  fontSize: 'clamp(36px, 6vw, 72px)',
                  color: '#4A4A4A',
                  fontWeight: '700',
                  textShadow: '0 2px 4px rgba(0,0,0,0.02)',
                } : {
                  fontSize: '36px',
                  color: '#4A4A4A',
                  fontWeight: '700',
                  textShadow: '0 2px 4px rgba(0,0,0,0.02)',
                }}
              >
                END TO END.
              </span>
            </h1>
            
            {/* Subtext */}
            <p 
              className="mb-10 leading-relaxed"
              style={{
                fontSize: '24px',
                color: '#4A4A4A',
                maxWidth: '480px',
                lineHeight: '1.6',
              }}
              suppressHydrationWarning
            >
              Full-stack development, infrastructure audits, and AI automation. 
              Scandinavian precision meets enterprise power.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton 
                hasArrow
                ariaLabel="Explore our services"
                className="transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                Explore Services
              </PrimaryButton>
              <SecondaryButton 
                variant="secondary"
                ariaLabel="View our work portfolio"
                className="transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
              >
                View Our Work
              </SecondaryButton>
            </div>
          </div>
        </div>
        
        {/* Vertical Divider Line */}
        <div className="hidden lg:block absolute left-[55%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-silver/30 to-transparent" />
        
        {/* Right Visual Side */}
        <div className="relative flex items-center justify-center p-8 lg:p-16 order-first lg:order-last min-h-[40vh] lg:min-h-screen">
          <GeometricComposition />
        </div>
      </div>
      
      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes slow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        .animate-float {
          animation: float-up 15s linear infinite;
        }
        
        .animate-draw-line {
          animation: draw-line 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
} 