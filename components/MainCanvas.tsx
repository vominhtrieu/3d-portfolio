"use client";
import { Canvas } from "@react-three/fiber";

export default function MainCanvas({children}: any) {
    return <Canvas style={{
        width: "100%",
        height: "100%",
    }}
    camera={{
        position: [0, 1.55, 1.0],
        rotation: [0, 0, 0],
        fov: 45,
        near: 0.1,
        far: 1000,
    }}>        
        {children}
        <spotLight intensity={1} position={[0,2,2]}  />
        <spotLight intensity={1} position={[0,0,2]}  />
    </Canvas>;
}
