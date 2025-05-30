'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Generate node positions in a 2D circular layout
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
      connectionDelay: Math.random() * 2,
      pulseDelay: Math.random() * 3
    });
  }
  return nodes;
};

// Generate connections between nearby nodes
const generateConnections = (nodes: any[]) => {
  const connections = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 25 && Math.random() > 0.6) {
        connections.push({
          id: `${i}-${j}`,
          start: nodes[i],
          end: nodes[j],
          delay: Math.random() * 3,
          animationDelay: Math.random() * 5
        });
      }
    }
  }
  return connections;
};

const AnimatedNode = ({ node, index, isMounted }: { node: any; index: number; isMounted: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="absolute rounded-full cursor-pointer"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        width: `${node.size}px`,
        height: `${node.size}px`,
        background: isHovered 
          ? 'radial-gradient(circle, #B8C9A3, #A0B885)' 
          : 'radial-gradient(circle, #D9E5C1, #C4D4A7)',
        boxShadow: isHovered 
          ? '0 0 30px rgba(184, 201, 163, 0.9), 0 0 60px rgba(184, 201, 163, 0.4)' 
          : '0 0 15px rgba(217, 229, 193, 0.6)',
      }}
      initial={isMounted ? { 
        scale: 0, 
        opacity: 0,
        filter: "blur(10px)",
        rotateZ: 180
      } : false}
      animate={isMounted ? { 
        scale: isHovered ? 2 : [1, 1.2, 1], 
        opacity: [0.7, 1, 0.8, 1],
        filter: "blur(0px)",
        rotateZ: 0
      } : {}}
      transition={isMounted ? {
        delay: node.delay,
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: { 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          repeat: Infinity,
          repeatDelay: node.pulseDelay,
          repeatType: "reverse"
        },
        opacity: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      } : {}}
      whileHover={isMounted ? { 
        scale: 2.2,
        zIndex: 10,
        transition: { duration: 0.3 }
      } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Enhanced inner core */}
      <motion.div 
        className="absolute inset-1 rounded-full"
        style={{
          background: 'radial-gradient(circle, #2F2F2F, #1A1A1A)',
          opacity: 0.8
        }}
        animate={isMounted ? {
          scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
          opacity: [0.8, 0.6, 0.8]
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Multiple pulsing rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-[#B8C9A3]"
        animate={isMounted ? {
          scale: [1, 2, 1],
          opacity: [0.8, 0, 0.8]
        } : {}}
        transition={isMounted ? {
          duration: 2.5,
          repeat: Infinity,
          delay: node.connectionDelay,
          ease: "easeInOut"
        } : {}}
      />
      
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#D9E5C1]"
        animate={isMounted ? {
          scale: [1, 1.8, 1],
          opacity: [0.6, 0, 0.6]
        } : {}}
        transition={isMounted ? {
          duration: 3,
          repeat: Infinity,
          delay: node.connectionDelay + 0.5,
          ease: "easeInOut"
        } : {}}
      />
      
      {/* Sparkle effect on hover */}
      {isHovered && isMounted && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent, #D9E5C1, transparent, #B8C9A3, transparent)'
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1]
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      )}
    </motion.div>
  );
};

const AnimatedConnection = ({ connection, isMounted }: { connection: any; isMounted: boolean }) => {
  const pathLength = Math.sqrt(
    Math.pow(connection.end.x - connection.start.x, 2) + 
    Math.pow(connection.end.y - connection.start.y, 2)
  );
  
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <motion.line
        x1={`${connection.start.x}%`}
        y1={`${connection.start.y}%`}
        x2={`${connection.end.x}%`}
        y2={`${connection.end.y}%`}
        stroke="url(#connectionGradient)"
        strokeWidth="2"
        initial={isMounted ? { 
          pathLength: 0, 
          opacity: 0,
          strokeDasharray: "5,5"
        } : false}
        animate={isMounted ? { 
          pathLength: 1, 
          opacity: [0, 0.8, 0.4, 0.8, 0.3],
          strokeDashoffset: [0, -10]
        } : {}}
        transition={isMounted ? {
          pathLength: { 
            delay: connection.delay, 
            duration: 2, 
            ease: "easeInOut" 
          },
          opacity: { 
            delay: connection.delay + 0.5, 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          },
          strokeDashoffset: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }
        } : {}}
      />
      
      {/* Define gradient for connections */}
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(217, 229, 193, 0.8)" />
          <stop offset="50%" stopColor="rgba(184, 201, 163, 1)" />
          <stop offset="100%" stopColor="rgba(160, 184, 133, 0.6)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export const DataVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes] = useState(() => generateNodes(30)); // Increased node count
  const [connections] = useState(() => generateConnections(nodes));
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMounted, setIsMounted] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0.3, 0.7], [0.95, 1.05]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  
  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMounted]);
  
  return (
    <div suppressHydrationWarning>
      <motion.div 
        ref={containerRef}
        className="relative w-full h-full overflow-hidden rounded-lg"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(217, 229, 193, 0.15) 0%, rgba(255, 255, 255, 0.05) 70%)',
          ...(isMounted && { rotateY, scale, y: floatY })
        }}
        initial={isMounted ? { 
          opacity: 0, 
          rotateX: -15,
          scale: 0.8
        } : false}
        animate={isMounted ? { 
          opacity: 1, 
          rotateX: [0, 5, 0],
          scale: 1
        } : {}}
        transition={{ 
          duration: 2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          rotateX: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Enhanced background grid with mouse interaction */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(217, 229, 193, 0.4) 0%, transparent 50%),
              linear-gradient(90deg, rgba(217, 229, 193, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(217, 229, 193, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 25px 25px, 25px 25px'
          }}
          animate={isMounted ? {
            opacity: [0.3, 0.5, 0.3]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Connections with enhanced animations */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          {connections.map((connection) => (
            <AnimatedConnection key={connection.id} connection={connection} isMounted={isMounted} />
          ))}
        </div>
        
        {/* Nodes with enhanced effects */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          {nodes.map((node, index) => (
            <AnimatedNode key={node.id} node={node} index={index} isMounted={isMounted} />
          ))}
        </div>
        
        {/* Enhanced mouse follower */}
        {isMounted && (
          <motion.div
            className="absolute w-6 h-6 rounded-full pointer-events-none"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              background: 'radial-gradient(circle, rgba(217, 229, 193, 0.6), transparent)',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        
        {/* Floating particles for extra visual interest */}
        {isMounted && Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#D9E5C1] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Atmospheric glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(217, 229, 193, 0.1) 0%, transparent 60%)`,
            filter: 'blur(20px)'
          }}
          animate={isMounted ? {
            opacity: [0.5, 0.8, 0.5]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}; 