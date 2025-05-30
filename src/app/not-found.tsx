'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NavigationBar, Footer } from '@/components/ui';
import { Home, ArrowLeft, Search, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-matcha/5 text-charcoal">
      <NavigationBar />
      
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {isMounted && Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${60 + i * 30}px`,
                height: `${60 + i * 30}px`,
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
                background: `linear-gradient(135deg, ${i % 2 === 0 ? '#D9E5C1' : '#B8C9A3'} 0%, transparent 70%)`,
                filter: 'blur(15px)'
              }}
              animate={{
                y: [-30, 30, -30],
                rotate: [0, 360],
                scale: [0.7, 1.3, 0.7]
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

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* 404 Number */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.h1 
              className="text-[12rem] lg:text-[16rem] font-black text-transparent bg-gradient-to-r from-matcha via-matcha-dark to-matcha bg-clip-text leading-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Page Not Found
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into the digital wilderness. 
              Don't worry, we'll help you find your way back.
            </p>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                {/* Lost Document */}
                <motion.rect
                  x="60" y="80" width="80" height="100" rx="8"
                  fill="url(#documentGradient)" stroke="#B8C9A3" strokeWidth="2"
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: [-10, 5, -10], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Question Marks */}
                {[
                  { x: 40, y: 50, delay: 0 },
                  { x: 160, y: 70, delay: 0.5 },
                  { x: 30, y: 150, delay: 1 },
                  { x: 170, y: 140, delay: 1.5 }
                ].map((pos, i) => (
                  <motion.text
                    key={i}
                    x={pos.x} y={pos.y}
                    className="fill-matcha text-2xl font-bold"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                      rotate: [0, 15, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: pos.delay,
                      ease: "easeInOut"
                    }}
                  >
                    ?
                  </motion.text>
                ))}

                {/* Search Icon */}
                <motion.circle
                  cx="100" cy="40" r="20"
                  fill="url(#searchGradient)" stroke="#B8C9A3" strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.1, 1] }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.circle
                  cx="100" cy="40" r="12"
                  fill="none" stroke="white" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="documentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8F5E8" />
                    <stop offset="100%" stopColor="#D9E5C1" />
                  </linearGradient>
                  <linearGradient id="searchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B8C9A3" />
                    <stop offset="100%" stopColor="#4A7C59" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-matcha to-matcha-dark text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
                <Home size={20} />
                Back to Home
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-3 px-8 py-4 border-2 border-matcha text-matcha rounded-lg font-semibold hover:bg-matcha hover:text-white transition-all duration-300"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button 
                onClick={() => window.location.reload()}
                className="flex items-center gap-3 px-6 py-4 bg-white border border-matcha/30 text-matcha rounded-lg font-medium hover:bg-matcha/5 hover:border-matcha transition-all duration-300"
              >
                <RefreshCw size={18} />
                Refresh
              </button>
            </motion.div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            className="mt-16 pt-8 border-t border-matcha/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-charcoal/60 mb-4">Or explore our main sections:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/#services", label: "Services" },
                { href: "/#about", label: "About" },
                { href: "/#case-studies", label: "Case Studies" },
                { href: "/#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link 
                    href={link.href}
                    className="px-4 py-2 text-sm text-matcha hover:text-matcha-dark hover:bg-matcha/5 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 