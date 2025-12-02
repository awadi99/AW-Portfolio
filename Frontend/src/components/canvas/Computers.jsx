import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import {desktop}  from './../../assets/index.js'

// --------------------------
// 3D MODEL
// --------------------------
const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.2} groundColor="black" />
      <pointLight intensity={0.8} />
      <primitive
        object={computer.scene}
        scale={0.65}
        position={[0, -2.4, -1.5]}
        rotation={[0, -0.2, 0]}
      />
    </mesh>
  );
};

// --------------------------
// MAIN CANVAS COMPONENT
// --------------------------
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile only once (stable)
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ---------------------------------
  // 📱 MOBILE → return IMAGE ONLY
  // ---------------------------------
  if (isMobile) {
    return (
      <div className="absolute bottom-0 right-0 w-full flex justify-end pointer-events-none">
        <img
          src={desktop}
          alt="mobile-computer"
          className="w-[180px] sm:w-[230px] mr-4 opacity-95 animate-float"
        />
      </div>
    );
  }
  

  // ---------------------------------
  // 💻 DESKTOP → return 3D CANVAS
  // ---------------------------------
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [15, 3, 5], fov: 30 }}
      className="absolute bottom-0 right-0 w-full h-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
