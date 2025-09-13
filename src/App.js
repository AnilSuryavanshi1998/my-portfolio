import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Skills from "./components/Skills";
import TaskTracker from './components/TaskTracker';




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
    });
  }, []);


  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TaskTracker />
      <Contact />
      <Footer />
      <ScrollToTop />
      
    </div>
  );
}

export default App;





