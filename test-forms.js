// Simple test script to verify API endpoints
// Run with: node test-forms.js

const BASE_URL = 'http://localhost:3001';

async function testContactForm() {
  console.log('🧪 Testing Contact Form API...');
  
  try {
    const response = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        message: 'This is a test message',
        projectType: 'Web Development'
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Contact form test passed:', result.message);
    } else {
      console.log('❌ Contact form test failed:', result.error);
    }
  } catch (error) {
    console.log('❌ Contact form test error:', error.message);
  }
}

async function testNewsletterForm() {
  console.log('🧪 Testing Newsletter API...');
  
  try {
    const response = await fetch(`${BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'newsletter-test@example.com'
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Newsletter test passed:', result.message);
    } else {
      console.log('❌ Newsletter test failed:', result.error);
    }
  } catch (error) {
    console.log('❌ Newsletter test error:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting API tests...\n');
  
  await testContactForm();
  console.log('');
  await testNewsletterForm();
  
  console.log('\n📝 Note: These tests will only work if:');
  console.log('1. Your development server is running (pnpm dev)');
  console.log('2. Your .env.local file is properly configured');
  console.log('3. Your Resend API key is valid');
}

// Run tests
runTests(); 