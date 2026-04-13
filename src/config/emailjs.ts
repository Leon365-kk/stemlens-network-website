// EmailJS Configuration
// Use environment variables for security - see .env.example for required variables

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  RECIPIENT_EMAIL: 'hello@stemlens.org', // Your email address
};

// Email template variables mapping
export interface EmailTemplateParams extends Record<string, unknown> {
  form_type: string;
  title: string;
  from_name: string;
  from_email: string;
  from_phone?: string;
  age?: string;
  education?: string;
  institution?: string;
  interests?: string;
  experience?: string;
  motivation?: string;
  availability?: string;
  program?: string;
  message?: string;
  to_email: string;
  reply_to: string;
}

