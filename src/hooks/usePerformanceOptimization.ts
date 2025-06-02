'use client';

import { useEffect, useState, useCallback } from 'react';

interface PerformanceOptions {
  reducedMotion?: boolean;
  deferOffscreenImages?: boolean;
  enableIntersectionObserver?: boolean;
}

export function usePerformanceOptimization(options: PerformanceOptions = {}) {
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  // Detect device capabilities
  useEffect(() => {
    setIsMounted(true);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Detect low-end devices
    const navigator = window.navigator as any;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      // Slow connection or low memory device
      setIsLowEndDevice(
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        (navigator.deviceMemory && navigator.deviceMemory < 4)
      );
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Optimize images loading
  const optimizeImages = useCallback(() => {
    if (!options.deferOffscreenImages) return;

    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      images.forEach((img) => imageObserver.observe(img));

      return () => {
        images.forEach((img) => imageObserver.unobserve(img));
      };
    }
  }, [options.deferOffscreenImages]);

  // Reduce animation complexity on low-end devices
  useEffect(() => {
    if (!isMounted) return;

    if (prefersReducedMotion || isLowEndDevice) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [isMounted, prefersReducedMotion, isLowEndDevice]);

  // Force composite layers for animations
  const enableHardwareAcceleration = useCallback((selector: string) => {
    if (!isMounted) return;
    
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      (el as HTMLElement).style.transform = 'translateZ(0)';
      (el as HTMLElement).style.willChange = 'transform';
    });

    return () => {
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = '';
        (el as HTMLElement).style.willChange = '';
      });
    };
  }, [isMounted]);

  return {
    isMounted,
    prefersReducedMotion,
    isLowEndDevice,
    optimizeImages,
    enableHardwareAcceleration,
  };
} 