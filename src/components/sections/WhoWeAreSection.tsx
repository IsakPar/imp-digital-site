'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { DataVisualization } from '@/components/three/DataVisualization';
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
  
  const cardAnimation = {
    initial: { 
      opacity: isMounted ? 0 : 1, 
      x: isMounted ? -120 : 0, 
      y: isMounted ? 30 : 0,
      scale: isMounted ? 0.7 : 1,
      rotateY: isMounted ? -25 : 0,
      filter: isMounted ? "blur(10px)" : "blur(0px)"
    },
    whileInView: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        delay: isMounted ? (index * 0.2 + 0.3) : 0,
        duration: isMounted ? 1.2 : 0,
        ease: [0.22, 1, 0.36, 1],
        scale: {
          type: "spring",
          stiffness: 150,
          damping: 12,
          restDelta: 0.001
        }
      }
    },
    whileHover: {
      x: isMounted ? 20 : 0,
      y: isMounted ? -8 : 0,
      scale: isMounted ? 1.03 : 1,
      rotateY: isMounted ? 5 : 0,
      boxShadow: isMounted ? "0 25px 50px rgba(0,0,0,0.12)" : "0 4px 6px rgba(0,0,0,0.1)",
      borderLeft: isMounted ? "6px solid #D9E5C1" : "1px solid #E5E5E5",
      backgroundColor: isMounted ? "#FDFDFD" : "#FAFAFA",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25,
        boxShadow: { duration: 0.3 },
        backgroundColor: { duration: 0.3 }
      }
    }
  };

  return (
    <motion.div
      className="bg-[#FAFAFA] border border-[#E5E5E5] p-8 rounded-lg cursor-pointer relative overflow-hidden"
      variants={cardAnimation}
      initial="initial"
      whileInView={isMounted ? "whileInView" : {}}
      whileHover={isMounted ? "whileHover" : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: true, amount: 0.3 }}
    >
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
          animate={isHovered && isMounted ? { scale: 1.1, y: -4 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <IconComponent type={principle.icon} isHovered={isHovered} isMounted={isMounted} />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-medium text-[#1F1F1F] mt-4 mb-2"
          animate={isHovered && isMounted ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {principle.title}
        </motion.h3>
        
        <motion.p 
          className="text-base text-[#6B6B6B]"
          animate={isHovered && isMounted ? { x: 4, color: "#4A4A4A" } : { x: 0, color: "#6B6B6B" }}
          transition={{ duration: 0.3 }}
        >
          {principle.subtitle}
        </motion.p>
      </div>
    </motion.div>
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
      clipPath: isMounted ? "polygon(0 0, 0 0, 0 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: isMounted ? 0 : 1,
      x: isMounted ? -50 : 0,
      y: isMounted ? 20 : 0
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
      scale: isMounted ? 0.6 : 1, 
      opacity: isMounted ? 0 : 1,
      filter: isMounted ? "blur(20px)" : "blur(0px)",
      rotateY: isMounted ? -30 : 0
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 min-h-[80vh]">
            
            {/* Left Content */}
            <motion.div 
              className="flex flex-col justify-center"
              style={isMounted ? { y: yCards } : {}}
            >
              {/* Enhanced Headline */}
              <div className="mb-16">
                <motion.h2
                  className="text-5xl font-bold text-[#1F1F1F] leading-[1.2] mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  variants={headlineAnimation}
                  initial="initial"
                  whileInView={isMounted ? "whileInView" : {}}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Not just an agency.
                </motion.h2>
                <motion.h2
                  className="text-5xl font-bold text-[#1F1F1F] leading-[1.2]"
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
                  whileInView={isMounted ? "whileInView" : {}}
                  viewport={{ once: true, amount: 0.3 }}
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
              className="flex items-center justify-center lg:order-none order-first"
              style={isMounted ? { 
                y: yViz,
                rotateY: rotateViz,
                scale: scaleViz
              } : {}}
              variants={vizAnimation}
              initial="initial"
              whileInView={isMounted ? "whileInView" : {}}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full h-[600px] lg:h-[700px] perspective-1000">
                {isMounted && <DataVisualization />}
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