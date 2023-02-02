import CarShow from "./models/CarShow";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function App() {
  return (
    <Suspense>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
