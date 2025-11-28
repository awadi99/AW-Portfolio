import React, { useEffect, useState } from "react";
import "../cart.css";
import SectionWapper from "../hoc/SectionWapper.jsx";
import { github } from "../assets/index.js";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion.js";
import { styles } from "../../style.js";
import { projects } from "../constants/index.js";

function Works() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  useEffect(() => {
    new Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      initialSlide: 0,
      speed: 500,
      loop: true,
      cardsEffect: {
        rotate: true,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
      on: {
        slideChange: function () {
          setActiveProject(projects[this.realIndex]);
        },
      },
    });
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} !mt-[90px] !px-[90px]`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText} !px-[90px]`}>
          Projects.
        </h2>
      </motion.div>

      <section className="movie-section contrast-100">
        <div className="content">
          <div className="info">
            <h2 className="text-[32px] font-bold text-white mb-4">
              {activeProject.name}
            </h2>

            <p className="text-gray-300 mt-2 leading-relaxed text-[15px]">
              {activeProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {activeProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="!px-3 !py-1 !rounded-lg !text-sm text-white"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <a href={activeProject.source_code_Live_link} target="_blank" >
              <button className="btn !mt-10 !bg-purple-600 !text-white !rounded-4xl animate-bounce">Live Demo</button>
            </a>
          </div>

          <div className="swiper">
            <div className="swiper-wrapper">
              {projects.map((project, index) => (
                <div className="swiper-slide" key={index}>
                  <img src={project.image} alt={project.name} className="card-image" />

                  <a
                    href={project.source_code_link}
                    target="_blank"
                    className="github-btn-rounded"
                  >
                    <img src={github} className="object-contain"/>
                  </a>

                  <div className="overlay">
                    <span>{project.tags[0].name}</span>
                    <h2>{project.name}</h2>
                  </div>
                </div>
              ))}
            </div>

            <button className="prev-btn nav-btn">‹</button>
            <button className="next-btn nav-btn">›</button>
          </div>
        </div>

        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SectionWapper(Works, "work");
