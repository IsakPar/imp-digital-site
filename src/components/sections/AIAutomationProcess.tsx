'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Search, 
  Brain, 
  Code, 
  Rocket, 
  Database,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Bot,
  TrendingUp,
  Eye,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

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

const AIAutomationProcess = () => {
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
    // Removed auto-timer - now purely user controlled
  }, []);

  useEffect(() => {
    progressSpring.set((activeStep + 1) / processSteps.length);
  }, [activeStep, progressSpring]);

  const processSteps: ProcessStep[] = [
    {
      id: 'data-assessment',
      title: 'Data Assessment & Strategy',
      description: 'Analyze your data landscape, identify automation opportunities, and define AI objectives aligned with business goals.',
      duration: '1-2 weeks',
      icon: <Search className="w-8 h-8" />,
      color: 'text-matcha',
      gradient: 'from-matcha/20 to-matcha-dark/20',
      deliverables: [
        'Data Audit Report',
        'AI Readiness Assessment',
        'Automation Opportunity Map',
        'ROI Projections & Timeline'
      ],
      tools: ['Jupyter Notebooks', 'Pandas', 'Data Profiling Tools', 'Business Process Mapping']
    },
    {
      id: 'model-design',
      title: 'AI Model Design',
      description: 'Design and architect custom AI models tailored to your specific use cases with optimal performance and accuracy.',
      duration: '2-4 weeks',
      icon: <Brain className="w-8 h-8" />,
      color: 'text-matcha-dark',
      gradient: 'from-matcha-dark/20 to-matcha/20',
      deliverables: [
        'Model Architecture Design',
        'Training Data Strategy',
        'Performance Benchmarks',
        'Validation Framework'
      ],
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Weights & Biases']
    },
    {
      id: 'development-training',
      title: 'Development & Training',
      description: 'Build, train, and fine-tune AI models with continuous iteration and optimization for maximum accuracy and efficiency.',
      duration: '4-12 weeks',
      icon: <Code className="w-8 h-8" />,
      color: 'text-green-600',
      gradient: 'from-green-500/20 to-emerald-500/20',
      deliverables: [
        'Trained AI Models',
        'Automated Workflows',
        'Testing & Validation Results',
        'API & Integration Layer'
      ],
      tools: ['Python', 'Docker', 'Kubernetes', 'Apache Airflow', 'FastAPI']
    },
    {
      id: 'deployment-monitoring',
      title: 'Deployment & Monitoring',
      description: 'Deploy AI systems with real-time monitoring, continuous learning, and automated performance optimization.',
      duration: 'Ongoing',
      icon: <Rocket className="w-8 h-8" />,
      color: 'text-orange-600',
      gradient: 'from-orange-500/20 to-red-500/20',
      deliverables: [
        'Production AI System',
        'Monitoring Dashboard',
        'Performance Analytics',
        'Continuous Learning Pipeline'
      ],
      tools: ['MLOps Platforms', 'Prometheus', 'Grafana', 'AWS SageMaker', 'Azure ML']
    }
  ];

  const methodologies = [
    {
      title: 'Data-Driven Approach',
      description: 'Decisions backed by comprehensive data analysis',
      icon: <Database className="w-6 h-6" />,
      benefit: '95% accuracy',
      color: 'text-matcha',
      bgColor: 'bg-matcha/10',
      hoverColor: 'hover:bg-matcha/20'
    },
    {
      title: 'Iterative Learning',
      description: 'Continuous model improvement and adaptation',
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: '30% efficiency gain',
      color: 'text-matcha-dark',
      bgColor: 'bg-matcha-dark/10',
      hoverColor: 'hover:bg-matcha-dark/20'
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Augmenting human capabilities, not replacing them',
      icon: <Users className="w-6 h-6" />,
      benefit: '80% time saved',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      title: 'Ethical AI Practices',
      description: 'Transparent, fair, and responsible AI development',
      icon: <Target className="w-6 h-6" />,
      benefit: '100% compliant',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
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
          <h2 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6" 
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Our AI Process
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            From data assessment to intelligent automation—our proven methodology delivers AI solutions that drive real business impact.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-charcoal mb-8">Development Timeline</h3>
            
            {/* Progress Bar */}
            <div className="relative mb-8">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-matcha to-matcha-dark rounded-full"
                  style={{ scaleX: progressSpring }}
                  transformTemplate={({ scaleX }) => `scaleX(${scaleX})`}
                />
              </div>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all duration-500 ${
                    index === activeStep 
                      ? `bg-gradient-to-r ${step.gradient} border-2 border-matcha/30 shadow-lg` 
                      : 'bg-white hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className={`${step.color} p-3 rounded-lg bg-white shadow-sm flex-shrink-0 ${
                        index === activeStep ? 'scale-110' : 'scale-100'
                      } transition-transform duration-300`}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-charcoal">{step.title}</h4>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-charcoal/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Active Step Indicator */}
                  {index === activeStep && (
                    <motion.div
                      className="absolute left-0 top-1/2 w-1 h-full bg-matcha rounded-r-full"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Active Step Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              key={activeStep}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`${currentStep.color} p-4 rounded-xl bg-gray-50 mr-4`}>
                  {currentStep.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-charcoal">{currentStep.title}</h3>
                  <p className="text-charcoal/60">{currentStep.duration}</p>
                </div>
              </div>

              <p className="text-charcoal/70 mb-8 leading-relaxed">{currentStep.description}</p>

              {/* Deliverables */}
              <div className="mb-8">
                <h4 className="font-semibold text-charcoal mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  Key Deliverables
                </h4>
                <div className="space-y-3">
                  {currentStep.deliverables.map((deliverable, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-matcha rounded-full mr-3 flex-shrink-0" />
                      <span className="text-charcoal/70">{deliverable}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="font-semibold text-charcoal mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-matcha" />
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentStep.tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-charcoal text-center mb-12">Our AI Methodologies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={index}
                className={`${methodology.bgColor} ${methodology.hoverColor} rounded-xl p-6 text-center transition-all duration-300 cursor-pointer group`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className={`${methodology.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {methodology.icon}
                </div>
                <h4 className="font-bold text-charcoal mb-2">{methodology.title}</h4>
                <p className="text-sm text-charcoal/70 mb-3">{methodology.description}</p>
                <div className="text-xs font-bold bg-white/80 text-charcoal px-3 py-1 rounded-full inline-block">
                  {methodology.benefit}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            href="/contact"
            className="btn-enhanced-matcha text-white px-8 py-4 rounded-lg font-semibold flex items-center mx-auto"
          >
            <MessageSquare size={20} className="mr-3" />
            Start Your AI Journey
            <ArrowRight size={20} className="ml-3" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AIAutomationProcess; 