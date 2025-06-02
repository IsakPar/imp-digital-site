#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting bundle analysis...');

// Build the application
console.log('📦 Building application...');
try {
  execSync('pnpm build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Analyze bundle sizes
console.log('📊 Analyzing bundle sizes...');

const nextDir = path.join(process.cwd(), '.next');
const buildManifest = path.join(nextDir, 'build-manifest.json');

if (fs.existsSync(buildManifest)) {
  const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));
  
  console.log('\n📈 Bundle Analysis Results:');
  console.log('=' .repeat(50));
  
  // Analyze pages
  if (manifest.pages) {
    Object.entries(manifest.pages).forEach(([page, files]) => {
      console.log(`\n📄 Page: ${page}`);
      files.forEach(file => {
        const filePath = path.join(nextDir, 'static', 'chunks', file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          const sizeKB = (stats.size / 1024).toFixed(2);
          console.log(`  - ${file}: ${sizeKB} KB`);
        }
      });
    });
  }
  
  // Analyze chunks
  const chunksDir = path.join(nextDir, 'static', 'chunks');
  if (fs.existsSync(chunksDir)) {
    console.log('\n🧩 Chunk Analysis:');
    const chunks = fs.readdirSync(chunksDir)
      .filter(file => file.endsWith('.js'))
      .map(file => {
        const filePath = path.join(chunksDir, file);
        const stats = fs.statSync(filePath);
        return {
          name: file,
          size: stats.size,
          sizeKB: (stats.size / 1024).toFixed(2)
        };
      })
      .sort((a, b) => b.size - a.size)
      .slice(0, 10); // Top 10 largest chunks
    
    chunks.forEach(chunk => {
      console.log(`  - ${chunk.name}: ${chunk.sizeKB} KB`);
    });
  }
  
  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('=' .repeat(50));
  
  const totalSize = chunks.reduce((sum, chunk) => sum + chunk.size, 0);
  const totalSizeKB = (totalSize / 1024).toFixed(2);
  
  console.log(`📊 Total JS bundle size: ${totalSizeKB} KB`);
  
  if (totalSize > 500000) { // 500KB
    console.log('⚠️  Large bundle detected! Consider:');
    console.log('   - Code splitting with dynamic imports');
    console.log('   - Remove unused dependencies');
    console.log('   - Optimize heavy libraries (framer-motion, three.js)');
  }
  
  if (totalSize > 1000000) { // 1MB
    console.log('🚨 Very large bundle! Immediate action needed:');
    console.log('   - Implement aggressive lazy loading');
    console.log('   - Consider lighter animation alternatives');
    console.log('   - Review and remove unnecessary packages');
  }
  
  // Check for heavy packages
  const heavyPackages = [
    'framer-motion',
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    'gsap'
  ];
  
  console.log('\n📦 Heavy Package Usage:');
  heavyPackages.forEach(pkg => {
    try {
      const packagePath = path.join(process.cwd(), 'node_modules', pkg, 'package.json');
      if (fs.existsSync(packagePath)) {
        console.log(`   ✅ ${pkg} - Consider lazy loading or alternatives`);
      }
    } catch (error) {
      // Package not found
    }
  });
  
} else {
  console.log('❌ Build manifest not found. Make sure the build completed successfully.');
}

// Check for unused dependencies
console.log('\n🔍 Checking for potentially unused dependencies...');
try {
  execSync('npx depcheck --json > depcheck-results.json', { stdio: 'pipe' });
  
  if (fs.existsSync('depcheck-results.json')) {
    const depcheck = JSON.parse(fs.readFileSync('depcheck-results.json', 'utf8'));
    
    if (depcheck.dependencies && depcheck.dependencies.length > 0) {
      console.log('📦 Potentially unused dependencies:');
      depcheck.dependencies.forEach(dep => {
        console.log(`   - ${dep}`);
      });
    } else {
      console.log('✅ No unused dependencies detected');
    }
    
    // Clean up
    fs.unlinkSync('depcheck-results.json');
  }
} catch (error) {
  console.log('⚠️  Could not check for unused dependencies (depcheck not available)');
}

console.log('\n✅ Bundle analysis complete!');
console.log('\n💡 Next steps:');
console.log('   1. Review large chunks and optimize');
console.log('   2. Implement lazy loading for non-critical components');
console.log('   3. Consider lighter alternatives for heavy packages');
console.log('   4. Run lighthouse audit: pnpm lighthouse'); 