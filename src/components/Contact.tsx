import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to send message');
      setStatus({ submitting: false, submitted: true, error: false, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, submitted: false, message: '' })), 5000);
    } catch {
      setStatus({ submitting: false, submitted: false, error: true, message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact" className="w-full flex justify-center bg-[#fafbfc] py-12 sm:py-20 px-4">
      <div className="w-full max-w-4xl flex flex-col gap-8 sm:gap-12">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          {/* Contact Details */}
          <motion.div 
            className="flex-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Contact Details</h3>
              <div className="flex flex-col gap-3 text-neutral-600 text-sm sm:text-base">
                <div>Chikanmugal, Kathmandu, Nepal</div>
                <div>
                  <a href="mailto:me@shresthamanis.com.np" className="underline hover:text-neutral-800">me@shresthamanis.com.np</a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/maniz-stha/" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-800">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-neutral-700 mb-1 text-sm sm:text-base">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-neutral-200 rounded px-3 sm:px-4 py-2 focus:outline-none focus:border-neutral-400 bg-white text-sm sm:text-base"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-neutral-700 mb-1 text-sm sm:text-base">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-neutral-200 rounded px-3 sm:px-4 py-2 focus:outline-none focus:border-neutral-400 bg-white text-sm sm:text-base"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-neutral-700 mb-1 text-sm sm:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-neutral-200 rounded px-3 sm:px-4 py-2 focus:outline-none focus:border-neutral-400 bg-white text-sm sm:text-base"
                  placeholder="How can I assist you?"
                  required
                ></textarea>
              </div>
              {status.message && (
                <div className={`text-sm ${status.error ? 'text-red-500' : 'text-green-500'}`}>{status.message}</div>
              )}
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full mt-2 px-4 sm:px-6 py-2 sm:py-3 rounded bg-neutral-800 text-white font-semibold hover:bg-neutral-900 transition-colors text-sm sm:text-base ${status.submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 