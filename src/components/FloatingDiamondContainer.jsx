import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Diamond from './Diamond3D';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingDiamondContainer() {
    const containerRef = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // First animation: Appear when scrolling past Hero into VSL
            ScrollTrigger.create({
                trigger: '#vsl',
                start: 'top 80%',
                onEnter: () => gsap.to(containerRef.current, { autoAlpha: 1, scale: 1, duration: 1, ease: 'power3.out' }),
                onLeaveBack: () => gsap.to(containerRef.current, { autoAlpha: 0, scale: 0.5, duration: 0.8, ease: 'power3.inOut' }),
            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="fixed inset-0 z-[60] pointer-events-none flex justify-center"
            style={{ filter: 'drop-shadow(0px 0px 25px rgba(255,255,255,0.4))' }}
        >
            <div ref={wrapperRef} className="absolute top-4 w-full flex justify-center">
                <div
                    ref={containerRef}
                    className="w-20 h-20 opacity-0 scale-50"
                >
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[10, 10, 10]} intensity={3} />
                        <directionalLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />

                        <Suspense fallback={null}>
                            <Diamond />
                            <Environment preset="studio" />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
}
