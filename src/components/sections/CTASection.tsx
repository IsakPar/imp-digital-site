'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, MessageCircle, Phone, Mail } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '@/components/ui';

export default function CTASection() {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-matcha/30 via-matcha/20 to-emerald-200/40">
        {/* Overlay Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B8C9A3' fill-opacity='0.3'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-30 0c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-matcha/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-5xl lg:text-7xl font-black text-charcoal leading-none mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              READY TO{' '}
              <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
                BUILD?
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform your digital vision into reality with architecture that scales, 
              performs, and delivers exceptional user experiences.
            </motion.p>
          </motion.div>

          {/* CTA Options */}
          <motion.div 
            className="flex justify-center mb-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-matcha/30 w-full group"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(184, 201, 163, 0.6)',
                  boxShadow: "0 25px 50px -10px rgba(184, 201, 163, 0.3)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="text-matcha mb-4 flex justify-center"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    color: '#A0B885',
                    transition: { duration: 0.2 }
                  }}
                >
                  {option.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-charcoal mb-2 text-center"
                  whileHover={{
                    color: '#B8C9A3',
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {option.title}
                </motion.h3>
                <motion.p 
                  className="text-charcoal/70 mb-6 text-center"
                  whileHover={{
                    color: 'rgba(47, 47, 47, 0.9)',
                    transition: { duration: 0.2 }
                  }}
                >
                  {option.description}
                </motion.p>
                <motion.a 
                  href="#contact"
                  className="w-full border-2 border-matcha text-matcha py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 group"
                  whileHover={{
                    backgroundColor: '#B8C9A3',
                    color: 'white',
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.action}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-charcoal/70"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-sm">Or reach out directly:</span>
            <div className="flex gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  className="flex items-center gap-2 group"
                  whileHover={{
                    scale: 1.05,
                    color: '#B8C9A3',
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                >
                  <motion.div 
                    className="group-hover:scale-110 transition-transform duration-200"
                    whileHover={{ rotate: 10 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.p 
              className="text-charcoal/60 text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Trusted by startups and enterprises across Scandinavia
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 opacity-60"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.6 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {/* Placeholder for client logos */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div 
                  key={i}
                  className="w-24 h-8 bg-matcha/20 rounded-lg flex items-center justify-center text-charcoal/60 text-xs font-medium cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.3 + (i * 0.1) }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(184, 201, 163, 0.3)',
                    color: 'rgba(47, 47, 47, 0.8)',
                    transition: { duration: 0.2 }
                  }}
                >
                  Client {i + 1}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Action Button */}
          <motion.div 
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
          >
            <motion.a
              href="#contact"
              className="w-16 h-16 bg-gradient-to-r from-matcha to-matcha-dark text-white rounded-full shadow-lg flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                rotate: 10,
                boxShadow: "0 20px 40px -10px rgba(184, 201, 163, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MessageCircle size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent" />
    </section>
  );
} 