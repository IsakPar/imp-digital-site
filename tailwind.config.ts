import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Color System from PRD
      colors: {
        // Primary Palette
        ivory: '#FAF9F6',
        matcha: {
          DEFAULT: '#D9E5C1',
          dark: '#B8C9A3',
          mist: '#D9E5C1',
        },
        charcoal: '#1F1F1F',
        silver: '#C4C4C4',
        gunmetal: '#2A2D2E',
        
        // Border color for utilities
        border: '#C4C4C4',
        
        // Semantic Colors
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        info: '#2196F3',
      },
      
      // Typography Scale (1.250 - Major Third)
      fontSize: {
        'xs': '0.8rem',     // 12.8px
        'sm': '0.889rem',   // 14.2px
        'base': '1rem',     // 16px
        'lg': '1.25rem',    // 20px
        'xl': '1.563rem',   // 25px
        '2xl': '1.953rem',  // 31.2px
        '3xl': '2.441rem',  // 39px
        '4xl': '3.052rem',  // 48.8px
        '5xl': '3.815rem',  // 61px
        '6xl': '4.768rem',  // 76.3px
        '7xl': '5.96rem',   // 95.4px
      },
      
      // Line Heights
      lineHeight: {
        'tight': '1.1',
        'snug': '1.3',
        'normal': '1.5',
        'relaxed': '1.7',
        'loose': '2',
      },
      
      // Letter Spacing
      letterSpacing: {
        'hero': '-0.03em',
      },
      
      // Font Family
      fontFamily: {
        'sans': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'display': ['Clash Display', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      
      // Gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #D9E5C1 0%, #B8C9A3 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1F1F1F 0%, #2C2C2C 100%)',
        'gradient-matcha': 'linear-gradient(135deg, #D9E5C1 0%, #B8C9A3 100%)',
      },
      
      // Shadows from PRD
      boxShadow: {
        'sm': '0 2px 4px rgba(0,0,0,0.05)',
        'DEFAULT': '0 4px 16px rgba(0,0,0,0.08)',
        'md': '0 4px 16px rgba(0,0,0,0.08)',
        'lg': '0 8px 32px rgba(0,0,0,0.12)',
        'xl': '0 16px 48px rgba(0,0,0,0.16)',
        'matcha': '0 8px 16px rgba(217, 229, 193, 0.3)',
      },
      
      // Animation Durations
      transitionDuration: {
        'instant': '100ms',
        'fast': '200ms',
        'normal': '300ms',
        'slow': '500ms',
        'slower': '800ms',
        'slowest': '1000ms',
      },
      
      // Custom Easings
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.43, 0.13, 0.23, 0.96)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // Spacing System
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Border Radius
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
      
      // Z-index scale
      zIndex: {
        '9999': '9999',
      },
      
      // Backdrop Blur
      backdropBlur: {
        'xs': '2px',
      },
      
      // Custom animations
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'pulse-matcha': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
        },
        'success-ripple': {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        // Hero-specific animations
        'float-up': {
          '0%': {
            transform: 'translateY(100vh) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100vh) rotate(360deg)',
            opacity: '0',
          },
        },
        'slow-spin': {
          'from': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)',
          },
        },
        'draw-line': {
          'to': {
            'stroke-dashoffset': '0',
          },
        },
        // Advantage section animations
        'float-slow': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '0.8',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'pulse-matcha': 'pulse-matcha 2s ease-in-out infinite',
        'success-ripple': 'success-ripple 0.6s ease-out',
        // Hero-specific animations
        'hero-float-up': 'float-up 15s linear infinite',
        'hero-slow-spin': 'slow-spin 20s linear infinite',
        'hero-float': 'float-up 15s linear infinite',
        'hero-draw-line': 'draw-line 2s ease-out forwards',
        // Advantage section animations
        'advantage-float-slow': 'float-slow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [
    // Add typography plugin for better text styling
    require('@tailwindcss/typography'),
  ],
};

export default config; 