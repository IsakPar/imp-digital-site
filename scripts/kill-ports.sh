#!/bin/bash

echo "🔄 Cleaning up development ports..."

# Kill processes on common Next.js ports
echo "🛑 Killing processes on ports 3000, 3001, 3002..."

# Method 1: Kill by port
lsof -ti:3000 | xargs -r kill -9 2>/dev/null || true
lsof -ti:3001 | xargs -r kill -9 2>/dev/null || true
lsof -ti:3002 | xargs -r kill -9 2>/dev/null || true

# Method 2: Kill Next.js processes by name
echo "🛑 Killing Next.js development processes..."
pkill -f "next dev" 2>/dev/null || true
pkill -f "next start" 2>/dev/null || true
pkill -f "next-server" 2>/dev/null || true

# Method 3: Kill node processes that might be hanging
echo "🛑 Cleaning up any hanging Node.js processes..."
pkill -f "node.*next" 2>/dev/null || true

# Clean up .next directory if it exists
if [ -d ".next" ]; then
    echo "🧹 Cleaning .next directory..."
    rm -rf .next
fi

# Clean up any lock files
if [ -f ".next/trace" ]; then
    echo "🧹 Removing trace file..."
    rm -f .next/trace
fi

echo "✅ Port cleanup complete!"
echo "📋 Available ports:"
echo "   - Port 3000: $(lsof -ti:3000 && echo 'OCCUPIED' || echo 'FREE')"
echo "   - Port 3001: $(lsof -ti:3001 && echo 'OCCUPIED' || echo 'FREE')"
echo "   - Port 3002: $(lsof -ti:3002 && echo 'OCCUPIED' || echo 'FREE')"

echo "🚀 Ready to start development server!" 