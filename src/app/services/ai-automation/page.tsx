'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { NavigationBar, Footer } from '@/components/ui';
import { ChevronLeft, Brain, Cpu, Zap, Bot, Database, Code, Target, TrendingUp, BarChart } from 'lucide-react';
import Link from 'next/link';
import AIAutomationShowcase from '@/components/sections/AIAutomationShowcase';
import AIAutomationProcess from '@/components/sections/AIAutomationProcess';
import CTASection from '@/components/sections/CTASection';

// Hero Section for AI & Automation
const AIAutomationHero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section 
      ref={heroRef}
      style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-screen bg-gradient-to-br from-ivory via-white to-blue/5 overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating neural network patterns */}
        {isMounted && Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-15"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#D9E5C1' : '#B8C9A3'} 0%, transparent 70%)`,
              filter: 'blur(15px)'
            }}
            animate={{
              y: [-15, 25, -15],
              rotate: [0, 180],
              scale: [0.9, 1.3, 0.9]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center mb-8 text-sm">
              <Link href="/" className="text-charcoal/60 hover:text-matcha transition-colors">
                Home
              </Link>
              <ChevronLeft className="w-4 h-4 mx-2 text-charcoal/40 rotate-180" />
              <Link href="/#services" className="text-charcoal/60 hover:text-matcha transition-colors">
                Services
              </Link>
              <ChevronLeft className="w-4 h-4 mx-2 text-charcoal/40 rotate-180" />
              <span className="text-matcha font-medium">AI & Automation</span>
            </div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-black text-charcoal leading-none mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI &
              <br />
              <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
                AUTOMATION
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-charcoal/70 leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Code that thinks, predicts, and executes. We build intelligent 
              automation systems that transform workflows and amplify 
              human potential.
            </motion.p>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-matcha">85%</div>
                <div className="text-sm text-charcoal/60">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-matcha">10x</div>
                <div className="text-sm text-charcoal/60">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-matcha">24/7</div>
                <div className="text-sm text-charcoal/60">Automated</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="#contact" className="block px-8 py-4 bg-gradient-to-r from-matcha to-matcha-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center">
                  Start Your AI Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="#case-studies" className="block px-8 py-4 border-2 border-matcha text-matcha rounded-lg font-semibold hover:bg-matcha hover:text-white transition-all duration-300 text-center">
                  View AI Solutions
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* AI Flow Diagram */}
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                {/* Data Input Layer */}
                <motion.rect
                  x="50" y="300" width="300" height="60" rx="12"
                  fill="url(#dataGradient)" stroke="#B8C9A3" strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
                <text x="200" y="335" textAnchor="middle" className="fill-charcoal text-sm font-semibold">
                  Data Input & Processing
                </text>
                
                {/* AI Model Layer */}
                <motion.circle
                  cx="200" cy="200" r="50"
                  fill="url(#aiGradient)" stroke="#4A7C59" strokeWidth="3"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
                <text x="200" y="208" textAnchor="middle" className="fill-white text-sm font-bold">
                  AI ENGINE
                </text>
                
                {/* Output Actions */}
                <motion.rect
                  x="80" y="60" width="100" height="50" rx="8"
                  fill="url(#outputGradient)" stroke="#D9E5C1" strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                />
                <text x="130" y="90" textAnchor="middle" className="fill-charcoal text-xs font-semibold">
                  Automate
                </text>
                
                <motion.rect
                  x="220" y="60" width="100" height="50" rx="8"
                  fill="url(#outputGradient)" stroke="#D9E5C1" strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                />
                <text x="270" y="90" textAnchor="middle" className="fill-charcoal text-xs font-semibold">
                  Predict
                </text>

                {/* Connecting Lines with Animation */}
                <motion.path
                  d="M200 250 L200 300" stroke="#B8C9A3" strokeWidth="3" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                />
                <motion.path
                  d="M170 170 L130 110" stroke="#D9E5C1" strokeWidth="3" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                />
                <motion.path
                  d="M230 170 L270 110" stroke="#D9E5C1" strokeWidth="3" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2.2 }}
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B8C9A3" />
                    <stop offset="100%" stopColor="#D9E5C1" />
                  </linearGradient>
                  <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A7C59" />
                    <stop offset="100%" stopColor="#B8C9A3" />
                  </linearGradient>
                  <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D9E5C1" />
                    <stop offset="100%" stopColor="#E8F5E8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating AI icons */}
              {isMounted && [
                { Icon: Brain, x: 20, y: 20, delay: 2.5 },
                { Icon: Bot, x: 350, y: 300, delay: 2.7 },
                { Icon: Cpu, x: 30, y: 350, delay: 2.9 },
                { Icon: Zap, x: 350, y: 50, delay: 3.1 }
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
                    boxShadow: "0 10px 25px rgba(184, 201, 163, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Services Overview Section with AI/Automation focus
const ServicesOverview = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Models",
      description: "Custom AI models trained on your data for predictions, classifications, and insights.",
      features: ["Custom Model Training", "Deep Learning", "Neural Networks", "Data Analytics"],
      gradient: "from-blue-500/10 to-purple-500/10",
      iconColor: "text-blue-600"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligent Chatbots",
      description: "Conversational AI that understands context and provides meaningful interactions.",
      features: ["Natural Language Processing", "Context Awareness", "Multi-platform", "24/7 Support"],
      gradient: "from-purple-500/10 to-indigo-500/10",
      iconColor: "text-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks with intelligent automation that adapts and learns.",
      features: ["Process Automation", "Smart Workflows", "API Integration", "Task Scheduling"],
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast trends, behavior, and outcomes with advanced statistical modeling.",
      features: ["Trend Analysis", "Behavioral Prediction", "Risk Assessment", "Decision Support"],
      gradient: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with AI-powered analytics.",
      features: ["Data Visualization", "Real-time Dashboards", "Performance Metrics", "Report Generation"],
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Image and video analysis for quality control, security, and process optimization.",
      features: ["Image Recognition", "Object Detection", "Quality Control", "Video Analytics"],
      gradient: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      style={{ y: sectionY, opacity: sectionOpacity }}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100
          }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            AI-Powered Solutions
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            From machine learning models to intelligent automation, we build AI systems that learn, adapt, and deliver results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-white to-ivory ${service.gradient} border border-matcha/20 rounded-2xl p-8 hover:shadow-2xl hover:border-matcha/40 hover:-translate-y-2 transition-all duration-500 group`}
              initial={{ 
                opacity: 0, 
                y: 80,
                scale: 0.8,
                rotateX: -10
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                scale: 1,
                rotateX: 0
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                boxShadow: "0 25px 50px rgba(184, 201, 163, 0.2)",
                rotateX: 5
              }}
            >
              <motion.div 
                className={`${service.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ rotate: 10, scale: 1.2 }}
              >
                {service.icon}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-charcoal mb-4 group-hover:text-matcha transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-charcoal/70 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
              >
                {service.description}
              </motion.p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.6 + (featureIndex * 0.1),
                      type: "spring",
                      stiffness: 150
                    }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-matcha rounded-full mr-3"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.15 + 0.7 + (featureIndex * 0.1),
                        type: "spring",
                        stiffness: 300
                      }}
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-charcoal/60 group-hover:text-charcoal/80 transition-colors duration-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Main Page Component
export default function AIAutomationPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={pageRef} className="min-h-screen bg-ivory text-charcoal">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-matcha to-matcha-dark z-50 origin-left"
        style={{ scaleX: progress }}
      />
      
      <NavigationBar />
      
      {/* Section Dividers with smooth transitions */}
      <AIAutomationHero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <ServicesOverview />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AIAutomationShowcase />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AIAutomationProcess />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CTASection />
      </motion.div>
      
      <Footer />
    </div>
  );
} 