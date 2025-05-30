export interface CaseStudy {
  id: string;
  client: {
    name: string;
    logo?: string;
    industry: string;
  };
  project: {
    title: string;
    description: string;
    thumbnail: string;
    metrics: Array<{
      value: string;
      label: string;
      improvement?: string;
    }>;
  };
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  cta: {
    label: string;
    url: string;
  };
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-platform',
    client: {
      name: 'NexPay',
      industry: 'Fintech',
    },
    project: {
      title: 'Rebuilding Digital Banking',
      description: 'Complete infrastructure overhaul for a next-gen payment platform serving 2M+ users daily.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&auto=format&q=80',
      metrics: [
        { value: '99.99%', label: 'Uptime' },
        { value: '2M+', label: 'Daily Users' },
        { value: '<50ms', label: 'Response Time' }
      ],
    },
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
    testimonial: {
      quote: 'IMP transformed our technical capabilities overnight.',
      author: 'Sarah Chen',
      role: 'CTO, NexPay'
    },
    cta: {
      label: 'View Case Study',
      url: '/case-studies/nexpay'
    },
    color: '#E8F5E9'
  },
  {
    id: 'ai-healthcare',
    client: {
      name: 'MedAI',
      industry: 'Healthcare',
    },
    project: {
      title: 'AI-Powered Diagnostics',
      description: 'Machine learning platform reducing diagnosis time by 73% across 200 clinics.',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop&auto=format&q=80',
      metrics: [
        { value: '73%', label: 'Faster Diagnosis', improvement: '+73%' },
        { value: '200+', label: 'Clinics' },
        { value: '98.5%', label: 'Accuracy' }
      ],
    },
    technologies: ['Python', 'TensorFlow', 'Docker', 'GCP'],
    testimonial: {
      quote: 'The AI platform has revolutionized our diagnostic workflow.',
      author: 'Dr. Michael Torres',
      role: 'Chief Medical Officer, MedAI'
    },
    cta: {
      label: 'View Case Study',
      url: '/case-studies/medai'
    },
    color: '#E3F2FD'
  },
  {
    id: 'ecommerce-platform',
    client: {
      name: 'ShopFlow',
      industry: 'E-commerce',
    },
    project: {
      title: 'Next-Gen Commerce Platform',
      description: 'Scalable e-commerce solution handling Black Friday traffic with zero downtime.',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop&auto=format&q=80',
      metrics: [
        { value: '500%', label: 'Traffic Spike', improvement: '+500%' },
        { value: '0', label: 'Downtime' },
        { value: '2.3s', label: 'Load Time' }
      ],
    },
    technologies: ['Next.js', 'Shopify', 'Vercel', 'Redis'],
    testimonial: {
      quote: 'Our sales increased 300% after the platform launch.',
      author: 'Emma Rodriguez',
      role: 'CEO, ShopFlow'
    },
    cta: {
      label: 'View Case Study',
      url: '/case-studies/shopflow'
    },
    color: '#FFF3E0'
  },
  {
    id: 'logistics-system',
    client: {
      name: 'LogiTech',
      industry: 'Logistics',
    },
    project: {
      title: 'Smart Logistics Network',
      description: 'IoT-powered supply chain optimization reducing delivery times by 40%.',
      thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop&auto=format&q=80',
      metrics: [
        { value: '40%', label: 'Faster Delivery', improvement: '+40%' },
        { value: '25%', label: 'Cost Reduction', improvement: '-25%' },
        { value: '1000+', label: 'Routes Optimized' }
      ],
    },
    technologies: ['React Native', 'AWS IoT', 'MongoDB', 'ML'],
    cta: {
      label: 'View Case Study',
      url: '/case-studies/logitech'
    },
    color: '#F3E5F5'
  },
  {
    id: 'education-platform',
    client: {
      name: 'EduTech',
      industry: 'Education',
    },
    project: {
      title: 'Virtual Learning Environment',
      description: 'Interactive learning platform supporting 50K+ concurrent students.',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop&auto=format&q=80',
      metrics: [
        { value: '50K+', label: 'Concurrent Users' },
        { value: '95%', label: 'Student Satisfaction' },
        { value: '24/7', label: 'Availability' }
      ],
    },
    technologies: ['Vue.js', 'WebRTC', 'Kubernetes', 'Firebase'],
    cta: {
      label: 'View Case Study',
      url: '/case-studies/edutech'
    },
    color: '#E8F5E9'
  }
]; 