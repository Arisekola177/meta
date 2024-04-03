'use client'
import { staggerContainer } from "../utils/motion";
import styles from '../styles'
import { motion } from "framer-motion";


import { useState } from "react";
import { TitleText, TypingText } from "../components/CustomTexts";
import ExploreCard from "../components/ExploreCard";
import { exploreWorlds } from "../constants";

const Explore = () => {
  const [active, setActive] = useState('world-2')
  return (
    <section className={`${styles.paddings}` } id="explore">
    <motion.div
     variants={staggerContainer}
     initial='hidden'
     whileInView='show'
     viewport={{once: false, amount: 0.25}}
     className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
    <TypingText 
     title="| The World"
     textStyles='text-center'
    />
    <TitleText 
    textStyles='text-center'
     title={<> Choose the world you want 
      <br className="md:block hidden" />
      to explore
      </>
     }
    />
    <div className="flex lg:flex-row flex-col mt-50px] min-h-[70vh] gap-5">
     {
      exploreWorlds.map((world, index) => (
        <ExploreCard 
         key={world.id}
         {...world}
         index={index}
         active={active}
         handleClick={setActive}
        />
      ))
     }
    </div>
    </motion.div>
  </section>
  )
}

export default Explore;
