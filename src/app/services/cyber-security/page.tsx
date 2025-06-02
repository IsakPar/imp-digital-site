import React from 'react';
import { NavigationBar, Footer } from '@/components/ui';
import { ChevronLeft, Shield, Lock, Eye, AlertTriangle, Server, Database } from 'lucide-react';
import Link from 'next/link';

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <NavigationBar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-ivory via-white to-red-50 overflow-hidden pt-20">
          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              {/* Left Content */}
              <div>
                {/* Breadcrumb */}
                <div className="flex items-center mb-8 text-sm">
                  <Link href="/" className="text-charcoal/60 hover:text-red-600 transition-colors">
                    Home
                  </Link>
                  <ChevronLeft className="w-4 h-4 mx-2 text-charcoal/40 rotate-180" />
                  <Link href="/#services" className="text-charcoal/60 hover:text-red-600 transition-colors">
                    Services
                  </Link>
                  <ChevronLeft className="w-4 h-4 mx-2 text-charcoal/40 rotate-180" />
                  <span className="text-red-600 font-medium">Cyber Security</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-charcoal leading-none mb-8">
                  CYBER
                  <br />
                  <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                    SECURITY
                  </span>
                </h1>

                <p className="text-xl text-charcoal/70 leading-relaxed mb-10 max-w-lg">
                  Protect your digital assets with enterprise-grade security solutions. 
                  From threat detection to compliance, we secure your business.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">24/7</div>
                    <div className="text-sm text-charcoal/60">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">99.9%</div>
                    <div className="text-sm text-charcoal/60">Threat Detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">0</div>
                    <div className="text-sm text-charcoal/60">Breaches</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact" className="block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center hover:scale-105">
                    Security Assessment
                  </Link>
                  <Link href="#services" className="block px-8 py-4 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-center hover:scale-105">
                    View Solutions
                  </Link>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-32 h-32 text-red-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Enterprise Security</h3>
                    <p className="text-charcoal/70">Comprehensive protection for your digital infrastructure</p>
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
              <h2 className="text-4xl font-bold text-charcoal mb-6">Security Services</h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business from evolving threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Threat Detection",
                  description: "Advanced monitoring and real-time threat detection systems."
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Access Control",
                  description: "Multi-factor authentication and identity management solutions."
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Security Audits",
                  description: "Comprehensive security assessments and vulnerability testing."
                },
                {
                  icon: <AlertTriangle className="w-8 h-8" />,
                  title: "Incident Response",
                  description: "24/7 incident response and disaster recovery planning."
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Network Security",
                  description: "Firewall management and network intrusion prevention."
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Data Protection",
                  description: "Encryption, backup, and data loss prevention strategies."
                }
              ].map((service, index) => (
                <div key={index} className="bg-ivory p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="text-red-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
                  <p className="text-charcoal/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Secure Your Business Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Let us assess and strengthen your cybersecurity posture.
            </p>
            <Link 
              href="#contact" 
              className="inline-block px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Security Assessment
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 