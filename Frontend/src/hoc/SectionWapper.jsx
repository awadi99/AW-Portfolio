import { motion } from 'framer-motion'
import { styles } from '../../style.js'
import { staggerContainer } from '../utils/motion.js'


export default function SectionWapper(Component, idName) {
    return function HOC() {
        return (
            <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true, amount:0.25}}
            className="px-6 sm:px-16 py-10 sm:py-16 !max-w-8xl mx-auto relative z-0 "
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };
}
