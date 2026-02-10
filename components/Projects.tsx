
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-provence-yellow font-medium uppercase tracking-widest text-sm mb-2">Sélection de travaux</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-provence-earth">Mon Univers Créatif</h3>
        </div>
        <p className="text-gray-500 italic md:max-w-xs">
          Une exploration entre print, digital et vidéo pour des marques qui osent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className={`group relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
            <div className="overflow-hidden rounded-2xl bg-provence-lavender aspect-[4/3] relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-medium px-4 py-2 border border-white/40 rounded-full text-sm">
                  Voir le projet
                </span>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-tighter text-provence-yellow">
                {project.category}
              </span>
              <h4 className="text-2xl font-serif text-provence-earth group-hover:text-provence-muted-purple transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-600 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
