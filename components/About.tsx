
import React from 'react';
import { EDUCATION } from '../constants';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-provence-yellow/20 rounded-full -z-10" />
          
          <div className="space-y-12">
            <div>
              <h3 className="text-4xl font-serif text-provence-earth mb-6">Mon Parcours</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Originaire du <strong>Pas-de-Calais (près de Béthune)</strong>, mon parcours est guidé par une curiosité insatiable pour l'image et le message. De mon Bac Pro au Master, j'ai forgé une expertise hybride entre technique et stratégie.
              </p>
            </div>

            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-provence-lavender flex items-center justify-center text-provence-muted-purple font-bold group-hover:bg-provence-yellow group-hover:text-white transition-colors">
                    {EDUCATION.length - i}
                  </div>
                  <div>
                    <h4 className="font-bold text-provence-earth text-lg">{edu.degree}</h4>
                    <p className="text-provence-yellow font-medium mb-1">{edu.school}</p>
                    <p className="text-gray-500 text-sm italic">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative scrapbook-image rotate-2 p-4 bg-white shadow-2xl">
            <img 
              src="https://picsum.photos/800/1000?random=15" 
              alt="Mon environnement de travail" 
              className="w-full h-[600px] object-cover" 
            />
            <div className="absolute -bottom-8 -right-8 bg-provence-yellow text-white p-6 rounded-lg shadow-xl max-w-xs rotate-1">
              <p className="font-serif text-lg italic leading-snug">
                "Basée dans le Pas-de-Calais, mais prête à conquérir toute la France pour vos projets créatifs."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
