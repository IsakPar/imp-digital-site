'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Calendar, MessageCircle, Phone, Mail } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '@/components/ui';

const CTASection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  // Smooth spring animations
  const springScale = useSpring(1, { stiffness: 300, damping: 30 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ctaOptions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Start a Project',
      description: 'Get your custom quote',
      action: 'Contact Us',
      primary: false
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-4 h-4" />,
      label: '+46 (0) 8 123 456',
      href: 'tel:+46812345678'
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'hello@impdigital.com',
      href: 'mailto:hello@impdigital.com'
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, scale }}
      className="relative py-24 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-matcha/30 via-matcha/20 to-emerald-200/40"
      >
        {/* Overlay Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B8C9A3' fill-opacity='0.3'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-30 0c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating Gradient Orbs */}
        {isMounted && Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              background: `radial-gradient(circle, rgba(184,201,163,0.4) 0%, transparent 70%)`,
              filter: 'blur(20px)'
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.h2 
              className="text-5xl lg:text-7xl font-black text-charcoal leading-none mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              whileInView={{ 
                background: [
                  "linear-gradient(to right, #4A7C59, #4A7C59)",
                  "linear-gradient(to right, #4A7C59, #B8C9A3, #4A7C59)",
                  "linear-gradient(to right, #4A7C59, #4A7C59)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              READY TO{' '}
              <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
                BUILD?
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your digital vision into reality with architecture that scales, 
              performs, and delivers exceptional user experiences.
            </motion.p>
          </motion.div>

          {/* CTA Options */}
          <motion.div 
            className="flex justify-center mb-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-matcha/30 hover:border-matcha/60 transition-all duration-500 shadow-lg w-full group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(184, 201, 163, 0.3)",
                  borderColor: "rgba(184, 201, 163, 0.8)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ 
                  opacity: 0, 
                  y: 80,
                  scale: 0.8,
                  rotateX: -15
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  rotateX: 0
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <motion.div 
                  className="text-matcha mb-4 flex justify-center group-hover:text-matcha-dark transition-colors duration-300"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {option.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-charcoal mb-2 text-center group-hover:text-matcha transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  {option.title}
                </motion.h3>
                <motion.p 
                  className="text-charcoal/70 mb-6 text-center group-hover:text-charcoal/90 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                >
                  {option.description}
                </motion.p>
                <motion.button 
                  className="w-full border-2 border-matcha text-matcha py-3 px-6 rounded-xl font-semibold hover:bg-matcha hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1.1 + index * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option.action}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-charcoal/70"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-sm">Or reach out directly:</span>
            <div className="flex gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  className="flex items-center gap-2 hover:text-matcha transition-colors duration-200 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {method.icon}
                  </motion.div>
                  <span className="text-sm group-hover:font-medium transition-all duration-200">{method.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 pt-8 border-t border-matcha/20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.p 
              className="text-charcoal/60 text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Trusted by startups and enterprises across Scandinavia
            </motion.p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for client logos */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div 
                  key={i}
                  className="w-24 h-8 bg-matcha/20 rounded-lg flex items-center justify-center text-charcoal/60 text-xs font-medium hover:bg-matcha/30 hover:text-charcoal/80 transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    backgroundColor: "rgba(184, 201, 163, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.5,
                    y: 30,
                    rotateY: -20
                  }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    rotateY: 0
                  } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + i * 0.15,
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }}
                >
                  Client {i + 1}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating Action Button - Emergency Contact */}
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <motion.button
              className="w-16 h-16 bg-gradient-to-r from-matcha to-matcha-dark text-white rounded-full shadow-lg flex items-center justify-center"
              whileHover={{ 
                scale: 1.1, 
                rotate: 10,
                boxShadow: "0 10px 30px rgba(184, 201, 163, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                y: { duration: 2, repeat: Infinity },
                rotate: { duration: 3, repeat: Infinity }
              }}
            >
              <MessageCircle size={24} />
            </motion.button>
          </motion.div>

          {/* Background decoration */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-matcha/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-300/20 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent" />
    </motion.section>
  );
};

export default CTASection; 