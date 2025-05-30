'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ScrollProgress } from '@/components/animations/ScrollProgress';

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

const IconComponent = ({ type, isHovered, isMounted }: { type: string; isHovered: boolean; isMounted: boolean }) => {
  // Simplified icon variants to prevent hydration mismatch
  const iconVariants = {
    initial: { 
      rotate: 0, 
      scale: 1
    },
    hover: { 
      rotate: [0, -10, 10, 0], 
      scale: 1.3,
      transition: {
        rotate: {
          duration: 0.6,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    },
    animate: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getIcon = () => {
    const baseProps = {
      initial: "initial",
      animate: isMounted ? (isHovered ? 'hover' : 'animate') : 'initial',
      variants: iconVariants
    };

    switch (type) {
      case 'clarity':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <motion.circle
              cx="24" cy="24" r="20"
              stroke="#D9E5C1"
              strokeWidth="2"
              fill="none"
              {...baseProps}
            />
            <motion.path
              d="M16 24h16M24 16v16"
              stroke="#B8C9A3"
              strokeWidth="2"
              strokeLinecap="round"
              {...baseProps}
            />
          </svg>
        );
      case 'infrastructure':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <motion.rect
              x="8" y="32" width="32" height="8"
              fill="#D9E5C1"
              {...baseProps}
            />
            <motion.rect
              x="16" y="20" width="16" height="12"
              fill="#B8C9A3"
              {...baseProps}
            />
            <motion.rect
              x="20" y="8" width="8" height="12"
              fill="#A0B885"
              {...baseProps}
            />
          </svg>
        );
      case 'aesthetics':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <motion.path
              d="M24 8L36 20L24 32L12 20L24 8Z"
              fill="#D9E5C1"
              {...baseProps}
            />
            <motion.circle
              cx="24" cy="20" r="8"
              fill="#B8C9A3"
              {...baseProps}
            />
          </svg>
        );
      case 'precision':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <motion.circle
              cx="24" cy="24" r="16"
              stroke="#D9E5C1"
              strokeWidth="2"
              fill="none"
              {...baseProps}
            />
            <motion.circle
              cx="24" cy="24" r="8"
              stroke="#B8C9A3"
              strokeWidth="2"
              fill="none"
              {...baseProps}
            />
            <motion.circle
              cx="24" cy="24" r="2"
              fill="#A0B885"
              {...baseProps}
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

  // Return static version during SSR, animated version after mount
  if (!isMounted) {
    return <div className="w-12 h-12">{getIcon()}</div>;
  }

  return <div className="w-12 h-12">{getIcon()}</div>;
};

const PrincipleCardComponent = ({ principle, index, isMounted }: { principle: PrincipleCard; index: number; isMounted: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Define different entrance animations for each card
  const getEntranceAnimation = (index: number) => {
    const patterns = [
      // Slide from left with flip
      {
        initial: { 
          opacity: 0, 
          x: -120, 
          rotateY: -90,
          scale: 0.8 
        },
        whileInView: { 
          opacity: 1, 
          x: 0, 
          rotateY: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: index * 0.15
          }
        }
      },
      // Slide from right with rotation
      {
        initial: { 
          opacity: 0, 
          x: 120, 
          rotate: 15,
          scale: 0.9 
        },
        whileInView: { 
          opacity: 1, 
          x: 0, 
          rotate: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.15
          }
        }
      },
      // Scale in with bounce
      {
        initial: { 
          opacity: 0, 
          scale: 0.3, 
          rotate: -10 
        },
        whileInView: { 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 12,
            delay: index * 0.15
          }
        }
      },
      // Diagonal slide with 3D rotation
      {
        initial: { 
          opacity: 0, 
          x: -80, 
          y: 80,
          rotateX: 30,
          rotateZ: 10,
          scale: 0.7 
        },
        whileInView: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          rotateX: 0,
          rotateZ: 0,
          scale: 1,
          transition: {
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: index * 0.15
          }
        }
      }
    ];
    
    return patterns[index % patterns.length];
  };

  const cardAnimation = getEntranceAnimation(index);

  return (
    <motion.div
      className="bg-[#FAFAFA] border border-[#E5E5E5] p-8 rounded-lg cursor-pointer relative overflow-hidden"
      variants={cardAnimation}
      initial="initial"
      whileInView={isMounted ? "whileInView" : {}}
      whileHover={isMounted ? {
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        borderColor: "#D9E5C1",
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      {/* Animated background particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          transition: { duration: 0.4 }
        }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D9E5C1]/40 rounded-full"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-3, 3, -3],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Glowing background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: `radial-gradient(circle at center, ${principle.icon === 'clarity' ? '#D9E5C1' : principle.icon === 'infrastructure' ? '#C8D5B5' : principle.icon === 'aesthetics' ? '#E5EDD9' : '#D9E5C1'}15 0%, transparent 70%)`
        }}
        animate={isHovered && isMounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <motion.div
          animate={isHovered && isMounted ? { 
            scale: 1.15, 
            y: -6,
            rotateZ: 5,
            transition: { duration: 0.3, ease: "easeOut" }
          } : { 
            scale: 1, 
            y: 0,
            rotateZ: 0
          }}
        >
          <IconComponent type={principle.icon} isHovered={isHovered} isMounted={isMounted} />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-medium text-[#1F1F1F] mt-4 mb-2"
          animate={isHovered && isMounted ? { 
            x: 6,
            color: "#2E7D32",
            transition: { duration: 0.2 }
          } : { 
            x: 0,
            color: "#1F1F1F"
          }}
        >
          {principle.title}
        </motion.h3>
        
        <motion.p 
          className="text-base text-[#6B6B6B]"
          animate={isHovered && isMounted ? { 
            x: 6, 
            color: "#4A4A4A",
            scale: 1.02,
            transition: { duration: 0.2 }
          } : { 
            x: 0, 
            color: "#6B6B6B",
            scale: 1
          }}
        >
          {principle.subtitle}
        </motion.p>
      </div>

      {/* Animated border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-[#D9E5C1] opacity-0 pointer-events-none"
        animate={isHovered && isMounted ? {
          opacity: 1,
          scale: 1.01,
          transition: { duration: 0.3 }
        } : {
          opacity: 0,
          scale: 1
        }}
      />

      {/* Corner accent animation */}
      <motion.div
        className="absolute top-2 right-2 w-0 h-0"
        style={{
          borderTop: "8px solid #D9E5C1",
          borderLeft: "8px solid transparent",
        }}
        animate={isHovered && isMounted ? {
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
          transition: { duration: 0.4 }
        } : {}}
      />
    </motion.div>
  );
};

// Simple reliable visualization component
const SimpleVisualization = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Create stable data points using useMemo instead of useState
  const dataPoints = React.useMemo(() => [
    { id: 1, x: 20, y: 30, size: 120, delay: 0 },
    { id: 2, x: 60, y: 20, size: 80, delay: 0.2 },
    { id: 3, x: 75, y: 60, size: 60, delay: 0.4 },
    { id: 4, x: 30, y: 70, size: 90, delay: 0.6 },
    { id: 5, x: 85, y: 40, size: 40, delay: 0.8 },
    { id: 6, x: 15, y: 55, size: 50, delay: 1.0 },
  ], []);

  const connections = React.useMemo(() => [
    { from: { x: 20, y: 30 }, to: { x: 60, y: 20 }, delay: 1.2 },
    { from: { x: 60, y: 20 }, to: { x: 75, y: 60 }, delay: 1.4 },
    { from: { x: 75, y: 60 }, to: { x: 30, y: 70 }, delay: 1.6 },
    { from: { x: 30, y: 70 }, to: { x: 85, y: 40 }, delay: 1.8 },
    { from: { x: 85, y: 40 }, to: { x: 15, y: 55 }, delay: 2.0 },
  ], []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-white via-ivory to-matcha/5 rounded-2xl overflow-hidden border border-matcha/10 shadow-lg shadow-matcha/5">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(217, 229, 193, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217, 229, 193, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {connections.map((connection, index) => (
          <motion.line
            key={index}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isMounted ? { 
              pathLength: 1, 
              opacity: [0, 0.8, 0.5, 0.8, 0.3],
            } : {}}
            transition={{ 
              pathLength: { delay: connection.delay, duration: 1.5, ease: "easeOut" },
              opacity: { 
                delay: connection.delay + 0.5, 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }
            }}
          />
        ))}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(217, 229, 193, 0.8)" />
            <stop offset="50%" stopColor="rgba(184, 201, 163, 1)" />
            <stop offset="100%" stopColor="rgba(217, 229, 193, 0.4)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Data points */}
      {dataPoints.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute rounded-full"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${point.size}px`,
            height: `${point.size}px`,
            background: 'radial-gradient(circle, rgba(217, 229, 193, 0.8) 0%, rgba(184, 201, 163, 0.4) 70%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isMounted ? { 
            scale: [0, 1.1, 1],
            opacity: [0, 0.8, 0.6],
          } : {}}
          transition={{ 
            delay: point.delay,
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 }
          }}
        >
          {/* Inner glow with CSS animations */}
          <div 
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 60%)',
              animationDuration: '3s',
              animationDelay: `${point.delay}s`
            }}
          />
        </motion.div>
      ))}
      
      {/* Floating particles */}
      {isMounted && Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-matcha/40 rounded-full"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Ambient glow overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(217, 229, 193, 0.1) 0%, transparent 70%)',
          filter: 'blur(30px)'
        }}
        animate={isMounted ? {
          opacity: [0.3, 0.6, 0.3]
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isMounted, setIsMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enhanced parallax transforms - only when mounted
  const yViz = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yCards = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const rotateViz = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scaleViz = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1.2]);

  const headlineAnimation = {
    initial: { 
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      opacity: 0,
      x: -50,
      y: 20
    },
    whileInView: { 
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        clipPath: { duration: isMounted ? 1.2 : 0, ease: [0.65, 0, 0.35, 1] },
        opacity: { duration: isMounted ? 0.8 : 0 },
        x: { type: "spring", stiffness: 80, damping: 20 },
        y: { type: "spring", stiffness: 80, damping: 20 }
      }
    }
  };

  const vizAnimation = {
    initial: { 
      scale: 0.6, 
      opacity: 0,
      filter: "blur(20px)",
      rotateY: -30
    },
    whileInView: { 
      scale: 1, 
      opacity: 1,
      filter: "blur(0px)",
      rotateY: 0,
      transition: {
        delay: isMounted ? 0.5 : 0,
        duration: isMounted ? 1.5 : 0,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    }
  };

  return (
    <div suppressHydrationWarning>
      <motion.section 
        ref={sectionRef}
        className="min-h-screen bg-white relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8f8f8' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        initial={isMounted ? { opacity: 0 } : false}
        animate={isMounted && isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Enhanced Scroll Progress Indicator */}
        {isMounted && <ScrollProgress />}
        
        {/* Main Container */}
        <div className="max-w-[1400px] mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 min-h-[80vh] items-center">
            
            {/* Left Content */}
            <motion.div 
              className="flex flex-col justify-center order-2 lg:order-1"
              style={isMounted ? { y: yCards } : {}}
            >
              {/* Enhanced Headline */}
              <div className="mb-16">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-[#1F1F1F] leading-[1.2] mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  variants={headlineAnimation}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.3 }}
                  suppressHydrationWarning
                >
                  Not just an agency.
                </motion.h2>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-[#1F1F1F] leading-[1.2]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  variants={{
                    ...headlineAnimation,
                    whileInView: {
                      ...headlineAnimation.whileInView,
                      transition: {
                        ...headlineAnimation.whileInView.transition,
                        delay: isMounted ? 0.3 : 0
                      }
                    }
                  }}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.3 }}
                  suppressHydrationWarning
                >
                  A digital partner.
                </motion.h2>
              </div>

              {/* Principle Cards with enhanced animations */}
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <PrincipleCardComponent 
                    key={index} 
                    principle={principle} 
                    index={index}
                    isMounted={isMounted}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Visualization with enhanced effects */}
            <motion.div 
              className="flex items-center justify-center order-1 lg:order-2 min-h-[400px] lg:min-h-[600px]"
              style={isMounted ? { 
                y: yViz,
                rotateY: rotateViz,
                scale: scaleViz
              } : {}}
              variants={vizAnimation}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.3 }}
              suppressHydrationWarning
            >
              <div className="w-full h-full max-w-lg lg:max-w-none">
                {isMounted && <SimpleVisualization />}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced background gradient overlay */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(217, 229, 193, 0.08) 0%, rgba(255, 255, 255, 0) 70%)'
          }}
          animate={isMounted ? {
            background: [
              'radial-gradient(ellipse at center, rgba(217, 229, 193, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
              'radial-gradient(ellipse at center, rgba(217, 229, 193, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
              'radial-gradient(ellipse at center, rgba(217, 229, 193, 0.08) 0%, rgba(255, 255, 255, 0) 70%)'
            ]
          } : {}}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.section>
    </div>
  );
} 