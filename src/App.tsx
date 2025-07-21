import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#fafbfc]">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="w-full bg-neutral-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Manish Shrestha. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
