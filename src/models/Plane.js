import { MeshReflectorMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { LinearEncoding, RepeatWrapping } from "three";
import { TextureLoader } from "three";

export default function Ground() {
    const [rough, normal] = useLoader(TextureLoader, [
        process.env.PUBLIC_URL + "textures/terrain-roughness.jpg",
        process.env.PUBLIC_URL + "textures/terrain-normal.jpg"
    ]);

    useEffect(() => {
        [normal, rough].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5,5);
        });
        normal.encoding = LinearEncoding;
        // rough.encoding = LinearEncoding;
    }, [normal, rough]);

    useFrame((state) => {
        const t = -state.clock.getElapsedTime() * 0.08;
        rough.offset.set(0, t);
        normal.offset.set(0, t);
    })

    return (
        <React.Fragment>
            <mesh rotation={[-Math.PI*0.5, 0, 0]} castShadow receiveShadow>
                <planeGeometry args={[50,50]} />
                <MeshReflectorMaterial
                    envMapIntensity={0}
                    normalMap={normal}
                    normalScale={[0.15, 0.15]}
                    roughnessMap={rough}
                    dithering={true}
                    color={[0.015, 0.015, 0.015]}
                    roughness={0.7}
                    blur={[1000, 400]}
                    mixBlur={30}
                    mixStrength={80}
                    mixContrast={1}
                    resolution={1024}
                    mirror={0}
                    depthScale={0.01}
                    minDepthThreshold={0.9}
                    maxDepthThreshold={1}
                    depthToBlurRatioBias={0.25}
                    debug={0}
                    reflectorOffset={0.2}
                />
            </mesh>
        </React.Fragment>
    );
}