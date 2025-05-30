'use client';

import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import { ReactNode, forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// Arrow icon component
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

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
  id?: string;
  'data-testid'?: string;
}

interface PrimaryButtonProps extends ButtonBaseProps {
  variant?: 'primary';
  hasArrow?: boolean;
}

interface SecondaryButtonProps extends ButtonBaseProps {
  variant: 'secondary';
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

// Animation variants for buttons
const buttonVariants: Variants = {
  idle: { 
    scale: 1,
    transition: { duration: 0.2, ease: [0, 0, 0.2, 1] }
  },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2, ease: [0, 0, 0.2, 1] }
  },
  active: { 
    scale: 0.98,
    transition: { duration: 0.1, ease: [0, 0, 0.2, 1] }
  }
};

// Arrow animation variants
const arrowVariants: Variants = {
  idle: { 
    x: 0,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] }
  },
  hover: { 
    x: 4,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] }
  }
};

// Gap animation for arrow buttons
const gapVariants: Variants = {
  idle: { 
    gap: '8px',
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] }
  },
  hover: { 
    gap: '12px', 
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] }
  }
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
    
    const animationProps = animate ? {
      variants: buttonVariants,
      initial: "idle" as const,
      whileHover: !disabled && !loading ? "hover" as const : "idle" as const,
      whileTap: !disabled && !loading ? "active" as const : "idle" as const,
      whileFocus: !disabled && !loading ? "hover" as const : "idle" as const
    } : {};

    const containerAnimationProps = animate && hasArrow ? {
      variants: gapVariants,
      initial: "idle" as const,
      whileHover: !disabled && !loading ? "hover" as const : "idle" as const
    } : {};

    const content = hasArrow ? (
      <motion.div 
        className="flex items-center justify-center"
        {...containerAnimationProps}
      >
        <span>{children}</span>
        <motion.div
          variants={arrowVariants}
          className="flex items-center"
        >
          <ArrowIcon />
        </motion.div>
      </motion.div>
    ) : children;

    const baseProps = {
      ref,
      className: cn(
        // Base styles - exact measurements from PRD
        "inline-flex items-center justify-center",
        "px-[40px] py-[20px]", // 20px 40px padding
        "text-[18px] font-medium", // 18px font size
        "rounded-[8px]", // 8px border radius
        "min-h-[60px]", // Ensures consistent height
        
        // Background - exact gradient from PRD
        "bg-gradient-to-br from-[#D9E5C1] to-[#B8C9A3]",
        "text-charcoal",
        
        // Hover effects
        "hover:bg-gradient-to-br hover:from-[#B8C9A3] hover:to-[#D9E5C1]",
        
        // Transitions
        "transition-all duration-200 ease-out",
        
        // Focus styles for accessibility - 2px offset outline
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-matcha",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
        
        // Disabled states
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "disabled:hover:scale-100 disabled:hover:bg-gradient-to-br disabled:hover:from-[#D9E5C1] disabled:hover:to-[#B8C9A3]",
        
        // Loading state
        loading && "cursor-wait",
        
        className
      ),
      disabled: disabled || loading,
      'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
      'aria-busy': loading,
      onClick,
      onKeyDown,
      type,
      ...props
    };

    if (animate) {
      return (
        <motion.button
          {...baseProps}
          {...animationProps}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
              <span>Loading...</span>
            </div>
          ) : content}
        </motion.button>
      );
    }

    return (
      <button {...baseProps}>
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : content}
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
    
    const animationProps = animate ? {
      variants: buttonVariants,
      initial: "idle" as const,
      whileHover: !disabled && !loading ? "hover" as const : "idle" as const,
      whileTap: !disabled && !loading ? "active" as const : "idle" as const,
      whileFocus: !disabled && !loading ? "hover" as const : "idle" as const
    } : {};

    const baseProps = {
      ref,
      className: cn(
        // Base styles - exact measurements from PRD
        "inline-flex items-center justify-center",
        "px-[40px] py-[20px]", // 20px 40px padding
        "text-[18px] font-medium", // 18px font size
        "rounded-[8px]", // 8px border radius
        "min-h-[60px]", // Ensures consistent height
        
        // Background and border - transparent with 2px solid border
        "bg-transparent",
        "border-2 border-[#D9E5C1]",
        "text-charcoal",
        
        // Hover effects - fill with gradient
        "hover:bg-gradient-to-br hover:from-[#D9E5C1] hover:to-[#B8C9A3]",
        "hover:border-transparent",
        
        // Transitions
        "transition-all duration-200 ease-out",
        
        // Focus styles for accessibility - 2px offset outline
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-matcha",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
        
        // Disabled states
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:border-[#D9E5C1]",
        
        // Loading state
        loading && "cursor-wait",
        
        className
      ),
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

    if (animate) {
      return (
        <motion.button
          {...baseProps}
          {...animationProps}
        >
          {content}
        </motion.button>
      );
    }

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