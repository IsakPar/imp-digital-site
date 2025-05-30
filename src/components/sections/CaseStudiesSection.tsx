'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, PanInfo } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { caseStudies, CaseStudy } from '@/data/caseStudies';
import { H2, Paragraph } from '@/components/ui';

// Individual Case Study Card Component with Premium Animations
const CaseStudyCard = ({ 
  study, 
  index, 
  isActive,
  onClick,
  cardWidth = 400
}: { 
  study: CaseStudy; 
  index: number; 
  isActive: boolean;
  onClick: () => void;
  cardWidth?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.95, 1]);

  // Different entrance patterns for variety
  const getEntranceAnimation = (index: number) => {
    const patterns = [
      // Flip in from left
      {
        initial: { 
          opacity: 0, 
          rotateY: -90, 
          x: -50,
          scale: 0.8 
        },
        animate: { 
          opacity: 1, 
          rotateY: 0, 
          x: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: index * 0.1
          }
        }
      },
      // Scale and rotate in
      {
        initial: { 
          opacity: 0, 
          scale: 0.3, 
          rotate: 20 
        },
        animate: { 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: index * 0.1
          }
        }
      },
      // Slide in from bottom with rotation
      {
        initial: { 
          opacity: 0, 
          y: 100, 
          rotateX: 45,
          scale: 0.9 
        },
        animate: { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.1
          }
        }
      }
    ];
    
    return patterns[index % patterns.length];
  };

  const entrancePattern = getEntranceAnimation(index);

  return (
    <motion.article
      ref={cardRef}
      className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative"
      style={{ 
        y, 
        opacity, 
        scale,
        width: `${cardWidth}px`,
        transformStyle: "preserve-3d"
      }}
      initial={entrancePattern.initial}
      animate={entrancePattern.animate}
      whileHover={{ 
        y: -15,
        scale: 1.03,
        rotateY: isActive ? 0 : 2,
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        transition: { 
          duration: 0.4,
          ease: "easeOut"
        }
      }}
      onClick={onClick}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${study.color}20 0%, ${study.color}10 50%, transparent 100%)`
        }}
        whileHover={{
          opacity: 1,
          transition: { duration: 0.3 }
        }}
      />

      {/* Thumbnail with enhanced effects */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={study.project.thumbnail}
          alt={study.project.title}
          className="w-full h-full object-cover"
          whileHover={{ 
            scale: 1.08,
            transition: { duration: 0.6, ease: 'easeOut' }
          }}
        />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          whileHover={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent, transparent)",
            transition: { duration: 0.3 }
          }}
        />
        
        {/* Floating particles overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          whileHover={{
            opacity: 1,
            transition: { duration: 0.4 }
          }}
          initial={{ opacity: 0 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
        
        {/* Client logo with enhanced animation */}
        <motion.div 
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.95)",
            y: -2,
            transition: { duration: 0.2 }
          }}
        >
          <span className="font-semibold text-charcoal">{study.client.name}</span>
        </motion.div>
        
        {/* Industry tag with animation */}
        <motion.div 
          className="absolute top-4 left-4"
          whileHover={{
            scale: 1.1,
            y: -2,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <span 
            className="px-3 py-1 rounded-full text-sm font-medium text-charcoal/80 backdrop-blur-sm"
            style={{ backgroundColor: study.color }}
          >
            {study.client.industry}
          </span>
        </motion.div>

        {/* Hover play button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255,255,255,0.3)",
              transition: { duration: 0.2 }
            }}
          >
            <Play size={24} className="text-white ml-1" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Content with micro-animations */}
      <motion.div 
        className="p-6 relative z-10"
        whileHover={{
          y: -3,
          transition: { duration: 0.2 }
        }}
      >
        <motion.h3 
          className="text-xl font-bold text-charcoal mb-2 leading-tight"
          whileHover={{
            color: study.color,
            x: 2,
            transition: { duration: 0.2 }
          }}
        >
          {study.project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 mb-4 leading-relaxed"
          whileHover={{
            color: "#4B5563",
            transition: { duration: 0.2 }
          }}
        >
          {study.project.description}
        </motion.p>
        
        {/* Results with enhanced animations */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {study.project.metrics.slice(0, 2).map((metric, metricIndex) => (
            <motion.div 
              key={metricIndex}
              className="text-center p-3 bg-gray-50 rounded-lg relative overflow-hidden"
              whileHover={{
                backgroundColor: `${study.color}10`,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="text-lg font-bold"
                style={{ color: study.color }}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {metric.value}
              </motion.div>
              <div className="text-xs text-gray-600 font-medium">{metric.label}</div>
              
              {/* Animated progress bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 rounded-full"
                style={{ backgroundColor: study.color }}
                initial={{ width: 0 }}
                whileHover={{
                  width: "100%",
                  transition: { duration: 0.4 }
                }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* CTA with enhanced animation */}
        <motion.div 
          className="flex items-center justify-between pt-4 border-t border-gray-100"
          whileHover={{
            paddingTop: "18px",
            transition: { duration: 0.2 }
          }}
        >
          <motion.span 
            className="text-sm text-gray-500"
            whileHover={{
              color: study.color,
              transition: { duration: 0.2 }
            }}
          >
            2024
          </motion.span>
          <motion.div 
            className="flex items-center text-charcoal font-medium group-hover:text-matcha transition-colors"
            whileHover={{
              x: 3,
              transition: { duration: 0.2 }
            }}
          >
            <span className="mr-2 text-sm">View case</span>
            <motion.div
              whileHover={{
                x: 2,
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <ArrowRight size={14} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 opacity-0 pointer-events-none"
        style={{ borderColor: study.color }}
        whileHover={{
          opacity: 1,
          scale: 1.01,
          transition: { duration: 0.3 }
        }}
      />
    </motion.article>
  );
};

// Progress Indicator Component
const CarouselProgress = ({ 
  current, 
  total, 
  isPlaying, 
  onTogglePlay 
}: { 
  current: number; 
  total: number;
  isPlaying: boolean;
  onTogglePlay: () => void;
}) => {
  return (
    <div className="flex justify-center items-center mt-12 gap-4">
      {/* Play/Pause button */}
      <button
        onClick={onTogglePlay}
        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 group"
        aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
      >
        {isPlaying ? (
          <Pause size={20} className="text-charcoal group-hover:text-gray-600" />
        ) : (
          <Play size={20} className="text-charcoal group-hover:text-gray-600 ml-1" />
        )}
      </button>
      
      {/* Progress dots */}
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <motion.div
            key={i}
            className="h-1 bg-gray-200 rounded-full overflow-hidden"
            style={{ width: i === current ? '40px' : '20px' }}
            animate={{ width: i === current ? '40px' : '20px' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-matcha to-matcha-dark"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: i === current && isPlaying ? 1 : 0 }}
              transition={{ 
                duration: isPlaying ? 4 : 0, 
                ease: "linear",
                repeat: i === current && isPlaying ? Infinity : 0
              }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Main Case Studies Section
export default function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(420);
  const [isMounted, setIsMounted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle responsive card width
  useEffect(() => {
    if (!isMounted) return;
    
    const updateCardWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(320); // Mobile
      } else if (width < 768) {
        setCardWidth(356); // Small tablet
      } else {
        setCardWidth(420); // Desktop
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, [isMounted]);

  // Auto-play functionality
  const resetAutoPlay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (isPlaying && !isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
      }, 4000);
    }
  }, [isPlaying, isHovered]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [resetAutoPlay]);

  // Handle drag end
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    const offset = info.offset.x;
    
    if (offset > threshold && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else if (offset < -threshold && currentIndex < caseStudies.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    setDragOffset(0);
  };

  const togglePlayState = () => {
    setIsPlaying(prev => !prev);
  };

  const handleCardClick = (study: CaseStudy) => {
    // Navigate to case study detail page
    if (isMounted) {
      window.location.href = study.cta.url;
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isMounted) return;
    
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < caseStudies.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlayState();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [currentIndex, isMounted]);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-ivory overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-left mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <H2 className="mb-6" delay={0.1}>
            Work That Speaks
          </H2>
          <Paragraph className="text-xl text-gray-600 leading-relaxed" animate delay={0.2}>
            Transforming ambitious ideas into digital reality. Every project tells a story 
            of innovation, precision, and measurable impact.
          </Paragraph>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative -mx-6 md:mx-0">
          <motion.div
            ref={carouselRef}
            className="flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing px-6 md:px-0"
            drag="x"
            dragConstraints={{
              left: -(caseStudies.length - 1) * (cardWidth + 32),
              right: 0
            }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{ 
              x: -currentIndex * (cardWidth + 32) + dragOffset 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            style={{ width: 'max-content' }}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={index}
                isActive={index === currentIndex}
                onClick={() => handleCardClick(study)}
                cardWidth={cardWidth}
              />
            ))}
          </motion.div>

          {/* Navigation dots and controls */}
          <CarouselProgress
            current={currentIndex}
            total={caseStudies.length}
            isPlaying={isPlaying}
            onTogglePlay={togglePlayState}
          />
        </div>

        {/* Optional testimonial display */}
        <AnimatePresence mode="wait">
          {caseStudies[currentIndex]?.testimonial && (
            <motion.div
              key={currentIndex}
              className="text-center mt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-2xl text-charcoal italic mb-6">
                "{caseStudies[currentIndex].testimonial!.quote}"
              </blockquote>
              <div className="text-gray-600">
                <span className="font-semibold">
                  {caseStudies[currentIndex].testimonial!.author}
                </span>
                <span className="mx-2">•</span>
                <span>{caseStudies[currentIndex].testimonial!.role}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 