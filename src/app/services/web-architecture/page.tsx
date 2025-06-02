import React from 'react';
import { NavigationBar, Footer } from '@/components/ui';
import { ChevronLeft, Code, Database, Globe, Layers, Server, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WebArchitecturePage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <NavigationBar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-ivory via-white to-green-50 overflow-hidden pt-20">
          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              {/* Left Content */}
              <div>
                {/* Breadcrumb */}
                <div className="flex items-center mb-8 text-sm">
                  <Link href="/" className="text-charcoal/60 hover:text-green-600 transition-colors">
                    Home
                  </Link>
                  <ChevronLeft className="w-4 h-4 mx-2 text-charcoal/40 rotate-180" />
                  <Link href="/#services" className="text-charcoal/60 hover:text-green-600 transition-colors">
                    Services
                  </Link>
                  <ChevronLeft className="w-4 h-4 mx-2 text-charcoal/40 rotate-180" />
                  <span className="text-green-600 font-medium">Web Architecture</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-charcoal leading-none mb-8">
                  WEB
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    ARCHITECTURE
                  </span>
                </h1>

                <p className="text-xl text-charcoal/70 leading-relaxed mb-10 max-w-lg">
                  Build scalable, performant web applications with modern architecture patterns. 
                  From frontend frameworks to backend systems.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-charcoal/60">Scalable</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">5x</div>
                    <div className="text-sm text-charcoal/60">Faster Load</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">99%</div>
                    <div className="text-sm text-charcoal/60">Uptime</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact" className="block px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center hover:scale-105">
                    Start Project
                  </Link>
                  <Link href="#solutions" className="block px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 text-center hover:scale-105">
                    View Solutions
                  </Link>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-32 h-32 text-green-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Modern Architecture</h3>
                    <p className="text-charcoal/70">Scalable web solutions built for the future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6">Web Architecture Services</h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                Comprehensive web development solutions from frontend to backend architecture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Frontend Development",
                  description: "Modern React, Next.js, and TypeScript applications."
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Backend Systems",
                  description: "Scalable APIs and microservices architecture."
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Database Design",
                  description: "Optimized database schemas and query performance."
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Web Performance",
                  description: "Speed optimization and Core Web Vitals improvement."
                },
                {
                  icon: <Layers className="w-8 h-8" />,
                  title: "System Architecture",
                  description: "Scalable system design and architecture patterns."
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Performance Optimization",
                  description: "Advanced optimization techniques and monitoring."
                }
              ].map((service, index) => (
                <div key={index} className="bg-ivory p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="text-green-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
                  <p className="text-charcoal/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a web application that scales with your business and delights your users.
            </p>
            <Link 
              href="#contact" 
              className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 