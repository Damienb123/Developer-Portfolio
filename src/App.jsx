import './App.css';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { Routes, Route } from 'react-router-dom'; // <-- Import React Router

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;

