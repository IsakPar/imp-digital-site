// Performance optimization utilities for mobile devices
'use client';

// Device capability detection with hydration safety
export const DeviceCapabilities = {
  // Check if device supports high-performance animations
  supportsHighPerformanceAnimations(): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
      // Be more aggressive about detecting low-end devices
      const isHighEnd = 
        window.navigator.hardwareConcurrency >= 6 && // Increased from 4
        window.devicePixelRatio <= 2 &&
        window.innerWidth >= 1024; // Must be desktop size
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check for mobile user agents
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      return isHighEnd && !prefersReducedMotion && !isMobileUA;
    } catch (e) {
      return false;
    }
  },

  // Check if device is mobile
  isMobile(): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
      // Multiple checks for mobile detection
      const hasTouch = 'ontouchstart' in window;
      const smallScreen = window.innerWidth < 1024; // Increased threshold
      const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const lowDPR = window.devicePixelRatio > 1.5; // Consider high DPR as mobile-like
      
      return hasTouch || smallScreen || mobileUA || lowDPR;
    } catch (e) {
      return true; // Default to mobile if detection fails
    }
  },

  // Check if device is low-end
  isLowEndDevice(): boolean {
    if (typeof window === 'undefined') return true; // Default to low-end on server
    
    try {
      return (
        window.navigator.hardwareConcurrency <= 4 || // Increased threshold
        window.devicePixelRatio > 2 ||
        window.innerWidth < 1024 || // Increased from 768
        this.isMobile() ||
        // Additional checks for low-end devices
        (window.navigator as any).connection?.effectiveType === 'slow-2g' ||
        (window.navigator as any).connection?.effectiveType === '2g' ||
        (window.navigator as any).connection?.effectiveType === '3g'
      );
    } catch (e) {
      return true; // Default to low-end if detection fails
    }
  },

  // Check if device has slow connection
  hasSlowConnection(): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
      const connection = (window.navigator as any).connection;
      if (!connection) return false;
      
      return connection.effectiveType === 'slow-2g' || 
             connection.effectiveType === '2g' ||
             connection.effectiveType === '3g' ||
             connection.downlink < 1.5;
    } catch (e) {
      return false;
    }
  },

  // Get optimal animation config based on device
  getAnimationConfig() {
    try {
      const isLowEnd = this.isLowEndDevice();
      const isMobile = this.isMobile();
      const hasSlowConnection = this.hasSlowConnection();
      const prefersReducedMotion = typeof window !== 'undefined' && 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Disable animations on mobile, low-end devices, or slow connections
      const shouldDisableAnimations = isLowEnd || isMobile || hasSlowConnection || prefersReducedMotion;

      return {
        shouldAnimate: !shouldDisableAnimations,
        duration: shouldDisableAnimations ? 0 : 0.3,
        ease: shouldDisableAnimations ? "linear" : [0, 0, 0.2, 1],
        stiffness: shouldDisableAnimations ? 1000 : 100,
        damping: shouldDisableAnimations ? 50 : 10,
      };
    } catch (e) {
      // Safe fallback
      return {
        shouldAnimate: false,
        duration: 0,
        ease: "linear",
        stiffness: 1000,
        damping: 50,
      };
    }
  }
};

// Optimized animation variants for different performance levels
export const OptimizedAnimations = {
  // High-performance button animations
  button: {
    high: {
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
    },
    low: {
      idle: { scale: 1 },
      hover: { scale: 1 },
      active: { scale: 1 }
    }
  },

  // Arrow animations
  arrow: {
    high: {
      idle: { 
        x: 0,
        transition: { duration: 0.3, ease: [0, 0, 0.2, 1] }
      },
      hover: { 
        x: 4,
        transition: { duration: 0.3, ease: [0, 0, 0.2, 1] }
      }
    },
    low: {
      idle: { x: 0 },
      hover: { x: 0 }
    }
  },

  // Fade in animations
  fadeIn: {
    high: {
      hidden: { 
        opacity: 0, 
        y: 20,
        transition: { duration: 0.6, ease: [0, 0, 0.2, 1] }
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0, 0, 0.2, 1] }
      }
    },
    low: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  }
};

// Performance monitoring
export const PerformanceMonitor = {
  // Track critical rendering metrics
  trackCriticalRender() {
    if (typeof window === 'undefined') return;

    // Use native performance API for monitoring
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure' && entry.name === 'React') {
          console.log('React render time:', entry.duration);
        }
        
        // Track long tasks that block main thread
        if (entry.entryType === 'longtask') {
          console.warn('Long task detected:', entry.duration + 'ms');
        }
      });
    });

    // Observe multiple metrics
    try {
      observer.observe({ entryTypes: ['measure', 'longtask', 'navigation'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['measure'] });
    }
  },

  // Monitor Core Web Vitals
  monitorWebVitals() {
    if (typeof window === 'undefined') return;

    // Track First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const fcpEntry = entryList.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        console.log('FCP:', fcpEntry.startTime);
      }
    });
    
    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP monitoring not supported');
    }

    // Track Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        console.log('LCP:', lastEntry.startTime);
      }
    });
    
    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring not supported');
    }
  },

  // Throttle animation frames on low-end devices
  throttleAnimationFrame(callback: () => void): void {
    if (DeviceCapabilities.isLowEndDevice()) {
      // Throttle to 30fps on low-end devices
      let lastTime = 0;
      const throttledCallback = (currentTime: number) => {
        if (currentTime - lastTime >= 33) {
          callback();
          lastTime = currentTime;
        }
        requestAnimationFrame(throttledCallback);
      };
      requestAnimationFrame(throttledCallback);
    } else {
      requestAnimationFrame(callback);
    }
  },

  // Measure script execution time
  measureScriptPerformance(scriptName: string, fn: () => void) {
    if (typeof window === 'undefined') {
      fn();
      return;
    }

    const startTime = performance.now();
    fn();
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    if (duration > 16) { // More than one frame (16ms)
      console.warn(`${scriptName} took ${duration.toFixed(2)}ms to execute`);
    }
  }
};

// Enhanced lazy loading utilities
export const LazyLoading = {
  // Intersection Observer for components
  createComponentObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    if (typeof window === 'undefined') return null;

    const defaultOptions = {
      rootMargin: '50px 0px',
      threshold: 0.1,
      ...options
    };

    return new IntersectionObserver(callback, defaultOptions);
  },

  // Lazy load sections with better performance
  observeSection(element: Element, loadCallback: () => void) {
    const observer = this.createComponentObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadCallback();
          observer?.unobserve(element);
        }
      });
    });

    if (observer) {
      observer.observe(element);
    }

    return observer;
  },

  // Preload next section when current is 80% visible
  preloadNextSection(currentElement: Element, preloadCallback: () => void) {
    const observer = this.createComponentObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.8) {
          preloadCallback();
          observer?.unobserve(currentElement);
        }
      });
    }, { threshold: 0.8 });

    if (observer) {
      observer.observe(currentElement);
    }

    return observer;
  }
};

// Memory management
export const MemoryOptimization = {
  // Cleanup animation instances
  cleanupAnimations(elements: HTMLElement[]) {
    elements.forEach(element => {
      // Remove any running animations
      element.getAnimations().forEach(animation => {
        animation.cancel();
      });
    });
  },

  // Optimize image loading
  optimizeImageLoading() {
    if (typeof window === 'undefined') return;

    // Use native lazy loading for images
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }
};

// Bundle size optimization
export const BundleOptimization = {
  // Dynamically import heavy libraries only when needed
  async loadFramerMotion() {
    // Only load if device truly supports high-performance animations
    if (DeviceCapabilities.supportsHighPerformanceAnimations() && !DeviceCapabilities.isMobile()) {
      try {
        // Use lighter motion build for better performance
        const framerMotion = await import('framer-motion');
        return { 
          motion: framerMotion.motion,
          AnimatePresence: framerMotion.AnimatePresence,
          m: framerMotion.m
        };
      } catch (error) {
        console.warn('Failed to load framer-motion, falling back to static components');
        return {
          motion: 'div' as any,
          AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
          m: 'div' as any
        };
      }
    }
    
    // Return static versions for low-end devices
    return {
      motion: 'div' as any,
      AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
      m: 'div' as any
    };
  },

  // Load GSAP only for high-end devices
  async loadGSAP() {
    if (DeviceCapabilities.supportsHighPerformanceAnimations() && !DeviceCapabilities.isMobile()) {
      try {
        const gsap = await import('gsap');
        return gsap.default;
      } catch (error) {
        console.warn('Failed to load GSAP');
        return null;
      }
    }
    return null;
  },

  // Preload critical chunks for better performance
  preloadCriticalChunks() {
    if (typeof window !== 'undefined') {
      // Preload framework chunk
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = '/_next/static/chunks/framework.js';
      document.head.appendChild(link);
    }
  },

  // Optimize component imports
  async loadComponentChunk(chunkName: string) {
    try {
      switch (chunkName) {
        case 'ui':
          // UI components are more critical
          return await import('@/components/ui');
        default:
          return null;
      }
    } catch (error) {
      console.warn(`Failed to load chunk: ${chunkName}`);
      return null;
    }
  }
};

export default {
  DeviceCapabilities,
  OptimizedAnimations,
  PerformanceMonitor,
  LazyLoading,
  MemoryOptimization,
  BundleOptimization
}; 