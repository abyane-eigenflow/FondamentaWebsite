import React, { useState } from 'react';
import { ShieldCheck, HeartPulse } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Segmentation() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const paths = [
        {
            title: "Je suis en couple",
            icon: <HeartPulse className="w-12 h-12 mb-6 text-fa-neon-pink" />,
            glowColor: "group-hover:shadow-[0_0_40px_rgba(255,0,127,0.3)]",
            borderColor: "group-hover:border-fa-neon-pink/50",
            bullets: [
                "On s’aime mais on se blesse",
                "On ne se comprend plus",
                "Je veux recréer du lien et une vision commune"
            ]
        },
        {
            title: "Je suis célibataire",
            icon: <ShieldCheck className="w-12 h-12 mb-6 text-fa-bright-blue" />,
            glowColor: "group-hover:shadow-[0_0_40px_rgba(0,127,255,0.3)]",
            borderColor: "group-hover:border-fa-bright-blue/50",
            bullets: [
                "Je répète les mêmes schémas",
                "J’attire toujours la même énergie",
                "Je veux être prêt(e) pour une relation saine"
            ]
        }
    ];

    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display font-medium text-center mb-16 text-fa-deep">
                    Tu veux une relation extraordinaire ?<br />
                    <span className="italic text-fa-deep/70">Deviens une personne extraordinaire.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 outline-none">
                    {paths.map((path, idx) => {
                        const isHovered = hoveredIndex === idx;
                        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== idx;

                        return (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={twMerge(
                                    "group relative p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] bg-white border shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden cursor-crosshair flex flex-col justify-center min-h-fit md:min-h-[400px]",
                                    isOtherHovered ? "opacity-50 blur-sm border-black/5" : "border-black/10 hover:border-black/20",
                                    path.glowColor
                                )}
                            >
                                <div className="relative z-10">
                                    {path.icon}
                                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-5 md:mb-8 transition-transform duration-500 group-hover:-translate-y-2 text-fa-deep">
                                        {path.title}
                                    </h3>

                                    <div className={twMerge(
                                        "flex flex-col gap-3 font-sans text-fa-deep/80 transition-all duration-500 overflow-hidden",
                                        "opacity-100 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                                    )}>
                                        {path.bullets.map((b, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-fa-deep/30"></div>
                                                <span>{b}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 md:mt-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <a href="#candidature" className="btn-candidature btn-magnetic w-full block py-4 bg-fa-deep text-fa-ivory rounded-full text-center font-bold">
                                            Réserver une première séance
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
