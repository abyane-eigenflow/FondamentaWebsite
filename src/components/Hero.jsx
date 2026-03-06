import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Heart } from 'lucide-react';

export default function Hero() {
    const comp = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline();

            // 1. Heart appears broken
            tl.fromTo('.heart-left',
                { autoAlpha: 0, x: -60, y: -30, rotation: -25 },
                { autoAlpha: 1, x: -12, y: -6, rotation: -12, duration: 0.6, ease: 'power3.out' },
                0
            );
            tl.fromTo('.heart-right',
                { autoAlpha: 0, x: 60, y: 30, rotation: 25 },
                { autoAlpha: 1, x: 12, y: 6, rotation: 12, duration: 0.6, ease: 'power3.out' },
                0
            );

            // 2. Heart mends
            tl.to(['.heart-left', '.heart-right'],
                { x: 0, y: 0, rotation: 0, duration: 0.8, ease: 'elastic.out(1.2, 0.4)' },
                '+=0.1'
            );

            // 3. Heart glows & pulses intensely
            tl.to('.heart-container',
                { filter: 'drop-shadow(0px 0px 80px rgba(255,0,127,1))', scale: 1.15, duration: 0.2, yoyo: true, repeat: 1, ease: 'power2.inOut' },
                '-=0.2'
            );

            // 4. Heart shifts massively to the background
            tl.to('.heart-wrapper', {
                scale: 6,
                opacity: 0.15,
                filter: 'blur(30px)',
                duration: 1.2,
                ease: 'power3.inOut'
            }, '+=0.1');

            // 5. Intro animations for new two-column layout
            tl.fromTo('.hero-image',
                { autoAlpha: 0, y: 100 },
                { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' },
                '-=0.8'
            );

            // Splash reveals
            tl.fromTo(['.splash-1', '.splash-2', '.splash-3'],
                { autoAlpha: 0, scale: 0, rotation: -45 },
                { autoAlpha: 1, scale: 1, rotation: 0, duration: 1.2, stagger: 0.2, ease: "back.out(1.2)" },
                '-=0.6'
            );

            // Continuous splash breathing
            gsap.to('.splash-1', { scale: 1.1, rotation: 5, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to('.splash-2', { scale: 1.15, rotation: -5, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
            gsap.to('.splash-3', { scale: 1.05, rotation: 10, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2 });

            tl.fromTo('.hero-title',
                { autoAlpha: 0, y: 40 },
                { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                '-=0.6'
            );
            tl.fromTo('.hero-subtitle',
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                '-=0.5'
            );
            tl.fromTo('.hero-actions',
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                '-=0.4'
            );

        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} className="relative h-[100dvh] max-h-screen flex items-end justify-center pt-20 lg:pt-24 px-4 md:px-8 bg-gradient-to-b from-fa-deep to-fa-navy overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-fa-neon-pink/10 via-transparent to-transparent opacity-50 blur-3xl z-0 pointer-events-none"></div>

            {/* Cinematic Heart Animation Layer */}
            <div className="heart-wrapper absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="heart-container relative w-40 h-40 md:w-56 md:h-56 drop-shadow-2xl">
                    <div className="heart-left absolute inset-0 text-fa-neon-pink origin-bottom-right" style={{ clipPath: 'polygon(0 0, 50% 0, 40% 30%, 60% 70%, 50% 100%, 0 100%)' }}>
                        <Heart className="w-full h-full" fill="currentColor" strokeWidth={0} />
                    </div>
                    <div className="heart-right absolute inset-0 text-fa-neon-pink origin-bottom-left" style={{ clipPath: 'polygon(100% 0, 50% 0, 40% 30%, 60% 70%, 50% 100%, 100% 100%)' }}>
                        <Heart className="w-full h-full" fill="currentColor" strokeWidth={0} />
                    </div>
                </div>
            </div>

            <div className="hero-content relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end pb-0 h-full">

                {/* Left Column: Huge Portrait anchored to bottom */}
                <div className="hero-image invisible flex justify-center lg:justify-start order-2 lg:order-1 relative self-end w-full h-full items-end">
                    <div className="relative w-full flex justify-center lg:justify-start h-full items-end">
                        {/* Splashes behind the person */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[500px] aspect-square z-0 pointer-events-none">
                            <div className="splash-1 invisible absolute top-[10%] left-[0%] w-[60%] h-[70%] bg-fa-neon-pink/40 blur-[50px] rounded-full mix-blend-screen"></div>
                            <div className="splash-2 invisible absolute top-[5%] right-[0%] w-[50%] h-[80%] bg-pink-500/30 blur-[60px] rounded-[100px_50px_100px_50px] mix-blend-screen"></div>
                            <div className="splash-3 invisible absolute bottom-[5%] left-[10%] w-[70%] h-[60%] bg-[#ff3399]/40 blur-[70px] rounded-[50px_100px_50px_100px] mix-blend-screen"></div>
                        </div>

                        {/* 
                          The image is styled to be a large cutout. 
                          Replace "client-portrait.jpg" with the cutout PNG once ready.
                        */}
                        <img
                            src="/client-portrait-cut.png"
                            alt="Portrait"
                            className="relative z-10 w-auto max-w-[130%] h-[50vh] md:h-[75vh] lg:h-[90vh] max-h-[90%] object-contain object-bottom drop-shadow-[0_0_40px_rgba(0,0,0,0.8)] translate-y-4"
                        />
                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div className="flex flex-col text-center lg:text-left order-1 lg:order-2 self-center pb-8 lg:pb-20">
                    <h1 className="hero-title invisible font-display italic text-4xl md:text-7xl font-medium leading-tight mb-6 drop-shadow-lg">
                        “Assieds-toi. <br className="hidden md:block" /> Faut qu’on parle.”
                    </h1>

                    <div className="hero-subtitle invisible mb-8 text-base md:text-xl text-fa-ivory/80 max-w-xl mx-auto lg:mx-0">
                        <p className="mb-4 font-medium text-fa-ivory">Vivre à 2 c'est simple, il suffit d’apprendre.</p>
                        <p className="mb-4">Résultat : on s’aime… mais on se détruit à force de mal se parler. Chaque discussion finit invariablement en tension, silence ou conflit.</p>
                        <p className="text-fa-ivory/70 text-base">Tu portes tout, émotionnellement et mentalement, au point de douter : est-ce « un mauvais moment » à passer, ou est-ce « la mauvaise personne » ?</p>
                    </div>

                    <div className="hero-actions invisible flex flex-col sm:flex-row gap-3 w-full justify-center lg:justify-start">
                        <a href="#vsl" className="btn-magnetic w-full sm:w-auto py-4 px-8 rounded-full bg-fa-neon-pink hover:bg-pink-500 text-fa-deep font-bold shadow-[0_0_20px_rgba(255,0,127,0.4)] text-center text-base md:text-lg z-20">
                            Regarder la vidéo
                        </a>
                        <a href="#candidature" className="btn-candidature btn-magnetic w-full sm:w-auto py-4 px-8 rounded-full border border-fa-ivory/20 hover:bg-black/10 font-semibold text-center backdrop-blur-md bg-fa-deep/30 text-base md:text-lg z-20">
                            Réserver
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
