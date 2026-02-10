
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-provence-beige py-12 border-t border-provence-lavender">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-provence-earth mb-4">Anaëlle FRANOUX</h2>
        <p className="text-gray-500 mb-8 uppercase tracking-[0.3em] text-xs">Designer Graphique | Créatrice 360</p>
        
        <div className="flex justify-center space-x-6 mb-8">
          {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-provence-yellow transition-colors font-medium">
              {social}
            </a>
          ))}
        </div>

        <div className="text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Anaëlle FRANOUX. Tous droits réservés.</p>
          <p className="mt-1">Conçu avec passion et couleurs provençales.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
