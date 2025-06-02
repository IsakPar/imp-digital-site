import { NextResponse } from 'next/server';

export async function GET() {
  const checks = {
    resendApiKey: !!process.env.RESEND_API_KEY,
    fromEmail: !!process.env.FROM_EMAIL,
    toEmail: !!process.env.TO_EMAIL,
    siteUrl: !!process.env.SITE_URL,
  };

  const allConfigured = Object.values(checks).every(Boolean);

  return NextResponse.json({
    status: allConfigured ? 'healthy' : 'missing_config',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    config: {
      resendApiKey: checks.resendApiKey ? 'configured' : 'missing',
      fromEmail: checks.fromEmail ? process.env.FROM_EMAIL : 'missing',
      toEmail: checks.toEmail ? process.env.TO_EMAIL : 'missing',
      siteUrl: checks.siteUrl ? process.env.SITE_URL : 'missing',
    },
    forms: {
      contact: '/api/contact',
      newsletter: '/api/newsletter',
    }
  }, {
    status: allConfigured ? 200 : 500
  });
} 