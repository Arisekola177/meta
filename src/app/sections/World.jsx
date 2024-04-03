'use client'
import { staggerContainer, fadeIn } from "../utils/motion";
import styles from '../styles'
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomTexts";


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{once: 'false', amount: 0.25}}
   className={`${styles.innerWidth} mx-auto flex flex-col`}
  >
    <TypingText title="| People on the World" textStyles='text-center' />
    <TitleText title={<>Track friends around you and 
    invite them to play together in the same world</>}  textStyles="text-center"/>
    <motion.div
    variants={fadeIn('up','tween', 0.3, 1 )}
    className="relative mt-[68px] flex w-full h-[550px]"
    >
     <img
      src="/map.png"
      alt="map"
      className="w-full h-full object-cover"
     />
     <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
       <img 
        src="/people-01.png"
        alt="people"
        className="w-full h-full"
       />
     </div>
     <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
       <img 
        src="/people-02.png"
        alt="people"
        className="w-full h-full"
       />
     </div>
     <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
       <img 
        src="/people-03.png"
        alt="people"
        className="w-full h-full"
       />
     </div>
     <div className="hidden lg:block absolute top-1/2 left-[20%] w-[180px] h-[130px]  border-[6px] rounded-lg border-[#5d6680]">
         <img  
           src="/planet-02.png"
           alt="planet"
           className="w-full h-full "
         />
        
          <div>
          <div className="absolute top-14 left-[10%]">
           <img src="/Ellipse-39.png"
             alt="ellipse"
             className="w-[24px] h-[24px]"
           />
         </div>
         <div className="absolute top-14 left-[16%]  z-2">
         <img src="/Ellipse-40.png"
             alt="ellipse"
             className="w-[24px] h-[24px]"
           />
         </div>
         <div className="absolute top-14 left-[24%] z-1">
         <img src="/Ellipse-41.png"
             alt="ellipse"
             className="w-[24px] h-[24px]"
           />
         </div>
         <div className="absolute top-14 left-[40%]">
          <p className="text-xs mt-2  text-white">+263 has joined</p>
         </div>
         <div className="absolute bottom-0 left-2">
          <p className=" text-white text-lg">The Upside Down</p>
         </div>
          </div>
       

         </div>

         <div className="hidden lg:block absolute top-10 left-[60%] w-[180px] h-[130px]  border-[6px] rounded-lg border-[#5d6680]">
         <img  
           src="/planet-03.png"
           alt="planet"
           className="w-full h-full "
         />
        
          <div>
          <div className="absolute top-14 left-[10%]">
           <img src="/Ellipse-39.png"
             alt="ellipse"
             className="w-[24px] h-[24px]"
           />
         </div>
         <div className="absolute top-14 left-[16%]  z-2">
         <img src="/Ellipse-40.png"
             alt="ellipse"
             className="w-[24px] h-[24px]"
           />
         </div>
         <div className="absolute top-14 left-[24%] z-1">
         <img src="/Ellipse-41.png"
             alt="ellipse"
             className="w-[24px] h-[24px]"
           />
         </div>
         <div className="absolute top-14 left-[40%]">
          <p className="text-xs mt-2  text-white">+263 has joined</p>
         </div>
         <div className="absolute bottom-0 left-10 text-center">
          <p className=" text-white text-lg">Hawkins Labs</p>
         </div>
          </div>
       

         </div>
        
    
     <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
       <img 
        src="/people-03.png"
        alt="people"
        className="w-full h-full"
       />
     </div>
    </motion.div>
  </motion.div>
   
  </section>
);

export default World;
