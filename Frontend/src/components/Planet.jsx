import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion.js";
import { styles } from "../../style.js";
import SolarSystem from "./SolarSystem";
import SkillMoons from "./SkillMoons";

import "../Planet.css";

function Planet() {
    return (
        <section className="personal-solar-system">

            {/* Header */}
            <motion.div variants={textVariant()} className="solar-header">
                <p className={`${styles.sectionSubText} !mt-[90px] !px-[90px] !text-center`}>
                    My technologies
                </p>
                < h2 className={`${styles.sectionHeadText} !px-[90px] !text-center`}>              
                    Tech {" "}
                    <strong>Stack. </strong>
                </h2>
            </motion.div>
            <div className="solar-header">
                <span>MY UNIVERSE</span>
                <p>
                    15 skills. One planet.
                    One journey.
                </p>
            </div>

            {/* Canvas */}
            <div className="solar-canvas">
                <Canvas
                    camera={{
                        position: [0, 0, 42],
                        fov: 45,
                    }}
                    dpr={[1, 1.5]}
                >
                    <color
                        attach="background"
                        args={["#020617"]}
                    />

                    <SolarSystem />

                    <SkillMoons />

                    <OrbitControls
                        enableRotate={false}
                        enablePan={false}
                        enableZoom={true}
                        minDistance={22}
                        maxDistance={52}
                        zoomSpeed={0.8}
                    />
                </Canvas>
            </div>

            {/* Hint */}
            <div className="solar-hint">
                Hover a moon to explore
            </div>

        </section>
    );
}

export default Planet;