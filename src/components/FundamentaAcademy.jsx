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
            // Aurora Borealis Animation
            gsap.to('.aurora-orb-1', {
                rotation: 360,
                scale: 1.2,
                duration: 20,
                ease: 'none',
                repeat: -1,
                yoyo: true
            });
            gsap.to('.aurora-orb-2', {
                rotation: -360,
                scale: 1.5,
                duration: 25,
                ease: 'none',
                repeat: -1,
                yoyo: true
            });
            gsap.to('.aurora-orb-3', {
                xPercent: 20,
                yPercent: 20,
                duration: 15,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
            });


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
        <section id="fundamenta-academy" ref={sectionRef} className="py-32 px-4 relative overflow-hidden bg-transparent">
            {/* The Aurora Borealis Halo */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-[100px] z-10"></div>
                <div className="aurora-orb-1 absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[1000px] bg-fa-bright-blue/30 blur-[120px] rounded-full mix-blend-multiply opacity-70"></div>
                <div className="aurora-orb-2 absolute top-[10%] right-[-10%] w-[70vw] h-[70vw] max-w-[1200px] bg-fa-neon-pink/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
                <div className="aurora-orb-3 absolute top-[40%] left-[20%] w-[50vw] h-[50vw] max-w-[900px] bg-purple-400/20 blur-[120px] rounded-full mix-blend-multiply opacity-50"></div>

                {/* Smooth fade to pure white at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-white via-white/80 to-transparent z-20"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-20 flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-[5.5rem] tracking-tighter mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 overflow-hidden">
                        <span className="academy-title-word text-fa-bright-blue drop-shadow-[0_0_20px_rgba(0,102,255,0.2)]">FUNDAMENTA</span>
                        <span className="academy-title-word text-fa-neon-pink drop-shadow-[0_0_20px_rgba(255,0,127,0.2)]">ACADEMY</span>
                    </h2>

                    <p className="academy-subtitle text-lg md:text-2xl text-fa-deep/80 font-medium max-w-2xl mx-auto">
                        Dans Fundamenta Academy, j'ai créé une <span className="text-fa-deep italic font-bold">safe place</span> où vous allez apprendre à :
                    </p>
                </div>

                {/* The Asymmetric Bento Grid */}
                <div className="academy-grid w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-40 auto-rows-[250px] md:auto-rows-[300px]">
                    {learningPoints.map((point, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className={`group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-black/10 transition-all duration-500 flex flex-col justify-end p-8 md:p-10 ${getColSpan(index)}`}
                        >
                            {/* Giant Background Number */}
                            <div className="absolute top-2 right-4 text-[8rem] md:text-[12rem] font-bold leading-none text-black/[0.02] group-hover:text-fa-neon-pink/10 transition-colors duration-500 select-none font-display pointer-events-none">
                                0{index + 1}
                            </div>

                            {/* Subtle Neon Line Sweep on Hover */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-fa-bright-blue via-fa-neon-pink to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-0 group-hover:opacity-100"></div>

                            {/* Content */}
                            <h3 className="relative z-10 font-display italic font-bold text-2xl md:text-4xl text-fa-deep/90 group-hover:text-black transition-colors duration-300">
                                {point}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* The Punchline Conclusion */}
                <div className="academy-conclusion text-center max-w-4xl mx-auto relative">
                    <div className="absolute inset-0 bg-fa-bright-blue/5 blur-[100px] rounded-full scale-150 -z-10"></div>
                    <h3 className="font-display italic text-3xl md:text-5xl lg:text-6xl text-fa-deep leading-[1.2] font-medium">
                        Parce qu’un couple ne se sépare pas par manque d’amour.<br className="hidden md:block" />
                        <span className="block mt-4 text-fa-deep/70">Il se sépare par manque de</span>
                        <span className="text-fa-neon-pink block mt-2 drop-shadow-[0_0_20px_rgba(255,0,127,0.3)]">compétences relationnelles.</span>
                    </h3>
                </div>

            </div>
        </section>
    );
}
