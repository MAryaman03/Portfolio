import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import LoadingScreen from './components/LoadingScreen';
import TerminalAssistant from './components/TerminalAssistant';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CursorGlow />
      <TerminalAssistant />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background elements */}
            <div className="fixed inset-0 z-0 bg-grid-white opacity-20 pointer-events-none" />
            <div className="fixed top-0 left-0 w-full h-[500px] bg-primary/20 blur-[150px] -translate-y-1/2 rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Certifications />
                <Contact />
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
