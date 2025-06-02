'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Icon Components with enhanced hover effects
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

// Enhanced Feature Card Component with Framer Motion
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  index: number;
  isInView: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  description,
  index,
  isInView
}) => {
  const slideDirection = index === 0 ? -100 : index === 2 ? 100 : 0;
  
  return (
    <motion.div 
      className="relative flex flex-col items-center text-center group cursor-pointer"
      initial={{ 
        opacity: 0, 
        x: slideDirection,
        y: index === 1 ? -50 : 0,
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
        stiffness: 100,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Icon Container with enhanced animations */}
      <motion.div 
        className="relative mb-8 p-8 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-md text-charcoal group-hover:border-matcha/50 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-matcha/10 group-hover:shadow-2xl group-hover:shadow-matcha/20 transition-all duration-500"
        whileHover={{
          scale: 1.1,
          rotateY: 5,
          boxShadow: "0 25px 50px -10px rgba(184, 201, 163, 0.3)",
          transition: { duration: 0.3 }
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Floating particles animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 }
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-matcha/30"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.7,
              }}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="relative z-10"
          whileHover={{
            rotateZ: 5,
            transition: { duration: 0.2 }
          }}
        >
          {icon}
        </motion.div>
      </motion.div>
      
      {/* Content with staggered animations */}
      <motion.div 
        className="relative z-10"
        whileHover={{
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <motion.h3 
          className="mb-2 text-3xl font-black text-charcoal group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-matcha group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.h3>
        <motion.h4 
          className="mb-6 text-xl font-semibold text-charcoal/70 group-hover:text-matcha/80 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          {subtitle}
        </motion.h4>
        <motion.p 
          className="text-charcoal/60 leading-relaxed max-w-sm text-lg group-hover:text-charcoal/80 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Decorative background element */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-matcha/0 via-matcha/5 to-matcha/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
      />
    </motion.div>
  );
};

// Main Advantage Section Component
export default function AdvantageSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-matcha/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-coral/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div ref={ref} className="relative container mx-auto px-6">
        {/* Section Header with animations */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="mb-6 text-charcoal font-black tracking-tight bg-gradient-to-r from-charcoal via-charcoal to-matcha bg-clip-text text-transparent"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              letterSpacing: '-0.02em',
              backgroundSize: '200% auto',
            }}
            animate={inView ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            } : {}}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            THE IMP ADVANTAGE
          </motion.h2>
          <div className="relative">
            <motion.p 
              className="text-charcoal/70 font-semibold relative z-10"
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Built on clarity, integrity, execution.
            </motion.p>
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-matcha to-matcha-dark rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={inView ? { width: 96, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </motion.div>
        
        {/* Features Grid with staggered animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              index={index}
              isInView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 