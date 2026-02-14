
import React from 'react';
import Tape from './Tape';

const Contact: React.FC = () => {
  return (
    <section className="px-8 py-20 relative overflow-hidden bg-[#F1EDE3]">
      <div className="max-w-xl mx-auto text-center space-y-8 relative z-10">
        <Tape orientation="horizontal" className="-top-6 left-1/2 -translate-x-1/2" />
        
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
          Let’s Build Something <br /> Meaningful.
        </h3>
        
        <p className="text-gray-600 font-medium">
          I'm currently available for freelance projects and collaborations. If you have an idea or just want to chat, feel free to reach out.
        </p>

        <div className="pt-4 space-y-6">
          <a 
            href="mailto:tanaymahajan7@gmail.com" 
            className="text-2xl md:text-3xl font-black border-b-4 border-black inline-block transition-transform hover:-translate-y-1"
          >
            tanaymahajan7@gmail.com
          </a>

          <div className="flex items-center justify-center gap-8 pt-4">
            <a href="#" className="font-mono text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">LinkedIn</a>
            <a href="#" className="font-mono text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">Behance</a>
            <a href="#" className="font-mono text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">Dribbble</a>
          </div>

          <div className="pt-10">
            <button className="bg-black text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-8">
        <div className="font-mono text-[10px] text-gray-300 rotate-90 origin-right">
          PAG_ID_9921 / FORM_03
        </div>
      </div>
    </section>
  );
};

export default Contact;
