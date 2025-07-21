import { motion } from 'framer-motion';

const skills = [
  'Ruby/Rails',
  'JavaScript/TypeScript',
  'React/Next.js',
  'Node.js',
  'AWS/Cloud',
  'PHP/Laravel',
  'Python/Django',
  'DevOps/CI/CD',
  'Magento',
];

const About = () => {
  return (
    <section id="about" className="w-full flex justify-center bg-[#fafbfc] py-6 sm:py-12 px-4">
      <div className="w-full max-w-5xl flex flex-col gap-4 sm:gap-8">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          {/* Left: Overview */}
          <motion.div 
            className="flex-1 flex flex-col gap-6 sm:gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Professional Overview</h3>
              <p className="text-sm sm:text-base text-neutral-600 mb-4">
                As a Full Stack Software Engineer with extensive experience in enterprise software development, I specialize in architecting and implementing scalable web applications. My expertise spans across modern technology stacks, with a particular focus on cloud-native solutions and distributed systems.
              </p>
              <p className="text-sm sm:text-base text-neutral-600 mb-4">
                I excel in developing robust backend systems and crafting responsive and intuitive user interfaces. My experience with cloud platforms enables me to design and deploy highly available and scalable applications.
              </p>
              <p className="text-sm sm:text-base text-neutral-600 mb-4">
                My approach to software development is rooted in engineering best practices, including test-driven development, continuous integration/deployment, and agile methodologies. I am passionate about knowledge sharing and have successfully mentored junior developers.
              </p>
            </div>
          </motion.div>
          {/* Right: Skills */}
          <motion.div 
            className="flex-1 flex flex-col gap-6 sm:gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 sm:px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-xs sm:text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Core Competencies</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-neutral-600 text-xs sm:text-sm">
                <li>Software Architecture & System Design</li>
                <li>Test-Driven Development (TDD)</li>
                <li>Cloud Architecture & DevOps</li>
                <li>Agile & Scrum Methodologies</li>
                <li>API Design & Microservices</li>
                <li>Performance Optimization</li>
                <li>Database Design & Optimization</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 