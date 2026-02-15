
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="px-8 py-12 border-b border-gray-200 relative overflow-hidden">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="font-black text-3xl uppercase tracking-tighter">Experience</h3>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
        <span className="font-mono text-xs text-gray-400">LOG_v1.0</span>
      </div>

      <div className="space-y-12 max-w-2xl relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-200"></div>

        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="pl-8 relative group">
            {/* Dot indicator */}
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-gray-300 group-hover:bg-black transition-colors"></div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-black uppercase">{exp.role}</h4>
                <span className="font-mono text-[10px] text-gray-500 font-bold">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-3">
                    <span className="text-gray-300 font-mono mt-1 text-[10px]">#0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative dots grid */}
      <div className="absolute right-8 bottom-8 w-24 h-24 grid grid-cols-4 gap-4 opacity-20 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-black"></div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
