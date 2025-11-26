
import { Tilt } from 'react-tilt';

import { motion } from 'framer-motion';
import { styles } from './../../style.js'
import { services } from '../constants/index.js'
import { fadeIn, textVariant } from '../utils/motion.js';
import {SectionWapper} from './../hoc/index.js'
const ServiceCard = ({ index, title, icon }) => (
<Tilt
  className="xs:w-[250px] w-full"
  options={{ max: 45, scale: 1, speed: 450 }}
>
<motion.div
  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  className=" moving-border w-full p-[2px] rounded-[20px] shadow-card"
>
  <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
    <h3 className="text-white text-[20px] font-bold text-center mt-3">
      {title}
    </h3>
  </div>
</motion.div>
</Tilt>
);

function About() {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} !p-[20px]`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} !p-[20px]`}>OverView.</h2>
      </motion.div>

      <motion.p variants={fadeIn(" ", " ", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] !p-[20px] '>
        Hi, I am a Front-End & MERN Stack Developer from Pune,
        specializing in building clean, responsive, and user-friendly web applications
        using React, Node.js, Express, and MongoDB. I have developed full-stack projects
        like an E-Waste Management Platform, a real-time AI Chat Application, and a Quora-style content posting system.
        I focus on writing scalable code, improving performance, and continuously learning new technologies to build modern digital experiences.

      </motion.p>
      <div className='!mt-[90px] !p-[20px] flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      
      </div>

    </>
  )
}
export default SectionWapper(About, "about");