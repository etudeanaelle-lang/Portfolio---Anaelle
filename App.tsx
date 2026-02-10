
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-provence-yellow selection:text-white">
      <Header />
      <main>
        <section id="accueil" className="scroll-mt-24">
          <Hero />
        </section>
        
        <section id="projets" className="py-20 bg-provence-beige/30 scroll-mt-24">
          <Projects />
        </section>
        
        <section id="parcours" className="py-20 bg-white scroll-mt-24">
          <About />
        </section>
        
        <section id="competences" className="py-20 bg-provence-lavender/20 scroll-mt-24">
          <Skills />
        </section>
        
        <section id="contact" className="py-20 scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
