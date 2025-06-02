'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PrincipleCard {
  icon: string;
  title: string;
  subtitle: string;
}

const principles: PrincipleCard[] = [
  {
    icon: 'clarity',
    title: 'Clarity in Complexity',
    subtitle: 'Simplifying intricate systems into elegant, understandable solutions'
  },
  {
    icon: 'infrastructure',
    title: 'Infrastructure with Integrity',
    subtitle: 'Building robust foundations that scale with unwavering reliability'
  },
  {
    icon: 'aesthetics',
    title: 'Aesthetics meet Architecture',
    subtitle: 'Where beautiful design intersects with powerful functionality'
  },
  {
    icon: 'precision',
    title: 'Precision-coded, Human-centered',
    subtitle: 'Technical excellence crafted around real human experiences'
  }
];

const IconComponent = ({ type }: { type: string }) => {
  const getIcon = () => {
    switch (type) {
      case 'clarity':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="group-hover:scale-110 transition-transform duration-300">
            <circle
              cx="24" cy="24" r="20"
              stroke="#D9E5C1"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-matcha transition-colors duration-300"
            />
            <path
              d="M16 24h16M24 16v16"
              stroke="#B8C9A3"
              strokeWidth="2"
              strokeLinecap="round"
              className="group-hover:stroke-matcha-dark transition-colors duration-300"
            />
          </svg>
        );
      case 'infrastructure':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="group-hover:scale-110 transition-transform duration-300">
            <rect
              x="8" y="32" width="32" height="8"
              fill="#D9E5C1"
              className="group-hover:fill-matcha transition-colors duration-300"
            />
            <rect
              x="16" y="20" width="16" height="12"
              fill="#B8C9A3"
              className="group-hover:fill-matcha-dark transition-colors duration-300"
            />
            <rect
              x="20" y="8" width="8" height="12"
              fill="#A0B885"
              className="group-hover:fill-green-600 transition-colors duration-300"
            />
          </svg>
        );
      case 'aesthetics':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="group-hover:scale-110 transition-transform duration-300">
            <path
              d="M24 8L36 20L24 32L12 20L24 8Z"
              fill="#D9E5C1"
              className="group-hover:fill-matcha transition-colors duration-300"
            />
            <circle
              cx="24" cy="20" r="8"
              fill="#B8C9A3"
              className="group-hover:fill-matcha-dark transition-colors duration-300"
            />
          </svg>
        );
      case 'precision':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="group-hover:scale-110 transition-transform duration-300">
            <circle
              cx="24" cy="24" r="16"
              stroke="#D9E5C1"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-matcha transition-colors duration-300"
            />
            <circle
              cx="24" cy="24" r="8"
              stroke="#B8C9A3"
              strokeWidth="2"
              fill="none"
              className="group-hover:stroke-matcha-dark transition-colors duration-300"
            />
            <circle
              cx="24" cy="24" r="2"
              fill="#A0B885"
              className="group-hover:fill-green-600 transition-colors duration-300"
            />
          </svg>
        );
      default:
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="16" stroke="#D9E5C1" strokeWidth="2" fill="none" />
          </svg>
        );
    }
  };

  return <div className="w-12 h-12">{getIcon()}</div>;
};

const PrincipleCardComponent = ({ 
  principle, 
  index, 
  isInView 
}: { 
  principle: PrincipleCard; 
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div 
      className="bg-[#FAFAFA] border border-[#E5E5E5] p-8 rounded-lg cursor-pointer relative overflow-hidden group"
      initial={{ 
        opacity: 0, 
        x: -60,
        scale: 0.9
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        borderColor: '#D9E5C1',
        boxShadow: "0 20px 40px -10px rgba(184, 201, 163, 0.2)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-matcha/5 to-matcha/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="mb-4"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          <IconComponent type={principle.icon} />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-medium text-[#1F1F1F] mt-4 mb-2"
          whileHover={{
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          {principle.title}
        </motion.h3>
        
        <motion.p 
          className="text-base text-[#6B6B6B]"
          whileHover={{
            color: '#4B4B4B',
            transition: { duration: 0.2 }
          }}
        >
          {principle.subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

const WireframeGlobe = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div 
      className="relative w-96 h-96"
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
    >
      {/* Base sphere with gradient */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, 
              rgba(184, 201, 163, 0.1) 0%, 
              rgba(184, 201, 163, 0.05) 40%, 
              rgba(184, 201, 163, 0.15) 100%
            )
          `,
          filter: 'blur(1px)',
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.svg
        width="384"
        height="384"
        viewBox="0 0 384 384"
        className="absolute inset-0"
        style={{ filter: 'drop-shadow(0 8px 20px rgba(184, 201, 163, 0.3))' }}
        animate={{ 
          rotateY: [0, 360],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {/* Define gradients for 3D effect */}
        <defs>
          <radialGradient id="sphereGradient" cx="0.3" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="rgba(184, 201, 163, 0.8)" />
            <stop offset="50%" stopColor="rgba(184, 201, 163, 0.4)" />
            <stop offset="100%" stopColor="rgba(184, 201, 163, 0.1)" />
          </radialGradient>
          
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(184, 201, 163, 0.9)" />
            <stop offset="50%" stopColor="rgba(184, 201, 163, 0.6)" />
            <stop offset="100%" stopColor="rgba(184, 201, 163, 0.2)" />
          </linearGradient>
        </defs>

        {/* Background sphere for depth */}
        <motion.circle
          cx="192"
          cy="192"
          r="180"
          fill="url(#sphereGradient)"
          opacity={0.3}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Longitude lines (meridians) with 3D perspective */}
        {[...Array(16)].map((_, i) => {
          const angle = (i * 22.5) * Math.PI / 180;
          const skew = Math.cos(angle) * 0.7; // Create 3D skewing effect
          const opacity = Math.abs(Math.cos(angle)) * 0.8 + 0.3;
          const strokeWidth = Math.abs(Math.cos(angle)) * 1.5 + 0.5;
          
          return (
            <motion.ellipse
              key={`meridian-${i}`}
              cx="192"
              cy="192"
              rx={Math.abs(skew) * 180}
              ry="180"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth={strokeWidth}
              opacity={opacity}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: opacity } : {}}
              transition={{ 
                duration: 2.5, 
                delay: 1 + (i * 0.05),
                ease: "easeInOut"
              }}
              transform={`rotate(${i * 11.25} 192 192) skewX(${skew * 10})`}
            />
          );
        })}
        
        {/* Latitude lines with 3D perspective */}
        {[...Array(9)].map((_, i) => {
          const latAngle = ((i - 4) * 20) * Math.PI / 180;
          const yOffset = Math.sin(latAngle) * 140;
          const radius = Math.cos(latAngle) * 160;
          const perspective = Math.cos(latAngle) * 0.8 + 0.2;
          
          if (radius < 20) return null; // Don't render very small circles
          
          return (
            <motion.ellipse
              key={`latitude-${i}`}
              cx="192"
              cy={192 + yOffset}
              rx={radius}
              ry={radius * perspective}
              fill="none"
              stroke="rgba(184, 201, 163, 0.7)"
              strokeWidth={1.2}
              opacity={perspective * 0.8}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ 
                duration: 2, 
                delay: 1.5 + (i * 0.1),
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* 3D connection nodes with varying sizes based on depth */}
        {[...Array(32)].map((_, i) => {
          const angle1 = (i * 11.25) * Math.PI / 180;
          const angle2 = (i * 17) * Math.PI / 180;
          const depth = Math.sin(angle1) * Math.cos(angle2);
          const x = 192 + Math.cos(angle1) * (120 + Math.sin(angle2) * 60);
          const y = 192 + Math.sin(angle1) * (120 + Math.cos(angle2) * 60);
          const size = (depth + 1) * 2 + 1; // Size based on depth
          const opacity = (depth + 1) * 0.4 + 0.3;
          
          return (
            <motion.circle
              key={`node-${i}`}
              cx={x}
              cy={y}
              r={size}
              fill="rgba(184, 201, 163, 0.9)"
              filter={depth > 0 ? 'url(#glow)' : undefined}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: [0, 1.3, 1], 
                opacity: opacity
              } : {}}
              transition={{ 
                duration: 1, 
                delay: 2 + (i * 0.03),
                ease: "easeOut"
              }}
            />
          );
        })}

        {/* Orbital rings for extra 3D effect */}
        {[...Array(3)].map((_, i) => {
          const ringRadius = 100 + i * 40;
          const ringAngle = i * 60;
          
          return (
            <motion.ellipse
              key={`ring-${i}`}
              cx="192"
              cy="192"
              rx={ringRadius}
              ry={ringRadius * 0.3}
              fill="none"
              stroke="rgba(184, 201, 163, 0.3)"
              strokeWidth="1"
              strokeDasharray="5,5"
              opacity={0.5}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ 
                duration: 3, 
                delay: 2.5 + (i * 0.2),
                ease: "easeInOut"
              }}
              transform={`rotate(${ringAngle} 192 192)`}
            />
          );
        })}

        {/* Glow filter definition */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </motion.svg>

      {/* Floating data particles with 3D movement */}
      {[...Array(12)].map((_, i) => {
        const orbitRadius = 200 + (i % 3) * 30;
        const orbitSpeed = 8 + (i % 4) * 2;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-matcha rounded-full"
            style={{
              left: '50%',
              top: '50%',
              boxShadow: '0 0 12px rgba(184, 201, 163, 0.8)',
              filter: 'blur(0.5px)',
            }}
            animate={{
              x: [
                Math.cos(0) * orbitRadius,
                Math.cos(Math.PI / 2) * orbitRadius,
                Math.cos(Math.PI) * orbitRadius,
                Math.cos(3 * Math.PI / 2) * orbitRadius,
                Math.cos(2 * Math.PI) * orbitRadius,
              ],
              y: [
                Math.sin(0) * orbitRadius * 0.3,
                Math.sin(Math.PI / 2) * orbitRadius * 0.3,
                Math.sin(Math.PI) * orbitRadius * 0.3,
                Math.sin(3 * Math.PI / 2) * orbitRadius * 0.3,
                Math.sin(2 * Math.PI) * orbitRadius * 0.3,
              ],
              scale: [1, 1.5, 1, 0.5, 1],
              opacity: [0.4, 1, 0.4, 0.2, 0.4],
            }}
            transition={{
              duration: orbitSpeed,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        );
      })}

      {/* Atmospheric glow around the globe */}
      <motion.div
        className="absolute inset-[-20px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184, 201, 163, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

const SecondaryGlobe = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div 
      className="relative w-64 h-64"
      initial={{ opacity: 0, scale: 0.5, rotateY: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
    >
      {/* Base sphere with gradient */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 40% 40%, 
              rgba(184, 201, 163, 0.15) 0%, 
              rgba(184, 201, 163, 0.08) 40%, 
              rgba(184, 201, 163, 0.2) 100%
            )
          `,
          filter: 'blur(1px)',
        }}
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.svg
        width="256"
        height="256"
        viewBox="0 0 256 256"
        className="absolute inset-0"
        style={{ filter: 'drop-shadow(0 6px 15px rgba(184, 201, 163, 0.25))' }}
        animate={{ 
          rotateY: [360, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {/* Define gradients for 3D effect */}
        <defs>
          <radialGradient id="secondaryGradient" cx="0.4" cy="0.4" r="0.6">
            <stop offset="0%" stopColor="rgba(184, 201, 163, 0.7)" />
            <stop offset="50%" stopColor="rgba(184, 201, 163, 0.3)" />
            <stop offset="100%" stopColor="rgba(184, 201, 163, 0.1)" />
          </radialGradient>
        </defs>

        {/* Background sphere for depth */}
        <motion.circle
          cx="128"
          cy="128"
          r="120"
          fill="url(#secondaryGradient)"
          opacity={0.25}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 2.2 }}
        />

        {/* Simplified longitude lines */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const skew = Math.cos(angle) * 0.6;
          const opacity = Math.abs(Math.cos(angle)) * 0.6 + 0.2;
          
          return (
            <motion.ellipse
              key={`secondary-meridian-${i}`}
              cx="128"
              cy="128"
              rx={Math.abs(skew) * 120}
              ry="120"
              fill="none"
              stroke="rgba(184, 201, 163, 0.5)"
              strokeWidth={1}
              opacity={opacity}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ 
                duration: 2, 
                delay: 2.5 + (i * 0.08),
                ease: "easeInOut"
              }}
              transform={`rotate(${i * 15} 128 128) skewX(${skew * 8})`}
            />
          );
        })}
        
        {/* Simplified latitude lines */}
        {[...Array(6)].map((_, i) => {
          const latAngle = ((i - 2.5) * 25) * Math.PI / 180;
          const yOffset = Math.sin(latAngle) * 90;
          const radius = Math.cos(latAngle) * 100;
          const perspective = Math.cos(latAngle) * 0.7 + 0.3;
          
          if (radius < 15) return null;
          
          return (
            <motion.ellipse
              key={`secondary-latitude-${i}`}
              cx="128"
              cy={128 + yOffset}
              rx={radius}
              ry={radius * perspective}
              fill="none"
              stroke="rgba(184, 201, 163, 0.4)"
              strokeWidth={0.8}
              opacity={perspective * 0.6}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ 
                duration: 1.8, 
                delay: 3 + (i * 0.12),
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Connection nodes */}
        {[...Array(20)].map((_, i) => {
          const angle1 = (i * 18) * Math.PI / 180;
          const angle2 = (i * 23) * Math.PI / 180;
          const depth = Math.sin(angle1) * Math.cos(angle2);
          const x = 128 + Math.cos(angle1) * (80 + Math.sin(angle2) * 40);
          const y = 128 + Math.sin(angle1) * (80 + Math.cos(angle2) * 40);
          const size = (depth + 1) * 1.5 + 0.8;
          const opacity = (depth + 1) * 0.3 + 0.2;
          
          return (
            <motion.circle
              key={`secondary-node-${i}`}
              cx={x}
              cy={y}
              r={size}
              fill="rgba(184, 201, 163, 0.8)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: [0, 1.2, 1], 
                opacity: opacity
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 3.5 + (i * 0.04),
                ease: "easeOut"
              }}
            />
          );
        })}
      </motion.svg>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => {
        const orbitRadius = 130 + (i % 2) * 20;
        const orbitSpeed = 10 + (i % 3) * 3;
        
        return (
          <motion.div
            key={`secondary-particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-matcha rounded-full"
            style={{
              left: '50%',
              top: '50%',
              boxShadow: '0 0 8px rgba(184, 201, 163, 0.6)',
            }}
            animate={{
              x: [
                Math.cos(0) * orbitRadius,
                Math.cos(Math.PI) * orbitRadius,
                Math.cos(0) * orbitRadius,
              ],
              y: [
                Math.sin(0) * orbitRadius * 0.4,
                Math.sin(Math.PI) * orbitRadius * 0.4,
                Math.sin(0) * orbitRadius * 0.4,
              ],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: orbitSpeed,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.7,
            }}
          />
        );
      })}

      {/* Atmospheric glow */}
      <motion.div
        className="absolute inset-[-15px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184, 201, 163, 0.15) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default function WhoWeAreSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div suppressHydrationWarning>
      <section 
        className="min-h-screen bg-white relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8f8f8' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-matcha/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main Container */}
        <div ref={ref} className="max-w-[1400px] mx-auto px-6 py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 min-h-[80vh] items-center">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              {/* Headline */}
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, x: -80 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-[#1F1F1F] leading-[1.2] mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  suppressHydrationWarning
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Not just an agency.
                </motion.h2>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-[#1F1F1F] leading-[1.2] bg-gradient-to-r from-charcoal to-matcha bg-clip-text text-transparent"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  suppressHydrationWarning
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  A digital partner.
                </motion.h2>
              </motion.div>

              {/* Principle Cards */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {principles.map((principle, index) => (
                  <PrincipleCardComponent 
                    key={index} 
                    principle={principle} 
                    index={index}
                    isInView={inView}
                  />
                ))}
              </motion.div>
            </div>

            {/* Right Visualization */}
            <div className="flex items-center justify-center order-1 lg:order-2 min-h-[400px] lg:min-h-[600px]" suppressHydrationWarning>
              <div className="w-full h-full max-w-lg lg:max-w-none">
                <WireframeGlobe isInView={inView} />
              </div>
            </div>
          </div>

          {/* Second Globe - positioned lower and more to the right */}
          <motion.div
            className="absolute bottom-16 right-8 lg:bottom-20 lg:right-16 z-10"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={inView ? { opacity: 0.8, scale: 1 } : {}}
            transition={{ duration: 1.8, delay: 1.5, ease: "easeOut" }}
          >
            <SecondaryGlobe isInView={inView} />
          </motion.div>
        </div>

        {/* Background gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(217, 229, 193, 0.08) 0%, rgba(255, 255, 255, 0) 70%)'
          }}
        />
      </section>
    </div>
  );
} 