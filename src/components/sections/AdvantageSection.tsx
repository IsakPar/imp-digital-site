'use client';

import React, { useEffect, useRef, useState } from 'react';

// Icon Components with enhanced animations
const ClarityIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
    <path
      d="M24 4C24 4 36 8 36 20C36 32 24 44 24 44C24 44 12 32 12 20C12 8 24 4 24 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.3"
      className="group-hover:opacity-50 transition-opacity duration-300"
    />
    <circle
      cx="24"
      cy="20"
      r="8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <circle
      cx="24"
      cy="20"
      r="3"
      fill="currentColor"
      opacity="0.6"
      className="group-hover:fill-matcha group-hover:opacity-80 transition-all duration-300"
    />
  </svg>
);

const SecurityIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
    <path
      d="M24 4L36 8V20C36 32 24 44 24 44C24 44 12 32 12 20V8L24 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M18 20L22 24L30 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:stroke-matcha transition-colors duration-300 group-hover:animate-pulse"
    />
  </svg>
);

const SpeedIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
    <circle
      cx="24"
      cy="24"
      r="18"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M24 6V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M42 24H36"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M24 42V36"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M6 24H12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M24 24L30 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="group-hover:stroke-matcha transition-colors duration-300 group-hover:animate-pulse"
    />
    <circle
      cx="24"
      cy="24"
      r="3"
      fill="currentColor"
      className="group-hover:fill-matcha transition-colors duration-300"
    />
  </svg>
);

// Floating particles component
const FloatingParticles = ({ count = 6 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-matcha/30 rounded-full animate-float-slow"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${8 + i}s`,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  description,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMounted]);

  return (
    <div 
      ref={cardRef}
      className="relative flex flex-col items-center text-center group cursor-pointer transition-all duration-300 transform-gpu"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
      suppressHydrationWarning
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-matcha/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110" />
      
      {/* Floating particles */}
      <FloatingParticles count={4} />
      
      {/* Icon Container with enhanced effects */}
      <div className="relative mb-8 p-8 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-md text-charcoal group-hover:border-matcha/50 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-matcha/10 group-hover:shadow-2xl group-hover:shadow-matcha/20 transition-all duration-500 transform group-hover:-translate-y-2">
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-matcha/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="relative z-10">
          {icon}
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-matcha/30 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Title with gradient text effect */}
        <h3 className="mb-2 text-3xl font-black text-charcoal group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-matcha group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        <h4 className="mb-6 text-xl font-semibold text-charcoal/70 group-hover:text-matcha/80 transition-colors duration-300">
          {subtitle}
        </h4>
        
        {/* Description with enhanced typography */}
        <p className="text-charcoal/60 leading-relaxed max-w-sm text-lg group-hover:text-charcoal/80 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Subtle animated underline */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-matcha to-matcha-dark group-hover:w-20 transition-all duration-500" />
    </div>
  );
};

// Main Advantage Section Component
export default function AdvantageSection() {
  const features = [
    {
      icon: <ClarityIcon />,
      title: "Clarity",
      subtitle: "in Code",
      description: "Clean, maintainable code that scales with your business. Every line is purposeful, documented, and built for the long term."
    },
    {
      icon: <SecurityIcon />,
      title: "Security",
      subtitle: "by Design",
      description: "Enterprise-grade security protocols integrated from day one. Your data and infrastructure are protected at every layer."
    },
    {
      icon: <SpeedIcon />,
      title: "Speed",
      subtitle: "by Default",
      description: "Optimized performance that delivers exceptional user experiences. Fast loading times that keep your users engaged."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-ivory/80 via-white to-matcha/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-matcha/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-matcha/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative container mx-auto px-6">
        {/* Section Header with enhanced animations */}
        <div className="text-center mb-20">
          <h2 
            className="mb-6 text-charcoal font-black tracking-tight bg-gradient-to-r from-charcoal via-charcoal to-matcha bg-clip-text text-transparent animate-gradient-x"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              letterSpacing: '-0.02em',
              backgroundSize: '200% auto',
            }}
          >
            THE IMP ADVANTAGE
          </h2>
          <div className="relative">
            <p 
              className="text-charcoal/70 font-semibold relative z-10"
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
              }}
            >
              Built on clarity, integrity, execution.
            </p>
            {/* Animated underline */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-matcha to-matcha-dark rounded-full animate-pulse" />
          </div>
        </div>
        
        {/* Features Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
} 