import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark transition-colors duration-200">
      <div className="w-full container mx-auto px-4 py-16 md:py-24">
        <div className="w-full text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-4">
              Hi, I'm <span className="text-primary-light dark:text-primary">Manish Stha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-text-light/80 dark:text-text-dark/80 mb-8">
              Full Stack Software Engineer
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-text-light/70 dark:text-text-dark/70 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A seasoned Software Engineer with over a decade of expertise in full-stack development, 
            specializing in building scalable web applications and enterprise solutions. 
            Proficient in modern technologies including Ruby, JavaScript, and cloud platforms, 
            with a proven track record of delivering high-performance applications and mentoring development teams.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="btn btn-primary px-8 py-3 rounded-lg text-lg"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="https://github.com/maniz-stha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light/70 dark:text-text-dark/70 hover:text-primary-light dark:hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/maniz-stha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light/70 dark:text-text-dark/70 hover:text-primary-light dark:hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 