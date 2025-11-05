import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { profile } from '../data/portfolioData';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-sketch-light">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sketch-dark mb-4 font-sketch transform rotate-1">
            {t.contact.title}
          </h2>
          <p className="text-sketch-gray max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="sketch-card bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-sketch-dark">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full sketch-input"
                  placeholder="Super Human"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-sketch-dark">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full sketch-input"
                  placeholder="your-email@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-sketch-dark">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full sketch-input dark:bg-gray-800 dark:text-white resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sketch-button bg-sketch-dark text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <span className="inline-block mr-2">✉️</span>
                    {t.contact.form.send}
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 border-2 border-green-300 text-green-700 rounded-sketch-sm">
                  ✅ {t.contact.form.success}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-100 border-2 border-red-300 text-red-700 rounded-sketch-sm">
                  ❌ {t.contact.form.error}
                </div>
              )}
            </form>
          </div>

          {/* Social Links & Info */}
          <div>
            <div className="sketch-card bg-white mb-6">
              <h3 className="text-lg font-bold mb-4 text-sketch-dark">
                Connect With Me
              </h3>
              
              <div className="space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${profile.social.email}`}
                  className="flex items-center space-x-3 hover:text-sketch-gray transition-colors"
                >
                  <span className="text-2xl">📧</span>
                  <span className="text-sm">{profile.social.email}</span>
                </a>

                {/* GitHub */}
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-sketch-gray transition-colors"
                >
                  <span className="text-2xl">💻</span>
                  <span className="text-sm">{t.contact.social.github}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-sketch-gray transition-colors"
                >
                  <span className="text-2xl">💼</span>
                  <span className="text-sm">{t.contact.social.linkedin}</span>
                </a>               
              </div>
            </div>

            {/* Fun Sketch Note */}
            <div className="relative">
              <div 
                className="bg-yellow-400 p-4 transform rotate-2 shadow-sketch"
                style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
              >
                <p className="font-sketch text-sm text-sketch-dark">
                  "Let's build something amazing together! 🚀"
                </p>
              </div>
              <div className="absolute -top-2 -right-2">
                <span className="text-3xl">📌</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
