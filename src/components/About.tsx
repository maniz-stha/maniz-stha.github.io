import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Ruby', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'PHP', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Golang', level: 80 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Ruby on Rails', level: 95 },
    { name: 'AWS', level: 85 },
  ];

  return (
    <section id="about" className="w-full section bg-white">
      <div className="w-full container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-6">
                I'm a Senior Software Engineer with more than 10 years of experience in backend and frontend development. 
                My expertise spans across multiple programming languages and frameworks, with a strong focus on building 
                scalable web applications and e-commerce solutions.
              </p>
              <p className="text-gray-600 mb-6">
                I specialize in Ruby, JavaScript, and PHP development, with extensive experience in frameworks like 
                Ruby on Rails, Next.js, React, and various PHP frameworks. I'm also proficient in working with cloud 
                services such as AWS, Firebase, and Heroku.
              </p>
              <p className="text-gray-600">
                My approach to development emphasizes test-driven development, agile methodologies, and maintaining 
                high-quality code standards. I'm passionate about creating efficient, scalable solutions and mentoring 
                junior developers to improve team performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Test Driven Development (TDD)</li>
                  <li>Docker & Container Technologies</li>
                  <li>Git Version Control</li>
                  <li>Agile Development & Scrum</li>
                  <li>RESTful APIs & Microservices</li>
                  <li>TypeScript & React Native</li>
                  <li>Database Design (PostgreSQL, MySQL)</li>
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