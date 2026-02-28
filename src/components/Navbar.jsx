import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={twMerge(
            "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-full transition-all duration-300 px-6 py-4 flex items-center justify-between",
            scrolled ? "glass" : "bg-transparent"
        )}>
            <div className="text-2xl font-display font-bold text-fa-ivory tracking-wider">
                FA
            </div>
            <div>
                <a href="#candidature" className="btn-candidature btn-magnetic inline-block bg-fa-neon-pink text-fa-deep font-semibold px-6 py-2.5 rounded-full text-sm">
                    Réserver
                </a>
            </div>
        </nav>
    );
}
