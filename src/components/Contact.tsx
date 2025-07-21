import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [showDialog, setShowDialog] = useState(false);

  // Handle escape key to close dialog
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showDialog) {
        setShowDialog(false);
      }
    };

    if (showDialog) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showDialog]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: 'Processing...' });
    
    // Simulate a brief delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clear the form
    setFormData({ name: '', email: '', message: '' });
    
    // Show the dialog
    setShowDialog(true);
    setStatus({ submitting: false, submitted: false, error: false, message: '' });
  };

  return (
    <section id="contact" className="w-full flex justify-center bg-[#fafbfc] py-6 sm:py-12 px-4">
      <div className="w-full max-w-5xl flex flex-col gap-4 sm:gap-8">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
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

      {/* Creative Dialog */}
      <AnimatePresence>
        {showDialog && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowDialog(false)}
            />
            
            {/* Dialog */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative overflow-hidden"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                delay: 0.1
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full -translate-y-10 translate-x-10 opacity-20" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full translate-y-8 -translate-x-8 opacity-20" />
              
              {/* Close button */}
              <button
                type="button"
                onClick={() => setShowDialog(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-white hover:border hover:border-neutral-200 transition-all duration-200 z-20"
                style={{ zIndex: 9999 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 200 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-xl font-bold text-center text-neutral-800 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Thanks for reaching out! 🚀
                </motion.h3>

                {/* Message */}
                <motion.p
                  className="text-neutral-600 text-center leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  The contact form API is currently being set up and will be ready soon. For now, please reach out directly via email or LinkedIn.
                </motion.p>

                {/* Action buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="mailto:me@shresthamanis.com.np"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Send Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maniz-stha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-neutral-300 text-neutral-700 font-semibold py-3 px-4 rounded-lg text-center hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200"
                  >
                    LinkedIn
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact; 