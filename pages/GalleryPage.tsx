import React, { useEffect } from 'react';
import Gallery from '../components/Gallery';
import Tape from '../components/Tape';
import { useNavigate } from 'react-router-dom';

const GalleryPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen grid-bg py-20 px-4 md:px-8">
            {/* Navigation Label */}
            <header className="fixed top-8 left-8 z-50 mix-blend-difference hidden md:flex items-center gap-4">
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-white hover:text-black transition-all duration-300 border border-black"
                >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <h1 className="font-mono text-xs text-white uppercase tracking-[0.5em] font-black">
                    PORTFOLIO v.26
                </h1>
            </header>

            {/* Main Container */}
            <main className="max-w-5xl mx-auto paper-texture custom-shadow relative min-h-screen">
                {/* Corners Masking Tape */}
                <Tape orientation="diagonal-left" className="-top-4 -left-4 z-50 opacity-90" />
                <Tape orientation="diagonal-right" className="-top-4 -right-4 z-50 opacity-90" />
                <Tape orientation="diagonal-right" className="-bottom-4 -left-4 z-50 opacity-90" />
                <Tape orientation="diagonal-left" className="-bottom-4 -right-4 z-50 opacity-90" />

                <Gallery isPreview={false} />

                {/* Footer info label */}
                <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none px-8">
                    <div className="flex items-center justify-between font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                        <span>GALLERY_ARCHIVE</span>
                        <span>2026_TM</span>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default GalleryPage;
