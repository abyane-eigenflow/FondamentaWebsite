import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BookPromotion() {
    const sectionRef = useRef();
    const contentRef = useRef();
    const bookPlaceholderRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Floating animation for the book placeholder
            gsap.to(bookPlaceholderRef.current, {
                y: -15,
                duration: 2.5,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
            });

            // Reveal animation for the section
            gsap.fromTo(contentRef.current.children,
                { opacity: 0, x: 30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const benefits = [
        "Une méthode concrète pour sortir des luttes de pouvoir.",
        "Des outils pratiques d'auto-coaching.",
        "Comprendre vos schémas répétitifs pour vous en libérer."
    ];

    return (
        <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden border-t border-black/5">
            {/* Ambient Background glow */}
            <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] bg-fa-neon-pink/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left: Book Art/Placeholder */}
                <div className="flex justify-center lg:justify-end relative">
                    <div
                        ref={bookPlaceholderRef}
                        className="w-64 h-96 md:w-80 md:h-[30rem] rounded-[1.5rem] bg-gradient-to-br from-fa-navy via-fa-deep to-black border border-fa-bright-blue/30 shadow-[0_20px_50px_rgba(0,102,255,0.15)] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group"
                    >
                        {/* Shimmer effect inside placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

                        <BookOpen className="w-16 h-16 text-fa-bright-blue mb-6 opacity-80" />
                        <h3 className="font-display font-bold text-2xl text-white mb-2">Vivre à 2, c'est simple</h3>
                        <p className="text-white/50 text-sm italic">Emplacement pour la couverture du livre (PNG)</p>
                    </div>
                    {/* Pedestal Glow */}
                    <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-64 h-8 bg-fa-bright-blue/20 blur-xl rounded-[100%]"></div>
                </div>

                {/* Right: Pitch & Copywriting */}
                <div ref={contentRef} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-fa-bright-blue mb-4">
                        Prolongez la transformation
                    </h2>

                    <h3 className="font-display font-bold text-5xl md:text-6xl text-fa-deep leading-tight mb-6">
                        Le manuel pour <br /><span className="text-fa-neon-pink">ceux qui osent.</span>
                    </h3>

                    <p className="text-fa-deep/80 text-lg md:text-xl mb-10 max-w-lg font-sans leading-relaxed">
                        L’art de construire son couple ne s’improvise pas. Découvrez les clés pour devenir la bonne personne et attirer une relation extraordinaire dans le livre de Maïra,
                        <span className="italic text-fa-deep font-bold"> « Vivre à 2, c'est simple »</span>.
                    </p>

                    <ul className="space-y-4 mb-12">
                        {benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-fa-deep/90 text-lg">
                                <CheckCircle2 className="w-6 h-6 text-fa-bright-blue shrink-0 mt-0.5" />
                                <span className="text-left font-medium">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#buy-book"
                        className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-fa-bright-blue text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all"
                    >
                        Commander le livre
                    </a>
                </div>

            </div>
        </section>
    );
}
