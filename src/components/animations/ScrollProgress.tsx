'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Always call ALL hooks in the same order - before any conditional logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const dotTop = useTransform(scrollYProgress, [0.2, 0.8], ["8rem", "calc(100% - 8rem)"]);
  const dotScale = useTransform(scrollYProgress, [0.2, 0.3, 0.7, 0.8], [0, 1, 1, 0]);
  
  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Render static version during SSR, animated version after mount
  return (
    <div ref={containerRef} className="absolute left-0 top-0 w-full h-full pointer-events-none">
      {isMounted ? (
        <>
          <motion.div 
            className="absolute left-6 top-32 bottom-32 w-1 origin-top"
            style={{ 
              scaleY,
              opacity,
              background: "linear-gradient(to bottom, #D9E5C1, #B8C9A3, #A0B885)"
            }}
          />
          
          {/* Progress indicator dot */}
          <motion.div
            className="absolute left-4 w-5 h-5 rounded-full bg-[#B8C9A3] shadow-lg"
            style={{
              top: dotTop,
              opacity,
              scale: dotScale
            }}
          />
        </>
      ) : (
        <>
          <div 
            className="absolute left-6 top-32 bottom-32 w-1 origin-top opacity-0"
            style={{ 
              background: "linear-gradient(to bottom, #D9E5C1, #B8C9A3, #A0B885)"
            }}
          />
          <div className="absolute left-4 w-5 h-5 rounded-full bg-[#B8C9A3] shadow-lg opacity-0" />
        </>
      )}
    </div>
  );
}; 