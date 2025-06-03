'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { NavigationBar, Footer } from '@/components/ui';
import { ChevronLeft, Cloud, Server, Database, Shield, Zap, Globe, Settings, Monitor, GitBranch, Lock, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import InfrastructureShowcase from '@/components/sections/InfrastructureShowcase';
import InfrastructureProcess from '@/components/sections/InfrastructureProcess';
import CTASection from '@/components/sections/CTASection';

// Hero Section for Infrastructure & Cloud
const InfrastructureHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-ivory via-white to-matcha/5 overflow-hidden pt-20">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static cloud shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-15"
            style={{
              width: `${100 + i * 50}px`,
              height: `${60 + i * 30}px`,
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#D9E5C1' : '#B8C9A3'} 0%, transparent 70%)`,
              filter: 'blur(25px)',
              borderRadius: '50%'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div>
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
              <span className="text-matcha font-medium">Infrastructure & Cloud</span>
            </div>

            <h1 
              className="text-5xl lg:text-7xl font-black text-charcoal leading-none mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              CLOUD
              <br />
              <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
                INFRASTRUCTURE
              </span>
            </h1>

            <p className="text-xl text-charcoal/70 leading-relaxed mb-10 max-w-lg">
              Build, deploy, and scale with confidence. From cloud migration to 
              DevOps automation, we architect robust infrastructure that grows 
              with your business.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-matcha">99.99%</div>
                <div className="text-sm text-charcoal/60">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-matcha">50%</div>
                <div className="text-sm text-charcoal/60">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-matcha">10x</div>
                <div className="text-sm text-charcoal/60">Faster Deploy</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-enhanced-matcha text-white px-8 py-4 rounded-lg font-semibold text-center">
                Get Expert Consultation
              </Link>
              <Link href="#case-studies" className="btn-enhanced-secondary bg-transparent text-matcha px-8 py-4 rounded-lg font-semibold text-center hover:bg-matcha hover:text-white">
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Static Cloud Infrastructure Diagram */}
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                {/* Main Cloud */}
                <path
                  d="M100 200 C80 180, 80 160, 100 150 C110 140, 130 140, 140 150 C160 130, 200 130, 220 150 C240 140, 260 140, 280 150 C300 160, 300 180, 280 200 C300 220, 300 240, 280 250 C260 260, 240 260, 220 250 C200 270, 160 270, 140 250 C130 260, 110 260, 100 250 C80 240, 80 220, 100 200 Z"
                  fill="url(#cloudGradient)" stroke="#B8C9A3" strokeWidth="2"
                />
                
                {/* Server Nodes */}
                {[
                  { x: 120, y: 190 },
                  { x: 190, y: 180 },
                  { x: 260, y: 200 }
                ].map((node, i) => (
                  <rect
                    key={i}
                    x={node.x - 15} y={node.y - 10} width="30" height="20" rx="4"
                    fill="url(#serverGradient)" stroke="#4A7C59" strokeWidth="1"
                  />
                ))}

                {/* Data Flow Lines */}
                <path
                  d="M190 100 L190 150" stroke="#B8C9A3" strokeWidth="3" strokeDasharray="5,5"
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D9E5C1" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#B8C9A3" stopOpacity="0.6"/>
                  </linearGradient>
                  <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A7C59" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#2C3E50" stopOpacity="0.9"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function InfrastructureCloudPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <NavigationBar />
      
      <main>
        <InfrastructureHero />
        
        {/* Simple Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6">Infrastructure Services</h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to scale with your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: "Cloud Migration",
                  description: "Seamless transition to cloud infrastructure with minimal downtime."
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "DevOps Automation",
                  description: "Streamlined deployment pipelines and infrastructure as code."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Security & Compliance",
                  description: "Enterprise-grade security with industry compliance standards."
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Data Management",
                  description: "Scalable database solutions with backup and recovery."
                },
                {
                  icon: <Monitor className="w-8 h-8" />,
                  title: "Monitoring & Analytics",
                  description: "Real-time monitoring with comprehensive analytics dashboards."
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Infrastructure Optimization",
                  description: "Performance tuning and cost optimization strategies."
                }
              ].map((service, index) => (
                <div key={index} className="bg-ivory p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="text-matcha mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
                  <p className="text-charcoal/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Simple CTA Section */}
        <section className="py-20 bg-gradient-to-r from-matcha to-matcha-dark">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can optimize your cloud infrastructure for better performance and cost efficiency.
            </p>
            <Link 
              href="#contact" 
              className="inline-block px-8 py-4 bg-white text-matcha rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Migration
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 