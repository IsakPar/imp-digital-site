'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Play, Pause, Clock, User, Tag, Heart, BookOpen, TrendingUp, Award } from 'lucide-react';
import { caseStudies, CaseStudy } from '@/data/caseStudies';
import { H2, Paragraph } from '@/components/ui';

// Enhanced Case Study Story Card Component
const CaseStudyStoryCard = ({ 
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
  const [isLiked, setIsLiked] = useState(false);
  const readTime = 3 + (index % 5); // 3-7 min read time based on index

  // Blog-style metadata
  const getInsightTag = (index: number) => {
    const tags = ['Innovation', 'Scale', 'Security', 'Performance', 'User Experience'];
    return tags[index % tags.length];
  };

  const getAuthor = (index: number) => {
    const authors = [
      { name: 'Sarah Digital', role: 'Lead Architect', avatar: '👩‍💻' },
      { name: 'Marcus Code', role: 'Senior Engineer', avatar: '👨‍💻' },
      { name: 'Elena Design', role: 'UX Director', avatar: '👩‍🎨' },
      { name: 'Alex Strategy', role: 'Technical Lead', avatar: '👨‍🔬' },
      { name: 'Maya Innovation', role: 'Product Manager', avatar: '👩‍🚀' }
    ];
    return authors[index % authors.length];
  };

  const author = getAuthor(index);
  const insightTag = getInsightTag(index);

  return (
    <article
      className="flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-lg group cursor-pointer relative border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-500"
      style={{ 
        width: `${cardWidth}px`,
      }}
      onClick={onClick}
    >
      {/* Blog-style header with metadata */}
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between mb-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: study.color }}
          >
            {insightTag}
          </span>
          <button
            className={`p-2 rounded-full transition-colors hover:scale-110 ${isLiked ? 'text-red-500' : 'text-gray-400'}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Author info */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-matcha to-matcha-dark flex items-center justify-center text-white text-lg mr-3">
            {author.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-charcoal">{author.name}</p>
            <p className="text-xs text-gray-500">{author.role}</p>
          </div>
          <div className="ml-auto flex items-center text-xs text-gray-500">
            <Clock size={12} className="mr-1" />
            {readTime} min read
          </div>
        </div>
      </div>

      {/* Enhanced image with overlay content */}
      <div className="relative overflow-hidden h-48 mx-6 rounded-2xl group">
        <img
          src={study.project.thumbnail}
          alt={study.project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Client badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 hover:scale-105 hover:bg-white transition-all duration-200">
          <span className="font-semibold text-charcoal text-sm">{study.client.name}</span>
        </div>
      </div>

      {/* Blog-style content */}
      <div className="p-6 pt-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal mb-3 leading-tight group-hover:text-matcha transition-colors">
          {study.project.title}
        </h3>
        
        {/* Story excerpt */}
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {study.project.description}
        </p>

        {/* Key insights preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-charcoal mb-2 flex items-center">
            <BookOpen size={14} className="mr-2 text-matcha" />
            Key Insights
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {study.project.metrics.slice(0, 3).map((metric, idx) => (
              <div
                key={idx}
                className="text-center p-2 bg-gray-50 rounded-lg hover:scale-105 hover:bg-opacity-80 transition-all duration-200"
              >
                <div className="text-lg font-bold text-matcha">{metric.value}</div>
                <div className="text-xs text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology stack */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-charcoal mb-2 flex items-center">
            <TrendingUp size={14} className="mr-2 text-matcha" />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1">
            {study.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium hover:scale-105 hover:bg-gray-200 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
            {study.technologies.length > 4 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{study.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Blog-style CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-xs text-gray-500">
            <Award size={12} className="mr-1" />
            <span>Featured Story</span>
          </div>
          <div className="flex items-center text-charcoal font-medium group-hover:text-matcha transition-colors">
            <span className="mr-2 text-sm">Read Story</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>

      {/* Animated border effect */}
      <div
        className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderColor: study.color }}
      />
    </article>
  );
};

// Enhanced Carousel Progress
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
    <div className="flex items-center justify-center mt-12 space-x-8">
      {/* Story navigation dots */}
      <div className="flex space-x-3">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === current ? 'bg-matcha scale-125' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Play/Pause */}
      <button
        onClick={onTogglePlay}
        className="flex items-center justify-center w-12 h-12 bg-matcha text-white rounded-full hover:bg-matcha-dark hover:scale-110 transition-all duration-300"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      
      {/* Story counter */}
      <div className="text-sm text-gray-500 min-w-[60px] text-center">
        Story {current + 1} of {total}
      </div>
    </div>
  );
};

// Main Section - Work That Speaks
export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(420);
  const [isMounted, setIsMounted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle responsive card width
  useEffect(() => {
    if (!isMounted) return;
    
    const updateCardWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(340);
      } else if (width < 768) {
        setCardWidth(380);
      } else {
        setCardWidth(450);
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
      }, 5000);
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

  const togglePlayState = () => {
    setIsPlaying(prev => !prev);
  };

  const handleCardClick = (study: CaseStudy) => {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-ivory via-[#F8F6F1] to-[#F5F3EE] overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        {/* Enhanced Section Header with Animations */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-charcoal mb-6 leading-tight"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            SUCCESS{' '}
            <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
              STORIES
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              color: 'rgba(47, 47, 47, 0.9)',
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            Real challenges. Engineered solutions. Measurable impact.
            Discover how we transform complex problems into scalable digital excellence.
          </motion.p>

          {/* Animated Story Counter */}
          <motion.div 
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-3xl font-bold text-matcha">{caseStudies.length}</div>
              <div className="text-sm text-charcoal/60">Success Stories</div>
            </motion.div>
            <div className="w-px h-12 bg-charcoal/20"></div>
            <motion.div 
              className="text-center"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-3xl font-bold text-matcha">95%</div>
              <div className="text-sm text-charcoal/60">Client Satisfaction</div>
            </motion.div>
            <div className="w-px h-12 bg-charcoal/20"></div>
            <motion.div 
              className="text-center"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-3xl font-bold text-matcha">∞</div>
              <div className="text-sm text-charcoal/60">Ongoing Partnerships</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Carousel Introduction */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-matcha/20"
            whileHover={{
              scale: 1.05,
              borderColor: 'rgba(184, 201, 163, 0.4)',
              boxShadow: "0 10px 25px -5px rgba(184, 201, 163, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <BookOpen size={16} className="text-matcha" />
            <span className="text-sm font-medium text-charcoal">Interactive Case Studies</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <TrendingUp size={14} className="text-matcha" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stories Carousel */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="relative -mx-6 md:mx-0">
            <div
              ref={carouselRef}
              className="flex gap-8 px-6 md:px-0 transition-transform duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ 
                transform: `translateX(-${currentIndex * (cardWidth + 32)}px)`,
                width: 'max-content' 
              }}
            >
              {caseStudies.map((study, index) => (
                <CaseStudyStoryCard
                  key={study.id}
                  study={study}
                  index={index}
                  isActive={index === currentIndex}
                  onClick={() => handleCardClick(study)}
                  cardWidth={cardWidth}
                />
              ))}
            </div>

            {/* Navigation */}
            <CarouselProgress
              current={currentIndex}
              total={caseStudies.length}
              isPlaying={isPlaying}
              onTogglePlay={togglePlayState}
            />
          </div>
        </motion.div>

        {/* Testimonial display */}
        {caseStudies[currentIndex]?.testimonial && (
          <div className="text-center mt-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-ivory/50 rounded-3xl p-8 md:p-12 border border-gray-100">
              <div className="text-6xl text-matcha/20 mb-4">"</div>
              <blockquote className="text-2xl md:text-3xl text-charcoal italic mb-8 leading-relaxed font-light">
                {caseStudies[currentIndex].testimonial!.quote}
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-matcha to-matcha-dark rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {caseStudies[currentIndex].testimonial!.author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-charcoal text-lg">
                    {caseStudies[currentIndex].testimonial!.author}
                  </div>
                  <div className="text-gray-600">
                    {caseStudies[currentIndex].testimonial!.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 