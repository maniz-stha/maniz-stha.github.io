import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 bg-white">
      {/* Logo */}
      <a
        href="#home"
        className="text-2xl font-bold tracking-tight text-black hover:opacity-80 focus:outline-none"
        aria-label="Go to Home"
        style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}
      >
        MS
      </a>
      {/* Nav Links */}
      <div className="flex-1 flex justify-center gap-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="nav-link text-neutral-500 hover:text-black"
          >
            {item.name}
          </a>
        ))}
      </div>
      {/* CTA */}
      <a
        href="#contact"
        className="text-sm font-medium tracking-wide px-5 py-2 border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors"
        style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}
      >
        Book A Call ↗
      </a>
    </nav>
  );
};

export default Navbar; 