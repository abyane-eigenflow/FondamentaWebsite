import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, useFBX, useTexture, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function Diamond() {
    const meshRef = useRef();

    // Load the FBX model
    const fbx = useFBX('/diamond/source/diamond.fbx');

    // Load the PBR Textures
    const [
        baseColorMap,
        emissiveMap,
        metallicMap,
        aoMap,
        opacityMap,
        roughnessMap
    ] = useTexture([
        '/diamond/textures/DiamondOutside_Base_Color.png',
        '/diamond/textures/DiamondOutside_Emissive.png',
        '/diamond/textures/DiamondOutside_Metallic.png',
        '/diamond/textures/DiamondOutside_Mixed_AO.png',
        '/diamond/textures/DiamondOutside_Opacity.png',
        '/diamond/textures/DiamondOutside_Roughness.png',
    ]);

    // Extract exactly the geometry from FBX and normalize its size and center
    const geometry = useMemo(() => {
        let geo = null;
        fbx.traverse((child) => {
            if (child.isMesh && !geo) {
                geo = child.geometry.clone(); // Extract first geometry found
            }
        });

        if (geo) {
            geo.computeBoundingBox();
            const size = new THREE.Vector3();
            geo.boundingBox.getSize(size);

            const maxDim = Math.max(size.x, size.y, size.z);
            if (maxDim > 0) {
                geo.scale(3 / maxDim, 3 / maxDim, 3 / maxDim);
            }

            // Recenter to origin
            geo.computeBoundingBox();
            const center = new THREE.Vector3();
            geo.boundingBox.getCenter(center);
            geo.translate(-center.x, -center.y, -center.z);

            geo.computeVertexNormals();
        }

        return geo;
    }, [fbx]);

    // Rotate slowly over time
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={1.5}
            floatingRange={[-0.1, 0.1]}
        >
            {geometry && (
                <mesh ref={meshRef} geometry={geometry} rotation={[Math.PI / 8, 0, 0]} castShadow receiveShadow>
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={1}
                        thickness={2}
                        roughnessMap={roughnessMap}
                        roughness={0.1}
                        transmission={1}
                        ior={2.4}
                        chromaticAberration={0.15}
                        anisotropy={0.3}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        color="#ffffff"
                        attenuationDistance={2}
                        attenuationColor="#ffffff"
                    />
                </mesh>
            )}

            {/* Intense center light to simulate internal reflection (pure white) */}
            <pointLight color="#ffffff" intensity={2} distance={10} decay={2} />
        </Float>
    );
}
