'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { getAnimationSettings, isMobile, isLowEndDevice } from '@/lib/performance';

// Simplified node generation for better performance
const generateNodes = (count: number) => {
  const nodes = [];
  const centerX = 50;
  const centerY = 50;
  
  for (let i = 0; i < count; i++) {
    const angle = (i * 360) / count;
    const radius = 15 + Math.random() * 25;
    const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
    
    nodes.push({
      id: i,
      x: Math.max(5, Math.min(95, x)),
      y: Math.max(5, Math.min(95, y)),
      size: 3 + Math.random() * 4,
      delay: i * 0.1,
    });
  }
  return nodes;
};

// Optimized node component with reduced animations
const AnimatedNode = ({ node, index, isMounted, shouldAnimate }: { 
  node: any; 
  index: number; 
  isMounted: boolean;
  shouldAnimate: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyle = {
    left: `${node.x}%`,
    top: `${node.y}%`,
    width: `${node.size}px`,
    height: `${node.size}px`,
    background: isHovered 
      ? 'radial-gradient(circle, #B8C9A3, #A0B885)' 
      : 'radial-gradient(circle, #D9E5C1, #C4D4A7)',
    boxShadow: isHovered 
      ? '0 0 20px rgba(184, 201, 163, 0.6)' 
      : '0 0 10px rgba(217, 229, 193, 0.4)',
  };

  if (!shouldAnimate) {
    return (
      <div
        className="absolute rounded-full opacity-80"
        style={baseStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  }

  return (
    <motion.div
      className="absolute rounded-full cursor-pointer"
      style={baseStyle}
      initial={isMounted ? { 
        scale: 0, 
        opacity: 0,
      } : false}
      animate={isMounted ? { 
        scale: isHovered ? 1.5 : 1, 
        opacity: 0.8,
      } : {}}
      transition={isMounted ? {
        delay: node.delay,
        duration: 0.8,
        ease: "easeOut",
      } : {}}
      whileHover={shouldAnimate ? { 
        scale: 1.8,
        transition: { duration: 0.2 }
      } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    />
  );
};

// Simplified connections for better performance
const OptimizedConnections = ({ nodes, shouldAnimate, isMounted }: {
  nodes: any[];
  shouldAnimate: boolean;
  isMounted: boolean;
}) => {
  // Reduce connections on mobile/low-end devices
  const mobile = isMobile();
  const maxConnections = mobile ? 8 : 15;
  
  const connections = [];
  for (let i = 0; i < Math.min(maxConnections, nodes.length - 1); i++) {
    connections.push({
      x1: nodes[i].x,
      y1: nodes[i].y,
      x2: nodes[i + 1].x,
      y2: nodes[i + 1].y,
      delay: i * 0.2
    });
  }

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      {connections.map((connection, index) => (
        <motion.line
          key={index}
          x1={connection.x1}
          y1={connection.y1}
          x2={connection.x2}
          y2={connection.y2}
          stroke="rgba(217, 229, 193, 0.3)"
          strokeWidth={mobile ? "0.1" : "0.2"}
          initial={shouldAnimate && isMounted ? { 
            pathLength: 0, 
            opacity: 0 
          } : { pathLength: 1, opacity: 0.3 }}
          animate={shouldAnimate && isMounted ? { 
            pathLength: 1, 
            opacity: [0, 0.6, 0.3]
          } : {}}
          transition={shouldAnimate ? {
            delay: connection.delay,
            duration: 1.5,
            ease: "easeInOut"
          } : {}}
        />
      ))}
    </svg>
  );
};

export const DataVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const animationSettings = getAnimationSettings();
  const mobile = isMobile();
  const lowEnd = isLowEndDevice();
  
  // Reduce node count for performance
  const nodeCount = mobile ? 15 : lowEnd ? 20 : 30;
  const [nodes] = useState(() => generateNodes(nodeCount));
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const shouldAnimate = animationSettings.shouldAnimate && !lowEnd;

  return (
    <div suppressHydrationWarning>
      <motion.div 
        ref={containerRef}
        className="relative w-full h-full overflow-hidden rounded-lg"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(217, 229, 193, 0.15) 0%, rgba(255, 255, 255, 0.05) 70%)',
          opacity: shouldAnimate ? opacity : 1
        }}
        initial={shouldAnimate && isMounted ? { 
          opacity: 0, 
          scale: 0.95
        } : false}
        animate={shouldAnimate && isMounted ? { 
          opacity: 1, 
          scale: 1
        } : {}}
        transition={{ 
          duration: animationSettings.animationDuration, 
          ease: "easeOut"
        }}
      >
        {/* Simplified background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(217, 229, 193, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(217, 229, 193, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: mobile ? '20px 20px' : '25px 25px'
          }}
        />
        
        {/* Optimized connections */}
        <OptimizedConnections 
          nodes={nodes} 
          shouldAnimate={shouldAnimate} 
          isMounted={isMounted} 
        />
        
        {/* Nodes with conditional animation */}
        {nodes.map((node, index) => (
          <AnimatedNode 
            key={node.id} 
            node={node} 
            index={index} 
            isMounted={isMounted}
            shouldAnimate={shouldAnimate}
          />
        ))}
      </motion.div>
    </div>
  );
}; 