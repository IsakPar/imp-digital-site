'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { NavigationBar, Footer } from '@/components/ui';
import { ChevronLeft, Code, Database, Globe, Layers, Server, Zap, Shield, Monitor } from 'lucide-react';
import Link from 'next/link';
import WebArchitectureShowcase from '@/components/sections/WebArchitectureShowcase';
import WebArchitectureProcess from '@/components/sections/WebArchitectureProcess';
import CTASection from '@/components/sections/CTASection';

// Hero Section for Web Architecture
const WebArchitectureHero = () => {
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
      className="relative min-h-screen bg-gradient-to-br from-ivory via-white to-matcha/5 overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        {isMounted && Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#D9E5C1' : '#B8C9A3'} 0%, transparent 70%)`,
              filter: 'blur(20px)'
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              delay: i * 2,
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
              <span className="text-matcha font-medium">Web Architecture</span>
            </div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-black text-charcoal leading-none mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WEB
              <br />
              <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
                ARCHITECTURE
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-charcoal/70 leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From frontend pixels to backend pipelines. We craft scalable, 
              performant web architectures that power digital experiences 
              and business growth.
            </motion.p>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-matcha">99.9%</div>
                <div className="text-sm text-charcoal/60">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-matcha">&lt; 2s</div>
                <div className="text-sm text-charcoal/60">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-matcha">100%</div>
                <div className="text-sm text-charcoal/60">Scalable</div>
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
                  Start Your Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="#case-studies" className="block px-8 py-4 border-2 border-matcha text-matcha rounded-lg font-semibold hover:bg-matcha hover:text-white transition-all duration-300 text-center">
                  View Case Studies
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
              {/* Architecture Diagram */}
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                {/* Backend Layer */}
                <motion.rect
                  x="50" y="280" width="300" height="80" rx="12"
                  fill="url(#backendGradient)" stroke="#B8C9A3" strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
                <text x="200" y="325" textAnchor="middle" className="fill-charcoal text-sm font-semibold">
                  Backend Services
                </text>
                
                {/* API Layer */}
                <motion.rect
                  x="80" y="180" width="240" height="60" rx="8"
                  fill="url(#apiGradient)" stroke="#D9E5C1" strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
                <text x="200" y="215" textAnchor="middle" className="fill-charcoal text-sm font-semibold">
                  API Gateway
                </text>
                
                {/* Frontend Layer */}
                <motion.rect
                  x="100" y="80" width="200" height="60" rx="8"
                  fill="url(#frontendGradient)" stroke="#D9E5C1" strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                />
                <text x="200" y="115" textAnchor="middle" className="fill-charcoal text-sm font-semibold">
                  Frontend Application
                </text>
                
                {/* User Layer */}
                <motion.circle
                  cx="200" cy="40" r="25"
                  fill="url(#userGradient)" stroke="#B8C9A3" strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                />
                <text x="200" y="47" textAnchor="middle" className="fill-white text-xs font-bold">
                  USER
                </text>

                {/* Connecting Lines */}
                <motion.path
                  d="M200 65 L200 80" stroke="#B8C9A3" strokeWidth="3" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                />
                <motion.path
                  d="M200 140 L200 180" stroke="#B8C9A3" strokeWidth="3" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                />
                <motion.path
                  d="M200 240 L200 280" stroke="#B8C9A3" strokeWidth="3" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2.2 }}
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="backendGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B8C9A3" />
                    <stop offset="100%" stopColor="#D9E5C1" />
                  </linearGradient>
                  <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D9E5C1" />
                    <stop offset="100%" stopColor="#E8F5E8" />
                  </linearGradient>
                  <linearGradient id="frontendGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8F5E8" />
                    <stop offset="100%" stopColor="#F5F8F5" />
                  </linearGradient>
                  <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A7C59" />
                    <stop offset="100%" stopColor="#B8C9A3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating tech icons */}
              {isMounted && [
                { Icon: Code, x: 20, y: 20, delay: 2.5 },
                { Icon: Database, x: 350, y: 300, delay: 2.7 },
                { Icon: Server, x: 30, y: 350, delay: 2.9 },
                { Icon: Globe, x: 350, y: 50, delay: 3.1 }
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

// Services Overview Section with enhanced animations
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
      icon: <Layers className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, and modern frameworks for blazing-fast user experiences.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Architecture",
      description: "Scalable APIs, microservices, and database design for robust system foundations.",
      features: ["RESTful APIs", "Microservices", "Database Design", "Performance Tuning"],
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "From SQL to NoSQL, we design data architectures that scale with your business.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Data Modeling"],
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Built-in security protocols, encryption, and compliance standards from day one.",
      features: ["Authentication", "Data Encryption", "GDPR Compliance", "Security Audits"],
      gradient: "from-red-500/10 to-orange-500/10",
      iconColor: "text-red-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "CDN integration, caching strategies, and optimization for lightning-fast delivery.",
      features: ["CDN Setup", "Caching", "Code Splitting", "Image Optimization"],
      gradient: "from-yellow-500/10 to-amber-500/10",
      iconColor: "text-yellow-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Monitoring & Analytics",
      description: "Real-time monitoring, error tracking, and analytics for continuous improvement.",
      features: ["Real-time Monitoring", "Error Tracking", "Performance Analytics", "Logging"],
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600"
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
            Complete Web Solutions
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Every layer of your web architecture designed, developed, and deployed with precision and purpose.
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

// Main Page Component with section transitions
export default function WebArchitecturePage() {
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
      <WebArchitectureHero />
      
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
        <WebArchitectureShowcase />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <WebArchitectureProcess />
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