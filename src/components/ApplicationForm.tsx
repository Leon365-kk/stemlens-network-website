import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, type EmailTemplateParams } from '../config/emailjs';

interface ApplicationFormProps {
  title: string;
  subtitle?: string;
  formType: 'join' | 'apply' | 'contact' | 'mentorship' | 'scholarship' | 'leadership';
  onSubmit?: (data: FormData) => void;
}

export default function ApplicationForm({ title, subtitle, formType, onSubmit }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    institution: '',
    interests: '',
    experience: '',
    motivation: '',
    availability: '',
    program: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare email data matching EmailJS template variables
      const emailData: EmailTemplateParams = {
        form_type: formType,
        title: title,
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone || '',
        age: formData.age || '',
        education: formData.education || '',
        institution: formData.institution || '',
        interests: formData.interests || '',
        experience: formData.experience || '',
        motivation: formData.motivation || '',
        availability: formData.availability || '',
        program: formData.program || '',
        message: formData.message || '',
        to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailData
      );
      
      console.log('Email sent successfully:', response);
      
      if (onSubmit) {
        onSubmit(new FormData(e.target as HTMLFormElement));
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send application. Please try again or contact us directly at hello@stemlens.org');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormFields = () => {
    const commonFields = (
      <>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
            />
          </div>
        </div>
      </>
    );

    switch (formType) {
      case 'join':
        return (
          <>
            {commonFields}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="10"
                  max="30"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education Level *</label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
                >
                  <option value="">Select Education Level</option>
                  <option value="primary">Primary School</option>
                  <option value="secondary">Secondary School</option>
                  <option value="high-school">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">School/Institution *</label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest *</label>
              <textarea
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Tell us about your STEM interests (e.g., robotics, coding, AI, engineering, etc.)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join STEMlens? *</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Share your motivation for joining our community"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>
          </>
        );

      case 'mentorship':
        return (
          <>
            {commonFields}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Professional Background *</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell us about your professional experience and expertise"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Mentorship *</label>
              <textarea
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="What areas can you mentor in? (e.g., software development, engineering, business, etc.)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              >
                <option value="">Select Availability</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
                <option value="project-based">Project-based</option>
              </select>
            </div>
          </>
        );

      case 'scholarship':
        return (
          <>
            {commonFields}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education Level *</label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
                >
                  <option value="">Select Education Level</option>
                  <option value="secondary">Secondary School</option>
                  <option value="high-school">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Scholarship Program *</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              >
                <option value="">Select Program</option>
                <option value="stem-excellence">STEM Excellence Scholarship</option>
                <option value="innovation">Innovation Scholarship</option>
                <option value="leadership">Leadership Scholarship</option>
                <option value="community">Community Impact Scholarship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Academic Achievements *</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Tell us about your academic achievements and extracurricular activities"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Financial Need Statement *</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Please describe your financial situation and why you need this scholarship"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>
          </>
        );

      case 'leadership':
        return (
          <>
            {commonFields}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Leadership Experience *</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Describe your leadership experience and roles you've held"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Leadership Goals *</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="What are your leadership goals and how can STEMlens help you achieve them?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Opportunity of Interest *</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              >
                <option value="">Select Opportunity</option>
                <option value="team-lead">Team Lead</option>
                <option value="project-manager">Project Manager</option>
                <option value="mentor">Mentor</option>
                <option value="ambassador">STEMlens Ambassador</option>
                <option value="chapter-lead">Chapter Lead</option>
              </select>
            </div>
          </>
        );

      default:
        return (
          <>
            {commonFields}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="How can we help you?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB3134] focus:border-transparent"
              />
            </div>
          </>
        );
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#0B1E3B] mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-6">Thank you for your interest. We'll be in touch with you soon.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 bg-[#EB3134] text-white rounded-lg hover:bg-[#D62828] transition-colors"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0B1E3B] mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {getFormFields()}

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-[#EB3134] to-[#D62828] text-white font-semibold rounded-lg hover:from-[#D62828] hover:to-[#B91D1D] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
