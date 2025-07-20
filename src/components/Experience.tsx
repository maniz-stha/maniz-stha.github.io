import { motion } from 'framer-motion';

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

const Experience = () => {
  return (
    <section id="experience" className="w-full flex justify-center bg-[#fafbfc] py-20 px-4">
      <div className="w-full max-w-5xl flex flex-col gap-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left">Professional Experience</h2>
        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="pt-2">
                <div className="w-2 h-2 rounded-full bg-neutral-800 mb-1" />
                {index < experiences.length - 1 && (
                  <div className="w-px h-24 bg-neutral-200 mx-auto" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-1">
                  <span className="text-xl font-semibold text-neutral-800">{exp.title}</span>
                  <span className="text-neutral-400 text-base">@ {exp.company}</span>
                </div>
                <div className="text-sm text-neutral-500 mb-2">{exp.period}</div>
                <ul className="list-disc list-inside text-neutral-600 text-sm space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <section id="portfolio">
          <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {freelanceProjects.map((project, index) => (
              <div key={index} className="p-5 border border-neutral-100 rounded-lg bg-white flex flex-col gap-2">
                <span className="font-semibold text-neutral-800">{project.name}</span>
                <span className="text-neutral-500 text-sm">{project.description}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience; 