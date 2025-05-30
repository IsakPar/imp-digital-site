'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      d="M32 8 L56 52 L8 52 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M32 20 L44 44 L20 44 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
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
      d="M8 12 L56 12 L32 56 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="group-hover:stroke-matcha transition-colors duration-300"
    />
    <path
      d="M20 20 L44 20 L32 44 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
      className="group-hover:stroke-matcha group-hover:opacity-100 transition-all duration-300"
    />
  </svg>
);

// Simplified Connecting Lines Component
const ConnectingLines = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay animation start to ensure smooth transition
          setTimeout(() => setAnimate(true), 100);
        }
      },
      { threshold: 0.3 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, [isMounted]);

  return (
    <svg 
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none" 
      viewBox="0 0 1000 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      suppressHydrationWarning
    >
      {isMounted && (
        <>
          {/* Main horizontal connections */}
          <path
            d="M150 200 Q350 150 650 200"
            stroke="#4A4A4A"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
            strokeDasharray="1200"
            strokeDashoffset={animate ? "0" : "1200"}
            className="transition-all duration-[2000ms] ease-out"
            style={{ transitionDelay: '1000ms' }}
          />
          <path
            d="M150 600 Q350 650 650 600"
            stroke="#4A4A4A"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
            strokeDasharray="1200"
            strokeDashoffset={animate ? "0" : "1200"}
            className="transition-all duration-[2000ms] ease-out"
            style={{ transitionDelay: '3000ms' }}
          />
          
          {/* Vertical connections */}
          <path
            d="M150 200 Q100 400 150 600"
            stroke="#4A4A4A"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            strokeDasharray="800"
            strokeDashoffset={animate ? "0" : "800"}
            className="transition-all duration-[2000ms] ease-out"
            style={{ transitionDelay: '1500ms' }}
          />
          <path
            d="M650 200 Q700 400 650 600"
            stroke="#4A4A4A"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            strokeDasharray="800"
            strokeDashoffset={animate ? "0" : "800"}
            className="transition-all duration-[2000ms] ease-out"
            style={{ transitionDelay: '2000ms' }}
          />
          
          {/* Diagonal cross connections */}
          <path
            d="M150 200 Q400 350 650 600"
            stroke="#4A4A4A"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
            strokeDasharray="1000"
            strokeDashoffset={animate ? "0" : "1000"}
            className="transition-all duration-[2000ms] ease-out"
            style={{ transitionDelay: '2500ms' }}
          />
          <path
            d="M650 200 Q400 350 150 600"
            stroke="#4A4A4A"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
            strokeDasharray="1000"
            strokeDashoffset={animate ? "0" : "1000"}
            className="transition-all duration-[2000ms] ease-out"
            style={{ transitionDelay: '2700ms' }}
          />
        </>
      )}
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
  link: string;
}

const ServiceModule: React.FC<ServiceModuleProps> = ({ 
  icon, 
  title, 
  description, 
  position,
  delay,
  link
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
        relative
        ${positionClasses[position]}
        ${isMounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        transition-all duration-500
      `}
      style={{
        transitionDelay: `${delay}ms`,
        maxWidth: '320px'
      }}
      suppressHydrationWarning
    >
      <Link 
        href={link} 
        className="group block bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:bg-white/80 hover:border-matcha/30 hover:shadow-xl hover:shadow-matcha/10 transition-all duration-500 cursor-pointer transform hover:scale-105"
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
        
        {/* Learn More Text */}
        <div className="px-6 py-2 border border-charcoal/30 text-charcoal text-sm font-medium rounded-lg hover:border-matcha hover:text-matcha hover:bg-matcha/5 transition-all duration-300 group-hover:scale-105 inline-block">
          Learn more
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-matcha/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Link>
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
      delay: 200,
      link: "/services/web-architecture"
    },
    {
      icon: <TriangleIcon />,
      title: "AI & Automation",
      description: "Code that thinks, predicts, and executes.",
      position: 'top-right' as const,
      delay: 400,
      link: "/services/ai-automation"
    },
    {
      icon: <SquareIcon />,
      title: "Cyber Security",
      description: "Integrity by default. Audits, protocols, zero trust.",
      position: 'bottom-left' as const,
      delay: 600,
      link: "/services/cyber-security"
    },
    {
      icon: <InvertedTriangleIcon />,
      title: "Infrastructure & Cloud",
      description: "Scale isn't a goal. It's a requirement.",
      position: 'bottom-right' as const,
      delay: 800,
      link: "/services/infrastructure-cloud"
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
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 