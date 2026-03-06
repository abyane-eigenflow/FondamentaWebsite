import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function SocialProofAndOffers() {
    const reviews = [
        { name: "S. & L.", text: "On ne se parlait plus qu'à travers les enfants. La première séance a posé un miroir impossible à fuir." },
        { name: "M.", text: "Je suis venu seul pour me préparer. J'ai compris 3 ans de schémas répétitifs." },
        { name: "A. & T.", text: "Piquante, oui. Mais surtout d'une clarté redoutable. Notre communication a totalement changé." },
        { name: "E.", text: "En général, la clarté arrive vite. La transformation, elle, se construit. C'est exactement ça." }
    ];

    const marqueeRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Simple infinite marquee
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 30,
                ease: 'linear'
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative pb-24">

            {/* Social Proof Marquee */}
            <div className="py-24 overflow-hidden border-b border-black/5">
                <h2 className="text-center font-display italic text-3xl md:text-5xl text-fa-deep mb-16">
                    “Ils étaient au bord de la rupture…”
                </h2>

                <div className="flex whitespace-nowrap" ref={marqueeRef}>
                    {/* Duplicate the reviews array to make it seamless */}
                    {[...reviews, ...reviews, ...reviews].map((review, idx) => (
                        <div key={idx} className="inline-block p-8 mx-4 w-80 md:w-96 rounded-[2rem] bg-white border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] shrink-0 whitespace-normal">
                            <div className="text-fa-bright-blue mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-lg">★</span>
                                ))}
                            </div>
                            <p className="text-fa-deep/80 italic mb-6">"{review.text}"</p>
                            <p className="font-bold text-fa-deep">— {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Testimonials Slider */}
            <div className="w-full py-24" id="resa">
                <div className="text-center md:max-w-2xl mx-auto mb-12 px-4">
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-fa-deep mb-6">
                        Ils ont transformé leur couple.
                    </h2>
                    <p className="text-fa-deep/70 text-lg">
                        Découvrez les histoires de ceux qui ont osé faire le travail.
                    </p>
                </div>

                {/* The Horizonal Native Scroll Container */}
                <div className="flex overflow-x-auto gap-4 md:gap-8 px-4 md:px-12 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                    {/* Dummy padding block to center first item on large screens */}
                    <div className="shrink-0 w-2 md:w-16"></div>

                    {[
                        { name: "Sarah & Lucas", quote: "On ne se parlait plus qu'à travers les enfants. La première séance a posé un miroir impossible à fuir.", img: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop" },
                        { name: "Marc", quote: "J'ai compris 3 ans de schémas répétitifs en seulement quelques séances.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" },
                        { name: "Anna & Tom", quote: "Piquante, oui. Mais surtout d'une clarté redoutable. Notre communication a totalement changé.", img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=800&auto=format&fit=crop" },
                        { name: "Elisa", quote: "En général, la clarté arrive vite. La transformation, elle, se construit. C'est exactement ça.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
                    ].map((video, idx) => (
                        <div
                            key={idx}
                            className="relative w-[80vw] sm:w-[350px] md:w-[400px] aspect-[9/16] shrink-0 snap-center rounded-[2.5rem] overflow-hidden group cursor-pointer border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-black"
                        >
                            {/* Placeholder Image */}
                            <img
                                src={video.img}
                                alt={`Témoignage ${video.name}`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale opacity-60 mix-blend-luminosity group-hover:grayscale-0 group-hover:opacity-80"
                            />

                            {/* Gradient Overlay for Text (kept dark for contrast with white text) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 duration-500 group-hover:via-black/20"></div>

                            {/* Hover Neon Sweep */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-fa-bright-blue to-fa-neon-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20"></div>

                            {/* Play Button Center */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:border-fa-bright-blue/50 group-hover:bg-white/20 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                                <Play className="w-8 h-8 text-white fill-white translate-x-1" />
                            </div>

                            {/* Text Content Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="font-bold text-white text-2xl md:text-3xl mb-3 drop-shadow-md">{video.name}</h3>
                                <p className="font-display italic text-white/90 text-base md:text-lg leading-snug drop-shadow-md">
                                    "{video.quote}"
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Dummy padding block to let the last item reach the center on scroll */}
                    <div className="shrink-0 w-8 md:w-32"></div>
                </div>

                {/* Call to action below the slider */}
                <div className="text-center mt-8 px-4 relative z-10">
                    <a href="#candidature" className="btn-candidature btn-magnetic inline-block px-10 py-5 bg-fa-deep text-fa-ivory rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all">
                        Candidater à l'académie
                    </a>
                </div>
            </div>

            {/* RDV LIVE Strip */}
            <div className="w-full bg-fa-neon-pink text-fa-deep py-8 px-4 relative overflow-hidden flex flex-col items-center justify-center text-center">
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                    Rejoignez-nous en direct : Tous les vendredis à 12h — Live Q/R
                </h3>
                <p className="font-medium text-sm md:text-base opacity-80 max-w-3xl">
                    Tu viens avec ta situation. Je te réponds avec des questions qui changent tout.
                </p>
            </div>

        </section>
    );
}
