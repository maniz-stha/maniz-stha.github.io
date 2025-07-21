const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    image: '/project1.jpg',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1.demo',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: '/project2.jpg',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2.demo',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps users create engaging blog posts and social media content using natural language processing.',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    image: '/project3.jpg',
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3.demo',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full flex justify-center bg-[#fafbfc] py-20 px-4">
      <div className="w-full max-w-5xl flex flex-col gap-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-4 p-6 border border-neutral-100 rounded-lg bg-white">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-neutral-800">{project.title}</span>
                <span className="text-neutral-500 text-sm">{project.description}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-800 underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-800 underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 