
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="px-8 py-12 border-b border-gray-200">
      <div className="flex items-center gap-4 mb-10">
        <h3 className="font-black text-3xl uppercase tracking-tighter">Selected Works</h3>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
        <span className="font-mono text-xs text-gray-400">001-004</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-[#F4F1EA] p-8 hover:bg-white transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">{project.category}</span>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-2xl font-black uppercase leading-none tracking-tight">{project.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2 font-medium leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs font-bold font-mono border-b-2 border-black pb-1">VIEW CASE STUDY</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
