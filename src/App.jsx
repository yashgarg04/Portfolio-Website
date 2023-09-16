import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
export default App;
