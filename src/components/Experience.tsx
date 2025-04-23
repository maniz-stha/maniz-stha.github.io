import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Tech Company A',
      position: 'Senior Software Engineer',
      period: '2021 - Present',
      description: [
        'Led the development of a microservices-based architecture',
        'Implemented CI/CD pipelines using GitHub Actions',
        'Mentored junior developers and conducted code reviews',
        'Optimized application performance resulting in 40% faster load times',
      ],
    },
    {
      company: 'Tech Company B',
      position: 'Software Engineer',
      period: '2019 - 2021',
      description: [
        'Developed and maintained multiple React-based web applications',
        'Implemented RESTful APIs using Node.js and Express',
        'Collaborated with UX designers to implement responsive designs',
        'Reduced bug reports by 60% through improved testing practices',
      ],
    },
    {
      company: 'Tech Company C',
      position: 'Junior Developer',
      period: '2018 - 2019',
      description: [
        'Worked on frontend development using React and TypeScript',
        'Implemented unit tests using Jest and React Testing Library',
        'Participated in agile development processes',
        'Contributed to open-source projects',
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-light">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-dark">
                        {exp.position}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 