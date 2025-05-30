'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Code, 
  Rocket, 
  MonitorSpeaker,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Database,
  Globe
} from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  deliverables: string[];
  tools: string[];
}

const WebArchitectureProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  // Spring animation for progress
  const progressSpring = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setIsMounted(true);
    // Auto-advance steps for demo
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    progressSpring.set((activeStep + 1) / processSteps.length);
  }, [activeStep, progressSpring]);

  const processSteps: ProcessStep[] = [
    {
      id: 'discovery',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business goals, technical requirements, and user needs to craft the perfect architecture foundation.',
      duration: '1-2 weeks',
      icon: <Search className="w-8 h-8" />,
      color: 'text-blue-600',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      deliverables: [
        'Technical Requirements Document',
        'Architecture Blueprint',
        'Technology Stack Recommendation',
        'Project Roadmap & Timeline'
      ],
      tools: ['Figma', 'Miro', 'Notion', 'AWS Well-Architected Tool']
    },
    {
      id: 'design',
      title: 'Architecture Design',
      description: 'Design scalable, secure, and maintainable system architecture with modern best practices and future-proof technologies.',
      duration: '2-3 weeks',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'text-purple-600',
      gradient: 'from-purple-500/20 to-pink-500/20',
      deliverables: [
        'System Architecture Diagrams',
        'Database Schema Design',
        'API Specifications',
        'Security Framework'
      ],
      tools: ['Draw.io', 'AWS Architecture Center', 'OpenAPI', 'Terraform']
    },
    {
      id: 'development',
      title: 'Development & Testing',
      description: 'Agile development with continuous integration, comprehensive testing, and code quality assurance throughout the process.',
      duration: '6-16 weeks',
      icon: <Code className="w-8 h-8" />,
      color: 'text-green-600',
      gradient: 'from-green-500/20 to-emerald-500/20',
      deliverables: [
        'Production-Ready Application',
        'Automated Test Suite',
        'CI/CD Pipeline',
        'Documentation & Guides'
      ],
      tools: ['GitHub', 'Docker', 'Jest', 'Cypress', 'SonarQube']
    },
    {
      id: 'deployment',
      title: 'Launch & Optimization',
      description: 'Seamless deployment with zero downtime, real-time monitoring, and continuous performance optimization.',
      duration: 'Ongoing',
      icon: <Rocket className="w-8 h-8" />,
      color: 'text-orange-600',
      gradient: 'from-orange-500/20 to-red-500/20',
      deliverables: [
        'Live Production Environment',
        'Monitoring Dashboard',
        'Performance Reports',
        'Maintenance & Support Plan'
      ],
      tools: ['Kubernetes', 'DataDog', 'New Relic', 'AWS CloudWatch']
    }
  ];

  const methodologies = [
    {
      title: 'Agile Development',
      description: 'Iterative sprints with regular feedback loops',
      icon: <Zap className="w-6 h-6" />,
      benefit: '40% faster delivery',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    },
    {
      title: 'DevOps Culture',
      description: 'Continuous integration and deployment',
      icon: <Globe className="w-6 h-6" />,
      benefit: '99.9% uptime',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      title: 'Security by Design',
      description: 'Built-in security from day one',
      icon: <Shield className="w-6 h-6" />,
      benefit: 'Zero breaches',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      title: 'Performance First',
      description: 'Optimized for speed and scalability',
      icon: <Database className="w-6 h-6" />,
      benefit: '<2s load times',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    }
  ];

  const currentStep = processSteps[activeStep];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ y, opacity, scale }}
      className="relative py-24 bg-gradient-to-br from-white via-matcha/5 to-ivory overflow-hidden"
    >
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8C9A3' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
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
            OUR{' '}
            <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
              PROCESS
            </span>
          </h2>
          <motion.p 
            className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From initial concept to final deployment, our proven methodology ensures 
            exceptional results through every phase of development.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto mb-20">
          {/* Step Navigation */}
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-matcha/20 shadow-lg">
              {processSteps.map((step, index) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 flex items-center gap-3 group ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-matcha to-matcha-dark text-white shadow-lg'
                      : 'text-charcoal/70 hover:text-charcoal hover:bg-white/50'
                  }`}
                  whileHover={{ 
                    scale: activeStep === index ? 1 : 1.05,
                    y: activeStep === index ? 0 : -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className={`${activeStep === index ? 'text-white' : step.color} group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    {step.icon}
                  </motion.div>
                  <span className="hidden sm:block">{step.title}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Step Content */}
          <motion.div
            key={activeStep}
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${currentStep.gradient} ${currentStep.color} group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {currentStep.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-2xl lg:text-3xl font-bold text-charcoal"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {currentStep.title}
                    </motion.h3>
                    <motion.span 
                      className="text-matcha font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {currentStep.duration}
                    </motion.span>
                  </div>
                </div>
                <motion.p 
                  className="text-lg text-charcoal/70 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {currentStep.description}
                </motion.p>
              </div>

              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="font-bold text-charcoal mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Key Deliverables
                </h4>
                <div className="space-y-3">
                  {currentStep.deliverables.map((deliverable, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center p-3 bg-white/60 rounded-xl border border-matcha/10 hover:bg-white/80 hover:border-matcha/30 transition-all duration-300 group cursor-pointer"
                      initial={{ 
                        opacity: 0, 
                        x: -50,
                        scale: 0.8,
                        rotateX: -10
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        scale: 1,
                        rotateX: 0
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5 + index * 0.15,
                        type: "spring",
                        stiffness: 120,
                        damping: 15
                      }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-matcha rounded-full mr-3 group-hover:bg-matcha-dark transition-colors duration-300"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.7 + index * 0.15,
                          type: "spring",
                          stiffness: 300
                        }}
                        whileHover={{ scale: 1.5 }}
                      />
                      <motion.span 
                        className="text-charcoal/80 group-hover:text-charcoal transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.15 }}
                      >
                        {deliverable}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h4 className="font-bold text-charcoal mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentStep.tools.map((tool, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-charcoal/10 text-charcoal text-sm rounded-lg hover:bg-matcha/20 hover:text-matcha-dark transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Visual */}
            <div className="relative">
              <motion.div 
                className={`relative bg-gradient-to-br ${currentStep.gradient} rounded-3xl p-8 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 group`}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
              >
                {/* Progress Circle */}
                <div className="aspect-square max-w-80 mx-auto relative">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="white"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                      fill="none"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={283}
                      style={{
                        strokeDashoffset: useTransform(progressSpring, [0, 1], [283, 0])
                      }}
                    />
                  </svg>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <motion.div 
                        className="text-4xl mb-2"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {currentStep.icon}
                      </motion.div>
                      <motion.div 
                        className="text-lg font-bold"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        Step {activeStep + 1}
                      </motion.div>
                      <div className="text-sm opacity-80">
                        of {processSteps.length}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Indicators */}
                <div className="flex justify-center mt-8 gap-3">
                  {processSteps.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeStep 
                          ? 'bg-white scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      whileHover={{ scale: index === activeStep ? 1.25 : 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Process Icons */}
              {isMounted && [
                { Icon: Clock, x: -20, y: -20, delay: 1 },
                { Icon: Users, x: 320, y: 50, delay: 1.2 },
                { Icon: MonitorSpeaker, x: -30, y: 280, delay: 1.4 }
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

        {/* Methodologies Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {methodologies.map((methodology, index) => (
            <motion.div
              key={index}
              className={`${methodology.bgColor} ${methodology.hoverColor} backdrop-blur-sm rounded-2xl p-6 text-center border border-matcha/10 transition-all duration-500 group cursor-pointer`}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(184, 201, 163, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ 
                opacity: 0, 
                y: 120,
                scale: 0.6,
                rotateY: -20
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                scale: 1,
                rotateY: 0
              } : {}}
              transition={{ 
                duration: 0.9, 
                delay: 1 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
            >
              <motion.div 
                className={`${methodology.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2 + index * 0.2,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ rotate: 10, scale: 1.3 }}
              >
                {methodology.icon}
              </motion.div>
              <motion.h3 
                className="font-bold text-charcoal mb-2 group-hover:text-matcha transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.3 + index * 0.2,
                  type: "spring",
                  stiffness: 120
                }}
              >
                {methodology.title}
              </motion.h3>
              <motion.p 
                className="text-sm text-charcoal/60 mb-3 group-hover:text-charcoal/80 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
              >
                {methodology.description}
              </motion.p>
              <motion.div 
                className="text-matcha font-semibold text-sm group-hover:text-matcha-dark transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.5 + index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1 }}
              >
                {methodology.benefit}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebArchitectureProcess; 