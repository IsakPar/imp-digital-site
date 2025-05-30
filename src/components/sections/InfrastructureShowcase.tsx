'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const InfrastructureShowcase = () => {
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

  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      client: "Global Retailer",
      challenge: "Legacy infrastructure couldn't handle Black Friday traffic spikes",
      solution: "Migrated to AWS with auto-scaling Kubernetes clusters and CDN optimization",
      results: [
        "99.99% uptime during peak traffic",
        "60% reduction in infrastructure costs",
        "3x faster page load times",
        "Zero downtime deployment"
      ],
      metrics: {
        traffic: "500% increase handled",
        cost: "60% reduction",
        uptime: "99.99%",
        speed: "3x faster"
      },
      technologies: ["AWS", "Kubernetes", "Docker", "CloudFront", "RDS"],
      icon: <Cloud className="w-8 h-8" />,
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "DevOps Transformation",
      client: "FinTech Startup",
      challenge: "Manual deployments causing delays and errors in financial services",
      solution: "Implemented CI/CD pipelines with Infrastructure as Code and automated testing",
      results: [
        "95% faster deployment cycles",
        "Zero deployment errors",
        "Automated compliance checks",
        "24/7 monitoring and alerting"
      ],
      metrics: {
        deployment: "95% faster",
        errors: "0 failures",
        compliance: "100% automated",
        monitoring: "24/7 coverage"
      },
      technologies: ["GitLab CI", "Terraform", "Ansible", "Prometheus", "Grafana"],
      icon: <Server className="w-8 h-8" />,
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Multi-Cloud Security Architecture",
      client: "Healthcare Provider",
      challenge: "HIPAA compliance across multiple cloud providers with sensitive patient data",
      solution: "Designed secure multi-cloud architecture with end-to-end encryption",
      results: [
        "HIPAA compliant infrastructure",
        "End-to-end data encryption",
        "Zero security breaches",
        "Automated backup and recovery"
      ],
      metrics: {
        compliance: "100% HIPAA",
        encryption: "End-to-end",
        breaches: "0 incidents",
        recovery: "< 1 hour RTO"
      },
      technologies: ["AWS", "Azure", "Vault", "Terraform", "CloudTrail"],
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500/10 to-orange-500/10"
    }
  ];

  const metrics = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "150+",
      label: "Successful Migrations",
      description: "Cloud infrastructure projects delivered",
      color: "text-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "40%",
      label: "Average Cost Reduction",
      description: "Infrastructure cost savings achieved",
      color: "text-green-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "99.99%",
      label: "Uptime Guarantee",
      description: "Service level agreement maintained",
      color: "text-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "10x",
      label: "Performance Improvement",
      description: "Average application speed increase",
      color: "text-yellow-600"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ y: sectionY }}
      className="py-24 bg-gradient-to-br from-ivory to-white"
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
            Infrastructure Success Stories
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Real results from our cloud infrastructure and DevOps transformations
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`${metric.color} mb-4 flex justify-center`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {metric.icon}
              </motion.div>
              <motion.div 
                className="text-4xl font-bold text-charcoal mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
              >
                {metric.number}
              </motion.div>
              <div className="text-lg font-semibold text-matcha mb-1">{metric.label}</div>
              <div className="text-sm text-charcoal/60">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
            >
              {/* Content */}
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
                >
                  <div className="text-matcha mr-4">{study.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">{study.title}</h3>
                    <p className="text-matcha font-medium">{study.client}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                >
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Challenge:</h4>
                    <p className="text-charcoal/70">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Solution:</h4>
                    <p className="text-charcoal/70">{study.solution}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-2 gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + (index * 0.2) }}
                >
                  {Object.entries(study.metrics).map(([key, value], metricIndex) => (
                    <motion.div 
                      key={key}
                      className="text-center p-4 bg-white rounded-lg border border-matcha/20"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(184, 201, 163, 0.5)' }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold text-matcha">{value}</div>
                      <div className="text-sm text-charcoal/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                >
                  {study.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-matcha/10 text-matcha text-sm rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.9 + (index * 0.2) + (techIndex * 0.1) }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(184, 201, 163, 0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Results */}
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + (index * 0.2) }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`bg-gradient-to-br ${study.gradient} border border-matcha/20 rounded-2xl p-8`}>
                  <h4 className="text-xl font-bold text-charcoal mb-6">Key Results</h4>
                  <div className="space-y-4">
                    {study.results.map((result, resultIndex) => (
                      <motion.div 
                        key={resultIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + (index * 0.2) + (resultIndex * 0.1) }}
                      >
                        <motion.div
                          className="text-matcha mr-3 mt-1"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.9 + (index * 0.2) + (resultIndex * 0.1) }}
                        >
                          <CheckCircle size={20} />
                        </motion.div>
                        <span className="text-charcoal/80">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default InfrastructureShowcase; 