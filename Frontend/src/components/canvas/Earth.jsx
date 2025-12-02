import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 1.8 : 2.4}
      position={[0, 0, 0]}
      rotation-y={0}
    />
  );
};

export default function EarthCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const q = window.matchMedia("(max-width: 600px)");
    setIsMobile(q.matches);
    const l = (e) => setIsMobile(e.matches);
    q.addEventListener("change", l);
    return () => q.removeEventListener("change", l);
  }, []);

  return (
    <Canvas
      shadows={false}
      camera={{ fov: 40, position: [-3, 2, 6] }}
      dpr={[1, 1.5]}
      gl={{ powerPreference: "low-power" }} 
      className="w-full h-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
