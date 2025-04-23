import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Danphe Software Labs (Fluid Commerce)",
      period: "Feb 2023 - Present",
      description: [
        "Developing core parts of e-commerce system for Fluid commerce",
        "Developing APIs and services to be consumed by web apps, mobile apps and third party consumers"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Whitehat Engineering (ZenLedger), Washington",
      period: "Oct 2019 - Aug 2022",
      description: [
        "Developed user-friendly features for ZenLedger app, a US-based cryptocurrency tax calculation software",
        "Developed optimal APIs to import large number of transactions from blockchain",
        "Created and optimized tax calculation and report generation features",
        "Implemented unit tests for code reliability",
        "Created responsive frontend with React",
        "Optimized system to handle millions of transactions",
        "Worked in Support Team to handle customer issues",
        "Conducted research on cryptocurrency for analyzing criminal activities"
      ]
    },
    {
      title: "Senior Web Developer",
      company: "Proshore Nepal, Tinkune, Kathmandu",
      period: "Mar 2014 - Oct 2019",
      description: [
        "Developed Magento-based ecommerce systems",
        "Led development for all Magento projects, including requirements gathering and client communication",
        "Lead developer for Ekoplaza (Phalcon-based ecommerce system)",
        "Managed communication with foreign teams and product owners",
        "Developed and maintained the official website of Proshore Nepal",
        "Conducted quality assurance tests and optimized usability",
        "Mentored junior developers in PHP and improved team performance"
      ]
    },
    {
      title: "Magento Developer",
      company: "EB Pearls, Kupondole, Lalitpur",
      period: "Dec 2012 - Mar 2014",
      description: [
        "Started as intern, quickly promoted to Magento Developer",
        "Developed Magento websites from scratch",
        "Customized themes to meet customer requirements",
        "Integrated and configured community extensions",
        "Developed custom extensions and themes",
        "Modernized old codebases and improved functionality",
        "Managed complex design projects for corporate clients"
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
    <section id="experience" className="w-full section bg-white">
      <div className="w-full container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-primary pl-6 relative"
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-0"></div>
                <h3 className="text-2xl font-bold text-dark">{exp.title}</h3>
                <h4 className="text-xl text-primary mb-2">{exp.company}</h4>
                <p className="text-gray-600 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
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