import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

export async function POST(request: NextRequest) {
  try {
    // Check if API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key-for-build') {
      return NextResponse.json(
        { error: 'Contact service temporarily unavailable' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, company, message, projectType } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'hello@impdigital.com',
      to: [process.env.TO_EMAIL || 'hello@impdigital.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2D3748; border-bottom: 2px solid #D9E5C1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4A5568; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
          </div>
          
          <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4A5568; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #E6FFFA; border-left: 4px solid #38B2AC; border-radius: 4px;">
            <p style="margin: 0; color: #234E52;">
              <strong>Reply directly to this email to respond to ${name}</strong>
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'hello@impdigital.com',
      to: [email],
      subject: 'Thank you for contacting IMP Digital',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2D3748; border-bottom: 2px solid #D9E5C1; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting IMP Digital. We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4A5568; margin-top: 0;">Your Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out our <a href="${process.env.SITE_URL || 'http://localhost:3001'}#services" style="color: #B8C9A3;">services</a></li>
            <li>View our <a href="${process.env.SITE_URL || 'http://localhost:3001'}#work" style="color: #B8C9A3;">previous work</a></li>
            <li>Connect with us on <a href="#" style="color: #B8C9A3;">LinkedIn</a></li>
          </ul>
          
          <p>Best regards,<br>
          The IMP Digital Team</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #EDF2F7; border-radius: 4px; font-size: 12px; color: #718096;">
            <p style="margin: 0;">
              This is an automated confirmation email. Please don't reply to this message.
              If you need immediate assistance, contact us at hello@impdigital.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 