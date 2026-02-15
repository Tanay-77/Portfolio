import React from 'react';
import { GALLERY } from '../constants';
import { useNavigate } from 'react-router-dom';

interface GalleryProps {
  isPreview?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isPreview = false }) => {
  const navigate = useNavigate();
  const displayItems = isPreview ? GALLERY.slice(0, 5) : GALLERY;

  return (
    <section className="px-8 py-16 border-b border-gray-200" id="gallery">
      <div className="mb-12 space-y-2">
        <h3 className="font-black text-3xl uppercase tracking-tighter">Gallery</h3>
        <p className="text-gray-500 text-lg">I Copy designs and code them in free time</p>
        {!isPreview && (
          <p className="text-gray-400 text-sm mt-8">Note: Some of these designs are not by me but coded by me.</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayItems.map((item) => {
          const Content = (
            <>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </>
          );

          return (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[2rem] bg-gray-100"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer"
                >
                  {Content}
                </a>
              ) : (
                Content
              )}
            </div>
          );
        })}

        {isPreview && (
          <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 aspect-[4/3] flex items-center justify-center group cursor-pointer" onClick={() => navigate('/gallery')}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-50"></div>
            <button className="relative px-8 py-3 bg-black text-white rounded-full font-bold text-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl hover:bg-gray-800 border border-transparent hover:border-black">
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
