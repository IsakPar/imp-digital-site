# IMP Digital - Contact Forms Setup Guide

This guide will help you set up the Resend API integration to make all contact forms functional.

## 🚀 Quick Setup

### 1. Get Your Resend API Key

1. Go to [Resend.com](https://resend.com) and create an account
2. Navigate to your dashboard and create a new API key
3. Copy the API key (it starts with `re_`)

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory (`imp-digital-site/.env.local`) with the following content:

```env
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
FROM_EMAIL=hello@impdigital.com
TO_EMAIL=hello@impdigital.com

# Site Configuration
SITE_URL=http://localhost:3001
```

**Important Notes:**
- Replace `your_resend_api_key_here` with your actual Resend API key
- Replace `hello@impdigital.com` with your actual domain email
- For the `FROM_EMAIL` to work, you need to verify your domain with Resend

### 3. Domain Verification (Required for Production)

For production use, you need to verify your domain with Resend:

1. In your Resend dashboard, go to "Domains"
2. Add your domain (e.g., `impdigital.com`)
3. Follow the DNS verification steps provided by Resend
4. Once verified, you can send emails from any address at your domain

### 4. Testing with Development

For testing during development, you can use Resend's sandbox mode:
- Use `onboarding@resend.dev` as the `FROM_EMAIL`
- This will work without domain verification
- Emails will only be sent to verified email addresses in your account

## 📧 What's Been Implemented

### 1. Main Contact Form (`/api/contact`)
- Located in the contact section of the homepage
- Collects: name, email, company, project type, message
- Sends notification email to your team
- Sends confirmation email to the customer
- Full form validation and error handling

### 2. Newsletter Subscription (`/api/newsletter`)
- Located in the footer
- Collects: email address
- Sends notification to your team
- Sends welcome email to subscriber
- Success/error state handling

### 3. CTA Section Contact Buttons
- "Contact Us" buttons link to the main contact form
- Floating action button links to contact form
- Direct contact methods (phone, email) work immediately

## 🎨 Features Included

### Email Templates
- **Professional HTML templates** with your brand colors
- **Responsive design** that works on all email clients
- **Automatic reply-to** setup for contact form emails
- **Branded confirmation emails** for better user experience

### Form Validation
- **Client-side validation** for immediate feedback
- **Server-side validation** for security
- **Email format validation**
- **Required field checking**

### User Experience
- **Loading states** during form submission
- **Success animations** after successful submission
- **Error handling** with user-friendly messages
- **Form reset** after successful submission

### Security
- **Input sanitization**
- **Rate limiting** (can be added)
- **CSRF protection** via Next.js
- **Environment variable protection**

## 🔧 Customization

### Email Templates
You can customize the email templates in:
- `/src/app/api/contact/route.ts` - Contact form emails
- `/src/app/api/newsletter/route.ts` - Newsletter emails

### Styling
All forms use your existing design system:
- Matcha green brand colors
- Consistent animations with Framer Motion
- Responsive design for all devices

### Form Fields
To add more fields to the contact form:
1. Update the `FormData` interface in `ContactFormSection.tsx`
2. Add the new input component
3. Update the API route to handle the new field
4. Update the email template

## 📱 Mobile Optimization

All forms are fully optimized for mobile:
- Touch-friendly input fields
- Proper keyboard types for email inputs
- Responsive button sizing
- Smooth animations that work on mobile

## 🚨 Production Checklist

Before going live:

- [ ] Set up domain verification in Resend
- [ ] Update `FROM_EMAIL` to use your verified domain
- [ ] Update `TO_EMAIL` to your actual business email
- [ ] Update `SITE_URL` to your production URL
- [ ] Test all forms thoroughly
- [ ] Set up email monitoring/analytics in Resend dashboard

## 🐛 Troubleshooting

### Common Issues:

1. **"Failed to send email" error**
   - Check your Resend API key is correct
   - Verify your domain if using a custom FROM_EMAIL
   - Check the server console for detailed error messages

2. **Forms not submitting**
   - Ensure environment variables are set correctly
   - Check the browser console for JavaScript errors
   - Verify the API routes are accessible

3. **Emails not being received**
   - Check spam folders
   - Verify the TO_EMAIL address is correct
   - Check Resend dashboard for delivery status

### Getting Help:
- Check Resend documentation: https://resend.com/docs
- Review server logs in your terminal
- Test API endpoints directly using tools like Postman

## 💡 Next Steps

Consider adding:
- **Email analytics** tracking
- **CRM integration** (HubSpot, Salesforce)
- **Slack notifications** for new form submissions
- **Auto-responders** with more detailed information
- **Form spam protection** (reCAPTCHA)

---

Your contact forms are now fully functional and ready to handle customer inquiries! 🎉 