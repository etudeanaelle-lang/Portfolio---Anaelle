
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-provence-yellow font-medium uppercase tracking-widest text-sm mb-2">Collaboration</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-provence-earth">Parlons de vos projets</h3>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-provence-lavender p-8 md:p-16 relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <svg className="w-48 h-48" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 0 C155 0 200 45 200 100 S155 200 100 200 0 155 0 100 45 0 100 0" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-serif text-provence-earth">Coordonnées</h4>
              <p className="text-gray-600 leading-relaxed">
                Je suis actuellement basée à <strong>Festubert</strong> et je me déplace régulièrement dans toute la France pour mes clients et partenaires.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-provence-lavender flex items-center justify-center text-provence-muted-purple group-hover:bg-provence-yellow group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:Anaelle.franoux@gmail.com" className="text-lg text-gray-700 hover:text-provence-yellow transition-colors font-medium">
                  Anaelle.franoux@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-provence-lavender flex items-center justify-center text-provence-muted-purple group-hover:bg-provence-yellow group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:0674323466" className="text-lg text-gray-700 hover:text-provence-yellow transition-colors font-medium">
                  06 74 32 34 66
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-provence-lavender flex items-center justify-center text-provence-muted-purple">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  Festubert, Pas-de-Calais
                </span>
              </div>
            </div>
          </div>

          <div className="bg-provence-beige/30 p-8 rounded-[2rem] border border-dashed border-provence-yellow flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-provence-yellow/10 rounded-full flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
            <p className="font-serif text-xl text-provence-earth italic">
              "Créons ensemble une communication qui vous ressemble."
            </p>
            <div className="flex flex-col gap-3 w-full">
              <a 
                href="tel:0674323466" 
                className="bg-provence-yellow text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-provence-yellow/90 transition-all active:scale-95 text-center"
              >
                Appeler maintenant
              </a>
              <a 
                href="mailto:Anaelle.franoux@gmail.com" 
                className="bg-white border-2 border-provence-lavender text-provence-earth px-8 py-4 rounded-2xl font-bold hover:bg-provence-lavender/10 transition-all text-center"
              >
                M'envoyer un email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
