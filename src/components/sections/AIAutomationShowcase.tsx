'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Brain, 
  Bot, 
  Zap, 
  Target, 
  TrendingUp,
  BarChart,
  Eye,
  Cpu,
  Database
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

const AIAutomationShowcase = () => {
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
      id: 'predictive-maintenance',
      title: 'AI Predictive Maintenance',
      category: 'Manufacturing',
      description: 'Machine learning system preventing equipment failures before they happen',
      challenge: 'Reduce unexpected downtime and maintenance costs for industrial equipment',
      solution: 'IoT sensors + ML models for real-time anomaly detection and failure prediction',
      results: [
        'Reduced unexpected downtime by 90%',
        'Decreased maintenance costs by 45%',
        'Improved equipment lifespan by 30%',
        'Achieved 95% prediction accuracy'
      ],
      metrics: [
        { value: '90%', label: 'Downtime Reduction' },
        { value: '95%', label: 'Prediction Accuracy' },
        { value: '45%', label: 'Cost Savings' },
        { value: '24/7', label: 'Monitoring' }
      ],
      techStack: ['TensorFlow', 'Python', 'IoT Sensors', 'Apache Kafka', 'PostgreSQL', 'Docker'],
      timeline: '6 months',
      image: '/api/placeholder/600/400',
      gradient: 'from-matcha-500/20 to-matcha-500/20',
      accentColor: 'matcha'
    },
    {
      id: 'intelligent-customer-service',
      title: 'AI Customer Service Bot',
      category: 'Customer Support',
      description: 'Conversational AI handling 80% of customer inquiries automatically',
      challenge: 'Scale customer support while maintaining high satisfaction and reducing costs',
      solution: 'Advanced NLP chatbot with sentiment analysis and seamless human handoff',
      results: [
        'Automated 80% of customer inquiries',
        'Reduced response time to under 10 seconds',
        'Improved customer satisfaction by 35%',
        'Decreased support costs by 60%'
      ],
      metrics: [
        { value: '80%', label: 'Automation Rate' },
        { value: '<10s', label: 'Response Time' },
        { value: '35%', label: 'Satisfaction Boost' },
        { value: '24/7', label: 'Availability' }
      ],
      techStack: ['GPT-4', 'Python', 'FastAPI', 'Redis', 'Elasticsearch', 'AWS'],
      timeline: '4 months',
      image: '/api/placeholder/600/400',
      gradient: 'from-matcha-500/20 to-matcha-500/20',
      accentColor: 'matcha'
    },
    {
      id: 'document-processing',
      title: 'Intelligent Document Processing',
      category: 'Document Management',
      description: 'AI-powered system extracting and processing data from unstructured documents',
      challenge: 'Automate manual document processing for legal and financial institutions',
      solution: 'Computer vision + NLP for document classification, data extraction, and validation',
      results: [
        'Processed 100K+ documents monthly',
        'Reduced processing time by 85%',
        'Achieved 98% data extraction accuracy',
        'Eliminated manual data entry errors'
      ],
      metrics: [
        { value: '100K+', label: 'Documents/Month' },
        { value: '98%', label: 'Accuracy Rate' },
        { value: '85%', label: 'Time Saved' },
        { value: '0%', label: 'Error Rate' }
      ],
      techStack: ['OpenCV', 'spaCy', 'PyTorch', 'FastAPI', 'MongoDB', 'Azure'],
      timeline: '8 months',
      image: '/api/placeholder/600/400',
      gradient: 'from-matcha-500/20 to-matcha-500/20',
      accentColor: 'matcha'
    }
  ];

  const aiFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Custom AI models trained on your data',
      color: 'text-matcha',
      bgColor: 'bg-matcha/10',
      hoverColor: 'hover:bg-matcha/20'
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'Intelligent Automation',
      description: 'Smart workflows that adapt and learn',
      color: 'text-matcha-dark',
      bgColor: 'bg-matcha-dark/10',
      hoverColor: 'hover:bg-matcha-dark/20'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Computer Vision',
      description: 'Image and video analysis capabilities',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and behaviors',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
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
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6" 
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            AI Success Stories
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Real-world AI implementations that transform businesses and amplify human potential.
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.bgColor} ${feature.hoverColor} rounded-xl p-6 text-center transition-all duration-300 cursor-pointer group`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className={`${feature.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-charcoal mb-2">{feature.title}</h3>
              <p className="text-sm text-charcoal/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Study Navigation */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-charcoal mb-6">Featured Projects</h3>
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    index === activeCase 
                      ? `bg-gradient-to-r ${study.gradient} border-2 border-matcha/30` 
                      : 'bg-white hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                  onClick={() => setActiveCase(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      index === activeCase ? 'bg-matcha' : 'bg-gray-300'
                    } transition-colors duration-300`} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-charcoal mb-1">{study.title}</h4>
                      <p className="text-sm text-charcoal/60 mb-2">{study.category}</p>
                      <p className="text-sm text-charcoal/70">{study.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Active Case Study Details */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              key={activeCase}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-matcha/10 text-matcha mb-3`}>
                    {currentCase.category}
                  </span>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{currentCase.title}</h3>
                  <p className="text-charcoal/70">{currentCase.description}</p>
                </div>
                <motion.button
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-5 h-5 text-matcha" />
                </motion.button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {currentCase.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-matcha mb-1">{metric.value}</div>
                    <div className="text-sm text-charcoal/60">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 mb-6">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-red-500" />
                    Challenge
                  </h4>
                  <p className="text-charcoal/70 leading-relaxed">{currentCase.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-matcha" />
                    Solution
                  </h4>
                  <p className="text-charcoal/70 leading-relaxed">{currentCase.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                  Results
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentCase.results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-charcoal/70">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                  <Cpu className="w-4 h-4 mr-2 text-matcha" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentCase.techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-sm text-charcoal/60">
                  Timeline: <span className="font-medium text-charcoal">{currentCase.timeline}</span>
                </div>
                <motion.button
                  className="px-6 py-2 bg-matcha text-white rounded-lg font-medium hover:bg-matcha-dark transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AIAutomationShowcase; 