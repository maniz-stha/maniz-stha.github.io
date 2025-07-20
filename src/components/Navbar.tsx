import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full flex items-center justify-between py-4 sm:py-6 px-4 sm:px-8 bg-white relative">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-bold tracking-tight text-black hover:opacity-80 focus:outline-none"
          aria-label="Go to Home"
          style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}
          onClick={closeMobileMenu}
        >
          MS
        </a>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-neutral-500 hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block text-sm font-medium tracking-wide px-5 py-2 border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors"
          style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}
        >
          Book A Call ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-neutral-600 hover:text-black focus:outline-none z-50"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <h2 className="text-xl font-bold text-black">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-neutral-600 hover:text-black focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 flex flex-col py-6">
                <div className="flex flex-col">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="nav-link text-neutral-500 hover:text-black px-6 py-4 border-b border-neutral-100 last:border-b-0 text-lg"
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
                
                {/* Drawer CTA */}
                <div className="mt-auto px-6 pb-6">
                  <motion.a
                    href="#contact"
                    className="block w-full text-center text-sm font-medium tracking-wide px-6 py-3 border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors"
                    style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Book A Call ↗
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 