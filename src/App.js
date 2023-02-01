import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
function App() {
  return (
    <Canvas>
      <ambientLight color="pink" intensity={0.6} />
      <directionalLight color="red" position={[-3, -2, -1]} />
      <directionalLight color="red" position={[2, 3, 1]} />
      <OrbitControls />
      <Stars />
      <mesh>
        <boxGeometry attach={"geometry"}/>
        <meshStandardMaterial attach={"material"}/>
      </mesh>
    </Canvas>
  );
}

export default App;
