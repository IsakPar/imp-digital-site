'use client';

import React from 'react';
import { NavigationBar, Footer } from '@/components/ui';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronLeft, 
  Brain, 
  Cpu, 
  Zap, 
  Bot, 
  Database, 
  Code, 
  ArrowRight,
  Target,
  BarChart3,
  Workflow,
  Lightbulb,
  Gauge,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export default function AIAutomationPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Models",
      description: "Custom ML algorithms for predictive analytics, pattern recognition, and intelligent decision-making.",
      features: ["Predictive Analytics", "Classification", "Regression Models", "Neural Networks"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Process Automation",
      description: "Intelligent automation of repetitive tasks, workflows, and business processes.",
      features: ["Workflow Automation", "Document Processing", "Data Entry", "Task Scheduling"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into existing systems and applications.",
      features: ["API Development", "System Integration", "Legacy Modernization", "Real-time Processing"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Intelligence",
      description: "Advanced analytics and insights extraction from complex business data.",
      features: ["Data Mining", "Business Intelligence", "Trend Analysis", "Real-time Dashboards"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom AI Solutions",
      description: "Tailored AI applications designed for specific business requirements and challenges.",
      features: ["Custom Development", "Domain-specific AI", "Industry Solutions", "Scalable Architecture"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Optimization",
      description: "Performance optimization, scaling, and continuous improvement of AI systems.",
      features: ["Performance Tuning", "Model Optimization", "Cloud Scaling", "Cost Reduction"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Comprehensive analysis of your business processes and automation opportunities.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "AI Strategy Design",
      description: "Custom AI strategy and roadmap tailored to your specific goals and constraints.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Building and training AI models with your data for optimal performance.",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Integration & Deployment",
      description: "Seamless integration into your existing systems with minimal disruption.",
      icon: <Workflow className="w-6 h-6" />
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization to ensure peak performance.",
      icon: <Gauge className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "80% Time Reduction",
      description: "Automate repetitive tasks and focus on strategic initiatives."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "10x Processing Speed",
      description: "Handle complex data processing at unprecedented speeds."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "99% Accuracy",
      description: "Reduce human error with precise AI-driven automation."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <NavigationBar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-ivory via-white to-matcha/5 overflow-hidden pt-32">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-matcha/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-sage/8 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                ref={heroRef}
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* Breadcrumb */}
                <motion.div 
                  className="flex items-center mb-8 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link href="/" className="text-charcoal/60 hover:text-matcha transition-colors">
                    Home
                  </Link>
                  <ChevronLeft className="w-4 h-4 mx-2 text-charcoal/40 rotate-180" />
                  <Link href="/#services" className="text-charcoal/60 hover:text-matcha transition-colors">
                    Services
                  </Link>
                  <ChevronLeft className="w-4 h-4 mx-2 text-charcoal/40 rotate-180" />
                  <span className="text-matcha font-medium">AI & Automation</span>
                </motion.div>

                <motion.h1 
                  className="text-6xl lg:text-8xl font-bold text-charcoal leading-none mb-8"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  AI &
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-matcha via-sage to-matcha">
                    AUTOMATION
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-xl text-charcoal/70 leading-relaxed mb-10 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Transform your business with intelligent automation. From machine learning 
                  to process optimization, we build AI solutions that scale with your ambition.
                </motion.p>

                {/* Key Stats */}
                <motion.div 
                  className="grid grid-cols-3 gap-6 mb-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-matcha/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-matcha mb-2">{benefit.icon}</div>
                      <div className="text-2xl font-bold text-charcoal mb-1">{benefit.title}</div>
                      <div className="text-sm text-charcoal/60">{benefit.description}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-matcha to-sage text-white rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start AI Project
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#solutions"
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-matcha text-matcha rounded-2xl font-semibold text-lg hover:bg-matcha hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Solutions
                    <Brain className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Visual */}
              <motion.div 
                className="relative order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-gradient-to-br from-matcha/20 to-sage/20 rounded-3xl p-16 text-center border border-matcha/10 backdrop-blur-sm">
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 20, 
                          repeat: Infinity, 
                          ease: "linear",
                          scale: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        <Brain className="w-32 h-32 text-matcha mx-auto mb-6" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-charcoal mb-4">Intelligent Automation</h3>
                      <p className="text-charcoal/70 text-lg">AI-powered solutions for modern business challenges</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section id="solutions" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={servicesRef}
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                AI & Automation
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-matcha to-sage"> Services</span>
              </h2>
              <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI solutions to automate processes, enhance decision-making, and drive intelligent business transformation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-white to-sage/5 rounded-3xl border border-matcha/10 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-matcha/5 to-sage/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-matcha mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">{service.title}</h3>
                    <p className="text-charcoal/70 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-charcoal/60"
                          initial={{ opacity: 0, x: -20 }}
                          animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        >
                          <div className="w-1.5 h-1.5 bg-matcha rounded-full"></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-ivory/50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={processRef}
              initial={{ opacity: 0, y: 50 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Our AI
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-matcha to-sage"> Process</span>
              </h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
                A proven methodology for delivering AI solutions that drive measurable business results.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Process Steps */}
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-center gap-8 p-6 bg-white rounded-2xl border border-sage/20 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={processInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-matcha to-sage rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-charcoal mb-2 flex items-center gap-3">
                        <span className="text-matcha group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="contact" className="py-24 bg-gradient-to-r from-matcha via-sage to-matcha text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-8">Ready to Automate Your Business?</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
                Let's discuss how AI and automation can transform your operations, reduce costs, 
                and unlock new opportunities for growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-matcha px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-ivory transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start AI Transformation
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="/services"
                  className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore All Services
                  <Code className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 