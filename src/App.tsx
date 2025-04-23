import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-background-light dark:bg-background-dark transition-colors duration-200">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Experience />
          <Contact />
        </main>
        <footer className="w-full bg-surface-dark text-text-dark py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Manish Stha. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
