"use client";

import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";

function Model(props: any) {
  const { scene, nodes, materials } = useGLTF("./stemplayer.glb");
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 25 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <PresentationControls
          global
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / -20, Math.PI / 10]}
          azimuth={[-Math.PI / -4, Math.PI / 1.8]}
        >
          <Model position={[0, -1.4, 0]} scale={1} />
        </PresentationControls>
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.75}
          scale={10}
          blur={3}
          far={4}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
