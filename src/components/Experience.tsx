import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Danphe Software Labs (Fluid Commerce)",
      period: "Feb 2023 - Present",
      description: [
        "Lead the development of a high-performance e-commerce platform serving multiple enterprise clients",
        "Architect and implement scalable microservices using Node.js and TypeScript",
        "Design and optimize RESTful APIs consumed by web, mobile, and third-party applications",
        "Implement robust CI/CD pipelines and automated testing strategies"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Whitehat Engineering (ZenLedger), Washington",
      period: "Oct 2019 - Aug 2022",
      description: [
        "Architected and developed core features for a cryptocurrency tax calculation platform",
        "Engineered high-performance APIs for processing millions of blockchain transactions",
        "Implemented advanced tax calculation algorithms and automated report generation systems",
        "Developed comprehensive test suites ensuring 95% code coverage",
        "Built responsive and intuitive user interfaces using React and TypeScript",
        "Optimized database queries and caching strategies for handling large-scale data",
        "Led technical support initiatives and provided solutions for complex customer issues",
        "Conducted blockchain forensics analysis for regulatory compliance"
      ]
    },
    {
      title: "Senior Web Developer",
      company: "Proshore Nepal, Kathmandu",
      period: "Mar 2014 - Oct 2019",
      description: [
        "Led the development of enterprise-level e-commerce solutions using Magento",
        "Managed end-to-end project lifecycle including requirements analysis and client communications",
        "Served as lead architect for a high-traffic e-commerce platform built with Phalcon framework",
        "Established effective communication channels between distributed development teams",
        "Implemented automated deployment processes and performance optimization strategies",
        "Conducted code reviews and maintained high code quality standards",
        "Mentored junior developers and conducted technical training sessions"
      ]
    },
    {
      title: "Web Developer",
      company: "EB Pearls, Lalitpur",
      period: "Dec 2012 - Mar 2014",
      description: [
        "Developed custom e-commerce solutions using Magento framework",
        "Created responsive and user-friendly frontend interfaces",
        "Implemented and customized third-party integrations",
        "Developed custom modules enhancing platform functionality",
        "Optimized website performance and security",
        "Collaborated with design teams to implement pixel-perfect layouts",
        "Maintained documentation and version control best practices"
      ]
    }
  ];

  const freelanceProjects = [
    {
      name: "TalentArmy",
      description: "Developed Firebase cloud functions for webhooks and APIs to import job ads from jobadder.com to webflow"
    },
    {
      name: "ZeFi",
      description: "Migrated frontend from React.js to Next.js, supported development team with CMS and APIs using Firebase"
    },
    {
      name: "Solo",
      description: "Developed backend API components for worksolo.com"
    },
    {
      name: "Export Feed",
      description: "Created Magento 1.x extension for export feed"
    }
  ];

  return (
    <section id="experience" className="w-full section bg-surface-light dark:bg-surface-dark transition-colors duration-200">
      <div className="w-full container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light dark:text-text-dark mb-12">
            Professional Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-primary-light dark:border-primary pl-6 relative"
              >
                <div className="absolute w-4 h-4 bg-primary-light dark:bg-primary rounded-full -left-[10px] top-0"></div>
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">{exp.title}</h3>
                <h4 className="text-xl text-primary-light dark:text-primary mb-2">{exp.company}</h4>
                <p className="text-text-light/70 dark:text-text-dark/70 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-text-light/70 dark:text-text-dark/70">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Freelance Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {freelanceProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <h4 className="text-xl font-semibold text-primary mb-2">{project.name}</h4>
                  <p className="text-gray-600">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 