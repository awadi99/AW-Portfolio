import { motion } from "framer-motion";
import { experiences } from "../constants/index.js";
import { textVariant } from "../utils/motion.js";
import { SectionWapper } from "../hoc/index.js";
import { styles } from "../../style.js";

function Experience() {
  return (
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} !px-[90px]`}>
        what I have done so far...
      </p>

      <h2 className={`${styles.sectionHeadText} !px-[90px]`}>
        Work Experience.
      </h2>

      <div className="!px-20 sm:!px-[300px] !mt-[90px] relative">
        {/* Vertical line */}
        <div className="absolute sm:!left-[200px] left-[30px] -top-10 w-[4px] h-full bg-purple-600 rounded-md"></div>

        <div className="ml-16 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* 🔥 Updated circle (with company logo + same size as old dot) */}
              <div
                className="absolute sm:-left-[120px] -left-[68px] top-0 w-10 h-10 rounded-full border-2 border-white shadow-lg overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: exp.iconBg }}
              >
                <img
                  src={exp.icon}
                  alt={exp.company_name}
                  className="w-9 h-9 object-cover rounded-full"
                />
              </div>

              <h3 className="text-xl font-bold text-white !mt-10">
                {exp.title}
              </h3>
              <p className="text-purple-400 text-sm">{exp.company_name}</p>
              <p className="text-gray-500 text-xs mb-3">{exp.date}</p>

              <ul className="list-disc ml-6 space-y-1 text-gray-300">
                {exp.points.map((p, i) => (
                  <li key={i} className="leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SectionWapper(Experience, "experience");
