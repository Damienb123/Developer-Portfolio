import './App.css';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
     <Analytics />
    <>
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;




