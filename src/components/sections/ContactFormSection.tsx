'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Briefcase, ArrowRight, type LucideIcon } from 'lucide-react';

// Form field interface
interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  projectType: string;
}

// Animated input component
const AnimatedInput = ({ 
  icon: Icon, 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  required = false,
  delay = 0 
}: {
  icon: LucideIcon;
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  delay?: number;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className="relative"
      initial={isMounted ? { opacity: 0, y: 20 } : false}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">
        <Icon 
          size={20} 
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
            isFocused || value ? 'text-matcha' : 'text-gray-400'
          }`} 
        />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`
            w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-xl
            transition-all duration-300 outline-none text-charcoal
            placeholder-transparent peer
            ${isFocused || value 
              ? 'border-matcha shadow-lg shadow-matcha/20' 
              : 'border-gray-200 hover:border-gray-300'
            }
          `}
          placeholder={label}
        />
        <label
          className={`
            absolute left-12 transition-all duration-300 pointer-events-none
            ${isFocused || value
              ? '-top-2 text-sm text-matcha bg-white px-2 rounded'
              : 'top-4 text-gray-500'
            }
          `}
        >
          {label}
        </label>
      </div>
    </motion.div>
  );
};

// Animated textarea component
const AnimatedTextarea = ({ 
  icon: Icon, 
  label, 
  name, 
  value, 
  onChange, 
  required = false,
  delay = 0 
}: {
  icon: LucideIcon;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  delay?: number;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className="relative"
      initial={isMounted ? { opacity: 0, y: 20 } : false}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">
        <Icon 
          size={20} 
          className={`absolute left-4 top-6 transition-colors duration-300 ${
            isFocused || value ? 'text-matcha' : 'text-gray-400'
          }`} 
        />
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          rows={4}
          className={`
            w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-xl
            transition-all duration-300 outline-none text-charcoal resize-none
            placeholder-transparent peer
            ${isFocused || value 
              ? 'border-matcha shadow-lg shadow-matcha/20' 
              : 'border-gray-200 hover:border-gray-300'
            }
          `}
          placeholder={label}
        />
        <label
          className={`
            absolute left-12 transition-all duration-300 pointer-events-none
            ${isFocused || value
              ? '-top-2 text-sm text-matcha bg-white px-2 rounded'
              : 'top-4 text-gray-500'
            }
          `}
        >
          {label}
        </label>
      </div>
    </motion.div>
  );
};

// Project type selector
const ProjectTypeSelector = ({ 
  value, 
  onChange, 
  delay = 0 
}: {
  value: string;
  onChange: (value: string) => void;
  delay?: number;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projectTypes = [
    { id: 'web', label: 'Web Development', color: 'from-blue-500 to-blue-600' },
    { id: 'ai', label: 'AI & Automation', color: 'from-purple-500 to-purple-600' },
    { id: 'security', label: 'Cyber Security', color: 'from-red-500 to-red-600' },
    { id: 'cloud', label: 'Infrastructure & Cloud', color: 'from-green-500 to-green-600' },
    { id: 'consulting', label: 'Consulting', color: 'from-orange-500 to-orange-600' },
    { id: 'other', label: 'Other', color: 'from-gray-500 to-gray-600' }
  ];

  return (
    <motion.div
      className="space-y-3"
      initial={isMounted ? { opacity: 0, y: 20 } : false}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <label className="block text-sm font-medium text-charcoal mb-3">
        Project Type
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {projectTypes.map((type) => (
          <motion.button
            key={type.id}
            type="button"
            onClick={() => onChange(type.id)}
            className={`
              relative overflow-hidden p-3 rounded-xl border-2 transition-all duration-300
              ${value === type.id 
                ? 'border-matcha bg-matcha/10 text-matcha' 
                : 'border-gray-200 bg-white/50 text-gray-600 hover:border-gray-300'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${type.color} opacity-0 transition-opacity duration-300 ${
              value === type.id ? 'opacity-10' : ''
            }`} />
            <div className="relative text-sm font-medium">
              {type.label}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

// Main contact form section
export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProjectTypeChange = (projectType: string) => {
    setFormData(prev => ({ ...prev, projectType }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(''); // Clear any previous errors
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          projectType: ''
        });
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#F5F2E8] via-[#FAF9F6] to-[#F0EDE5] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-matcha/5 rounded-full blur-3xl"
          animate={isMounted ? {
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-matcha/10 rounded-full blur-3xl"
          animate={isMounted ? {
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          } : {}}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-6xl font-black text-charcoal mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              initial={isMounted ? { opacity: 0, y: 30 } : false}
              animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-matcha to-matcha-dark bg-clip-text text-transparent">
                Extraordinary
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-charcoal/70 max-w-2xl mx-auto"
              initial={isMounted ? { opacity: 0, y: 20 } : false}
              animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
            </motion.p>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl shadow-matcha/10 border border-white/20"
            initial={isMounted ? { opacity: 0, y: 40 } : false}
            animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatedInput
                    icon={User}
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    delay={0.6}
                  />
                  <AnimatedInput
                    icon={Mail}
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    delay={0.7}
                  />
                </div>

                <AnimatedInput
                  icon={Briefcase}
                  label="Company (Optional)"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  delay={0.8}
                />

                <ProjectTypeSelector
                  value={formData.projectType}
                  onChange={handleProjectTypeChange}
                  delay={0.9}
                />

                <AnimatedTextarea
                  icon={MessageSquare}
                  label="Tell us about your project"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  delay={1.0}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-enhanced-matcha text-white py-4 px-8 rounded-xl font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group"
                  initial={isMounted ? { opacity: 0, y: 20 } : false}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full mr-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>

                {/* Error Display */}
                {error && (
                  <motion.div
                    className="p-4 bg-red-50 border border-red-200 rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-red-600 text-sm font-medium">
                      ⚠️ {error}
                    </p>
                  </motion.div>
                )}
              </form>
            ) : (
              // Success state
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-matcha to-matcha-dark rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <Send size={24} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-charcoal/70">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 