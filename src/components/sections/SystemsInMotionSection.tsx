'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

// Service Module Component
interface ServiceModuleProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  link: string;
  index: number;
  isInView: boolean;
}

const ServiceModule: React.FC<ServiceModuleProps> = ({ 
  icon, 
  title, 
  description, 
  position,
  link,
  index,
  isInView
}) => {
  const positionClasses = {
    'top-left': 'lg:col-start-1 lg:row-start-1 lg:justify-self-start',
    'top-right': 'lg:col-start-3 lg:row-start-1 lg:justify-self-end',
    'bottom-left': 'lg:col-start-1 lg:row-start-2 lg:justify-self-start lg:self-end',
    'bottom-right': 'lg:col-start-3 lg:row-start-2 lg:justify-self-end lg:self-end'
  };

  // Animation direction based on position
  const getAnimationDirection = () => {
    switch (position) {
      case 'top-left':
        return { x: -100, y: -50 };
      case 'top-right':
        return { x: 100, y: -50 };
      case 'bottom-left':
        return { x: -100, y: 50 };
      case 'bottom-right':
        return { x: 100, y: 50 };
      default:
        return { x: 0, y: 50 };
    }
  };

  const animationDirection = getAnimationDirection();

  return (
    <motion.div 
      className={`
        relative
        ${positionClasses[position]}
      `}
      style={{
        maxWidth: '320px'
      }}
      initial={{ 
        opacity: 0, 
        x: animationDirection.x,
        y: animationDirection.y,
        scale: 0.8
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        y: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      suppressHydrationWarning
    >
      <Link 
        href={link} 
        className="group block bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:bg-white/80 hover:border-matcha/30 hover:shadow-xl hover:shadow-matcha/10 transition-all duration-500 cursor-pointer transform hover:scale-105"
      >
        {/* Icon */}
        <motion.div 
          className="mb-6 text-charcoal"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          {icon}
        </motion.div>
        
        {/* Content */}
        <div className="mb-6">
          <motion.h3 
            className="text-xl font-bold text-charcoal mb-3 group-hover:text-matcha-dark transition-colors duration-300"
            whileHover={{
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-charcoal/70 leading-relaxed text-sm"
            whileHover={{
              color: 'rgba(47, 47, 47, 0.9)',
              transition: { duration: 0.2 }
            }}
          >
            {description}
          </motion.p>
        </div>
        
        {/* Learn More Text */}
        <motion.div 
          className="px-6 py-2 border border-charcoal/30 text-charcoal text-sm font-medium rounded-lg hover:border-matcha hover:text-matcha hover:bg-matcha/5 transition-all duration-300 group-hover:scale-105 inline-block"
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 }
          }}
        >
          Learn more
        </motion.div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-matcha/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Link>
    </motion.div>
  );
};

// Main Systems in Motion Section
export default function SystemsInMotionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      icon: <CircleIcon />,
      title: "Web Architecture",
      description: "From frontend pixels to backend pipelines.",
      position: 'top-left' as const,
      link: "/services/web-architecture"
    },
    {
      icon: <TriangleIcon />,
      title: "AI & Automation",
      description: "Code that thinks, predicts, and executes.",
      position: 'top-right' as const,
      link: "/services/ai-automation"
    },
    {
      icon: <SquareIcon />,
      title: "Cyber Security",
      description: "Integrity by default. Audits, protocols, zero trust.",
      position: 'bottom-left' as const,
      link: "/services/cyber-security"
    },
    {
      icon: <InvertedTriangleIcon />,
      title: "Infrastructure & Cloud",
      description: "Scale isn't a goal. It's a requirement.",
      position: 'bottom-right' as const,
      link: "/services/infrastructure-cloud"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-[#F5F2E8] via-[#FAF9F6] to-[#F0EDE5] overflow-hidden">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8C9A3' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-charcoal mb-6 leading-tight"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            SYSTEMS IN{' '}
            <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
              MOTION
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              color: 'rgba(47, 47, 47, 0.9)',
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            Full-stack excellence across every layer of your digital infrastructure.
            Each service designed to integrate seamlessly with the others.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-8 lg:gap-16 items-center justify-items-center min-h-[600px]">
            {/* Central Description */}
            <motion.div 
              className="lg:col-start-2 lg:row-span-2 text-center lg:self-center order-first lg:order-none max-w-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-2xl font-bold text-charcoal mb-4"
                whileHover={{
                  color: '#B8C9A3',
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Integrated Excellence
              </motion.h3>
              <motion.p 
                className="text-charcoal/70 leading-relaxed"
                whileHover={{
                  color: 'rgba(47, 47, 47, 0.9)',
                  transition: { duration: 0.2 }
                }}
              >
                Four core competencies. One unified approach. 
                Every solution designed to work in harmony with your broader digital ecosystem.
              </motion.p>
              
              {/* Animated connecting lines */}
              <motion.div 
                className="hidden lg:block absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <motion.line
                    x1="200" y1="100" x2="200" y2="300"
                    stroke="#B8C9A3"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                  <motion.line
                    x1="100" y1="200" x2="300" y2="200"
                    stroke="#B8C9A3"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, delay: 1.6 }}
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Service Modules */}
            {services.map((service, index) => (
              <ServiceModule
                key={index}
                {...service}
                index={index}
                isInView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 