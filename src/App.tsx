import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-light">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="w-full bg-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Manish Stha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
