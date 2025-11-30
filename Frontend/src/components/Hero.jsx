import { motion } from "framer-motion";
import { styles } from "./../../style.js";
import ComputersCanvas from "./canvas/Computers.jsx";
import heroBg from "/src/assets/herobg.png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-36 left-8 sm:left-20">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-purple-600"></div>
          <div className="w-1 h-40 sm:h-72 bg-purple-700"></div>
        </div>

        <h1 className="text-white text-4xl sm:text-6xl font-bold mt-5">
          Hi, I'm <span className="text-purple-500">Aditya</span>
        </h1>
        <p className="text-secondary text-lg sm:text-xl mt-2">
          MERN Developer
        </p>
      </div>

      {/* ⭐ COMPACT 3D MODEL */}
      <div className="absolute bottom-0 right-0 w-full h-[190px] sm:h-[400px] md:h-[500px]">
        <ComputersCanvas />
      </div>
    </section>
  );
}
