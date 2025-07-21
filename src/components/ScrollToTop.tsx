import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 z-50 group overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, y: 20, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20, rotate: 180 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          aria-label="Scroll to top"
          whileHover={{ 
            scale: 1.1, 
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Main icon - Teleporter/Elevator */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Teleporter rings */}
            <motion.div
              className="absolute w-8 h-8 border-2 border-white rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-6 h-6 border-2 border-white rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center arrow */}
            <motion.div
              className="relative z-10"
              animate={{ 
                y: [0, -3, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-6 h-6 text-white drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.div>
            
            {/* Energy particles */}
            <motion.div
              className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full"
              animate={{ 
                y: [0, -8, 0],
                x: [0, -4, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-300 rounded-full"
              animate={{ 
                y: [0, -8, 0],
                x: [0, 4, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-300 rounded-full"
              animate={{ 
                y: [0, -6, 0],
                x: [0, -3, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-300 rounded-full"
              animate={{ 
                y: [0, -6, 0],
                x: [0, 3, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 1.2 }}
            />
          </div>
          
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Pulse ring on hover */}
          <motion.div
            className="absolute inset-0 border-2 border-white/30 rounded-2xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 