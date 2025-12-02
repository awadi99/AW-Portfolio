import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { desktop } from "./../../assets/index.js";

// 3D MODEL
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

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const ua = navigator.userAgent;

      // True mobile detection
      const isReallyMobile =
        /Android|iPhone|iPad|iPod/i.test(ua) && !/Tablet|iPad/i.test(ua);

      const smallScreen = window.innerWidth < 768;

      setIsMobile(isReallyMobile || smallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // MOBILE → IMAGE ONLY
  if (isMobile) {
    return (
      <div className="absolute -top-20 right-0 w-full h-full flex items-end justify-center pointer-events-none">
        <img
          src={desktop}
          alt="mobile-computer"
          className="
          h-[450px]
            w-[900px]      
            max-w-[90%]    
            mb-[-40px]     
            opacity-100
            animate-float
          "
        />
      </div>
    );
  }
  // DESKTOP → 3D CANVAS
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
