
import React from 'react';
import Paperclip from './Paperclip';
import Tape from './Tape';

const Hero: React.FC = () => {
  return (
    <section className="relative px-8 pt-16 pb-12 border-b border-gray-200">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="flex-1 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-gray-400 block tracking-widest">HUMAN NAME:</span>
            <h1 className="text-6xl md:text-8xl font-black text-black leading-none uppercase tracking-tighter">
              Tanay <br /> Mahajan
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
              Developer & Designer
            </h2>
            <p className="max-w-md text-gray-600 leading-relaxed font-medium">
              Independent developer crafting user-centric digital experiences. Focused on bridging the gap between aesthetics and functionality for modern brands.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <span className="px-3 py-1 bg-black text-white text-[10px] font-bold font-mono rounded-full uppercase">Est. 2026</span>
            <div className="h-[1px] w-24 bg-gray-300"></div>
          </div>
        </div>

        <div className="relative group mt-8 md:mt-0">
          <Tape orientation="diagonal-left" className="-top-4 -left-8" />
          <div className="relative bg-white p-4 pb-12 custom-shadow rotate-2 group-hover:rotate-0 transition-transform duration-500 max-w-[280px]">
            <div className="overflow-hidden bg-gray-100 aspect-square grayscale contrast-125 mb-4">
              <img
                src="/profile.jpg"
                alt="Tanay Mahajan"
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
            </div>
            <div className="text-center">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">DEVELOPER + DESIGNER</span>
              <span className="font-bold text-sm tracking-tight">IDENTITY.001</span>
            </div>
            <Paperclip className="-top-12 -right-4 z-20" />
          </div>
        </div>
      </div>

      {/* Decorative Blueprint Lines */}
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-gray-200 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-gray-200 opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
