import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React from "react";
import CarModel from "./CarModel";
import Ground from "./Plane";
import RingsModel from "./Rings";

export default function CarShow() {

    const SpotLight = () => {
        return (
            <React.Fragment>
                <spotLight 
                color={[1, 0.25, 0.7]}
                intensity={1.5}
                angle={0.6}
                penumbra={0.5}
                position={[5,5,0]}
                castShadow
                shadowBias={-0.0001}
                />
                <spotLight 
                color={[0.14, 0.5, 1]}
                intensity={2}
                angle={0.6}
                penumbra={0.5}
                position={[-5,5,0]}
                castShadow
                shadowBias={-0.0001}
                />
            </React.Fragment>
        )
    }

    const PostProcessingData = () => {
        return (
            <EffectComposer>
                <Bloom
                    intensity={1.3}
                    width={300}
                    height={300}
                    kernelSize={5}
                    luminanceThreshold={0.15}
                    luminanceSmoothing={0.025}
                />
                {/* <ChromaticAberration
                    offset={[0.0005, 0.012]}
                /> */}
            </EffectComposer>
        );
    }

    return (
    <React.Fragment>
        {/* <Stars /> */}
        <OrbitControls />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
        <color args={[0, 0, 0]} attach="background"/>
        <SpotLight />
        <Ground />
        {/* <Stars/> */}
        <RingsModel />
        <CubeCamera resolution={256} frames={Infinity}>
            {(texture) => {
                return (
                    <React.Fragment>
                        <Environment map={texture} />
                        <CarModel />
                    </React.Fragment>
                );
            }
            }
        </CubeCamera>
        <PostProcessingData />
    </React.Fragment>);
  }