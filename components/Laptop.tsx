"use client"
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react';

export default function Laptop() {
    // @ts-ignore
    const { scene } = useGLTF('/Laptop.glb');

    return <primitive
        object={scene}
        scale={0.01}
        rotation={[0, 0, 0]}
        position={[3, 0, -2]}
    />
};
