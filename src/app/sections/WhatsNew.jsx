'use client'
import { staggerContainer,planetVariants, fadeIn } from "../utils/motion";
import styles from '../styles'
import { motion } from "framer-motion";

import { newFeatures } from "../constants";
import { TitleText, TypingText } from "../components/CustomTexts";
import NewFeatures from "../components/NewFeatures";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{once: 'false', amount: 0.25}}
   className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
  >
  
   <motion.div
    variants={fadeIn('right', 'tween', 0.2, 1)}
    className="flex-[0.75] flex justify-center flex-col"
   >
   <TypingText
     title="| What's New?"
   />
   <TitleText
     title={<>What's new about Metaversus</>}
   />
   <div className="mt-[48px] flex flex-wrap justify-bewteen gap-[24px]">
    {
     newFeatures.map((feature) => (
        <NewFeatures
         key={feature.title}
         {...feature}
        

        />
     ))
   } 
   </div> 
   </motion.div>
   <motion.div 
    variants={planetVariants('right')}
    className={`${styles.flexCenter} flex-1`}
   >
   <img  
    src="/whats-new.png"
    alt="whats-new"
    className="w-[90%] h-[90%] object-contain"
   
   />
  
   </motion.div>
  </motion.div>
 </section>
);

export default WhatsNew;
