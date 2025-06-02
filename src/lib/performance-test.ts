// Performance testing utilities
'use client';

export class PerformanceTester {
  private static instance: PerformanceTester;
  private metrics: Map<string, number[]> = new Map();

  static getInstance(): PerformanceTester {
    if (!PerformanceTester.instance) {
      PerformanceTester.instance = new PerformanceTester();
    }
    return PerformanceTester.instance;
  }

  // Measure component render time
  measureComponentRender(componentName: string, renderFn: () => void): void {
    if (typeof window === 'undefined') {
      renderFn();
      return;
    }

    const startTime = performance.now();
    renderFn();
    const endTime = performance.now();
    const duration = endTime - startTime;

    // Store metric
    if (!this.metrics.has(componentName)) {
      this.metrics.set(componentName, []);
    }
    this.metrics.get(componentName)!.push(duration);

    // Warn if component takes too long
    if (duration > 16) { // More than one frame
      console.warn(`🐌 ${componentName} took ${duration.toFixed(2)}ms to render`);
    } else {
      console.log(`⚡ ${componentName} rendered in ${duration.toFixed(2)}ms`);
    }
  }

  // Measure bundle loading time
  measureBundleLoad(bundleName: string): Promise<number> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve(0);
        return;
      }

      const startTime = performance.now();
      
      // Use performance observer for more accurate measurement
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name.includes(bundleName) && entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const loadTime = resourceEntry.responseEnd - resourceEntry.fetchStart;
            console.log(`📦 ${bundleName} bundle loaded in ${loadTime.toFixed(2)}ms`);
            resolve(loadTime);
            observer.disconnect();
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['resource'] });
      } catch (e) {
        // Fallback measurement
        const endTime = performance.now();
        const duration = endTime - startTime;
        resolve(duration);
      }
    });
  }

  // Test critical metrics
  async testCriticalMetrics(): Promise<void> {
    if (typeof window === 'undefined') return;

    console.log('🔍 Running Performance Tests...');

    // Test JavaScript execution time
    const jsStartTime = performance.now();
    
    // Simulate JavaScript-heavy operations
    for (let i = 0; i < 10000; i++) {
      // Small operation to test execution speed
      Math.random();
    }
    
    const jsEndTime = performance.now();
    const jsExecutionTime = jsEndTime - jsStartTime;
    
    console.log(`⚡ JavaScript execution test: ${jsExecutionTime.toFixed(2)}ms`);

    // Test memory usage (if available)
    if ('memory' in performance) {
      const memInfo = (performance as any).memory;
      console.log(`🧠 Memory usage: ${(memInfo.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
    }

    // Test Web Vitals
    this.measureWebVitals();
  }

  // Measure Core Web Vitals
  private measureWebVitals(): void {
    if (typeof window === 'undefined') return;

    // First Contentful Paint
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              console.log(`🎨 FCP: ${entry.startTime.toFixed(2)}ms`);
            }
            break;
          case 'largest-contentful-paint':
            console.log(`📐 LCP: ${entry.startTime.toFixed(2)}ms`);
            break;
          case 'navigation':
            const navEntry = entry as PerformanceNavigationTiming;
            const loadTime = navEntry.loadEventEnd - navEntry.fetchStart;
            console.log(`📄 Page Load: ${loadTime.toFixed(2)}ms`);
            break;
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'navigation'] });
    } catch (e) {
      console.warn('Some Web Vitals metrics not supported');
    }
  }

  // Get performance report
  getPerformanceReport(): object {
    const report: any = {
      timestamp: new Date().toISOString(),
      metrics: {},
      recommendations: []
    };

    // Process stored metrics
    this.metrics.forEach((times, componentName) => {
      const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
      report.metrics[componentName] = {
        averageRenderTime: parseFloat(avgTime.toFixed(2)),
        renderCount: times.length,
        slowRenders: times.filter(t => t > 16).length
      };

      // Add recommendations
      if (avgTime > 16) {
        report.recommendations.push(`Consider optimizing ${componentName} - average render time is ${avgTime.toFixed(2)}ms`);
      }
    });

    return report;
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
    console.log('📊 Performance metrics cleared');
  }
}

// Export singleton instance
export const performanceTester = PerformanceTester.getInstance();

// Quick performance check function
export const quickPerformanceCheck = () => {
  if (typeof window === 'undefined') return;
  
  console.log('🚀 Quick Performance Check:');
  
  // Check if optimizations are working
  const checks = [
    {
      name: 'Device Detection',
      test: () => typeof window.navigator.hardwareConcurrency !== 'undefined',
      message: 'Hardware concurrency detection available'
    },
    {
      name: 'Intersection Observer',
      test: () => 'IntersectionObserver' in window,
      message: 'Intersection Observer supported for lazy loading'
    },
    {
      name: 'Performance Observer',
      test: () => 'PerformanceObserver' in window,
      message: 'Performance monitoring available'
    },
    {
      name: 'Request Idle Callback',
      test: () => 'requestIdleCallback' in window,
      message: 'Idle callback available for deferred loading'
    }
  ];

  checks.forEach(check => {
    const passed = check.test();
    console.log(`${passed ? '✅' : '❌'} ${check.name}: ${check.message}`);
  });
}; 