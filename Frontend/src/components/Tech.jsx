import { BallCanvas } from "./canvas/index.js";
import SectionWapper from "../hoc/SectionWapper.jsx";
import { technologies } from "../constants/index.js";
import { styles } from "../../style.js";
import { textVariant } from "../utils/motion.js";
import {motion} from 'framer-motion'
function Tech() {
  return (
    <>
    <motion.div  variants={textVariant()}>
    <p className={`${styles.sectionSubText} !mt-[90px] !px-[90px]`}>
      My Technology
    </p>
    <h2 className={`${styles.sectionHeadText} !px-[90px]`}>
      Tech Stack.
    </h2>
  </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 !mt-20" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
}

export default SectionWapper(Tech, "");
