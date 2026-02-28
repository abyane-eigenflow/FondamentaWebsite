import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
    const sectionRef = useRef();
    const mindsetRef = useRef();
    const founderRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {

            // --- Part 1: Responsabilisation (Mindset) Animations ---
            gsap.fromTo('.mindset-text',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: mindsetRef.current,
                        start: 'top 75%',
                    }
                }
            );

            gsap.fromTo('.mindset-pill',
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: '.mindset-pills-container',
                        start: 'top 80%',
                    }
                }
            );

            // --- Part 2: Founder (Positionnement) Animations ---
            gsap.fromTo('.founder-portrait',
                { opacity: 0, x: -50, filter: 'blur(10px)' },
                {
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: founderRef.current,
                        start: 'top 70%',
                    }
                }
            );

            gsap.fromTo('.founder-badge',
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.founder-portrait',
                        start: 'top 60%',
                    }
                }
            );

            gsap.fromTo('.founder-content > *',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.founder-content',
                        start: 'top 75%',
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const demands = [
        "Du courage",
        "De l'humilité",
        "De la confrontation saine",
        "De la responsabilité"
    ];

    const credentials = [
        "24 ans d’accompagnement humain",
        "Neurosciences appliquées",
        "Travail en psychiatrie",
        "Parcours personnel de résilience"
    ];

    const notPromised = [
        "Zéro conflit",
        "Un partenaire parfait",
        "Une solution en 1 séance"
    ];

    const promised = [
        "De la clarté",
        "Des outils",
        "Un cadre",
        "Une progression"
    ];

    return (
        <section id="manifesto" ref={sectionRef} className="bg-fa-deep relative overflow-hidden">

            {/* Ambient Backgrounds */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] bg-fa-bright-blue/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-fa-neon-pink/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3"></div>

            {/* PART 1: Responsabilisation (Mindset) */}
            <div ref={mindsetRef} className="py-24 md:py-32 px-4 border-b border-white/5 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    <div className="mb-12">
                        <h2 className="mindset-text font-display text-2xl md:text-4xl text-fa-ivory/50 italic mb-4">
                            "Je ne vais pas vous apprendre à changer votre partenaire."
                        </h2>
                        <h3 className="mindset-text font-display font-bold text-4xl md:text-6xl lg:text-7xl text-fa-ivory leading-tight drop-shadow-lg">
                            Je vais vous apprendre à devenir <span className="text-fa-neon-pink inline-block">la bonne personne</span> dans la relation.
                        </h3>
                    </div>

                    <div className="mindset-text mb-16 max-w-2xl bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm">
                        <p className="font-medium text-xl md:text-2xl text-fa-ivory/90 mb-2">
                            Vous voulez une relation extraordinaire ?
                        </p>
                        <p className="font-bold text-2xl md:text-3xl text-fa-bright-blue">
                            Devenez une personne extraordinaire dans la relation.
                        </p>
                    </div>

                    <div className="w-full max-w-3xl mb-16">
                        <p className="mindset-text text-fa-ivory/70 tracking-widest uppercase text-sm font-bold mb-8">Ce travail demande :</p>
                        <div className="mindset-pills-container flex flex-wrap justify-center gap-3 md:gap-4">
                            {demands.map((demand, i) => (
                                <div key={i} className="mindset-pill glass px-6 py-3 rounded-full border border-white/10 text-fa-ivory font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-fa-neon-pink"></div>
                                    {demand}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mindset-text">
                        <p className="font-display italic text-2xl md:text-4xl text-fa-ivory/80 leading-snug">
                            Ce n'est pas magique.<br />
                            Ce n'est pas instantané.<br />
                            <span className="text-fa-ivory font-bold not-italic mt-2 block drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Mais c'est transformateur.</span>
                        </p>
                    </div>

                </div>
            </div>

            {/* PART 2: Positionnement (Maïra) */}
            <div ref={founderRef} className="py-24 md:py-32 px-4 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left: Portrait & Credentials */}
                    <div className="lg:col-span-5 relative">
                        {/* Portrait Frame */}
                        <div className="founder-portrait relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-fa-deep via-fa-deep/20 to-transparent z-10"></div>
                            <img
                                src="/maira-portrait.jpg"
                                alt="Maïra"
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Name */}
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <h3 className="font-display font-bold text-4xl text-fa-ivory mb-2 drop-shadow-md">Je suis Maïra</h3>
                                <p className="text-fa-ivory/80 font-medium drop-shadow whitespace-pre-line text-sm md:text-base">
                                    Auteur du livre « Vivre à 2, c’est simple » et je vous apprends l’art de construire son couple.
                                </p>
                            </div>
                        </div>

                        {/* Floating Credentials */}
                        <div className="absolute -right-4 md:-right-12 top-12 bottom-12 flex flex-col justify-around z-30 pointer-events-none hidden sm:flex">
                            {credentials.map((cred, i) => (
                                <div key={i} className="founder-badge glass whitespace-nowrap px-5 py-3 rounded-2xl border border-white/10 text-fa-ivory text-sm font-medium shadow-xl translate-x-4">
                                    {cred}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Credentials list (visible only on small screens) */}
                        <div className="mt-8 flex flex-col gap-3 sm:hidden">
                            {credentials.map((cred, i) => (
                                <div key={i} className="founder-badge glass px-5 py-3 rounded-2xl border border-white/10 text-fa-ivory text-sm font-medium shadow-xl text-center">
                                    {cred}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Pitch & Promise Matrix */}
                    <div className="lg:col-span-7 founder-content flex flex-col">

                        <div className="mb-12">
                            <h2 className="font-display font-bold text-5xl md:text-7xl text-fa-ivory mb-6 leading-tight">
                                Je ne <span className="text-fa-neon-pink line-through opacity-80 decoration-fa-neon-pink/50">sauve</span> pas<br />
                                les couples.
                            </h2>
                        </div>

                        {/* Promise Matrix */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4">

                            {/* Not Promised Box */}
                            <div className="glass p-8 rounded-[2rem] border border-white/5 bg-black/20">
                                <h4 className="text-fa-ivory/60 font-bold tracking-wider uppercase text-sm mb-6 flex items-center gap-2">
                                    <X className="w-5 h-5 text-fa-ivory/40" />
                                    Je ne vous promets pas :
                                </h4>
                                <ul className="space-y-4">
                                    {notPromised.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-fa-ivory/70 text-lg">
                                            <div className="w-1.5 h-1.5 rounded-full bg-fa-neon-pink/50 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Promised Box */}
                            <div className="glass p-8 rounded-[2rem] border border-fa-bright-blue/20 bg-fa-bright-blue/5 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-fa-bright-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h4 className="text-fa-bright-blue font-bold tracking-wider uppercase text-sm mb-6 flex items-center gap-2 relative z-10">
                                    <Check className="w-5 h-5" />
                                    Je vous promets :
                                </h4>
                                <ul className="space-y-4 relative z-10">
                                    {promised.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-fa-ivory text-lg font-medium">
                                            <div className="w-2 h-2 rounded-full bg-fa-bright-blue shadow-[0_0_10px_rgba(0,102,255,0.8)] shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        <div className="mt-16 text-center md:text-left">
                            <a href="#candidature" className="btn-candidature btn-magnetic inline-block px-10 py-5 bg-fa-ivory text-fa-deep rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                                Commencer la transformation
                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
}
