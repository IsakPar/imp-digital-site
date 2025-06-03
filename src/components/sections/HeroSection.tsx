'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { PrimaryButton, SecondaryButton } from '@/components/ui';
import { quickPerformanceCheck } from '@/lib/performance-test';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Handle video loading and autoplay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(console.error);
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
  const splitTextIntoLetters = (text: string, variants: Variants, delay: number = 0, isGradient: boolean = false) => {
    return text.split('').map((char, index) => {
      const totalChars = text.length;
      const progress = index / (totalChars - 1);
      
      let letterStyle: Record<string, string | number> = {
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

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-white to-sage/10"></div>
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(217, 229, 193, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(184, 201, 163, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 40%, rgba(217, 229, 193, 0.08) 0%, transparent 50%)
          `
        }}
        animate={{
          background: [
            `radial-gradient(ellipse at 20% 80%, rgba(217, 229, 193, 0.15) 0%, transparent 50%),
             radial-gradient(ellipse at 80% 20%, rgba(184, 201, 163, 0.12) 0%, transparent 50%),
             radial-gradient(ellipse at 40% 40%, rgba(217, 229, 193, 0.08) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 30% 70%, rgba(184, 201, 163, 0.18) 0%, transparent 60%),
             radial-gradient(ellipse at 70% 30%, rgba(217, 229, 193, 0.15) 0%, transparent 50%),
             radial-gradient(ellipse at 50% 50%, rgba(184, 201, 163, 0.10) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 20% 80%, rgba(217, 229, 193, 0.15) 0%, transparent 50%),
             radial-gradient(ellipse at 80% 20%, rgba(184, 201, 163, 0.12) 0%, transparent 50%),
             radial-gradient(ellipse at 40% 40%, rgba(217, 229, 193, 0.08) 0%, transparent 50%)`
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(184, 201, 163, 0.1), rgba(217, 229, 193, 0.05))'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(217, 229, 193, 0.12), rgba(184, 201, 163, 0.08))'
        }}
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.4, 0.2, 0.4],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Additional floating gradient elements */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(184, 201, 163, 0.08) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.8, 1.4, 0.8],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/3 w-48 h-48 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(217, 229, 193, 0.10) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1.1, 0.7, 1.1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Subtle moving grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(184, 201, 163, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184, 201, 163, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px', '0px 0px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
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