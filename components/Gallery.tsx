
import React from 'react';
import { GALLERY } from '../constants';
import Tape from './Tape';

const Gallery: React.FC = () => {
  return (
    <section className="px-8 py-16 border-b border-gray-200">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="font-black text-3xl uppercase tracking-tighter">Gallery</h3>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
        <span className="font-mono text-xs text-gray-400">ARCHIVE_SNAP</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 py-8">
        {GALLERY.map((item, idx) => (
          <div 
            key={item.id}
            className="relative group cursor-zoom-in"
            style={{ 
              transform: `rotate(${item.rotation}deg)`,
              zIndex: 10 + idx
            }}
          >
            {/* Random Tape piece for every other item */}
            {idx % 2 === 0 && <Tape orientation="diagonal-right" className="-top-4 -right-4" />}
            
            <div className="bg-white p-3 pb-8 custom-shadow transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:z-50">
              <div className="bg-gray-100 aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="font-mono text-[9px] text-gray-400 block tracking-[0.2em] uppercase">{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
