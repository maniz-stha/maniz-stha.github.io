import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: 'Sending...' });

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, message: '' }));
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="w-full section bg-surface-light dark:bg-surface-dark transition-colors duration-200">
      <div className="w-full container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light dark:text-text-dark mb-12">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-primary-light dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-text-light/70 dark:text-text-dark/70">Dhalko, Kathmandu, Nepal</p>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-primary-light dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:me@shresthamanis.com.np" className="text-text-light/70 dark:text-text-dark/70 hover:text-primary-light dark:hover:text-primary transition-colors">
                    me@shresthamanis.com.np
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-primary-light dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/maniz-stha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-light/70 dark:text-text-dark/70 hover:text-primary-light dark:hover:text-primary transition-colors"
                  >
                    Professional Profile on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-text-light dark:text-text-dark mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-light dark:text-text-dark mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-text-light dark:text-text-dark mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input"
                    placeholder="How can I assist you?"
                    required
                  ></textarea>
                </div>
                {status.message && (
                  <div className={`text-sm ${status.error ? 'text-red-500' : 'text-green-500'}`}>
                    {status.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full btn btn-primary ${status.submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 