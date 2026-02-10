
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-provence-yellow font-medium uppercase tracking-widest text-sm mb-2">Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-provence-earth">Mes outils & Talents</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-provence-lavender">
          <h4 className="text-2xl font-serif text-provence-muted-purple mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-provence-muted-purple rounded-full" />
            Savoir-faire Technique
          </h4>
          <ul className="space-y-6">
            {SKILLS.technical.map((skill, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <span className="w-2 h-2 rounded-full bg-provence-yellow group-hover:scale-150 transition-transform" />
                <span className="text-gray-700 font-medium text-lg">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-provence-yellow p-10 rounded-3xl shadow-lg text-white">
          <h4 className="text-2xl font-serif mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-white rounded-full" />
            Personnalité & Vision
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.personal.map((skill, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                <p className="font-bold text-xl">{skill}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-white/5 border border-white/20 rounded-2xl">
            <p className="italic text-lg">
              "Un mélange explosif d'imagination et de rigueur pour une communication 360 efficace."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
