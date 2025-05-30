'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ColorVariant } from '@/types';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: ColorVariant | 'white' | 'gradient-primary' | 'gradient-dark';
  id?: string;
  animate?: boolean;
  animationDelay?: number;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'ivory',
  id,
  animate = true,
  animationDelay = 0
}) => {
  // Background color mapping from PRD design system
  const backgroundClasses = {
    ivory: 'bg-ivory',
    matcha: 'bg-matcha',
    charcoal: 'bg-charcoal',
    silver: 'bg-silver',
    gunmetal: 'bg-gunmetal',
    white: 'bg-white',
    'gradient-primary': 'bg-gradient-primary',
    'gradient-dark': 'bg-gradient-dark'
  };

  // Animation variants for scroll-triggered animations
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96], // Spring easing from PRD
        delay: animationDelay
      }
    }
  };

  const MotionSection = animate ? motion.section : 'section';

  return (
    <MotionSection
      id={id}
      className={`
        ${backgroundClasses[background]}
        py-6 md:py-10 lg:py-20
        ${className}
      `}
      {...(animate && {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.1 },
        variants: sectionVariants
      })}
    >
      {children}
    </MotionSection>
  );
};

export default Section; 