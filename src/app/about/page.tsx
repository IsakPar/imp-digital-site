'use client';

import React from 'react';
import { NavigationBar, Footer } from '@/components/ui';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Brain, Layers, Code, Rocket, Target, Globe, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [capabilitiesRef, capabilitiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const startupPrinciples = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agile by Nature",
      description: "Built for speed and adaptability. Every solution evolves with your changing needs, ensuring you stay ahead in a dynamic market."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Knowledge-Driven",
      description: "Deep expertise across modern technologies combined with continuous learning. Innovation happens at the intersection of knowledge and curiosity."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Flexible Architecture",
      description: "Modular, scalable solutions that grow with your business. Every system is designed for tomorrow's challenges, not just today's requirements."
    }
  ];

  const capabilities = [
    {
      category: "Frontend Excellence",
      description: "Modern frameworks, responsive design, performance optimization",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend Mastery",
      description: "Scalable APIs, database design, cloud architecture",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-matcha to-sage"
    },
    {
      category: "AI Integration",
      description: "Machine learning, automation, intelligent systems",
      technologies: ["OpenAI", "Langchain", "TensorFlow", "Automation", "RAG"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Infrastructure",
      description: "Cloud deployment, DevOps, monitoring, security",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const philosophy = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision in Execution",
      description: "Every line of code serves a purpose. Every design decision drives value."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      description: "Building solutions that work across cultures, devices, and markets."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Future-Ready",
      description: "Architecting for tomorrow's possibilities while solving today's problems."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <NavigationBar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-ivory via-white to-sage/5 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-matcha/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-sage/8 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 60 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <motion.h1 
                className="text-6xl lg:text-8xl font-bold text-charcoal mb-8" 
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                Digital{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-matcha via-sage to-matcha">
                  Innovation
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A startup-driven approach to digital transformation. Combining deep technical knowledge 
                with the flexibility to adapt, innovate, and scale at the speed of your ambition.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-matcha/10 to-sage/10 rounded-full border border-matcha/20"
              >
                <div className="w-3 h-3 bg-matcha rounded-full animate-pulse"></div>
                <span className="text-lg font-medium text-charcoal">Ready to Build • Ready to Scale • Ready to Innovate</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={visionRef}
              initial={{ opacity: 0 }}
              animate={visionInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={visionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-5xl font-bold text-charcoal mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    The Startup 
                    <span className="text-matcha block">Advantage</span>
                  </h2>
                  <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                    Operating with startup velocity means embracing change, iterating quickly, 
                    and building solutions that adapt as fast as your business grows. No bureaucracy, 
                    no rigid processes—just pure focus on delivering value.
                  </p>
                  <p className="text-lg text-charcoal/60 leading-relaxed">
                    This approach combines the expertise of years in the field with the agility 
                    to pivot, experiment, and optimize in real-time. Your success becomes the 
                    primary metric for every decision.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 gap-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={visionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {startupPrinciples.map((principle, index) => (
                    <motion.div
                      key={index}
                      className="p-6 bg-gradient-to-br from-white to-sage/5 rounded-2xl border border-matcha/10 hover:shadow-xl transition-all duration-300 group"
                      initial={{ opacity: 0, y: 30 }}
                      animate={visionInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-matcha group-hover:scale-110 transition-transform duration-300">
                          {principle.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-charcoal mb-3">{principle.title}</h3>
                          <p className="text-charcoal/70 leading-relaxed">{principle.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Knowledge & Capabilities Section */}
        <section className="py-24 bg-gradient-to-b from-ivory/50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={capabilitiesRef}
              initial={{ opacity: 0, y: 50 }}
              animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Knowledge That 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-matcha to-sage"> Delivers</span>
              </h2>
              <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
                Deep expertise across the full technology stack, from frontend interfaces to 
                backend systems, cloud infrastructure, and AI integration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="relative p-8 bg-white rounded-3xl border border-sage/20 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <h3 className="text-2xl font-bold text-charcoal mb-4">{capability.category}</h3>
                  <p className="text-charcoal/70 mb-6 leading-relaxed">{capability.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {capability.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-sage/10 text-charcoal/80 rounded-full text-sm font-medium border border-sage/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={capabilitiesInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: (index * 0.15) + (techIndex * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={philosophyRef}
              initial={{ opacity: 0 }}
              animate={philosophyInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Built on 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-matcha to-sage"> Principle</span>
                </h2>
                <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
                  Every project guided by core principles that ensure sustainable success and meaningful impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {philosophy.map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-8 bg-gradient-to-b from-sage/5 to-white rounded-2xl border border-matcha/10 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="w-16 h-16 bg-matcha/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-matcha/20 transition-colors duration-300">
                      <div className="text-matcha group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">{item.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-matcha via-sage to-matcha text-white relative overflow-hidden">
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
              <h2 className="text-5xl font-bold mb-8">Ready to Build Something Exceptional?</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
                Let's transform your vision into reality with the perfect blend of startup agility, 
                deep technical knowledge, and flexible execution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-matcha px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-ivory transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="/services"
                  className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
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