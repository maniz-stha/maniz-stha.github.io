import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Ruby/Rails', level: 95 },
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'AWS/Cloud', level: 85 },
    { name: 'PHP/Laravel', level: 90 },
    { name: 'Python/Django', level: 85 },
    { name: 'DevOps/CI/CD', level: 80 },
  ];

  const achievements = [
    "Arctic Code Vault Contributor",
    "Pair Extraordinaire (x3)",
    "Pull Shark (x3)",
    "YOLO",
    "Quickdraw"
  ];

  const notableProjects = [
    {
      name: "recognize_image",
      description: "Face recognition tool for identifying and copying images of specific individuals from large image sets",
      tech: "Python"
    },
    {
      name: "react-rails-news",
      description: "HackerNews-like web application built with Ruby on Rails and React.js",
      tech: "JavaScript, Ruby"
    }
  ];

  return (
    <section id="about" className="w-full section bg-surface-light dark:bg-surface-dark transition-colors duration-200">
      <div className="w-full container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light dark:text-text-dark mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Professional Overview</h3>
              <p className="text-text-light/70 dark:text-text-dark/70 mb-6">
                As a Full Stack Software Engineer with extensive experience in enterprise software development, 
                I specialize in architecting and implementing scalable web applications. My expertise spans 
                across modern technology stacks, with a particular focus on cloud-native solutions and 
                distributed systems.
              </p>
              <p className="text-text-light/70 dark:text-text-dark/70 mb-6">
                I excel in developing robust backend systems using Ruby on Rails, Node.js, and Laravel, while 
                crafting responsive and intuitive user interfaces with React and Next.js. My experience with 
                cloud platforms like AWS and Firebase enables me to design and deploy highly available and 
                scalable applications.
              </p>
              <p className="text-text-light/70 dark:text-text-dark/70 mb-8">
                My approach to software development is rooted in engineering best practices, including 
                test-driven development, continuous integration/deployment, and agile methodologies. 
                I am passionate about knowledge sharing and have successfully mentored junior developers, 
                fostering a culture of technical excellence and innovation.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">GitHub Achievements</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {achievements.map((achievement, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-light/10 dark:bg-primary/10 text-primary-light dark:text-primary rounded-full text-sm"
                  >
                    {achievement}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Notable Projects</h3>
              <div className="space-y-4">
                {notableProjects.map((project, index) => (
                  <div key={index} className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary-light dark:text-primary">{project.name}</h4>
                    <p className="text-text-light/70 dark:text-text-dark/70 mb-2">{project.description}</p>
                    <p className="text-sm text-text-light/60 dark:text-text-dark/60">{project.tech}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Technical Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-text-light dark:text-text-dark">{skill.name}</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2.5">
                      <motion.div
                        className="bg-primary-light dark:bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Core Competencies</h3>
                <ul className="list-disc list-inside space-y-2 text-text-light/70 dark:text-text-dark/70">
                  <li>Software Architecture & System Design</li>
                  <li>Test-Driven Development (TDD)</li>
                  <li>Cloud Architecture & DevOps</li>
                  <li>Agile & Scrum Methodologies</li>
                  <li>API Design & Microservices</li>
                  <li>Performance Optimization</li>
                  <li>Database Design & Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 