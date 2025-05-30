'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, PanInfo } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { caseStudies, CaseStudy } from '@/data/caseStudies';
import { H2, Paragraph } from '@/components/ui';

// Individual Case Study Card Component
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

  return (
    <motion.article
      ref={cardRef}
      className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
      style={{ 
        y, 
        opacity, 
        scale,
        width: `${cardWidth}px`
      }}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
    >
      {/* Thumbnail with overlay */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={study.project.thumbnail}
          alt={study.project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Client logo */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
          <span className="font-semibold text-charcoal">{study.client.name}</span>
        </div>
        
        {/* Industry tag */}
        <div className="absolute top-4 left-4">
          <span 
            className="px-3 py-1 rounded-full text-sm font-medium text-charcoal/80"
            style={{ backgroundColor: study.color }}
          >
            {study.client.industry}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-gray-700 transition-colors">
          {study.project.title}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
          {study.project.description}
        </p>
        
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {study.project.metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            >
              <div className="text-xl font-bold text-charcoal mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {metric.label}
              </div>
              {metric.improvement && (
                <div className="text-xs text-green-600 font-medium">
                  {metric.improvement}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {study.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
          {study.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              +{study.technologies.length - 3} more
            </span>
          )}
        </div>
        
        {/* CTA */}
        <motion.div
          className="flex items-center text-charcoal font-medium group-hover:text-gray-600 transition-colors"
          whileHover={{ x: 5 }}
        >
          <span className="mr-2">{study.cta.label}</span>
          <ArrowRight 
            size={18} 
            className="group-hover:translate-x-1 transition-transform" 
          />
        </motion.div>
      </div>
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