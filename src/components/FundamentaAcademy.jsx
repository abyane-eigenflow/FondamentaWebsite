import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FundamentaAcademy() {
    const sectionRef = useRef();
    const cardsRef = useRef([]);

    const learningPoints = [
        "Gérer vos émotions sans accuser",
        "Exprimer vos besoins sans attaquer",
        "Écouter sans vous défendre",
        "Confronter sans détruire",
        "Soutenir sans contrôler",
        "Créer une troisième place : le dialogue"
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo('.academy-title-word',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );

            gsap.fromTo('.academy-subtitle',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.4,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );

            // Cards Stagger Animation (Bento Box)
            gsap.fromTo(cardsRef.current,
                { autoAlpha: 0, y: 60, scale: 0.9 },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'back.out(1.1)',
                    scrollTrigger: {
                        trigger: '.academy-grid',
                        start: 'top 80%',
                    }
                }
            );

            // Conclusion Animation
            gsap.fromTo('.academy-conclusion',
                { autoAlpha: 0, scale: 0.95, filter: 'blur(10px)' },
                {
                    autoAlpha: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.academy-conclusion',
                        start: 'top 85%',
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Layout configuration for the asymmetric grid
    const getColSpan = (index) => {
        // Desktop layouts:
        // Item 0: spans 2 cols
        // Item 1: spans 1 col
        // Item 2: spans 1 col
        // Item 3: spans 2 cols
        // Item 4: spans 2 cols
        // Item 5: spans 1 col
        // Total columns = 3
        const spanMap = {
            0: "md:col-span-2",
            1: "md:col-span-1",
            2: "md:col-span-1",
            3: "md:col-span-2",
            4: "md:col-span-2",
            5: "md:col-span-1"
        };
        return spanMap[index] || "md:col-span-1";
    };

    return (
        <section id="fundamenta-academy" ref={sectionRef} className="py-32 px-4 relative bg-fa-deep overflow-hidden">
            {/* Background ambient light */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] bg-fa-bright-blue/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-[5.5rem] tracking-tighter mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 overflow-hidden">
                        <span className="academy-title-word text-fa-bright-blue drop-shadow-[0_0_20px_rgba(0,102,255,0.3)]">FUNDAMENTA</span>
                        <span className="academy-title-word text-fa-neon-pink drop-shadow-[0_0_20px_rgba(255,0,127,0.3)]">ACADEMY</span>
                    </h2>

                    <p className="academy-subtitle text-lg md:text-2xl text-fa-ivory/80 font-medium max-w-2xl mx-auto">
                        Dans Fundamenta Academy, j'ai créé une <span className="text-fa-ivory italic">safe place</span> où vous allez apprendre à :
                    </p>
                </div>

                {/* The Asymmetric Bento Grid */}
                <div className="academy-grid w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-40 auto-rows-[250px] md:auto-rows-[300px]">
                    {learningPoints.map((point, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className={`glass group relative overflow-hidden rounded-[2rem] border border-white/5 hover:border-fa-neon-pink/30 hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-end p-8 md:p-10 ${getColSpan(index)}`}
                        >
                            {/* Giant Background Number */}
                            <div className="absolute top-2 right-4 text-[8rem] md:text-[12rem] font-bold leading-none text-white/[0.03] group-hover:text-fa-neon-pink/10 transition-colors duration-500 select-none font-display pointer-events-none">
                                0{index + 1}
                            </div>

                            {/* Subtle Neon Line Sweep on Hover */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-fa-bright-blue via-fa-neon-pink to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-0 group-hover:opacity-100"></div>

                            {/* Content */}
                            <h3 className="relative z-10 font-display italic font-bold text-2xl md:text-4xl text-fa-ivory/90 group-hover:text-white transition-colors duration-300 drop-shadow-md">
                                {point}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* The Punchline Conclusion */}
                <div className="academy-conclusion text-center max-w-4xl mx-auto relative">
                    <div className="absolute inset-0 bg-fa-bright-blue/10 blur-[100px] rounded-full scale-150 -z-10"></div>
                    <h3 className="font-display italic text-3xl md:text-5xl lg:text-6xl text-fa-ivory leading-[1.2] drop-shadow-xl font-medium">
                        Parce qu’un couple ne se sépare pas par manque d’amour.<br className="hidden md:block" />
                        <span className="block mt-4 text-fa-ivory/70">Il se sépare par manque de</span>
                        <span className="text-fa-neon-pink block mt-2 drop-shadow-[0_0_25px_rgba(255,0,127,0.5)]">compétences relationnelles.</span>
                    </h3>
                </div>

            </div>
        </section>
    );
}
