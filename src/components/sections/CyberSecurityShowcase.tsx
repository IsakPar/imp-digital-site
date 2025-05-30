'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  Eye, 
  TrendingUp, 
  Users,
  Clock,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Target,
  Zap
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  duration: string;
  teamSize: string;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const CyberSecurityShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      id: 'fintech-security',
      title: 'Enterprise Financial Security Overhaul',
      client: 'Nordic Financial Group',
      industry: 'Financial Services',
      challenge: 'Legacy security infrastructure with multiple compliance gaps and increasing cyber threats targeting financial data.',
      solution: 'Implemented zero-trust architecture, upgraded all security protocols, and deployed 24/7 SOC monitoring with advanced threat detection.',
      results: [
        { metric: 'Security Incidents', value: '0', description: 'Zero security breaches post-implementation' },
        { metric: 'Compliance Score', value: '100%', description: 'Full PCI DSS and SOX compliance achieved' },
        { metric: 'Threat Detection', value: '<5min', description: 'Average threat detection and response time' },
        { metric: 'Cost Reduction', value: '40%', description: 'Reduction in security overhead costs' }
      ],
      technologies: ['Zero Trust Framework', 'SIEM Solutions', 'Multi-Factor Authentication', 'Data Encryption', 'SOC 2 Type II'],
      duration: '8 months',
      teamSize: '12 specialists',
      image: '/images/case-studies/fintech-security.jpg',
      testimonial: {
        quote: "Their security overhaul transformed our entire approach to cybersecurity. We now sleep better knowing our customers' financial data is protected by world-class security measures.",
        author: "Henrik Larsson",
        position: "CISO, Nordic Financial Group"
      }
    },
    {
      id: 'healthcare-compliance',
      title: 'Healthcare Data Protection & HIPAA Compliance',
      client: 'MedTech Solutions',
      industry: 'Healthcare Technology',
      challenge: 'Complex healthcare data requirements with strict HIPAA compliance needs and legacy system integration challenges.',
      solution: 'Deployed comprehensive data protection framework with encryption, access controls, and audit trails meeting all HIPAA requirements.',
      results: [
        { metric: 'Compliance Rating', value: '100%', description: 'Full HIPAA compliance certification' },
        { metric: 'Data Breach Risk', value: '99.9%', description: 'Reduction in data breach risk' },
        { metric: 'Audit Success', value: '100%', description: 'Passed all regulatory audits' },
        { metric: 'Access Control', value: '24/7', description: 'Continuous access monitoring' }
      ],
      technologies: ['HIPAA Framework', 'Data Encryption', 'Access Control', 'Audit Logging', 'Secure APIs'],
      duration: '6 months',
      teamSize: '8 specialists',
      image: '/images/case-studies/healthcare-security.jpg',
      testimonial: {
        quote: "The team delivered beyond our expectations. Our HIPAA compliance is now bulletproof, and our patients trust us more than ever with their sensitive health data.",
        author: "Dr. Sarah Chen",
        position: "CTO, MedTech Solutions"
      }
    },
    {
      id: 'ecommerce-protection',
      title: 'E-commerce Platform Security Enhancement',
      client: 'Nordic Retail Hub',
      industry: 'E-commerce',
      challenge: 'High-volume e-commerce platform vulnerable to DDoS attacks and payment fraud with growing customer security concerns.',
      solution: 'Implemented advanced DDoS protection, fraud detection systems, and PCI DSS compliant payment security infrastructure.',
      results: [
        { metric: 'DDoS Protection', value: '100%', description: 'Complete DDoS attack mitigation' },
        { metric: 'Fraud Reduction', value: '85%', description: 'Decrease in payment fraud incidents' },
        { metric: 'Site Uptime', value: '99.99%', description: 'Platform availability guarantee' },
        { metric: 'Customer Trust', value: '+60%', description: 'Increase in customer confidence scores' }
      ],
      technologies: ['DDoS Protection', 'Fraud Detection AI', 'PCI DSS', 'Web Application Firewall', 'SSL/TLS'],
      duration: '4 months',
      teamSize: '10 specialists',
      image: '/images/case-studies/ecommerce-security.jpg',
      testimonial: {
        quote: "Since implementing their security solutions, we've seen zero successful attacks and our customers feel completely secure shopping with us. Sales have increased significantly.",
        author: "Anna Johansson",
        position: "CEO, Nordic Retail Hub"
      }
    }
  ];

  const securityMetrics = [
    { icon: <Shield className="w-8 h-8" />, value: "99.9%", label: "Protection Rate", color: "text-matcha" },
    { icon: <Clock className="w-8 h-8" />, value: "<2min", label: "Response Time", color: "text-matcha-dark" },
    { icon: <Target className="w-8 h-8" />, value: "100%", label: "Compliance", color: "text-green-600" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "0", label: "Breaches", color: "text-red-600" }
  ];

  const currentCase = caseStudies[activeCase];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <motion.section 
      ref={sectionRef}
      style={{ y, opacity }}
      className="relative py-24 bg-gradient-to-br from-ivory via-white to-matcha/5 overflow-hidden"
      id="case-studies"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted && Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              left: `${20 + i * 20}%`,
              top: `${10 + (i % 2) * 40}%`,
              background: `linear-gradient(135deg, #D9E5C1 0%, #B8C9A3 50%, transparent 100%)`,
              filter: 'blur(40px)'
            }}
            animate={{
              y: [-30, 30, -30],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Security Case Studies
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto mb-12">
            Real-world security implementations that protect businesses and build customer trust.
          </p>

          {/* Security Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-matcha/20 hover:border-matcha/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className={`${metric.color} mb-3 flex justify-center`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-charcoal mb-1">{metric.value}</div>
                <div className="text-sm text-charcoal/60">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Display */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-matcha/20 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Case Study Content */}
            <div className="p-8 lg:p-12">
              {/* Navigation */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="text-sm text-matcha font-semibold">Case Study</div>
                  <div className="text-sm text-charcoal/60">
                    {activeCase + 1} of {caseStudies.length}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <motion.button
                    onClick={prevCase}
                    className="p-2 rounded-full bg-matcha/10 text-matcha hover:bg-matcha hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowLeft size={20} />
                  </motion.button>
                  <motion.button
                    onClick={nextCase}
                    className="p-2 rounded-full bg-matcha/10 text-matcha hover:bg-matcha hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Title & Client */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-charcoal mb-2">{currentCase.title}</h3>
                    <div className="text-matcha font-semibold">{currentCase.client}</div>
                    <div className="text-charcoal/60">{currentCase.industry}</div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-charcoal mb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                        Challenge
                      </h4>
                      <p className="text-charcoal/70 leading-relaxed">{currentCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-charcoal mb-2 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-matcha" />
                        Solution
                      </h4>
                      <p className="text-charcoal/70 leading-relaxed">{currentCase.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {currentCase.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="bg-matcha/5 rounded-lg p-4 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="text-2xl font-bold text-matcha mb-1">{result.value}</div>
                        <div className="text-xs text-charcoal/60 mb-1">{result.metric}</div>
                        <div className="text-xs text-charcoal/50">{result.description}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-charcoal/60 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {currentCase.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {currentCase.teamSize}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-charcoal mb-3">Security Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-matcha/10 text-matcha text-xs rounded-full border border-matcha/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {currentCase.testimonial && (
                    <motion.div
                      className="bg-gradient-to-r from-matcha/5 to-matcha-dark/5 rounded-xl p-6 border-l-4 border-matcha"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <p className="text-charcoal/70 italic mb-4">&ldquo;{currentCase.testimonial.quote}&rdquo;</p>
                      <div className="text-sm">
                        <div className="font-semibold text-charcoal">{currentCase.testimonial.author}</div>
                        <div className="text-charcoal/60">{currentCase.testimonial.position}</div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual/Image Side */}
            <div className="bg-gradient-to-br from-matcha/10 to-matcha-dark/10 p-8 lg:p-12 flex items-center justify-center">
              <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Security Visualization */}
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-6">
                      <Shield className="w-16 h-16 text-matcha mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-charcoal">Security Status</h4>
                    </div>
                    
                    <div className="space-y-4">
                      {['Threat Detection', 'Access Control', 'Data Encryption', 'Compliance'].map((item, index) => (
                        <motion.div
                          key={item}
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        >
                          <span className="text-charcoal/70 text-sm">{item}</span>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span className="text-green-600 font-semibold text-sm">Active</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-6 pt-6 border-t border-matcha/20 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <div className="text-3xl font-bold text-matcha mb-1">100%</div>
                      <div className="text-sm text-charcoal/60">Security Score</div>
                    </motion.div>
                  </div>

                  {/* Floating Security Icons */}
                  {isMounted && [
                    { Icon: Lock, position: { top: '-10px', right: '-10px' }, delay: 1.5 },
                    { Icon: Eye, position: { bottom: '-10px', left: '-10px' }, delay: 1.7 },
                    { Icon: Zap, position: { top: '50%', right: '-15px' }, delay: 1.9 }
                  ].map(({ Icon, position, delay }, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-8 h-8 bg-matcha text-white rounded-full flex items-center justify-center shadow-lg"
                      style={position}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <Icon size={16} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Case Study Navigation Dots */}
        <motion.div
          className="flex justify-center mt-8 space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {caseStudies.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCase 
                  ? 'bg-matcha scale-125' 
                  : 'bg-matcha/30 hover:bg-matcha/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CyberSecurityShowcase; 