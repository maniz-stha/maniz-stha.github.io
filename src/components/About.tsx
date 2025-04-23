import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Docker', level: 65 },
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
                I'm a passionate software developer with a strong foundation in web development
                and a keen eye for creating efficient, scalable solutions. My journey in
                technology has been driven by a constant desire to learn and adapt to new
                challenges.
              </p>
              <p className="text-gray-600 mb-6">
                With experience in both frontend and backend development, I specialize in
                building modern web applications that deliver exceptional user experiences
                while maintaining high performance and reliability.
              </p>
              <p className="text-gray-600">
                When I'm not coding, I enjoy contributing to open-source projects,
                writing technical articles, and staying up-to-date with the latest
                developments in the tech industry.
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 