import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen w-full bg-[#fafbfc] dark:bg-slate-900 transition-colors duration-200">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Experience />
          <Contact />
        </main>
        <footer className="w-full bg-neutral-800 dark:bg-slate-950 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Manish Shrestha. All rights reserved.</p>
          </div>
        </footer>
        <ScrollToTop />
      </div>
    </DarkModeProvider>
  );
}

export default App;
