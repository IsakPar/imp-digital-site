'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

// Animation variants for different heading levels
const fadeUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 // H1 gets 40px movement
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0, 0, 0.2, 1], // ease-out
      delay: 0.1, // 100ms delay
    }
  }
};

const fadeUpVariantsH2: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 // H2 gets 30px movement
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0, 0, 0.2, 1],
      delay: 0.2, // 200ms delay
    }
  }
};

const fadeUpVariantsOthers: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 // H3-H6 get 20px movement
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0, 0, 0.2, 1],
      delay: 0.3, // 300ms delay
    }
  }
};

interface TypographyProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

// H1 Component - 96px desktop, 72px tablet, 48px mobile
export const H1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, animate = true, delay = 0.1, ...props }, ref) => {
    const Component = animate ? motion.h1 : 'h1';
    
    const animationProps = animate ? {
      variants: fadeUpVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1],
        delay,
      }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          // Font family and weight
          "font-sans font-bold",
          // Responsive font sizes - 96px desktop, 72px tablet, 48px mobile
          "text-[48px] md:text-[72px] lg:text-[96px]",
          // Line heights from PRD typography scale
          "leading-[1.1] md:leading-[1.1] lg:leading-[1.1]",
          // Letter spacing
          "tracking-hero",
          // Text color
          "text-charcoal",
          className
        )}
        {...animationProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
H1.displayName = "H1";

// H2 Component - 48px desktop, 40px tablet, 32px mobile
export const H2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, animate = true, delay = 0.2, ...props }, ref) => {
    const Component = animate ? motion.h2 : 'h2';
    
    const animationProps = animate ? {
      variants: fadeUpVariantsH2,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1],
        delay,
      }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          // Font family and weight
          "font-sans font-semibold",
          // Responsive font sizes - 48px desktop, 40px tablet, 32px mobile
          "text-[32px] md:text-[40px] lg:text-[48px]",
          // Line heights
          "leading-[1.2] md:leading-[1.2] lg:leading-[1.2]",
          // Text color
          "text-charcoal",
          className
        )}
        {...animationProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
H2.displayName = "H2";

// H3 Component - 32px desktop, 28px tablet, 24px mobile
export const H3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, animate = true, delay = 0.3, ...props }, ref) => {
    const Component = animate ? motion.h3 : 'h3';
    
    const animationProps = animate ? {
      variants: fadeUpVariantsOthers,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1],
        delay,
      }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          // Font family and weight
          "font-sans font-semibold",
          // Responsive font sizes - 32px desktop, 28px tablet, 24px mobile
          "text-[24px] md:text-[28px] lg:text-[32px]",
          // Line heights
          "leading-[1.3] md:leading-[1.3] lg:leading-[1.3]",
          // Text color
          "text-charcoal",
          className
        )}
        {...animationProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
H3.displayName = "H3";

// H4 Component
export const H4 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, animate = true, delay = 0.3, ...props }, ref) => {
    const Component = animate ? motion.h4 : 'h4';
    
    const animationProps = animate ? {
      variants: fadeUpVariantsOthers,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1],
        delay,
      }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          // Font family and weight
          "font-sans font-medium",
          // Font sizes following the scale
          "text-xl md:text-2xl",
          // Line heights
          "leading-snug",
          // Text color
          "text-charcoal",
          className
        )}
        {...animationProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
H4.displayName = "H4";

// H5 Component
export const H5 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, animate = true, delay = 0.3, ...props }, ref) => {
    const Component = animate ? motion.h5 : 'h5';
    
    const animationProps = animate ? {
      variants: fadeUpVariantsOthers,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1],
        delay,
      }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          // Font family and weight
          "font-sans font-medium",
          // Font sizes following the scale
          "text-lg md:text-xl",
          // Line heights
          "leading-snug",
          // Text color
          "text-charcoal",
          className
        )}
        {...animationProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
H5.displayName = "H5";

// H6 Component
export const H6 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, animate = true, delay = 0.3, ...props }, ref) => {
    const Component = animate ? motion.h6 : 'h6';
    
    const animationProps = animate ? {
      variants: fadeUpVariantsOthers,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1],
        delay,
      }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          // Font family and weight
          "font-sans font-medium",
          // Font sizes following the scale
          "text-base md:text-lg",
          // Line heights
          "leading-normal",
          // Text color
          "text-charcoal",
          className
        )}
        {...animationProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
H6.displayName = "H6";

// Paragraph Component
export const Paragraph = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, animate = false, delay = 0.4, ...props }, ref) => {
    const Component = animate ? motion.p : 'p';
    
    const animationProps = animate ? {
      variants: fadeUpVariantsOthers,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-50px" },
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1],
        delay,
      }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          // Font family and size
          "font-sans text-base",
          // Line height
          "leading-relaxed",
          // Text color
          "text-charcoal",
          className
        )}
        {...animationProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Paragraph.displayName = "Paragraph";

// Text Balance Utility Component
export const TextBalance = forwardRef<HTMLDivElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-balance", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TextBalance.displayName = "TextBalance"; 