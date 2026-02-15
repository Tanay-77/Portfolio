
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="px-8 py-12 border-b border-gray-200">
      <div className="flex items-center gap-4 mb-10">
        <h3 className="font-black text-3xl uppercase ">Selected Projects</h3>
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
                <div className="flex gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                      title="Live Site"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                      title="GitHub Code"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black uppercase leading-none tracking-tight">{project.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2 font-medium leading-relaxed">
                  {project.description}
                </p>
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-[10px] font-mono font-bold uppercase px-2 py-1 bg-gray-200 text-gray-600 rounded-md tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
