'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechnologyStackSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  type CategoryKey = 'frontend' | 'backend' | 'cloud' | 'mobile';
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('frontend');

  const techCategories = {
    frontend: {
      title: "Frontend Excellence",
      description: "Creating stunning, responsive user experiences",
      color: "from-coral to-coral/60",
      technologies: [
        { name: "React", icon: "⚛️", proficiency: 95 },
        { name: "Next.js", icon: "🚀", proficiency: 90 },
        { name: "TypeScript", icon: "📘", proficiency: 88 },
        { name: "Tailwind CSS", icon: "🎨", proficiency: 92 },
        { name: "Framer Motion", icon: "✨", proficiency: 85 },
        { name: "Three.js", icon: "🎭", proficiency: 80 }
      ]
    },
    backend: {
      title: "Backend Powerhouse",
      description: "Robust, scalable server-side solutions",
      color: "from-matcha to-matcha/60",
      technologies: [
        { name: "Node.js", icon: "🟢", proficiency: 93 },
        { name: "Python", icon: "🐍", proficiency: 90 },
        { name: "PostgreSQL", icon: "🐘", proficiency: 88 },
        { name: "MongoDB", icon: "🍃", proficiency: 85 },
        { name: "Redis", icon: "🔴", proficiency: 82 },
        { name: "GraphQL", icon: "🎯", proficiency: 87 }
      ]
    },
    cloud: {
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud-native solutions",
      color: "from-sage to-sage/60",
      technologies: [
        { name: "AWS", icon: "☁️", proficiency: 92 },
        { name: "Docker", icon: "🐳", proficiency: 89 },
        { name: "Kubernetes", icon: "⚓", proficiency: 85 },
        { name: "Terraform", icon: "🏗️", proficiency: 80 },
        { name: "CI/CD", icon: "🔄", proficiency: 88 },
        { name: "Monitoring", icon: "📊", proficiency: 86 }
      ]
    },
    mobile: {
      title: "Mobile Innovation",
      description: "Cross-platform mobile applications",
      color: "from-coral/80 to-matcha/80",
      technologies: [
        { name: "React Native", icon: "📱", proficiency: 88 },
        { name: "Flutter", icon: "🦋", proficiency: 82 },
        { name: "Swift", icon: "🍎", proficiency: 85 },
        { name: "Kotlin", icon: "🤖", proficiency: 80 },
        { name: "Expo", icon: "🎯", proficiency: 90 },
        { name: "Firebase", icon: "🔥", proficiency: 87 }
      ]
    }
  } as const;

  const stats = [
    { number: "50+", label: "Technologies Mastered", icon: "🛠️" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🔧" },
    { number: "5x", label: "Performance Boost", icon: "🚀" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-sage/10 to-ivory relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-matcha to-coral">
              Technology
            </span>{' '}
            Stack
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and proven frameworks to deliver 
            exceptional digital solutions that scale with your business.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-matcha/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-matcha mb-1">{stat.number}</div>
              <div className="text-sm text-charcoal/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.entries(techCategories) as [CategoryKey, typeof techCategories[CategoryKey]][]).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-matcha to-sage text-white shadow-lg scale-105'
                  : 'bg-white/60 text-charcoal hover:bg-white/80 hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-charcoal mb-4">
              {techCategories[activeCategory].title}
            </h3>
            <p className="text-lg text-charcoal/70">
              {techCategories[activeCategory].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories[activeCategory].technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-sage/20 hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <h4 className="text-xl font-bold text-charcoal">{tech.name}</h4>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-charcoal/60 mb-1">
                    <span>Proficiency</span>
                    <span>{tech.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${techCategories[activeCategory].color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Central Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-matcha/20 via-coral/20 to-sage/20 rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-matcha/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-2 border-coral/30 rounded-full border-dashed"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 border-2 border-sage/30 rounded-full"
              ></motion.div>
              
              <div className="relative z-10 text-center bg-white/80 backdrop-blur-sm rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                <div>
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-lg font-bold text-charcoal">Innovation</div>
                  <div className="text-sm text-charcoal/60">Driven</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStackSection; 