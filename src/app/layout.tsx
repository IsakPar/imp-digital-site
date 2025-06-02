import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optimized font loading - only essential weights for mobile performance
const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Reduced from multiple weights
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "IMP Digital - Digital Excellence, End to End",
  description: "Transform your digital presence with our comprehensive suite of design, development, and digital marketing solutions.",
  keywords: "digital agency, web development, design, marketing, SEO, branding",
  authors: [{ name: "IMP Digital" }],
  creator: "IMP Digital",
  publisher: "IMP Digital",
  openGraph: {
    title: "IMP Digital - Digital Excellence, End to End",
    description: "Transform your digital presence with our comprehensive suite of design, development, and digital marketing solutions.",
    url: "https://impdigital.com",
    siteName: "IMP Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMP Digital - Digital Excellence, End to End",
    description: "Transform your digital presence with our comprehensive suite of design, development, and digital marketing solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Critical CSS inline styles for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for immediate rendering */
            :root {
              --color-ivory: #F5F5DC;
              --color-charcoal: #2C3E50;
              --color-matcha: #D9E5C1;
              --color-matcha-dark: #B8C9A3;
            }
            
            body {
              font-family: system-ui, -apple-system, sans-serif;
              background-color: var(--color-ivory);
              color: var(--color-charcoal);
              margin: 0;
              padding: 0;
              line-height: 1.6;
            }
            
            /* Critical button styles */
            .btn-primary {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 20px 40px;
              font-size: 18px;
              font-weight: 600;
              border-radius: 8px;
              min-height: 60px;
              background: linear-gradient(135deg, #D9E5C1 0%, #B8C9A3 100%);
              color: var(--color-charcoal);
              text-decoration: none;
              border: none;
              cursor: pointer;
              transition: opacity 0.15s ease;
            }
            
            /* Hero section critical styles */
            .hero-content {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 20px;
            }
            
            /* Navigation critical styles */
            .nav-fixed {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 9999;
              height: 80px;
              padding: 0 16px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              transition: background-color 0.3s ease;
            }
            
            /* Prevent layout shift */
            img, video {
              height: auto;
              max-width: 100%;
              display: block;
            }
          `
        }} />
        
        {/* Optimized viewport for mobile */}
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, viewport-fit=cover" 
        />
        
        {/* Mobile-optimized theme colors */}
        <meta name="theme-color" content="#F5F5DC" />
        <meta name="color-scheme" content="light" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        <noscript>
          <link rel="stylesheet" href="/_next/static/css/app/layout.css" />
        </noscript>
        
        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Prevent WebSocket issues for bfcache */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased font-inter" suppressHydrationWarning>
        {children}
        
        {/* Load non-critical CSS asynchronously */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Load CSS stylesheets
            function loadCSS(href, rel) {
              rel = rel || 'stylesheet';
              var link = document.createElement('link');
              link.rel = rel;
              link.href = href;
              document.head.appendChild(link);
              return link;
            }
            
            // Convert preload to stylesheet
            function convertPreloadToStylesheet(href) {
              var existingLink = document.querySelector('link[href="' + href + '"][rel="preload"]');
              if (existingLink) {
                existingLink.rel = 'stylesheet';
              } else {
                loadCSS(href);
              }
            }
            
            // Performance monitoring initialization
            function initPerformanceMonitoring() {
              // Track long tasks that block main thread
              if ('PerformanceObserver' in window) {
                try {
                  var observer = new PerformanceObserver(function(list) {
                    var entries = list.getEntries();
                    entries.forEach(function(entry) {
                      if (entry.entryType === 'longtask' && entry.duration > 50) {
                        console.warn('Long task detected:', entry.duration + 'ms', entry);
                      }
                    });
                  });
                  observer.observe({ entryTypes: ['longtask'] });
                } catch (e) {
                  console.warn('Performance monitoring not fully supported');
                }
              }
              
              // Track Core Web Vitals
              if ('web-vitals' in window) {
                // This would be loaded separately if needed
              }
            }
            
            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                convertPreloadToStylesheet('/_next/static/css/app/layout.css');
              });
            } else {
              convertPreloadToStylesheet('/_next/static/css/app/layout.css');
            }
            
            if (window.requestIdleCallback) {
              requestIdleCallback(function() {
                // Load additional styles when browser is idle
                loadCSS('/_next/static/css/app/globals.css');
                // Initialize performance monitoring
                initPerformanceMonitoring();
              });
            } else {
              // Fallback for browsers without requestIdleCallback
              setTimeout(function() {
                loadCSS('/_next/static/css/app/globals.css');
                initPerformanceMonitoring();
              }, 100);
            }
          `
        }} />
      </body>
    </html>
  );
}
