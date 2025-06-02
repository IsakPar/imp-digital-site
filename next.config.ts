import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

// Bundle analyzer for production debugging
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Performance optimizations for mobile
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Simplified experimental features
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: [
      'lucide-react',
    ],
    // Enable SWC optimizations
    forceSwcTransforms: true,
    // Exclude scripts from build
    typedRoutes: false,
  },
  
  // External packages for server components
  serverExternalPackages: ['sharp'],
  
  // Simplified compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    // Remove React dev tools in production
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
  
  // Simplified webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Basic optimizations only
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };

    // Add module resolution optimizations
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];
    
    return config;
  },

  // Images configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Output optimization
  output: 'standalone',
  
  // Enable static optimization
  trailingSlash: false,
  
  // Performance optimizations
  generateEtags: false,
  
  // Optimize page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Production URL
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // TypeScript configuration to exclude scripts
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withBundleAnalyzer(withPayload(nextConfig));
