import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Tape from '../components/Tape';

const Home: React.FC = () => {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen grid-bg py-20 px-4 md:px-8">
            {/* Navigation Label */}
            <header className="fixed top-8 left-8 z-50 mix-blend-difference hidden md:block">
                <h1 className="font-mono text-xs text-white uppercase tracking-[0.5em] font-black">
                    LINKBOARD / PORTFOLIO v.26
                </h1>
            </header>

            {/* Main Single Paper Container */}
            <main
                className="max-w-5xl mx-auto paper-texture custom-shadow relative "
                style={{
                    transform: `translateY(${scrolled * -0.05}px)`
                }}
            >
                {/* Corners Masking Tape */}
                <Tape orientation="diagonal-left" className="-top-4 -left-4 z-50 opacity-90" />
                <Tape orientation="diagonal-right" className="-top-4 -right-4 z-50 opacity-90" />
                <Tape orientation="diagonal-right" className="-bottom-4 -left-4 z-50 opacity-90" />
                <Tape orientation="diagonal-left" className="-bottom-4 -right-4 z-50 opacity-90" />

                {/* Sections stacked without gaps */}
                <Hero />
                <Projects />
                <Experience />
                <Gallery isPreview={true} />
                <Contact />

                {/* Footer info label */}
                <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none px-8">
                    <div className="flex items-center justify-between font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                        <span>PRINT_BATCH: 2026_TM</span>
                        <span>PROCESSED_AT: REMOTE_HQ</span>
                    </div>
                </footer>
            </main>

            {/* Floating UI Elements */}
            <div className="fixed bottom-8 left-8 hidden lg:block opacity-30">
                <div className="font-mono text-[10px] text-white rotate-[-90deg] origin-left">
                    COORD: 37.7749° N, 122.4194° W
                </div>
            </div>

            <div className="fixed bottom-8 right-8 hidden lg:block opacity-30">
                <div className="font-mono text-[10px] text-white uppercase tracking-widest">
                    EST. MAR 2026 / ID-4882
                </div>
            </div>
        </div>
    );
};

export default Home;
