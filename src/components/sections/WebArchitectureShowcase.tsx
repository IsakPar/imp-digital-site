'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Code2, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp,
  Globe,
  Server,
  Lock
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { value: string; label: string }[];
  techStack: string[];
  timeline: string;
  image: string;
  gradient: string;
  accentColor: string;
}

const WebArchitectureShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Smooth spring animation for the active case transition
  const springY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      id: 'fintech-platform',
      title: 'Nordic Banking Platform',
      category: 'FinTech',
      description: 'Next-generation banking infrastructure serving 2M+ customers',
      challenge: 'Legacy system modernization with zero downtime and regulatory compliance',
      solution: 'Microservices architecture with event-driven design and real-time processing',
      results: [
        'Reduced transaction processing time by 85%',
        'Achieved 99.99% uptime during migration',
        'Improved security compliance scores by 40%',
        'Enabled real-time fraud detection'
      ],
      metrics: [
        { value: '2M+', label: 'Active Users' },
        { value: '99.99%', label: 'Uptime' },
        { value: '<50ms', label: 'Response Time' },
        { value: '85%', label: 'Cost Reduction' }
      ],
      techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS'],
      timeline: '8 months',
      image: '/api/placeholder/600/400',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      accentColor: 'emerald'
    },
    {
      id: 'ecommerce-scale',
      title: 'Global E-Commerce Engine',
      category: 'E-Commerce',
      description: 'Multi-tenant platform handling Black Friday traffic spikes',
      challenge: 'Scale from 100K to 10M concurrent users without performance degradation',
      solution: 'Edge computing with auto-scaling infrastructure and intelligent caching',
      results: [
        'Handled 10M concurrent users seamlessly',
        'Reduced page load times by 60%',
        'Achieved 99.95% checkout success rate',
        'Scaled across 25 global regions'
      ],
      metrics: [
        { value: '10M+', label: 'Concurrent Users' },
        { value: '1.2s', label: 'Load Time' },
        { value: '99.95%', label: 'Success Rate' },
        { value: '25', label: 'Global Regions' }
      ],
      techStack: ['React', 'GraphQL', 'MongoDB', 'Docker', 'CloudFlare', 'GCP'],
      timeline: '12 months',
      image: '/api/placeholder/600/400',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      accentColor: 'blue'
    },
    {
      id: 'healthcare-portal',
      title: 'Healthcare Data Platform',
      category: 'Healthcare',
      description: 'GDPR-compliant patient data management with AI diagnostics',
      challenge: 'Process sensitive health data while maintaining strict privacy compliance',
      solution: 'Zero-trust security architecture with end-to-end encryption and AI integration',
      results: [
        'Processed 500K+ patient records securely',
        'Reduced diagnostic time by 45%',
        'Achieved GDPR and HIPAA compliance',
        'Enabled real-time health monitoring'
      ],
      metrics: [
        { value: '500K+', label: 'Patient Records' },
        { value: '100%', label: 'GDPR Compliant' },
        { value: '45%', label: 'Faster Diagnosis' },
        { value: 'Zero', label: 'Security Breaches' }
      ],
      techStack: ['TypeScript', 'Express', 'PostgreSQL', 'TensorFlow', 'Docker', 'Azure'],
      timeline: '10 months',
      image: '/api/placeholder/600/400',
      gradient: 'from-rose-500/20 to-pink-500/20',
      accentColor: 'rose'
    }
  ];

  const architectureFeatures = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Modern Stack',
      description: 'Latest frameworks and technologies',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Smart Data',
      description: 'Optimized database architecture',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security First',
      description: 'Enterprise-grade protection',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Sub-second response times',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ y, opacity, scale }}
      className="relative py-24 bg-gradient-to-br from-ivory via-white to-matcha/5 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
      >
        {isMounted && Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              left: `${10 + i * 12}%`,
              top: `${10 + (i % 4) * 20}%`,
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#D9E5C1' : '#B8C9A3'} 0%, transparent 70%)`,
              filter: 'blur(15px)'
            }}
            animate={{
              y: [-30, 30, -30],
              rotate: [0, 180, 360],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-5xl lg:text-7xl font-black text-charcoal leading-none mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            CASE{' '}
            <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
              STUDIES
            </span>
          </h2>
          <motion.p 
            className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real-world solutions that transformed businesses and exceeded expectations. 
            Discover how we architect success for our clients.
          </motion.p>
        </motion.div>

        {/* Architecture Features Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {architectureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.bgColor} ${feature.hoverColor} backdrop-blur-sm rounded-2xl p-6 text-center border border-matcha/10 transition-all duration-500 group cursor-pointer`}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(184, 201, 163, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ 
                opacity: 0, 
                y: 100,
                scale: 0.7,
                rotateY: -15
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                scale: 1,
                rotateY: 0
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <motion.div 
                className={`${feature.color} mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                initial={{ scale: 0, rotate: -90 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ rotate: 10, scale: 1.3 }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="font-bold text-charcoal mb-2 group-hover:text-matcha transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-sm text-charcoal/60 group-hover:text-charcoal/80 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Study Showcase */}
        <div className="max-w-7xl mx-auto">
          {/* Case Study Navigation */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-matcha/20 shadow-lg">
              {caseStudies.map((study, index) => (
                <motion.button
                  key={study.id}
                  onClick={() => setActiveCase(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                    activeCase === index
                      ? 'bg-gradient-to-r from-matcha to-matcha-dark text-white shadow-lg'
                      : 'text-charcoal/70 hover:text-charcoal hover:bg-white/50'
                  }`}
                  whileHover={{ 
                    scale: activeCase === index ? 1 : 1.05,
                    y: activeCase === index ? 0 : -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {study.category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Case Study */}
          <motion.div
            key={activeCase}
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <motion.span 
                    className="px-3 py-1 bg-matcha/20 text-matcha-dark rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {currentCase.category}
                  </motion.span>
                  <span className="text-charcoal/60 text-sm">{currentCase.timeline}</span>
                </div>
                <motion.h3 
                  className="text-3xl lg:text-4xl font-bold text-charcoal mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {currentCase.title}
                </motion.h3>
                <motion.p 
                  className="text-lg text-charcoal/70 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {currentCase.description}
                </motion.p>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="font-bold text-charcoal mb-2 flex items-center">
                    <motion.div 
                      className="w-2 h-2 bg-red-500 rounded-full mr-3"
                      whileHover={{ scale: 1.5 }}
                    ></motion.div>
                    Challenge
                  </h4>
                  <p className="text-charcoal/70 pl-5">{currentCase.challenge}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className="font-bold text-charcoal mb-2 flex items-center">
                    <motion.div 
                      className="w-2 h-2 bg-green-500 rounded-full mr-3"
                      whileHover={{ scale: 1.5 }}
                    ></motion.div>
                    Solution
                  </h4>
                  <p className="text-charcoal/70 pl-5">{currentCase.solution}</p>
                </motion.div>
              </div>

              {/* Metrics */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {currentCase.metrics.map((metric, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 bg-white/60 rounded-xl border border-matcha/10 hover:bg-white/80 hover:border-matcha/30 transition-all duration-300 group cursor-pointer"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.02,
                      boxShadow: "0 10px 20px rgba(184, 201, 163, 0.2)"
                    }}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.5,
                      y: 50,
                      rotateX: -20
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                      rotateX: 0
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.6 + index * 0.15,
                      type: "spring",
                      stiffness: 150,
                      damping: 12
                    }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-matcha group-hover:text-matcha-dark transition-colors duration-300"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.8 + index * 0.15,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {metric.value}
                    </motion.div>
                    <motion.div 
                      className="text-sm text-charcoal/60 group-hover:text-charcoal/80 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.15 }}
                    >
                      {metric.label}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h4 className="font-bold text-charcoal mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {currentCase.techStack.map((tech, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-charcoal/10 text-charcoal text-sm rounded-lg hover:bg-matcha/20 hover:text-matcha-dark transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <motion.button 
                  className="px-6 py-3 bg-gradient-to-r from-matcha to-matcha-dark text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Full Case Study
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink size={16} />
                  </motion.div>
                </motion.button>
                <motion.button 
                  className="px-6 py-3 border-2 border-matcha text-matcha rounded-xl font-semibold hover:bg-matcha hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Similar Project?
                </motion.button>
              </motion.div>
            </div>

            {/* Visual */}
            <div className="relative">
              <motion.div 
                className={`relative bg-gradient-to-br ${currentCase.gradient} rounded-3xl p-8 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 group`}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
              >
                {/* Placeholder for project visualization */}
                <div className="aspect-[4/3] bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all duration-500">
                  <div className="text-center">
                    <motion.div 
                      className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/40 transition-all duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Globe className="w-8 h-8 text-white/80" />
                    </motion.div>
                    <div className="text-white/80 font-medium group-hover:text-white transition-colors duration-500">
                      {currentCase.title} Architecture
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                <div className="space-y-3">
                  <h4 className="font-bold text-white mb-3">Key Results</h4>
                  {currentCase.results.map((result, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center text-white/90 text-sm hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-white/60 rounded-full mr-3"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      {result}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating elements */}
              {isMounted && [
                { Icon: Server, x: -20, y: -20, delay: 1 },
                { Icon: Lock, x: 320, y: 50, delay: 1.2 },
                { Icon: TrendingUp, x: -30, y: 280, delay: 1.4 }
              ].map(({ Icon, x, y, delay }, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-matcha cursor-pointer"
                  style={{ left: x, top: y }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 15,
                    boxShadow: "0 10px 25px rgba(184, 201, 163, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WebArchitectureShowcase; 