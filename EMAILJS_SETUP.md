# EmailJS Setup Guide

This guide will help you integrate EmailJS with your STEMlens website forms to send submissions directly to your email account.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Or any other SMTP service
4. Connect your email account:
   - For Gmail: You'll need to enable 2FA and create an App Password
   - Follow the on-screen instructions to authenticate
5. Give your service a name (e.g., "STEMlens Gmail")
6. Save the service

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with the following variables:

### Template Content Example:

**Subject:** `New {{form_type}} Application - {{title}}`

**HTML Content:**
```html
<h3>New Application Received</h3>

<p><strong>Form Type:</strong> {{form_type}}</p>
<p><strong>Form Title:</strong> {{title}}</p>

<h4>Applicant Information:</h4>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{from_phone}}</p>

{{#age}}
<p><strong>Age:</strong> {{age}}</p>
{{/age}}

{{#education}}
<p><strong>Education:</strong> {{education}}</p>
{{/education}}

{{#institution}}
<p><strong>Institution:</strong> {{institution}}</p>
{{/institution}}

{{#interests}}
<p><strong>Interests:</strong> {{interests}}</p>
{{/interests}}

{{#experience}}
<p><strong>Experience:</strong> {{experience}}</p>
{{/experience}}

{{#motivation}}
<p><strong>Motivation:</strong> {{motivation}}</p>
{{/motivation}}

{{#availability}}
<p><strong>Availability:</strong> {{availability}}</p>
{{/availability}}

{{#program}}
<p><strong>Program:</strong> {{program}}</p>
{{/program}}

{{#message}}
<p><strong>Message:</strong> {{message}}</p>
{{/message}}

<hr>
<p><small>This email was sent from the STEMlens website application form.</small></p>
```

4. Save the template
5. Note down your **Service ID**, **Template ID**, and **Public Key**

## Step 4: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_service_id', // Replace with your service ID
  TEMPLATE_ID: 'template_your_template_id', // Replace with your template ID
  PUBLIC_KEY: 'your_public_key_here', // Replace with your public key
  RECIPIENT_EMAIL: 'hello@stemlens.org', // Your email address
};
```

## Step 5: Gmail Setup (if using Gmail)

If you're using Gmail, you'll need to:

1. **Enable 2-Factor Authentication** in your Google Account
2. **Create an App Password**:
   - Go to Google Account settings
   - Security -> 2-Step Verification -> App passwords
   - Generate a new app password for EmailJS
   - Use this app password when connecting the service in EmailJS

## Step 6: Test the Integration

1. Start your development server
2. Fill out any application form on your website
3. Submit the form
4. Check your email for the submission
5. Check browser console for any errors

## Step 7: Troubleshooting

### Common Issues:

**"EmailJS is not defined"**
- Make sure you installed the package: `npm install @emailjs/browser`
- Check that the import is correct: `import emailjs from '@emailjs/browser';`

**"Network Error"**
- Check your EmailJS service configuration
- Verify your email provider credentials
- Ensure you're using an App Password for Gmail

**"Template ID not found"**
- Double-check your template ID in the EmailJS dashboard
- Make sure the template is active

**"Missing required variables"**
- Ensure all required variables are included in your template
- Check that form field names match template variables

## Step 8: Production Deployment

Before deploying to production:

1. **Environment Variables** (recommended for security):
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update `src/config/emailjs.ts` to use environment variables:
   ```typescript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
     TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
     RECIPIENT_EMAIL: 'hello@stemlens.org',
   };
   ```

## Features Included

- **Form Type Detection**: Each form is categorized (join, mentorship, scholarship, etc.)
- **Comprehensive Data**: All form fields are included in the email
- **Error Handling**: Users see feedback if the email fails to send
- **Loading States**: Forms show loading indicators during submission
- **Success Feedback**: Confirmation message after successful submission

## Security Notes

- EmailJS is secure - your email credentials are never exposed to the client
- The Public Key only allows sending emails, not accessing your account
- Consider using environment variables in production for additional security

## Support

If you encounter issues:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. Review browser console for specific error messages
3. Verify all IDs and keys are correctly copied
4. Test with a simple template first, then add complexity

Your forms should now send submissions directly to your email!
