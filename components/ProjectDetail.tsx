
import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Header */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
          <div className="text-center">
            <span className="text-provence-yellow uppercase tracking-widest font-bold text-sm mb-4 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-serif text-white max-w-4xl mx-auto leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
        <button 
          onClick={onBack}
          className="absolute top-10 left-10 z-20 bg-white/20 hover:bg-white text-white hover:text-provence-earth p-4 rounded-full backdrop-blur-md transition-all flex items-center gap-2 group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-bold text-sm">Retour</span>
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-4 space-y-12">
            <div className="space-y-6 bg-provence-beige/50 p-8 rounded-3xl">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Rôle</h4>
                <p className="font-serif text-xl text-provence-earth">Directrice Artistique</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Date</h4>
                <p className="font-serif text-xl text-provence-earth">2023 - 2024</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Client</h4>
                <p className="font-serif text-xl text-provence-earth">Institutionnel & Privé</p>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-8">
            <div className="prose prose-xl prose-stone max-w-none 
              [&>h2]:font-serif [&>h2]:text-3xl [&>h2]:text-provence-earth [&>h2]:mt-12 [&>h2]:mb-6
              [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:mb-6
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-gray-600">
              <div dangerouslySetInnerHTML={{ __html: project.fullContent || '' }} />
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src={`https://picsum.photos/600/400?random=${projectId}1`} className="rounded-2xl shadow-lg" alt="Visual 1" />
                <img src={`https://picsum.photos/600/400?random=${projectId}2`} className="rounded-2xl shadow-lg" alt="Visual 2" />
              </div>
            </div>
          </article>
        </div>
      </div>
      
      <div className="bg-provence-lavender/20 py-20 text-center">
        <h3 className="text-2xl font-serif text-provence-earth mb-8">Ce projet vous inspire ?</h3>
        <button 
          onClick={onBack}
          className="bg-provence-yellow text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-provence-yellow/80 transition-all"
        >
          Discutons de votre vision
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
