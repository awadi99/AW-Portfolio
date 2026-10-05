import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// import { desktop } from "./../../assets/index.js";

/* ========================================
   3D MODEL
======================================== */

const Computers = () => {
  const computer = useGLTF(
    "/desktop_pc/scene.gltf"
  );

  return (
    <mesh>
      <hemisphereLight
        intensity={1.2}
        groundColor="black"
      />

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

/* ========================================
   COMPUTER CANVAS
======================================== */

const ComputersCanvas = () => {
  /*
    MOBILE LOGIC TEMPORARILY DISABLED

    const [isMobile, setIsMobile] =
      useState(false);

    useEffect(() => {
      const checkDevice = () => {
        ...
      };

      checkDevice();

      window.addEventListener(
        "resize",
        checkDevice
      );

      return () =>
        window.removeEventListener(
          "resize",
          checkDevice
        );
    }, []);

    if (isMobile) {
      return (
        <div>
          <img
            src={desktop}
            alt="mobile-computer"
          />
        </div>
      );
    }
  */

  // DESKTOP → 3D CANVAS
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      camera={{
        position: [15, 3, 5],
        fov: 30,
      }}
      className="absolute bottom-0 right-0 w-full h-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />

        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;