
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 bg-provence-lavender rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-provence-yellow/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8 z-10 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-provence-yellow font-medium uppercase tracking-[0.2em] text-sm">
              Designer Graphique & Communicante 360
            </h2>
            <h1 className="text-6xl md:text-8xl font-serif text-provence-earth leading-tight">
              Anaëlle <br />
              <span className="italic">FRANOUX</span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Créative passionnée, j'insuffle de la couleur et de l'imagination dans chaque pixel. Basée dans le Pas-de-Calais, je déploie mon univers graphique à travers toute la France.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="px-8 py-4 bg-provence-yellow text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Me recruter
            </a>
            <a href="#projets" className="px-8 py-4 bg-white border-2 border-provence-lavender text-provence-earth rounded-full font-bold text-lg hover:bg-provence-lavender/20 transition-all">
              Voir mes projets
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[500px] hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main Portrait "Polaroid" */}
            <div className="relative z-20 scrapbook-image -rotate-3 p-3 bg-white shadow-2xl">
              <img src="https://picsum.photos/400/500?random=10" alt="Anaëlle Franoux" className="w-64 h-80 object-cover" />
              <p className="mt-4 font-serif italic text-gray-500 text-center">Inspirée par la Provence</p>
            </div>

            {/* Smaller floating images */}
            <div className="absolute top-0 right-0 z-30 scrapbook-image rotate-6 p-2 bg-white shadow-xl">
              <img src="https://picsum.photos/200/200?random=11" alt="Creative Work" className="w-32 h-32 object-cover" />
            </div>
            
            <div className="absolute bottom-10 left-0 z-10 scrapbook-image -rotate-12 p-2 bg-white shadow-xl">
              <img src="https://picsum.photos/150/200?random=12" alt="Design Element" className="w-24 h-32 object-cover" />
            </div>

            {/* Decorative Badge */}
            <div className="absolute -bottom-5 right-10 z-40 bg-provence-lavender text-provence-muted-purple px-6 py-2 rounded-full font-serif font-bold italic shadow-md rotate-3 border-2 border-white">
              Passion 360°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
