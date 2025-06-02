'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton, SecondaryButton } from '@/components/ui';
import { quickPerformanceCheck } from '@/lib/performance-test';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  // Run performance check on mount (development only)
  useEffect(() => {
    setIsMounted(true);
    if (process.env.NODE_ENV === 'development') {
      // Delay to let initial render complete
      setTimeout(() => {
        quickPerformanceCheck();
      }, 1000);
    }
  }, []);

  // Enhanced animation variants for letter-by-letter effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      x: 0,
      rotateX: -90,
      scale: 0.3,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Different animation variants for different words
  const digitalLetterVariants = {
    hidden: { 
      opacity: 0, 
      x: -120,
      y: 60,
      rotate: -15,
      scale: 0.2,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const excellenceLetterVariants = {
    hidden: { 
      opacity: 0, 
      x: 120,
      y: -40,
      rotate: 15,
      scale: 0.3,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const endToEndLetterVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateY: 90,
      scale: 0.1,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Helper function to split text into individual letters with proper gradient support
  const splitTextIntoLetters = (text: string, variants: any, delay: number = 0, isGradient: boolean = false) => {
    return text.split('').map((char, index) => {
      const totalChars = text.length;
      const progress = index / (totalChars - 1);
      
      let letterStyle: any = {
        transformOrigin: 'center bottom',
        perspective: '1000px'
      };

      // Apply gradient coloring for EXCELLENCE
      if (isGradient) {
        // Create a smooth gradient transition across letters
        const hue1 = 220; // Charcoal-ish hue
        const hue2 = 85;  // Matcha hue
        const currentHue = hue1 + (hue2 - hue1) * progress;
        
        letterStyle = {
          ...letterStyle,
          background: `linear-gradient(135deg, 
            hsl(${currentHue}, 25%, 25%) 0%, 
            hsl(${currentHue + 10}, 45%, 45%) 50%, 
            #B8C9A3 100%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
        };
      }

      return (
        <motion.span
          key={index}
          variants={variants}
          className="inline-block"
          style={letterStyle}
          custom={index}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          transition={{
            delay: delay + (index * 0.03),
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.1,
            color: isGradient ? undefined : '#B8C9A3',
            background: isGradient ? 'linear-gradient(135deg, #B8C9A3 0%, #D9E5C1 50%, #E8F4D6 100%)' : undefined,
            WebkitBackgroundClip: isGradient ? 'text' : undefined,
            backgroundClip: isGradient ? 'text' : undefined,
            WebkitTextFillColor: isGradient ? 'transparent' : undefined,
            transition: { duration: 0.2 }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      );
    });
  };

  // Wireframe Globe Component
  const WireframeGlobe = () => {
    return (
      <motion.div 
        className="relative w-96 h-96"
        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
        animate={isMounted ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
        transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
      >
        <motion.svg
          width="384"
          height="384"
          viewBox="0 0 384 384"
          className="absolute inset-0"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(184, 201, 163, 0.1))' }}
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 15, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Outer sphere wireframe */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const opacity = Math.abs(Math.cos(angle)) * 0.8 + 0.2;
            return (
              <motion.ellipse
                key={`meridian-${i}`}
                cx="192"
                cy="192"
                rx="180"
                ry={Math.abs(Math.cos(angle)) * 180}
                fill="none"
                stroke="rgba(184, 201, 163, 0.4)"
                strokeWidth="1"
                opacity={opacity}
                initial={{ pathLength: 0 }}
                animate={isMounted ? { pathLength: 1 } : {}}
                transition={{ 
                  duration: 2, 
                  delay: 2 + (i * 0.1),
                  ease: "easeInOut"
                }}
                transform={`rotate(${i * 15} 192 192)`}
              />
            );
          })}
          
          {/* Latitude lines */}
          {[...Array(8)].map((_, i) => {
            const yPos = 60 + (i * 32);
            const radius = Math.sin((i * 22.5) * Math.PI / 180) * 160;
            return (
              <motion.circle
                key={`latitude-${i}`}
                cx="192"
                cy={yPos}
                r={radius}
                fill="none"
                stroke="rgba(184, 201, 163, 0.3)"
                strokeWidth="1"
                opacity={0.6}
                initial={{ pathLength: 0 }}
                animate={isMounted ? { pathLength: 1 } : {}}
                transition={{ 
                  duration: 1.5, 
                  delay: 2.5 + (i * 0.05),
                  ease: "easeInOut"
                }}
              />
            );
          })}

          {/* Connection nodes */}
          {[...Array(24)].map((_, i) => {
            const angle1 = (i * 15) * Math.PI / 180;
            const angle2 = (i * 23) * Math.PI / 180;
            const x = 192 + Math.cos(angle1) * (140 + Math.sin(angle2) * 40);
            const y = 192 + Math.sin(angle1) * (100 + Math.cos(angle2) * 30);
            
            return (
              <motion.circle
                key={`node-${i}`}
                cx={x}
                cy={y}
                r="2"
                fill="rgba(184, 201, 163, 0.6)"
                initial={{ scale: 0, opacity: 0 }}
                animate={isMounted ? { 
                  scale: [0, 1.5, 1], 
                  opacity: [0, 1, 0.8] 
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 3 + (i * 0.02),
                  ease: "easeOut"
                }}
              />
            );
          })}

          {/* Inner connecting lines */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5) * Math.PI / 180;
            const x1 = 192 + Math.cos(angle) * 60;
            const y1 = 192 + Math.sin(angle) * 60;
            const x2 = 192 + Math.cos(angle + Math.PI) * 60;
            const y2 = 192 + Math.sin(angle + Math.PI) * 60;
            
            return (
              <motion.line
                key={`inner-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(184, 201, 163, 0.25)"
                strokeWidth="1"
                opacity={0.4}
                initial={{ pathLength: 0 }}
                animate={isMounted ? { pathLength: 1 } : {}}
                transition={{ 
                  duration: 1, 
                  delay: 3.5 + (i * 0.03),
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </motion.svg>

        {/* Floating data points */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`point-${i}`}
            className="absolute w-1 h-1 bg-matcha rounded-full"
            style={{
              left: `${20 + i * 60}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: 4 + i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-white to-sage/10"></div>
      
      {/* Secondary gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(217, 229, 193, 0.05) 50%, transparent 100%)'
        }}
      ></div>
      
      {/* Animated mesh gradient */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(217, 229, 193, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(184, 201, 163, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 40%, rgba(217, 229, 193, 0.08) 0%, transparent 50%)
          `
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-96 h-96 bg-matcha/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-sage/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Additional floating gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-matcha/10 to-sage/5 rounded-full blur-2xl"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-48 h-48 bg-gradient-to-tl from-sage/8 to-matcha/6 rounded-full blur-2xl"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(184, 201, 163, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184, 201, 163, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
          <div className="flex justify-center">
            
            {/* Centered Content */}
            <motion.div 
              className="hero-content relative z-20 text-center max-w-4xl"
              variants={containerVariants}
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
            >
              <div className="max-w-3xl mx-auto">
                {/* Trusted by line */}
                <motion.div
                  className="flex items-center justify-center mb-8 text-sm text-charcoal/60"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isMounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="w-6 h-6 mr-3 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m13 2-2 2.5h3L12 7l-2 2.5h3L11 12l-2 2.5h3L10 17l-2 2.5"/>
                      <path d="M10 22v-6.5"/>
                    </svg>
                  </div>
                  Trusted by modern businesses worldwide
                </motion.div>

                {/* Enhanced Animated heading with letter-by-letter effects */}
                <motion.h1 
                  className="mb-6 sm:mb-8 text-charcoal"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isMounted ? "visible" : "hidden"}
                >
                  <motion.div 
                    className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-charcoal"
                    style={{ perspective: '1000px' }}
                  >
                    {splitTextIntoLetters("DIGITAL", digitalLetterVariants, 0.2, false)}
                  </motion.div>
                  <motion.div 
                    className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                    style={{ perspective: '1000px' }}
                  >
                    {splitTextIntoLetters("EXCELLENCE.", excellenceLetterVariants, 0.8, true)}
                  </motion.div>
                  <motion.div 
                    className="block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mt-1 sm:mt-2"
                    style={{ perspective: '1000px' }}
                  >
                    {splitTextIntoLetters("END TO END.", endToEndLetterVariants, 1.4, false)}
                  </motion.div>
                </motion.h1>
                
                {/* Animated description */}
                <motion.p 
                  className="mb-8 sm:mb-10 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                  variants={textVariants}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ 
                    color: '#4B5563',
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  Full-stack development, infrastructure audits, and AI automation. 
                  Scandinavian precision meets enterprise power.
                </motion.p>
                
                {/* Animated buttons */}
                <motion.div 
                  className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center"
                  variants={buttonVariants}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PrimaryButton 
                      hasArrow
                      ariaLabel="Explore our services"
                      animate={true}
                      className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      Explore Services
                    </PrimaryButton>
                  </motion.div>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SecondaryButton 
                      variant="secondary"
                      ariaLabel="View our work portfolio"
                      animate={true}
                      className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      View Our Work
                    </SecondaryButton>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Enhanced floating decorative elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-3 h-3 bg-matcha/20' : 
              i % 3 === 1 ? 'w-2 h-2 bg-sage/30' : 
              'w-1.5 h-1.5 bg-matcha/40'
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 18}%`,
            }}
            animate={{
              y: [-25, 25, -25],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Additional geometric elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 20}%`,
              top: `${60 + (i % 2) * 25}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            <div className={`w-4 h-4 ${
              i % 2 === 0 ? 'bg-matcha/15 rounded-full' : 'bg-sage/15 rotate-45'
            }`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 