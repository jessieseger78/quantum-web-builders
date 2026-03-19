import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    budget_range: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.service_type) {
      newErrors.service_type = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_type: '',
        budget_range: '',
        message: ''
      });
      setErrors({});

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-navy pt-20">
      <section className="py-20 bg-gradient-to-b from-navy to-[#0d2d5e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral">
              Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-cyan/20 border border-cyan/50 rounded-lg flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-cyan mb-1">Message sent successfully!</div>
                      <div className="text-sm text-neutral">
                        Thanks for reaching out. We'll get back to you within 24 hours.
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-red-400 mb-1">Something went wrong</div>
                      <div className="text-sm text-neutral">
                        Please try again or email us directly at info@quantumwebbuilders.com
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.name ? 'border-red-500' : 'border-cyan/20'
                      } rounded-lg text-white placeholder-neutral/50 focus:outline-none focus:border-cyan transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.email ? 'border-red-500' : 'border-cyan/20'
                      } rounded-lg text-white placeholder-neutral/50 focus:outline-none focus:border-cyan transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service_type" className="block text-white font-medium mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service_type"
                      name="service_type"
                      value={formData.service_type}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.service_type ? 'border-red-500' : 'border-cyan/20'
                      } rounded-lg text-white focus:outline-none focus:border-cyan transition-colors`}
                    >
                      <option value="" className="bg-navy">Select a service</option>
                      <option value="landing" className="bg-navy">Landing Page</option>
                      <option value="ecommerce" className="bg-navy">E-Commerce</option>
                      <option value="portfolio" className="bg-navy">Portfolio Site</option>
                      <option value="seo" className="bg-navy">SEO & Marketing</option>
                      <option value="other" className="bg-navy">Other</option>
                    </select>
                    {errors.service_type && (
                      <p className="mt-1 text-sm text-red-400">{errors.service_type}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget_range" className="block text-white font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget_range"
                      name="budget_range"
                      value={formData.budget_range}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-cyan/20 rounded-lg text-white focus:outline-none focus:border-cyan transition-colors"
                    >
                      <option value="" className="bg-navy">Select your budget</option>
                      <option value="<$5k" className="bg-navy">Less than $5,000</option>
                      <option value="$5k-$10k" className="bg-navy">$5,000 - $10,000</option>
                      <option value="$10k-$25k" className="bg-navy">$10,000 - $25,000</option>
                      <option value="$25k+" className="bg-navy">$25,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.message ? 'border-red-500' : 'border-cyan/20'
                      } rounded-lg text-white placeholder-neutral/50 focus:outline-none focus:border-cyan transition-colors resize-none`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-cyan text-navy font-bold rounded-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-cyan to-cyan p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Email</div>
                      <a
                        href="mailto:info@quantumwebbuilders.com"
                        className="text-cyan hover:text-cyan transition-colors"
                      >
                        info@quantumwebbuilders.com
                      </a>
                      <p className="text-neutral text-sm mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-cyan to-cyan p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Location</div>
                      <p className="text-neutral">
                        Lakeland, FL 33811
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-neutral">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-cyan">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-cyan">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-neutral/50">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-2xl overflow-hidden h-[300px]">
                <a
                  href="https://www.google.com/maps/place/Lakeland,+FL+33811/@28.0394763,-81.9985566,13z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-navy/40 flex items-center justify-center group-hover:bg-cyan/30 transition-colors">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-cyan mx-auto mb-4" />
                      <div className="text-white font-bold text-xl mb-2">Lakeland, FL 33811</div>
                      <div className="text-neutral text-sm">Click to view on Google Maps</div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
