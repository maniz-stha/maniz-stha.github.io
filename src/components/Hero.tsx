import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-[#fafbfc] dark:bg-slate-900 relative overflow-hidden transition-colors duration-200">
      {/* Vertical Text and Year */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 pl-2 sm:pl-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="vertical-text hidden sm:block">Software Developer</span>
        <span className="vertical-text hidden sm:block">2025</span>
      </motion.div>
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-6 sm:py-12 gap-6 lg:gap-10">
        {/* Left: Greeting, subtitle, stats */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-center max-w-2xl order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="hero-greeting mb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hello
          </motion.h1>
          <motion.div
            className="hero-subtitle mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            — It's Manish Shrestha, a Full Stack Software Developer
          </motion.div>
          <motion.div
            className="text-sm sm:text-base text-neutral-500 dark:text-gray-400 mb-8 sm:mb-10 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A seasoned Software Engineer with over a decade of expertise in full-stack development. Specializing in building scalable web applications and enterprise solutions with a focus on modern technologies and cloud platforms.
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="#contact"
              className="text-sm sm:text-base font-medium tracking-wide px-4 sm:px-6 py-2 sm:py-3 border-2 border-neutral-300 dark:border-slate-600 text-neutral-700 dark:text-gray-300 rounded-full hover:bg-neutral-50 dark:hover:bg-slate-800 hover:border-neutral-400 dark:hover:border-slate-500 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/maniz-stha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-medium tracking-wide px-4 sm:px-6 py-2 sm:py-3 border-2 border-neutral-300 dark:border-slate-600 text-neutral-700 dark:text-gray-300 rounded-full hover:bg-neutral-50 dark:hover:bg-slate-800 hover:border-neutral-400 dark:hover:border-slate-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maniz-stha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-medium tracking-wide px-4 sm:px-6 py-2 sm:py-3 border-2 border-neutral-300 dark:border-slate-600 text-neutral-700 dark:text-gray-300 rounded-full hover:bg-neutral-50 dark:hover:bg-slate-800 hover:border-neutral-400 dark:hover:border-slate-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/manish_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-medium tracking-wide px-4 sm:px-6 py-2 sm:py-3 border-2 border-neutral-300 dark:border-slate-600 text-neutral-700 dark:text-gray-300 rounded-full hover:bg-neutral-50 dark:hover:bg-slate-800 hover:border-neutral-400 dark:hover:border-slate-500 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        {/* Right: Large profile image */}
        <motion.div
          className="flex-1 flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="/1648823380064.jpeg"
            alt="Manish Shrestha - Profile"
            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-2xl object-cover shadow-xl border border-neutral-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200"
            style={{ maxWidth: '90vw' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 