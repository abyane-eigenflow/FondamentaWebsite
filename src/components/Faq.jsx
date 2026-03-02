import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Plus, Minus } from 'lucide-react';

const QA = [
    {
        q: "Et si mon/ma partenaire ne veut pas ?",
        a: "Vous n'avez pas besoin de l'accord de l'autre pour commencer. Apprendre à changer votre propre dynamique relationnelle aura un impact direct sur la façon dont vous interagissez tous les deux."
    },
    {
        q: "Est-ce que c’est fait pour moi si je suis célibataire ?",
        a: "Absolument. Travailler sur ses compétences relationnelles en amont évite de répéter les mêmes schémas et de choisir ses partenaires par blessure ou par défaut."
    },
    {
        q: "Combien de temps ça prend ?",
        a: "Je ne promets pas de solution magique en 1 séance. La transformation demande du temps, de l'implication et de la constance. Le cadre est défini dès la première séance de diagnostic."
    },
    {
        q: "Pourquoi vous êtes ‘piquante’ ?",
        a: "Parce que la complaisance ne fait pas avancer. Mon rôle n'est pas de vous brosser dans le sens du poil, mais de vous mettre face à vos responsabilités avec beaucoup de bienveillance."
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-4 bg-white border-t border-black/5">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-16 text-fa-deep">
                    Des questions ?
                </h2>

                <div className="space-y-4">
                    {QA.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={twMerge(
                                    "border rounded-3xl overflow-hidden transition-all duration-300",
                                    isOpen ? "border-fa-neon-pink/50 bg-black/5" : "border-black/10 bg-white shadow-sm hover:shadow-md"
                                )}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left font-sans font-semibold text-lg text-fa-deep hover:text-fa-neon-pink transition-colors"
                                >
                                    <span className="pr-8">{item.q}</span>
                                    <span className="shrink-0 text-fa-deep/50">
                                        {isOpen ? <Minus className="w-5 h-5 text-fa-neon-pink" /> : <Plus className="w-5 h-5" />}
                                    </span>
                                </button>

                                <div
                                    className={twMerge(
                                        "px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out font-mono text-sm md:text-base text-fa-deep/70 leading-relaxed",
                                        isOpen ? "max-h-96 pb-6 md:pb-8 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    {item.a}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
