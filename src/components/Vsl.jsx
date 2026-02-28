import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, MessageCircle, RefreshCw, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Vsl() {
    const sectionRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Cinematic 3D scale reveal for the video placeholder on scroll
            gsap.fromTo('.vsl-video-container',
                {
                    scale: 0.8,
                    rotationX: 15,
                    y: 60,
                    opacity: 0.3,
                    filter: 'blur(20px)'
                },
                {
                    scale: 1,
                    rotationX: 0,
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: 1 // smooth scrubbing effect tied to scroll
                    }
                }
            );


            // Reveal CTAs
            gsap.fromTo('.vsl-cta',
                { autoAlpha: 0, y: 20 },
                {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.vsl-video-container',
                        start: 'bottom 80%',
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="vsl" ref={sectionRef} className="py-24 px-4 relative bg-fa-deep overflow-hidden" style={{ perspective: '1000px' }}>
            <div className="max-w-5xl mx-auto flex flex-col items-center">

                {/* Cinematic Video Placeholder Container */}
                <div className="vsl-video-container w-full aspect-video rounded-3xl relative p-[2px] mb-8 overflow-hidden max-w-4xl mx-auto shadow-2xl z-10 block origin-bottom">
                    <div className="absolute inset-0 bg-gradient-to-r from-fa-neon-pink to-fa-bright-blue animate-pulse rounded-3xl opacity-50 blur-sm"></div>
                    <div className="glass w-full h-full rounded-3xl relative z-10 flex items-center justify-center cursor-pointer group hover:bg-black/10 transition-colors duration-500 overflow-hidden">
                        {/* Fake video thumbnail blur / glow */}
                        <div className="absolute inset-0 bg-fa-navy/60 backdrop-blur-md"></div>

                        {/* Play Button */}
                        <div className="h-24 w-24 rounded-full bg-fa-ivory/10 flex items-center justify-center backdrop-blur-md border border-black/20 group-hover:scale-110 transition-transform duration-500 z-20">
                            <Play className="w-10 h-10 text-fa-ivory ml-1 drop-shadow-lg" fill="currentColor" />
                        </div>

                        {/* Ambient inner glow */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-fa-neon-pink/20 blur-[80px] rounded-full"></div>
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-fa-bright-blue/20 blur-[80px] rounded-full"></div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row gap-4">
                    <a href="#candidature" className="btn-candidature vsl-cta btn-magnetic px-8 py-4 bg-fa-ivory text-fa-deep font-bold rounded-full text-center shadow-[0_0_20px_rgba(250,248,245,0.2)]">
                        Je prends une première séance
                    </a>
                    <a href="#candidature" className="btn-candidature vsl-cta btn-magnetic px-8 py-4 border border-black/20 hover:bg-black/5 rounded-full text-center font-medium">
                        Je découvre le programme Fundamenta
                    </a>
                </div>

            </div>
        </section>
    );
}
