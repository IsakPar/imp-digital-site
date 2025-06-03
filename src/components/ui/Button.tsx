'use client';

import React, { useState, useEffect, forwardRef, ReactNode } from 'react';
import { DeviceCapabilities, OptimizedAnimations, BundleOptimization } from '@/lib/performance';
import { cn } from '@/lib/utils';

// Arrow icon optimized for performance - with proper prop handling
const ArrowIcon = ({ width = "16", height = "16", className = "w-4 h-4 flex-shrink-0" }: { 
  width?: string; 
  height?: string; 
  className?: string; 
}) => (
  <svg 
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path 
      d="M3.5 8h9m0 0l-3.5-3.5M12.5 8l-3.5 3.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Base button props interface
interface ButtonBaseProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

interface PrimaryButtonProps extends ButtonBaseProps {
  variant?: 'primary';
  hasArrow?: boolean;
}

interface SecondaryButtonProps extends ButtonBaseProps {
  variant: 'secondary';
}

interface ButtonProps extends ButtonBaseProps {
  variant?: 'primary' | 'secondary';
  hasArrow?: boolean;
}

// Performance-optimized button component
const OptimizedButtonContent = ({ 
  children, 
  hasArrow, 
  shouldAnimate,
  MotionComponent,
  isMobile = false
}: {
  children: ReactNode;
  hasArrow?: boolean;
  shouldAnimate: boolean;
  MotionComponent: any;
  isMobile?: boolean;
}) => {
  if (!hasArrow) return children;

  // Always use static version on mobile for better performance
  if (!shouldAnimate || !MotionComponent || isMobile) {
    return (
      <div className="flex items-center justify-center gap-2">
        <span>{children}</span>
        <ArrowIcon />
      </div>
    );
  }

  // Animated version for high-end desktop devices only
  const animationLevel = DeviceCapabilities.supportsHighPerformanceAnimations() ? 'high' : 'low';
  const arrowVariants = OptimizedAnimations.arrow[animationLevel];
  const gapVariants = {
    idle: { gap: '8px' },
    hover: { gap: '12px' }
  };

  return (
    <MotionComponent.div 
      className="flex items-center justify-center"
      variants={gapVariants}
      initial="idle"
      whileHover="hover"
    >
      <span>{children}</span>
      <MotionComponent.div
        variants={arrowVariants}
        className="flex items-center"
      >
        <ArrowIcon />
      </MotionComponent.div>
    </MotionComponent.div>
  );
};

// Primary Button Component
export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ 
    children, 
    className, 
    animate = true, 
    loading = false, 
    hasArrow = false,
    ariaLabel,
    disabled = false,
    onClick,
    onKeyDown,
    type = 'button',
    ...props 
  }, ref) => {
    const [MotionComponents, setMotionComponents] = useState<any>(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      
      // Check if we should animate and load motion components
      // Disable animations on mobile devices for better performance
      const canAnimate = animate && 
                        DeviceCapabilities.supportsHighPerformanceAnimations() && 
                        !DeviceCapabilities.isMobile();
      setShouldAnimate(canAnimate);

      if (canAnimate) {
        // Dynamically load framer-motion only for high-end desktop devices
        BundleOptimization.loadFramerMotion().then(components => {
          setMotionComponents(components);
        });
      }
    }, [animate]);

    // Use safe defaults for server-side rendering, apply actual device checks only after mount
    const isMobile = isMounted ? DeviceCapabilities.isMobile() : false;

    const baseClassName = cn(
      // Base styles - exact measurements from PRD
      "inline-flex items-center justify-center",
      "px-[40px] py-[20px]", // 20px 40px padding
      "text-[18px] font-medium", // 18px font size
      "rounded-[8px]", // 8px border radius
      "min-h-[60px]", // Ensures consistent height
      
      // Enhanced gradient background with custom CSS animation
      "btn-enhanced-primary",
      "text-charcoal",
      
      // Enhanced scale effects with better easing
      !isMobile && shouldAnimate && "hover:scale-[1.08] active:scale-[0.98] hover:shadow-xl hover:shadow-matcha/40",
      
      // Focus styles for accessibility - enhanced glow effect
      "focus-visible:outline-none",
      "focus-visible:ring-4 focus-visible:ring-matcha/50",
      "focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
      "focus-visible:shadow-2xl focus-visible:shadow-matcha/30",
      
      // Disabled states
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "disabled:hover:scale-100",
      
      // Loading state
      loading && "cursor-wait animate-pulse",
      
      className
    );

    const baseProps = {
      ref,
      className: baseClassName,
      disabled: disabled || loading,
      'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
      'aria-busy': loading,
      onClick,
      onKeyDown,
      type,
      ...props
    };

    const content = loading ? (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
        <span>Loading...</span>
      </div>
    ) : (
      <OptimizedButtonContent 
        hasArrow={hasArrow}
        shouldAnimate={shouldAnimate}
        MotionComponent={MotionComponents}
        isMobile={isMobile}
      >
        {children}
      </OptimizedButtonContent>
    );

    // Use framer-motion only for high-end desktop devices
    if (shouldAnimate && MotionComponents && !disabled && !loading && !isMobile) {
      const animationLevel = isMounted && DeviceCapabilities.supportsHighPerformanceAnimations() ? 'high' : 'low';
      const buttonVariants = OptimizedAnimations.button[animationLevel];

      return (
        <MotionComponents.motion.button
          {...baseProps}
          variants={buttonVariants}
          initial="idle"
          whileHover="hover"
          whileTap="active"
          whileFocus="hover"
        >
          {content}
        </MotionComponents.motion.button>
      );
    }

    // Fallback to regular button for mobile and better performance
    return (
      <button {...baseProps}>
        {content}
      </button>
    );
  }
);
PrimaryButton.displayName = "PrimaryButton";

// Secondary Button Component
export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ 
    children, 
    className, 
    animate = true, 
    loading = false,
    ariaLabel,
    disabled = false,
    onClick,
    onKeyDown,
    type = 'button',
    ...props 
  }, ref) => {
    const [MotionComponents, setMotionComponents] = useState<any>(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      
      // Check if we should animate and load motion components
      // Disable animations on mobile devices for better performance
      const canAnimate = animate && 
                        DeviceCapabilities.supportsHighPerformanceAnimations() && 
                        !DeviceCapabilities.isMobile();
      setShouldAnimate(canAnimate);

      if (canAnimate) {
        // Dynamically load framer-motion only for high-end desktop devices
        BundleOptimization.loadFramerMotion().then(components => {
          setMotionComponents(components);
        });
      }
    }, [animate]);

    // Use safe defaults for server-side rendering, apply actual device checks only after mount
    const isMobile = isMounted ? DeviceCapabilities.isMobile() : false;

    const baseClassName = cn(
      // Base styles - exact measurements from PRD
      "inline-flex items-center justify-center",
      "px-[40px] py-[20px]", // 20px 40px padding
      "text-[18px] font-medium", // 18px font size
      "rounded-[8px]", // 8px border radius
      "min-h-[60px]", // Ensures consistent height
      
      // Enhanced secondary button with animated gradient border
      "btn-enhanced-secondary",
      "bg-transparent text-charcoal",
      "hover:bg-charcoal hover:text-ivory",
      
      // Enhanced scale effects with glow
      !isMobile && shouldAnimate && "hover:scale-[1.08] active:scale-[0.98] hover:shadow-xl hover:shadow-charcoal/30",
      
      // Enhanced focus styles for accessibility
      "focus-visible:outline-none",
      "focus-visible:ring-4 focus-visible:ring-charcoal/50",
      "focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
      "focus-visible:shadow-2xl focus-visible:shadow-charcoal/30",
      
      // Disabled states
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-charcoal",
      "disabled:hover:shadow-none",
      
      // Loading state
      loading && "cursor-wait animate-pulse",
      
      className
    );

    const baseProps = {
      ref,
      className: baseClassName,
      disabled: disabled || loading,
      'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
      'aria-busy': loading,
      onClick,
      onKeyDown,
      type,
      ...props
    };

    const content = loading ? (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
        <span>Loading...</span>
      </div>
    ) : children;

    // Use framer-motion only for high-end desktop devices
    if (shouldAnimate && MotionComponents && !disabled && !loading && !isMobile) {
      const animationLevel = isMounted && DeviceCapabilities.supportsHighPerformanceAnimations() ? 'high' : 'low';
      const buttonVariants = OptimizedAnimations.button[animationLevel];

      return (
        <MotionComponents.motion.button
          {...baseProps}
          variants={buttonVariants}
          initial="idle"
          whileHover="hover"
          whileTap="active"
          whileFocus="hover"
        >
          {content}
        </MotionComponents.motion.button>
      );
    }

    // Fallback to regular button for mobile and better performance
    return (
      <button {...baseProps}>
        {content}
      </button>
    );
  }
);
SecondaryButton.displayName = "SecondaryButton";

// Main Button component with variant switching
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    if (props.variant === 'secondary') {
      const { variant, ...secondaryProps } = props;
      return <SecondaryButton ref={ref} {...secondaryProps} variant="secondary" />;
    }
    
    const { variant, ...primaryProps } = props;
    return <PrimaryButton ref={ref} {...primaryProps} />;
  }
);
Button.displayName = "Button";

// Export individual components for direct usage
export { PrimaryButton as Primary, SecondaryButton as Secondary }; 