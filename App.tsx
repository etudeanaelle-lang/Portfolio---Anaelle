
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const handleOpenProject = (id: string) => {
    setActiveProjectId(id);
  };

  const handleBackToHome = () => {
    setActiveProjectId(null);
  };

  if (activeProjectId) {
    return <ProjectDetail projectId={activeProjectId} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen selection:bg-provence-yellow selection:text-white">
      <Header />
      <main>
        <section id="accueil" className="scroll-mt-24">
          <Hero />
        </section>
        
        <section id="projets" className="py-20 bg-provence-beige/30 scroll-mt-24">
          <Projects onProjectClick={handleOpenProject} />
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
