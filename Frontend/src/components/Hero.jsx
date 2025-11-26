import { motion } from "framer-motion";
import { styles } from "./../../style.js";
import { ComputersCanvas } from "./canvas/index.js";
import heroBg from '/src/assets/herobg.png';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute top-40 left-[100px] flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-purple-600"></div>
        <div className="w-1 h-40 sm:h-80 bg-purple-700"></div>
      </div>

      <div className="absolute top-40 left-[140px]">
        <h1 className="text-white text-5xl font-bold">
          Hi, I'm <span className="text-purple-600">Aditya</span>
        </h1>
        <p className="text-secondary text-xl mt-2">MERN Developer</p>
      </div>
      <ComputersCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about"></a>
        <div className="w-[35px] h-15 rounded-3xl border-4 border-secondary  flex justify-center  items-center p-2">
          <motion.div
            animate={{
              y: [15, -15, 15]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-3 h-3 rounded-full  mb-1  bg-purple-700 "
          />


        </div>

      </div>
    </section>



  ); 
}

