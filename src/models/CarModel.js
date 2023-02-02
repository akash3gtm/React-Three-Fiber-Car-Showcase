import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function CarModel() {
    const gltf = useLoader(
            GLTFLoader,
            process.env.PUBLIC_URL + "models/car/scene.gltf"
        );

    useEffect(() => {
        gltf.scene.scale.set(0.005, 0.005, 0.005);
        gltf.scene.position.set(0, -0.035, 0);
        gltf.scene.traverse((object) => {
            if(object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf]);

    useFrame((state) => {
        const t = 2*state.clock.getElapsedTime();
        const tyreGroup = gltf.scene.children[0].children[0].children[0];
        tyreGroup.children[0].rotation.x = t;
        tyreGroup.children[2].rotation.x = t;
        tyreGroup.children[4].rotation.x = t;
        tyreGroup.children[6].rotation.x = t;
    });
    
    return (
        <primitive object={gltf.scene} />
    );
}