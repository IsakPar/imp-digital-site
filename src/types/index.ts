// Service Module Types from PRD
export interface ServiceModule {
  id: string;
  title: string;
  description: string; // 60-80 characters
  icon: {
    lottie: string; // Path to Lottie JSON
    fallback: string; // Static SVG path
    size: number; // pixels
    color: {
      primary: string;
      secondary: string;
    };
  };
  link: string;
  stats?: {
    value: string;
    label: string;
  };
  tags: string[];
}

// Case Study Types from PRD
export interface CaseStudy {
  id: string;
  client: {
    name: string;
    logo: string; // SVG path
    industry: string;
  };
  project: {
    title: string;
    description: string; // 100-120 chars
    thumbnail: {
      src: string;
      alt: string;
      aspectRatio: '16:9';
    };
    metrics: Array<{
      value: string;
      label: string;
      improvement?: string; // e.g., "+45%"
    }>;
  };
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  cta: {
    label: string;
    url: string;
  };
}

// Brand Pillar Types from PRD
export interface BrandPillar {
  id: string;
  icon: {
    default: string; // SVG string
    animated: string; // Lottie JSON path
    size: number;
  };
  title: string;
  description: string;
  proof: {
    stat: string;
    context: string;
  };
  animation: {
    delay: number; // Stagger delay
    duration: number;
    easing: string;
  };
}

// Benito Box Types from PRD
export interface BenitoBox {
  id: string;
  title: string;
  icon: string; // Lottie animation path
  description: string;
  animationDelay: number;
  dimensions: {
    width: string;
    height: string;
    padding: string;
    marginBottom: string;
  };
  hover: {
    translateX: string;
    boxShadow: string;
    borderLeft: string;
  };
}

// Contact Form Types from PRD
export interface ContactFormValues {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
}

export interface ValidationErrors {
  [key: string]: string;
}

export interface ContactFormState {
  values: ContactFormValues;
  errors: ValidationErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
}

// Client Logo Types from PRD
export interface ClientLogo {
  id: string;
  name: string;
  logo: {
    src: string; // SVG preferred
    width: number;
    height: number;
  };
  url?: string;
  caseStudyId?: string;
  display: {
    grayscale: number;
    opacity: number;
    hoverGrayscale: number;
    hoverOpacity: number;
  };
}

// Animation Configuration Types
export interface AnimationConfig {
  duration: {
    instant: number;
    fast: number;
    normal: number;
    slow: number;
    slower: number;
    slowest: number;
  };
  easing: {
    easeIn: number[];
    easeOut: number[];
    easeInOut: number[];
    spring: number[];
    bounce: number[];
  };
  stagger: {
    fast: number;
    normal: number;
    slow: number;
  };
}

// Three.js Scene Configuration from PRD
export interface SceneConfig {
  particles: {
    count: number;
    size: number;
    color: number;
    opacity: number;
    movement: {
      x: { min: number; max: number };
      y: { min: number; max: number };
      z: { min: number; max: number };
    };
  };
  fog: {
    color: number;
    near: number;
    far: number;
  };
  camera: {
    fov: number;
    position: { x: number; y: number; z: number };
  };
  performance: {
    maxFPS: number;
    adaptiveQuality: boolean;
    mobileParticleReduction: number;
  };
}

// Global App State
export interface AppState {
  theme: 'light' | 'dark';
  navigation: {
    isOpen: boolean;
    isScrolled: boolean;
    activeSection: string;
  };
  forms: {
    contact: ContactFormState;
  };
  preferences: {
    reducedMotion: boolean;
    highContrast: boolean;
  };
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  elevated?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

// Performance Metrics Types
export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  tti: number; // Time to Interactive
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Utility Types
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ColorVariant = 'ivory' | 'matcha' | 'charcoal' | 'silver' | 'gunmetal';
export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';
export type TransitionTiming = 'instant' | 'fast' | 'normal' | 'slow' | 'slower' | 'slowest'; 