'use client';

import React, { useEffect, useRef, useState } from 'react';

// Geometric Icon Components
const CircleIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
    <circle
      cx="32"
      cy="32"
      r="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <circle
      cx="32"
      cy="32"
      r="12"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
      className="group-hover:stroke-matcha group-hover:opacity-100 transition-all duration-300"
    />
  </svg>
);

const TriangleIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
    <path
      d="M32 8L56 48H8L32 8Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M32 20L44 40H20L32 20Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
      opacity="0.6"
      className="group-hover:stroke-matcha group-hover:opacity-100 transition-all duration-300"
    />
  </svg>
);

const SquareIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 group-hover:rotate-45 transition-all duration-500">
    <rect
      x="8"
      y="8"
      width="48"
      height="48"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <rect
      x="20"
      y="20"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
      className="group-hover:stroke-matcha group-hover:opacity-100 transition-all duration-300"
    />
  </svg>
);

const InvertedTriangleIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
    <path
      d="M8 16H56L32 56L8 16Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M20 24H44L32 44L20 24Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
      opacity="0.6"
      className="group-hover:stroke-matcha group-hover:opacity-100 transition-all duration-300"
    />
  </svg>
);

// Connecting Lines Component
const ConnectingLines = () => {
  const [animate, setAnimate] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg 
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none" 
      viewBox="0 0 1000 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* TEST LINE - Simple hardcoded line to verify animations work */}
      <path
        d="M100 100 L300 100"
        stroke="#7ED321"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
        strokeDasharray="200"
        strokeDashoffset="200"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Main horizontal connections */}
      <path
        d="M150 200 Q350 150 650 200"
        stroke="#4A4A4A"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
        strokeDasharray="1200"
        strokeDashoffset="1200"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '1s' }}
      />
      <path
        d="M150 600 Q350 650 650 600"
        stroke="#4A4A4A"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
        strokeDasharray="1200"
        strokeDashoffset="1200"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '3s' }}
      />
      
      {/* Vertical connections */}
      <path
        d="M150 200 Q100 400 150 600"
        stroke="#4A4A4A"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        strokeDasharray="800"
        strokeDashoffset="800"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '1.5s' }}
      />
      <path
        d="M650 200 Q700 400 650 600"
        stroke="#4A4A4A"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        strokeDasharray="800"
        strokeDashoffset="800"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '2s' }}
      />
      
      {/* Diagonal cross connections */}
      <path
        d="M150 200 Q400 350 650 600"
        stroke="#4A4A4A"
        strokeWidth="1"
        fill="none"
        opacity="0.25"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '2.5s' }}
      />
      <path
        d="M650 200 Q400 350 150 600"
        stroke="#4A4A4A"
        strokeWidth="1"
        fill="none"
        opacity="0.25"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '2.7s' }}
      />
      
      {/* Flowing organic curves - Left side */}
      <path
        d="M50 300 Q150 250 250 300 Q350 350 250 400 Q150 450 50 400 Q-20 350 50 300"
        stroke="#4A4A4A"
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
        strokeDasharray="1500"
        strokeDashoffset="1500"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '3.5s' }}
      />
      
      {/* Flowing organic curves - Right side */}
      <path
        d="M750 300 Q650 250 550 300 Q450 350 550 400 Q650 450 750 400 Q820 350 750 300"
        stroke="#4A4A4A"
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
        strokeDasharray="1500"
        strokeDashoffset="1500"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '3.7s' }}
      />
      
      {/* Central flowing connections */}
      <path
        d="M400 100 Q500 200 400 300 Q300 400 400 500 Q500 600 400 700"
        stroke="#4A4A4A"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
        strokeDasharray="1200"
        strokeDashoffset="1200"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '4s' }}
      />
      
      {/* Additional flowing curves around modules */}
      <path
        d="M100 150 Q200 100 300 150 Q200 200 100 150"
        stroke="#4A4A4A"
        strokeWidth="0.6"
        fill="none"
        opacity="0.15"
        strokeDasharray="600"
        strokeDashoffset="600"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '4.2s' }}
      />
      <path
        d="M500 150 Q600 100 700 150 Q600 200 500 150"
        stroke="#4A4A4A"
        strokeWidth="0.6"
        fill="none"
        opacity="0.15"
        strokeDasharray="600"
        strokeDashoffset="600"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '4.4s' }}
      />
      <path
        d="M100 550 Q200 500 300 550 Q200 600 100 550"
        stroke="#4A4A4A"
        strokeWidth="0.6"
        fill="none"
        opacity="0.15"
        strokeDasharray="600"
        strokeDashoffset="600"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '4.6s' }}
      />
      <path
        d="M500 550 Q600 500 700 550 Q600 600 500 550"
        stroke="#4A4A4A"
        strokeWidth="0.6"
        fill="none"
        opacity="0.15"
        strokeDasharray="600"
        strokeDashoffset="600"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '4.8s' }}
      />
      
      {/* Micro connections between modules */}
      <path
        d="M250 200 Q400 180 550 200"
        stroke="#4A4A4A"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
        strokeDasharray="400"
        strokeDashoffset="400"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '1.8s' }}
      />
      <path
        d="M250 600 Q400 620 550 600"
        stroke="#4A4A4A"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
        strokeDasharray="400"
        strokeDashoffset="400"
        className={animate ? 'animate-draw-line' : ''}
        style={{ animationDelay: '3.2s' }}
      />
    </svg>
  );
};

// Service Module Component
interface ServiceModuleProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  delay: number;
}

const ServiceModule: React.FC<ServiceModuleProps> = ({ 
  icon, 
  title, 
  description, 
  position,
  delay 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const moduleRef = useRef<HTMLDivElement>(null);

  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (moduleRef.current) {
      observer.observe(moduleRef.current);
    }

    return () => observer.disconnect();
  }, [delay, isMounted]);

  const positionClasses = {
    'top-left': 'lg:col-start-1 lg:row-start-1 lg:justify-self-start',
    'top-right': 'lg:col-start-3 lg:row-start-1 lg:justify-self-end',
    'bottom-left': 'lg:col-start-1 lg:row-start-2 lg:justify-self-start lg:self-end',
    'bottom-right': 'lg:col-start-3 lg:row-start-2 lg:justify-self-end lg:self-end'
  };

  return (
    <div 
      ref={moduleRef}
      className={`
        group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 
        hover:bg-white/80 hover:border-matcha/30 hover:shadow-xl hover:shadow-matcha/10
        transition-all duration-500 cursor-pointer transform
        ${positionClasses[position]}
        ${isMounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        transitionDelay: `${delay}ms`,
        maxWidth: '320px'
      }}
      suppressHydrationWarning
    >
      {/* Icon */}
      <div className="mb-6 text-charcoal">
        {icon}
      </div>
      
      {/* Content */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-matcha-dark transition-colors duration-300">
          {title}
        </h3>
        <p className="text-charcoal/70 leading-relaxed text-sm">
          {description}
        </p>
      </div>
      
      {/* Learn More Button */}
      <button className="px-6 py-2 border border-charcoal/30 text-charcoal text-sm font-medium rounded-lg hover:border-matcha hover:text-matcha hover:bg-matcha/5 transition-all duration-300 group-hover:scale-105">
        Learn more
      </button>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-matcha/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

// Main Systems in Motion Section
export default function SystemsInMotionSection() {
  const services = [
    {
      icon: <CircleIcon />,
      title: "Web Architecture",
      description: "From frontend pixels to backend pipelines.",
      position: 'top-left' as const,
      delay: 200
    },
    {
      icon: <TriangleIcon />,
      title: "AI & Automation",
      description: "Code that thinks, predicts, and executes.",
      position: 'top-right' as const,
      delay: 400
    },
    {
      icon: <SquareIcon />,
      title: "Cyber Defence",
      description: "Integrity by default. Audits, protocols, zero trust.",
      position: 'bottom-left' as const,
      delay: 600
    },
    {
      icon: <InvertedTriangleIcon />,
      title: "Infrastructure & Cloud",
      description: "Scale isn't a goal. It's a requirement.",
      position: 'bottom-right' as const,
      delay: 800
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F5F2E8] via-[#FAF9F6] to-[#F0EDE5] overflow-hidden">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="mb-6 text-charcoal font-black tracking-tight"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              letterSpacing: '-0.02em',
            }}
          >
            SYSTEMS IN MOTION
          </h2>
          <p 
            className="text-charcoal/70 font-medium"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
            }}
          >
            Not just services. Modular engines of execution.
          </p>
        </div>
        
        {/* Services Grid with Connecting Lines */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Lines SVG */}
          <ConnectingLines />
          
          {/* Services Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 min-h-[600px] items-center">
            {services.map((service, index) => (
              <ServiceModule
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                position={service.position}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes draw-line {
          from {
            stroke-dashoffset: inherit;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-draw-line {
          animation: draw-line 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
} 