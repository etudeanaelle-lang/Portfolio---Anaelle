
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Projets', href: '#projets' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#accueil" className="font-serif text-2xl font-bold tracking-tight text-provence-earth z-50">
          AF.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-sm font-medium uppercase tracking-widest text-gray-600 hover:text-provence-yellow transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="bg-provence-yellow hover:bg-provence-yellow/80 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95">
            Travailler ensemble
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-provence-earth focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif text-provence-earth hover:text-provence-yellow transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-provence-yellow text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            Me contacter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
