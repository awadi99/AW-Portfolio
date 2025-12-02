import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.2} groundColor='black' />
      <pointLight intensity={1} />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.75}
        position={isMobile ? [0, -1.5, -0.8] : [0, -2.2, -1.0]}
        
        rotation={[0, -0.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 600px)");
    setIsMobile(query.matches);

    const listener = (e) => setIsMobile(e.matches);
    query.addEventListener("change", listener);

    return () => query.removeEventListener("change", listener);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows={false}
      dpr={[1, 1.5]}
      camera={{ position: [18, 3, 7], fov: 28 }}
      className="absolute bottom-0 right-0 w-full h-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
