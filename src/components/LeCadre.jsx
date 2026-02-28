import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LeCadre() {
    const sectionRef = useRef();
    const leftColRef = useRef();
    const rightColRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Pin the left column while the right column scrolls
            // We use matchMedia to only pin on desktop/tablet to avoid weird mobile scrolling
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: leftColRef.current,
                    pinSpacing: false, // Don't add extra space, just fix it
                });

                // Animate right cards fading/sliding in as they scroll
                const cards = gsap.utils.toArray('.cadre-card');
                cards.forEach((card, i) => {
                    gsap.fromTo(card,
                        { autoAlpha: 0, y: 100, scale: 0.95 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%", // Trigger when top of card hits 85% viewport
                            }
                        }
                    );
                });
            });

            // Mobile specific animations (just fade in, no pinning)
            mm.add("(max-width: 767px)", () => {
                gsap.fromTo(leftColRef.current,
                    { autoAlpha: 0, y: 40 },
                    {
                        autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out',
                        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
                    }
                );
                const cards = gsap.utils.toArray('.cadre-card');
                cards.forEach((card, i) => {
                    gsap.fromTo(card,
                        { autoAlpha: 0, y: 30 },
                        {
                            autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out',
                            scrollTrigger: { trigger: card, start: "top 90%" }
                        }
                    );
                });
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const cards = [
        { label: "MINDSET", text: "Pas de tourisme", desc: "Cet accompagnement s'adresse à ceux qui sont prêts à s'investir réellement.", active: false },
        { label: "ATTENTE", text: "Pas de “c’est réglé en 1 séance”", desc: "Les changements profonds prennent du temps. C'est un processus continu.", active: false },
        { label: "RÉALITÉ", text: "Oui : effort + vérité + clarté", desc: "La recette pour recréer une dynamique saine.", active: true }
    ];

    return (
        <section id="cadre" ref={sectionRef} className="bg-[#0a0a0f] relative overflow-hidden border-y border-black/5">
            {/* Subtle background glow connecting to Hero/VSL */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-fa-neon-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 px-6 py-24 md:py-48">

                {/* Left Column: Pinned Editorial Statement */}
                <div ref={leftColRef} className="flex flex-col justify-center h-fit md:h-[60vh] z-10">
                    <h2 className="font-display italic text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-fa-ivory mb-6 tracking-tight drop-shadow-xl">
                        Je ne “répare” <br />
                        <span className="text-4xl md:text-6xl lg:text-[4.5rem]">pas ton couple.</span>
                    </h2>
                    <h2 className="font-display italic text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.1] text-fa-neon-pink drop-shadow-[0_0_20px_rgba(255,0,127,0.5)] mb-10">
                        Je te rends <br className="hidden md:block" />
                        responsable.
                    </h2>
                    <p className="text-lg md:text-xl text-fa-ivory/60 max-w-md font-medium leading-relaxed">
                        Je ne te donne pas des phrases magiques pour “changer l’autre”.
                        Je te donne des questions et un cadre pour changer la dynamique.
                    </p>
                </div>

                {/* Right Column: Scrolling Concept Cards */}
                <div ref={rightColRef} className="flex flex-col gap-12 md:py-[10vh] md:pb-[30vh] z-10 items-center md:items-start">
                    {cards.map((bullet, i) => (
                        <div key={i} className={`cadre-card w-full max-w-md flex flex-col p-8 md:p-10 rounded-3xl backdrop-blur-xl border ${bullet.active ? 'bg-fa-ivory/10 border-fa-neon-pink/40 shadow-[0_0_40px_rgba(255,0,127,0.1)]' : 'glass border-black/10'} transition-all duration-300`}>
                            <span className={`text-xs md:text-sm mb-4 font-mono tracking-[0.2em] font-bold ${bullet.active ? 'text-fa-neon-pink' : 'text-fa-ivory/40'}`}>
                                {bullet.label}
                            </span>
                            <h3 className={`font-bold text-2xl md:text-3xl mb-4 leading-tight ${bullet.active ? 'text-fa-ivory font-display italic' : 'text-fa-ivory/80'}`}>
                                {bullet.text}
                            </h3>
                            <p className={`text-sm md:text-base leading-relaxed ${bullet.active ? 'text-fa-ivory/90' : 'text-fa-ivory/50'}`}>
                                {bullet.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
