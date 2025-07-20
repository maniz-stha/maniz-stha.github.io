import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-[80vh] flex items-center justify-center bg-[#fafbfc] relative overflow-hidden">
      {/* Vertical Text and Year */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 pl-4">
        <span className="vertical-text">Product Designer</span>
        <span className="vertical-text">2024</span>
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-20 gap-8">
        {/* Left: Greeting, subtitle, stats */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h1 className="hero-greeting mb-2">Hello</h1>
          <div className="hero-subtitle mb-8">— It's Manish Shrestha, a Full Stack Software Engineer</div>
          <div className="text-base text-neutral-500 mb-10 max-w-lg">
            A seasoned Software Engineer with over a decade of expertise in full-stack development. Arctic Code Vault Contributor and active open-source enthusiast with achievements in pair programming and collaborative development. Specializing in building scalable web applications and enterprise solutions with a focus on modern technologies and cloud platforms.
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="text-base font-medium tracking-wide px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/maniz-stha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium tracking-wide px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maniz-stha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium tracking-wide px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/manish_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium tracking-wide px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Right: Large profile image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQEkaPaguEso8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1648823380064?e=1756944000&v=beta&t=RbVGEt-dlWtVcCkJfvmoUG7lD1TdPHfBo0NW5e_JJeo"
            alt="Profile"
            className="w-[420px] h-[420px] md:w-[480px] md:h-[480px] rounded-2xl object-cover shadow-xl border border-neutral-200 bg-white"
            style={{ maxWidth: '98vw' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 