
'use client'
import { slideIn,staggerContainer,textVariant } from "../utils/motion";
import styles from '../styles'
import { motion } from "framer-motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div 
     variants={staggerContainer}
     initial='hidden'
     whileInView='show'
     viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
     <div className="flex justify-center items-center flex-col x-10 relative">
     <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading}`}>
      MetaVerse
     </motion.h1>
     </div>
     <motion.div 
       variants={textVariant(1.2)}
       className="flex flex-row justify-center items-center z-10"
     >
     <h1 className={`${styles.heroHeading}`}>
      ma
     </h1>
     <div className={`${styles.heroDText}`}/>
     <h1 className={`${styles.heroHeading}`}>
      ness
     </h1>
     </motion.div>
     <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="relative w-full md:-mt-[20px} -mt-[12px]"
     >
     <div className="w-full absolute h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]"/>
       <img src='./cover.png'
        alt="cover"
        className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
       />
       <a href="">
        <div className="w-full justify-end flex sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
          <img src='/stamp.png'
           alt="stamp"
           className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
          />
        </div>
       </a>
    
     </motion.div>
    </motion.div>
  </section>
);

export default Hero;
