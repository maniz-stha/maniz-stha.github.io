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
    <section id="about" className="w-full flex justify-center bg-[#fafbfc] py-20 px-4">
      <div className="w-full max-w-5xl flex flex-col gap-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Overview */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Professional Overview</h3>
              <p className="text-neutral-600 mb-4">
                As a Full Stack Software Engineer with extensive experience in enterprise software development, I specialize in architecting and implementing scalable web applications. My expertise spans across modern technology stacks, with a particular focus on cloud-native solutions and distributed systems.
              </p>
              <p className="text-neutral-600 mb-4">
                I excel in developing robust backend systems and crafting responsive and intuitive user interfaces. My experience with cloud platforms enables me to design and deploy highly available and scalable applications.
              </p>
              <p className="text-neutral-600 mb-4">
                My approach to software development is rooted in engineering best practices, including test-driven development, continuous integration/deployment, and agile methodologies. I am passionate about knowledge sharing and have successfully mentored junior developers.
              </p>
            </div>
          </div>
          {/* Right: Skills */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Core Competencies</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 text-sm">
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
      </div>
    </section>
  );
};

export default About; 