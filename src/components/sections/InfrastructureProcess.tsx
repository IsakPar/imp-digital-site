'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Search, Users, Code, Rocket, Shield, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const InfrastructureProcess = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const processSteps = [
    {
      step: 1,
      title: "Assessment & Planning",
      duration: "1-2 weeks",
      icon: <Search className="w-8 h-8" />,
      description: "Comprehensive analysis of your current infrastructure, requirements, and goals",
      activities: [
        "Current infrastructure audit",
        "Performance and cost analysis",
        "Security assessment",
        "Scalability requirements",
        "Migration strategy planning"
      ],
      deliverables: [
        "Infrastructure Assessment Report",
        "Migration Roadmap",
        "Cost-Benefit Analysis",
        "Risk Assessment"
      ],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      step: 2,
      title: "Architecture Design",
      duration: "2-3 weeks",
      icon: <Code className="w-8 h-8" />,
      description: "Design scalable, secure, and cost-effective cloud architecture tailored to your needs",
      activities: [
        "Cloud architecture design",
        "Security framework planning",
        "Network topology design",
        "Disaster recovery planning",
        "Compliance alignment"
      ],
      deliverables: [
        "Technical Architecture Document",
        "Security Framework",
        "Network Diagrams",
        "Disaster Recovery Plan"
      ],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      step: 3,
      title: "Development & Testing",
      duration: "3-6 weeks",
      icon: <Users className="w-8 h-8" />,
      description: "Build, configure, and rigorously test your new infrastructure in a staging environment",
      activities: [
        "Infrastructure provisioning",
        "CI/CD pipeline setup",
        "Automated testing implementation",
        "Load testing and optimization",
        "Security testing"
      ],
      deliverables: [
        "Staging Environment",
        "CI/CD Pipelines",
        "Test Results Report",
        "Performance Benchmarks"
      ],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      step: 4,
      title: "Migration & Deployment",
      duration: "1-4 weeks",
      icon: <Rocket className="w-8 h-8" />,
      description: "Execute the migration with minimal downtime using proven deployment strategies",
      activities: [
        "Phased migration execution",
        "Data migration and validation",
        "DNS cutover management",
        "Performance monitoring",
        "Rollback preparation"
      ],
      deliverables: [
        "Live Production Environment",
        "Migration Report",
        "Performance Metrics",
        "User Acceptance Sign-off"
      ],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      step: 5,
      title: "Security & Compliance",
      duration: "Ongoing",
      icon: <Shield className="w-8 h-8" />,
      description: "Implement comprehensive security measures and ensure compliance standards",
      activities: [
        "Security hardening",
        "Compliance validation",
        "Access control setup",
        "Monitoring configuration",
        "Incident response planning"
      ],
      deliverables: [
        "Security Configuration",
        "Compliance Reports",
        "Monitoring Dashboard",
        "Incident Response Plan"
      ],
      color: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/10 to-orange-500/10"
    },
    {
      step: 6,
      title: "Optimization & Support",
      duration: "Ongoing",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Continuous monitoring, optimization, and 24/7 support for peak performance",
      activities: [
        "Performance monitoring",
        "Cost optimization",
        "Capacity planning",
        "Security updates",
        "24/7 support"
      ],
      deliverables: [
        "Performance Reports",
        "Cost Analysis",
        "Optimization Recommendations",
        "Support Documentation"
      ],
      color: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ y: sectionY }}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Our Infrastructure Process
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            A proven methodology for seamless cloud migration and infrastructure optimization
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-matcha to-matcha-dark opacity-20"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Step Content */}
                  <motion.div 
                    className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                    whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="flex items-center mb-6"
                      initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
                    >
                      <motion.div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-6`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-charcoal">{step.title}</h3>
                        <p className="text-matcha font-medium">{step.duration}</p>
                      </div>
                    </motion.div>

                    <motion.p 
                      className="text-lg text-charcoal/70 mb-8"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                    >
                      {step.description}
                    </motion.p>

                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                    >
                      {/* Activities */}
                      <div>
                        <h4 className="font-bold text-charcoal mb-4">Key Activities</h4>
                        <div className="space-y-3">
                          {step.activities.map((activity, activityIndex) => (
                            <motion.div 
                              key={activityIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: 0.5 + (index * 0.2) + (activityIndex * 0.1) }}
                            >
                              <motion.div
                                className="text-matcha mr-3 mt-1"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: 0.6 + (index * 0.2) + (activityIndex * 0.1) }}
                              >
                                <CheckCircle size={16} />
                              </motion.div>
                              <span className="text-charcoal/70 text-sm">{activity}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="font-bold text-charcoal mb-4">Deliverables</h4>
                        <div className="space-y-3">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <motion.div 
                              key={deliverableIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: 0.5 + (index * 0.2) + (deliverableIndex * 0.1) }}
                            >
                              <motion.div
                                className="text-matcha mr-3 mt-1"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: 0.6 + (index * 0.2) + (deliverableIndex * 0.1) }}
                              >
                                <ArrowRight size={16} />
                              </motion.div>
                              <span className="text-charcoal/70 text-sm font-medium">{deliverable}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Step Visualization */}
                  <motion.div 
                    className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + (index * 0.2) }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`bg-gradient-to-br ${step.bgGradient} border border-matcha/20 rounded-2xl p-8 h-full`}>
                      <motion.div 
                        className="text-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                      >
                        <motion.div 
                          className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mx-auto mb-4`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                          <div className="text-3xl font-bold">
                            {step.step}
                          </div>
                        </motion.div>
                        <h4 className="text-xl font-bold text-charcoal">{step.title}</h4>
                      </motion.div>

                      {/* Progress Visualization */}
                      <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
                      >
                        {step.activities.slice(0, 3).map((activity, activityIndex) => (
                          <motion.div 
                            key={activityIndex}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.6 + (index * 0.2) + (activityIndex * 0.1) }}
                          >
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-matcha mr-3"
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: 0.7 + (index * 0.2) + (activityIndex * 0.1) }}
                              whileHover={{ scale: 1.5 }}
                            />
                            <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                              <motion.div 
                                className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${80 + activityIndex * 10}%` } : {}}
                                transition={{ duration: 1, delay: 0.8 + (index * 0.2) + (activityIndex * 0.2) }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Step Connector */}
                {index < processSteps.length - 1 && (
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-matcha rounded-full border-4 border-white shadow-lg flex items-center justify-center mt-8"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <ArrowRight size={16} className="text-white" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Transform Your Infrastructure?</h3>
          <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific requirements and create a custom migration plan for your business.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-matcha to-matcha-dark text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Schedule Strategy Session
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InfrastructureProcess; 