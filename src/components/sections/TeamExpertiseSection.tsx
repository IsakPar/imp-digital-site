'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamExpertiseSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertiseAreas = [
    {
      icon: "🎯",
      title: "Strategic Planning",
      description: "Data-driven strategies that align with your business objectives and market demands.",
      stat: "95%",
      label: "Success Rate"
    },
    {
      icon: "⚡",
      title: "Rapid Development",
      description: "Agile methodologies ensuring fast time-to-market without compromising quality.",
      stat: "50%",
      label: "Faster Delivery"
    },
    {
      icon: "🔒",
      title: "Security First",
      description: "Enterprise-grade security measures protecting your digital assets and user data.",
      stat: "100%",
      label: "Compliance Rate"
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description: "Future-proof architectures that grow with your business needs.",
      stat: "300%",
      label: "Avg. Growth Support"
    }
  ];

  const teamMembers = [
    {
      role: "Technical Leadership",
      count: "8+",
      description: "Senior architects and technical leads with 10+ years experience"
    },
    {
      role: "Design Excellence",
      count: "6+",
      description: "UX/UI specialists creating award-winning digital experiences"
    },
    {
      role: "Development Power",
      count: "15+",
      description: "Full-stack developers mastering cutting-edge technologies"
    },
    {
      role: "Strategic Minds",
      count: "4+",
      description: "Business analysts and project managers driving success"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-ivory to-sage/10 relative overflow-hidden">
      {/* Background Visual Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-matcha/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-coral/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-matcha to-sage">
              Experts
            </span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of specialists brings together decades of experience 
            in cutting-edge technology, innovative design, and strategic business solutions.
          </p>
        </motion.div>

        {/* Central Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-20 flex justify-center"
        >
          <div className="relative">
            {/* Main Circle */}
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-matcha/20 to-coral/20 rounded-full flex items-center justify-center relative">
              <div className="w-60 h-60 md:w-72 md:h-72 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-matcha mb-2">33+</div>
                  <div className="text-lg text-charcoal/70">Team Members</div>
                  <div className="text-sm text-charcoal/50">Across 4 Continents</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-matcha/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-coral/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-matcha/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Team Composition */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-matcha/10 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl font-bold text-matcha mb-2">{member.count}</div>
              <div className="text-lg font-semibold text-charcoal mb-3">{member.role}</div>
              <div className="text-sm text-charcoal/60 leading-relaxed">{member.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-sage/20 hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{area.title}</h3>
              <p className="text-charcoal/60 mb-6 leading-relaxed">{area.description}</p>
              <div className="border-t border-sage/20 pt-4">
                <div className="text-3xl font-bold text-matcha">{area.stat}</div>
                <div className="text-sm text-charcoal/50">{area.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamExpertiseSection; 