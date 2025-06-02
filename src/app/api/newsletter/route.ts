import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

export async function POST(request: NextRequest) {
  try {
    // Check if API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key-for-build') {
      return NextResponse.json(
        { error: 'Newsletter service temporarily unavailable' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { email } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send notification email to team
    const { error: notificationError } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'hello@impdigital.com',
      to: [process.env.TO_EMAIL || 'hello@impdigital.com'],
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2D3748; border-bottom: 2px solid #D9E5C1; padding-bottom: 10px;">
            New Newsletter Subscription
          </h2>
          
          <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #E6FFFA; border-left: 4px solid #38B2AC; border-radius: 4px;">
            <p style="margin: 0; color: #234E52;">
              <strong>Action Required:</strong> Add this email to your newsletter list
            </p>
          </div>
        </div>
      `,
    });

    if (notificationError) {
      console.error('Newsletter notification error:', notificationError);
    }

    // Send welcome email to subscriber
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'hello@impdigital.com',
      to: [email],
      subject: 'Welcome to IMP Digital Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2D3748; border-bottom: 2px solid #D9E5C1; padding-bottom: 10px;">
            Welcome to IMP Digital!
          </h2>
          
          <p>Thank you for subscribing to our newsletter!</p>
          
          <p>You'll now receive:</p>
          <ul style="color: #4A5568;">
            <li>Insights on digital transformation</li>
            <li>Development best practices</li>
            <li>Industry trends and updates</li>
            <li>Exclusive content and resources</li>
          </ul>
          
          <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4A5568; margin-top: 0;">Stay Connected</h3>
            <p>Follow us on our social channels for more updates:</p>
            <div style="margin: 15px 0;">
              <a href="#" style="color: #B8C9A3; text-decoration: none; margin-right: 15px;">LinkedIn</a>
              <a href="#" style="color: #B8C9A3; text-decoration: none; margin-right: 15px;">GitHub</a>
              <a href="#" style="color: #B8C9A3; text-decoration: none;">Twitter</a>
            </div>
          </div>
          
          <p>Best regards,<br>
          The IMP Digital Team</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #EDF2F7; border-radius: 4px; font-size: 12px; color: #718096;">
            <p style="margin: 0;">
              You can unsubscribe at any time by clicking the unsubscribe link in any of our emails.
              If you have any questions, contact us at hello@impdigital.com
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Newsletter welcome email error:', error);
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 