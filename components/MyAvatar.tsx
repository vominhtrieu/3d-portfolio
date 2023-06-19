"use client"
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react';

export default function MyAvatar() {
    // @ts-ignore
    const { nodes, scene, animations } = useGLTF('/TrieuVo1.glb');
    const { ref, mixer }: any = useAnimations(animations);

    useEffect(() => {
        mixer.clipAction(animations[0], ref.current).play();
    }, [mixer, animations, ref]);
    return <group ref={ref}>
        <primitive 
            object={scene}
            scale={1}
            position={[0, 0, 0]}
        />
    </group>
};
