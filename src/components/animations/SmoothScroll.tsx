'use client';

import { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number>();
  const scrollTargetRef = useRef<number>(0);
  const currentScrollRef = useRef<number>(0);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let isScrolling = false;

    // Enhanced easing function for smoother animation
    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    };

    // Smooth scroll animation with increased speed (25% faster)
    const animateScroll = () => {
      const diff = scrollTargetRef.current - currentScrollRef.current;
      const distance = Math.abs(diff);
      
      if (distance < 0.5) {
        currentScrollRef.current = scrollTargetRef.current;
        window.scrollTo(0, currentScrollRef.current);
        isScrolling = false;
        return;
      }

      // Increased lerp factor from 0.1 to 0.125 (25% faster)
      // Enhanced smoothness with adaptive speed based on distance
      const speed = distance > 1000 ? 0.15 : distance > 500 ? 0.125 : 0.1;
      const step = diff * speed;
      
      currentScrollRef.current += step;
      window.scrollTo(0, currentScrollRef.current);
      
      rafIdRef.current = requestAnimationFrame(animateScroll);
    };

    // Enhanced wheel event handler with momentum and acceleration
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Enhanced scroll speed calculation with momentum
      const scrollSpeed = 1.25; // 25% faster than default
      const momentum = Math.min(Math.abs(e.deltaY) / 100, 3); // Cap momentum at 3x
      const acceleratedDelta = e.deltaY * scrollSpeed * (1 + momentum * 0.3);
      
      scrollTargetRef.current += acceleratedDelta;
      
      // Boundary constraints
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollTargetRef.current = Math.max(0, Math.min(maxScroll, scrollTargetRef.current));
      
      if (!isScrolling) {
        isScrolling = true;
        currentScrollRef.current = window.scrollY;
        animateScroll();
      }
    };

    // Enhanced touch handling for mobile with momentum
    let touchStartY = 0;
    let touchVelocity = 0;
    let lastTouchTime = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchVelocity = 0;
      lastTouchTime = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTouchTime;
      const deltaY = touchStartY - e.touches[0].clientY;
      
      // Calculate velocity for momentum
      touchVelocity = deltaY / Math.max(deltaTime, 1);
      
      const scrollSpeed = 1.25; // 25% faster
      const momentum = Math.min(Math.abs(touchVelocity), 2);
      const acceleratedDelta = deltaY * scrollSpeed * (1 + momentum * 0.2);
      
      scrollTargetRef.current += acceleratedDelta;
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollTargetRef.current = Math.max(0, Math.min(maxScroll, scrollTargetRef.current));
      
      if (!isScrolling) {
        isScrolling = true;
        currentScrollRef.current = window.scrollY;
        animateScroll();
      }
      
      touchStartY = e.touches[0].clientY;
      lastTouchTime = currentTime;
    };

    const handleTouchEnd = () => {
      // Add momentum-based inertia for enhanced smoothness
      if (Math.abs(touchVelocity) > 0.5) {
        const inertiaDistance = touchVelocity * 100; // Adjust multiplier for feel
        scrollTargetRef.current += inertiaDistance;
        
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        scrollTargetRef.current = Math.max(0, Math.min(maxScroll, scrollTargetRef.current));
        
        if (!isScrolling) {
          isScrolling = true;
          currentScrollRef.current = window.scrollY;
          animateScroll();
        }
      }
    };

    // Handle programmatic scrolling (like anchor links)
    const handleScroll = () => {
      if (!isScrolling) {
        scrollTargetRef.current = window.scrollY;
        currentScrollRef.current = window.scrollY;
      }
    };

    // Enhanced keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollSpeed = 1.25; // 25% faster
      let deltaY = 0;
      
      switch (e.key) {
        case 'ArrowDown':
          deltaY = 100 * scrollSpeed;
          break;
        case 'ArrowUp':
          deltaY = -100 * scrollSpeed;
          break;
        case 'PageDown':
          deltaY = window.innerHeight * 0.8 * scrollSpeed;
          break;
        case 'PageUp':
          deltaY = -window.innerHeight * 0.8 * scrollSpeed;
          break;
        case 'Home':
          scrollTargetRef.current = 0;
          break;
        case 'End':
          scrollTargetRef.current = document.documentElement.scrollHeight - window.innerHeight;
          break;
        default:
          return;
      }
      
      if (deltaY !== 0) {
        e.preventDefault();
        scrollTargetRef.current += deltaY;
        
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        scrollTargetRef.current = Math.max(0, Math.min(maxScroll, scrollTargetRef.current));
        
        if (!isScrolling) {
          isScrolling = true;
          currentScrollRef.current = window.scrollY;
          animateScroll();
        }
      } else if (e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        if (!isScrolling) {
          isScrolling = true;
          currentScrollRef.current = window.scrollY;
          animateScroll();
        }
      }
    };

    // Initialize scroll position
    scrollTargetRef.current = window.scrollY;
    currentScrollRef.current = window.scrollY;

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="relative">
      {children}
    </div>
  );
};

// Default export for dynamic imports
export default SmoothScroll; 