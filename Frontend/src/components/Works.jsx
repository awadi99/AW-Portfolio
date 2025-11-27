import React, { useEffect } from "react";
import "../cart.css";
import SectionWapper from "../hoc/SectionWapper.jsx";
import {github} from '../assets/index.js'
import {motion} from 'framer-motion'
import { textVariant } from "../utils/motion.js";
import { styles } from "../../style.js";

function Works() {
  useEffect(() => {
    new Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      initialSlide: 1,
      speed: 500,
      loop: true,
      cardsEffect: {
        rotate: true,
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
    });
  }, []);

  return (
    <>
    <motion.div  variants={textVariant()}>
      <p className={`${styles.heroSubText} !text-[20px] opacity-50 !px-[90px]`}>
        My work
      </p>
      <h2 className={`${styles.heroHeadText} !text-[66px] !px-[90px]`}>
        Projects.
      </h2>
    </motion.div>
    <section className="movie-section">
      <div className="content">
        <div className="info">
          <p>
            Join us for a fantastic
            <span className="movie-night"> movie night </span>
            filled with popcorn, laughter, and great company! Whether you're a
            fan of thrilling action, heartwarming dramas, or side-splitting
            comedies, we've got a film lineup to cater to all tastes.
          </p>
          <button className="btn">Join</button>
        </div>

        {/* SWIPER */}
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fc21e481-e28a-41a8-9db3-3b62c1ddc17e" />
              <div className="overlay">
                <span>8.1</span>
                <h2>Wednesday</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b6f5eb64-887c-43b1-aaba-d52a4c59a379" />
              <div className="overlay">
                <span>8.5</span>
                <h2>The Queen's Gambit</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e906353b-fde0-4518-9a03-16545c1161bd" />
              <div className="overlay">
                <span>9.5</span>
                <h2>Breaking Bad</h2>
              </div>
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <button className="prev-btn nav-btn">‹</button>
          <button className="next-btn nav-btn">›</button>
        </div>
      </div>

      {/* BACKGROUND FLOATING SHAPES */}
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </section>
    </>
  );
}

export default SectionWapper(Works, "");
