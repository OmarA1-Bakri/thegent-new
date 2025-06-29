"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setSubmitStatus('');
    try {
      const response = await fetch('/api/cosmic-database/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'contact-page'
        })
      });
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                  Let&apos;s <span className="text-[#D4AF37]">Connect</span>
                </h1>
                <p className="text-xl text-neutral-300 font-light leading-relaxed">
                  Ready to transform your business with cutting-edge FinTech and AI solutions? 
                  Let&apos;s discuss how we can drive measurable results together.
                </p>
              </div>
              {}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                    <Icon icon="mdi:email" className="text-[#D4AF37] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a href="mailto:omar@thegent.uk" className="text-neutral-300 hover:text-[#D4AF37] transition-colors">
                      omar@thegent.uk
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                    <Icon icon="mdi:linkedin" className="text-[#D4AF37] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">LinkedIn</h3>
                    <a 
                      href="https:
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-[#D4AF37] transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                    <Icon icon="mdi:calendar" className="text-[#D4AF37] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Schedule a Call</h3>
                    <a 
                      href="https:
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-[#D4AF37] transition-colors"
                    >
                      Book a meeting
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                    <Icon icon="mdi:map-marker" className="text-[#D4AF37] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <span className="text-neutral-300">London, United Kingdom</span>
                  </div>
                </motion.div>
              </div>
              {}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon icon="mdi:clock-fast" className="text-[#D4AF37] text-xl" />
                  <h3 className="text-white font-medium">Quick Response</h3>
                </div>
                <p className="text-neutral-300 text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent matters, 
                  feel free to connect with me directly on LinkedIn.
                </p>
              </motion.div>
            </motion.div>
            {}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-light text-white mb-6">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                  <div className="flex items-center gap-2 text-green-400">
                    <Icon icon="mdi:check-circle" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-300 text-sm mt-1">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                  <div className="flex items-center gap-2 text-red-400">
                    <Icon icon="mdi:alert-circle" />
                    <span className="font-medium">Something went wrong</span>
                  </div>
                  <p className="text-red-300 text-sm mt-1">
                    Please try again or contact me directly via email.
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2 text-sm">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2 text-sm">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                  >
                    <option value="" className="bg-neutral-800">Select a topic</option>
                    <option value="Business Development" className="bg-neutral-800">Business Development</option>
                    <option value="Strategic Partnership" className="bg-neutral-800">Strategic Partnership</option>
                    <option value="Consulting Services" className="bg-neutral-800">Consulting Services</option>
                    <option value="Speaking Opportunity" className="bg-neutral-800">Speaking Opportunity</option>
                    <option value="General Inquiry" className="bg-neutral-800">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 resize-none"
                    placeholder="Tell me about your project, goals, or how I can help..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#D4AF37] text-black font-medium rounded-xl hover:bg-[#D4AF37]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Icon icon="mdi:send" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-light text-white mb-4">
              Prefer a Different Approach?
            </h3>
            <p className="text-neutral-300 mb-8">
              Download my CV or explore my latest insights while you&apos;re here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Icon icon="mdi:download" className="mr-2" />
                Download CV
              </a>
              <a
                href="/insights"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Icon icon="mdi:book-open-variant" className="mr-2" />
                Read Insights
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}