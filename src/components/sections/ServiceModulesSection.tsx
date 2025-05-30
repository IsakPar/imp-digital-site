'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowRight, Monitor, Shield, Cpu, Server, Cloud, Layers, X, Play, Code, Eye, Zap, ChevronRight, Terminal, Database, Lock, Brain, Palette } from 'lucide-react';

// Enhanced service data with interactive content
const services = [
  {
    id: 'web-dev',
    title: 'WEB DEVELOPMENT',
    subtitle: 'Full-Stack Development',
    description: 'React to Rails, pixel-perfect execution',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    icon: Monitor,
    color: '#D9E5C1',
    accentColor: '#B8C9A3',
    demoType: 'code',
    liveCode: `// Real-time React component
const PerfectButton = ({ children, variant = 'primary' }) => {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <motion.button
      className={\`btn-\${variant}\`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      animate={{
        boxShadow: isPressed 
          ? "0 2px 8px rgba(0,0,0,0.1)"
          : "0 8px 32px rgba(0,0,0,0.12)"
      }}
    >
      {children}
    </motion.button>
  );
};`,
    features: ['Pixel-perfect responsive design', 'Performance optimization', 'SEO-first architecture', 'Modern React patterns'],
    stats: { metric: '99.9%', label: 'Lighthouse Score' }
  },
  {
    id: 'cyber',
    title: 'CYBERSECURITY',
    subtitle: 'Security Audits',
    description: 'Penetration testing to compliance audits',
    tags: ['OWASP', 'SOC2', 'Zero Trust', 'Penetration Testing'],
    icon: Shield,
    color: '#C8D5B5',
    accentColor: '#A8B99F',
    demoType: 'terminal',
    terminalCommands: [
      '$ nmap -sS -O target.com',
      'Starting Nmap 7.94 scan...',
      'Host is up (0.023s latency).',
      '443/tcp  open  https',
      '$ sqlmap -u "https://target.com/login"',
      'Testing for SQL injection vulnerabilities...',
      '[CRITICAL] SQL injection found in login form',
      '$ burpsuite --scan --target target.com',
      'Scanning for OWASP Top 10 vulnerabilities...',
      '[INFO] XSS vulnerability detected',
      '[INFO] CSRF token missing',
      '$ generating_security_report.py',
      'Security audit complete. 12 issues found.'
    ],
    features: ['OWASP Top 10 testing', 'Automated vulnerability scanning', 'Compliance auditing', 'Security training'],
    stats: { metric: '100%', label: 'Compliance Rate' }
  },
  {
    id: 'ai',
    title: 'AI AUTOMATION',
    subtitle: 'AI Integration',
    description: 'Custom ML models & automation workflows',
    tags: ['GPT-4', 'TensorFlow', 'Python', 'Computer Vision'],
    icon: Brain,
    color: '#D9E5C1',
    accentColor: '#B8C9A3',
    demoType: 'ai',
    aiWorkflow: [
      { step: 'Data Input', desc: 'Customer emails, support tickets', icon: Database },
      { step: 'AI Processing', desc: 'GPT-4 analysis & categorization', icon: Brain },
      { step: 'Automation', desc: 'Route, respond, escalate', icon: Zap },
      { step: 'Learning', desc: 'Continuous improvement', icon: Cpu }
    ],
    features: ['Custom model training', 'Workflow automation', 'Natural language processing', 'Computer vision'],
    stats: { metric: '85%', label: 'Efficiency Gain' }
  },
  {
    id: 'infra',
    title: 'INFRASTRUCTURE',
    subtitle: 'Cloud Architecture',
    description: 'AWS to bare metal, optimized for scale',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
    icon: Server,
    color: '#C8D5B5',
    accentColor: '#A8B99F',
    demoType: 'architecture',
    architecture: [
      { name: 'Load Balancer', position: { x: 50, y: 10 }, connections: [1, 2] },
      { name: 'Web Server 1', position: { x: 20, y: 40 }, connections: [3] },
      { name: 'Web Server 2', position: { x: 80, y: 40 }, connections: [3] },
      { name: 'Database Cluster', position: { x: 50, y: 70 }, connections: [] }
    ],
    features: ['Auto-scaling infrastructure', 'Zero-downtime deployments', 'Monitoring & alerting', 'Cost optimization'],
    stats: { metric: '99.99%', label: 'Uptime SLA' }
  },
  {
    id: 'uiux',
    title: 'UI/UX DESIGN',
    subtitle: 'Design Systems',
    description: 'Research-driven interfaces that convert',
    tags: ['Figma', 'Design Systems', 'A/B Testing', 'User Research'],
    icon: Palette,
    color: '#E5EDD9',
    accentColor: '#C8D5B5',
    demoType: 'design',
    designElements: [
      { type: 'button' as const, variant: 'primary' as const, text: 'Get Started' },
      { type: 'button' as const, variant: 'secondary' as const, text: 'Learn More' },
      { type: 'input' as const, placeholder: 'Enter your email...' },
      { type: 'card' as const, title: 'Feature Card', description: 'Clean, modern design' }
    ],
    features: ['Design system creation', 'User research & testing', 'Conversion optimization', 'Accessibility compliance'],
    stats: { metric: '127%', label: 'Conversion Lift' }
  }
];

// Interactive Code Demo Component
const CodeDemo = ({ code, isActive }: { code: string; isActive: boolean }) => {
  const [typedCode, setTypedCode] = useState('');
  
  useEffect(() => {
    if (!isActive) {
      setTypedCode('');
      return;
    }
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < code.length) {
        setTypedCode(code.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 15);
    
    return () => clearInterval(timer);
  }, [code, isActive]);
  
  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-hidden">
      <div className="flex items-center mb-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 text-gray-400 text-xs">component.tsx</span>
      </div>
      <pre className="text-green-400 whitespace-pre-wrap">
        {typedCode}
        {isActive && <span className="animate-pulse">|</span>}
      </pre>
    </div>
  );
};

// Terminal Demo Component
const TerminalDemo = ({ commands, isActive }: { commands: string[]; isActive: boolean }) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  
  useEffect(() => {
    if (!isActive) {
      setCurrentCommand(0);
      setDisplayedCommands([]);
      return;
    }
    
    const timer = setInterval(() => {
      if (currentCommand < commands.length) {
        setDisplayedCommands(prev => [...prev, commands[currentCommand]]);
        setCurrentCommand(prev => prev + 1);
      }
    }, 600);
    
    return () => clearInterval(timer);
  }, [commands, isActive, currentCommand]);
  
  return (
    <div className="bg-black rounded-lg p-4 font-mono text-sm h-64 overflow-hidden">
      <div className="flex items-center mb-3">
        <Terminal size={16} className="text-green-400 mr-2" />
        <span className="text-green-400">Security Audit Terminal</span>
      </div>
      <div className="space-y-1">
        {displayedCommands.map((command, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={command.startsWith('$') ? 'text-cyan-400' : 
                      command.includes('[CRITICAL]') ? 'text-red-400' :
                      command.includes('[INFO]') ? 'text-yellow-400' : 'text-gray-300'}
          >
            {command}
          </motion.div>
        ))}
        {isActive && currentCommand < commands.length && (
          <span className="text-green-400 animate-pulse">█</span>
        )}
      </div>
    </div>
  );
};

// Type definitions
interface ArchitectureNode {
  name: string;
  position: { x: number; y: number };
  connections: number[];
}

interface AIWorkflowStep {
  step: string;
  desc: string;
  icon: any;
}

interface DesignElement {
  type: 'button' | 'input' | 'card';
  variant?: 'primary' | 'secondary';
  text?: string;
  placeholder?: string;
  title?: string;
  description?: string;
}

// AI Workflow Demo Component
const AIWorkflowDemo = ({ workflow, isActive }: { workflow: AIWorkflowStep[]; isActive: boolean }) => {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    if (!isActive) {
      setActiveStep(0);
      return;
    }
    
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % workflow.length);
    }, 1500);
    
    return () => clearInterval(timer);
  }, [workflow, isActive]);
  
  return (
    <div className="space-y-4">
      {workflow.map((item, index) => {
        const IconComponent = item.icon;
        const isCurrentStep = index === activeStep;
        
        return (
          <motion.div
            key={index}
            className={`flex items-center p-3 rounded-lg transition-all ${
              isCurrentStep ? 'bg-matcha/20 border-2 border-matcha' : 'bg-gray-50'
            }`}
            animate={{
              scale: isCurrentStep ? 1.02 : 1,
              transition: { duration: 0.3 }
            }}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
              isCurrentStep ? 'bg-matcha text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              <IconComponent size={20} />
            </div>
            <div>
              <div className="font-semibold text-charcoal">{item.step}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
            {isCurrentStep && (
              <motion.div
                className="ml-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Zap size={20} className="text-matcha" />
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// Architecture Diagram Component
const ArchitectureDemo = ({ architecture, isActive }: { architecture: ArchitectureNode[]; isActive: boolean }) => {
  const [animatedConnections, setAnimatedConnections] = useState<number[]>([]);
  
  useEffect(() => {
    if (!isActive) {
      setAnimatedConnections([]);
      return;
    }
    
    const timer = setInterval(() => {
      setAnimatedConnections(prev => {
        const next = [...prev];
        const randomConnection = Math.floor(Math.random() * 4);
        if (!next.includes(randomConnection)) {
          next.push(randomConnection);
        }
        if (next.length > 2) {
          next.shift();
        }
        return next;
      });
    }, 1200);
    
    return () => clearInterval(timer);
  }, [isActive]);
  
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
      <svg className="absolute inset-0 w-full h-full">
        {architecture.map((node, index) => 
          node.connections.map((connectionIndex: number) => {
            const targetNode = architecture[connectionIndex];
            const isAnimated = animatedConnections.includes(index);
            
            return (
              <motion.line
                key={`${index}-${connectionIndex}`}
                x1={`${node.position.x}%`}
                y1={`${node.position.y}%`}
                x2={`${targetNode.position.x}%`}
                y2={`${targetNode.position.y}%`}
                stroke={isAnimated ? "#D9E5C1" : "#E5E7EB"}
                strokeWidth={isAnimated ? "3" : "2"}
                strokeDasharray={isAnimated ? "5,5" : "none"}
                animate={{
                  strokeDashoffset: isAnimated ? [0, -10] : 0,
                }}
                transition={{
                  duration: 1,
                  repeat: isAnimated ? Infinity : 0,
                  ease: "linear"
                }}
              />
            );
          })
        )}
      </svg>
      
      {architecture.map((node, index) => (
        <motion.div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 rounded-lg px-3 py-2 text-sm font-medium shadow-lg"
          style={{
            left: `${node.position.x}%`,
            top: `${node.position.y}%`,
          }}
          animate={{
            scale: animatedConnections.includes(index) ? 1.1 : 1,
            borderColor: animatedConnections.includes(index) ? "#D9E5C1" : "#E5E7EB",
          }}
          transition={{ duration: 0.3 }}
        >
          {node.name}
        </motion.div>
      ))}
    </div>
  );
};

// Design Elements Demo Component
const DesignDemo = ({ elements, isActive }: { elements: DesignElement[]; isActive: boolean }) => {
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);
  
  return (
    <div className="space-y-4">
      {elements.map((element, index) => {
        const isHovered = hoveredElement === index;
        
        if (element.type === 'button') {
          return (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                element.variant === 'primary' 
                  ? 'bg-matcha text-charcoal hover:bg-matcha-dark' 
                  : 'border-2 border-matcha text-matcha hover:bg-matcha hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setHoveredElement(index)}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {element.text}
            </motion.button>
          );
        }
        
        if (element.type === 'input') {
          return (
            <motion.input
              key={index}
              type="email"
              placeholder={element.placeholder}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-matcha focus:outline-none transition-colors"
              whileFocus={{ scale: 1.01 }}
            />
          );
        }
        
        if (element.type === 'card') {
          return (
            <motion.div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              whileHover={{ y: -2 }}
              onMouseEnter={() => setHoveredElement(index)}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <h4 className="font-semibold text-charcoal mb-2">{element.title}</h4>
              <p className="text-gray-600">{element.description}</p>
              {isHovered && (
                <motion.div
                  className="mt-3 flex items-center text-matcha font-medium"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="mr-2">Explore</span>
                  <ChevronRight size={16} />
                </motion.div>
              )}
            </motion.div>
          );
        }
        
        return null;
      })}
    </div>
  );
};

// Simple Service Card with Normal Hover Effects
const ServiceCard = ({
  service,
  index,
  onClick
}: {
  service: typeof services[0];
  index: number;
  onClick: (service: typeof services[0]) => void;
}) => {
  const IconComponent = service.icon;
  
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer group h-full flex flex-col hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -8,
        borderColor: service.color,
      }}
      onClick={() => onClick(service)}
    >
      {/* Icon Area */}
      <div className="h-32 p-6 bg-gray-50 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: service.color }}
        >
          <IconComponent size={32} className="text-charcoal" strokeWidth={1.5} />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category */}
        <div className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase">
          {service.title}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal mb-3 leading-tight">
          {service.subtitle}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
          {service.description}
        </p>
        
        {/* Stats */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-matcha">{service.stats.metric}</div>
              <div className="text-sm text-gray-600">{service.stats.label}</div>
            </div>
            <div className="text-matcha">
              <Eye size={24} />
            </div>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
            >
              {tag}
            </span>
          ))}
          {service.tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md text-sm">
              +{service.tags.length - 3}
            </span>
          )}
        </div>
        
        {/* CTA */}
        <div className="flex items-center text-charcoal font-medium group-hover:text-matcha transition-colors">
          <span className="mr-2">View live demo</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

// Service Popup with Rich Content
const ServicePopup = ({ service, isOpen, onClose }: {
  service: typeof services[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!service) return null;
  const IconComponent = service.icon;
  
  const renderFullDemo = () => {
    switch (service.demoType) {
      case 'code':
        return <CodeDemo code={service.liveCode!} isActive={isOpen} />;
      case 'terminal':
        return <TerminalDemo commands={service.terminalCommands!} isActive={isOpen} />;
      case 'ai':
        return <AIWorkflowDemo workflow={service.aiWorkflow!} isActive={isOpen} />;
      case 'architecture':
        return <ArchitectureDemo architecture={service.architecture!} isActive={isOpen} />;
      case 'design':
        return <DesignDemo elements={service.designElements!} isActive={isOpen} />;
      default:
        return null;
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white rounded-3xl p-8 lg:p-12 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-2xl transition-colors z-10 group"
              >
                <X size={24} className="text-gray-600 group-hover:text-charcoal" />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Content */}
                <div>
                  <motion.div 
                    className="flex items-start mb-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${service.color} 0%, ${service.accentColor} 100%)`,
                      }}
                    >
                      <IconComponent size={32} className="text-charcoal" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 mb-1 tracking-wider">{service.title}</h4>
                      <h3 className="text-3xl font-bold text-charcoal mb-2">{service.subtitle}</h3>
                      <p className="text-lg text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                  
                  {/* Stats */}
                  <motion.div 
                    className="mb-6 p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-bold text-matcha">{service.stats.metric}</div>
                        <div className="text-gray-600 font-medium">{service.stats.label}</div>
                      </div>
                      <motion.div 
                        className="text-matcha"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        <Zap size={40} />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Features */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold text-charcoal mb-4">What We Deliver</h4>
                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <div className="w-6 h-6 bg-matcha rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <ArrowRight size={14} className="text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Technologies */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="text-lg font-semibold text-charcoal mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-matcha hover:text-white transition-colors cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Right Column: Interactive Demo */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                    <span className="mr-2">Live Demo</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </h4>
                  <div className="bg-gray-50 rounded-xl p-4 h-96 overflow-hidden">
                    {renderFullDemo()}
                  </div>
                </motion.div>
              </div>
              
              {/* CTA */}
              <motion.div 
                className="mt-8 pt-6 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <button 
                  className="w-full py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center text-white hover:scale-[1.02] group"
                  style={{
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.accentColor} 100%)`,
                  }}
                >
                  <span className="mr-2">Start Your {service.subtitle} Project</span>
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// Main section component
export default function ServiceModulesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const handleCardClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };
  
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-charcoal mb-6 tracking-tight">
              FULL-STACK<br />EXCELLENCE
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              From infrastructure to interface,<br />we craft digital experiences that scale.
            </p>
            <motion.div
              className="flex items-center justify-center space-x-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <Play size={16} />
                <span>Click to see live demos</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Eye size={16} />
                <span>Interactive showcases</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`${
                  index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <ServiceCard
                  service={service}
                  index={index}
                  onClick={handleCardClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Popup */}
      <ServicePopup
        service={selectedService}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </section>
  );
} 