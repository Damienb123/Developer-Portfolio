import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route } from 'react-router-dom';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { motion, useScroll } from 'framer-motion';

function App() {

  


  const { scrollYProgress } = useScroll();
  return (

    <Routes>
     
      {/* Home page route */}
      <Route
        path="/"
        element={
          <>
            <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%', // grow from left to right
          height: '4px',
          background: 'var(--scroll-color)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      />
           <Analytics />
            <Hero />
            <Projects />
            <Skills />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;


