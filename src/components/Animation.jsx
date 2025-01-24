import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { h2 } from "framer-motion/client";

const containerVariants = {
  //svg animations={hidden:{opacity:0,pathlength:0},visible:{opacity:1,pathLength:1},transition:{duration:2,ease:"easeInOut"}}
  //    //const svgVariants={hidden:{rotate:-180},visible:{rotate:0},transition:{duration:1}}
  //const pathVariarts

  //Drag
  //Dragconstraints={{left:0,top:0,right:0,bttom:0}}
  ///gdragElastic={0.7}

  //   initial: {
  //     opacity: 0,
  //     x: "100vw",
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { delay: 1.5 },
  //   },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      repeat: Infinity, // Repeats the animation infinitely
      repeatType: "reverse", // Reverses the animation for a smooth yoyo effect
      duration: 0.4, // Adjust duration for smoother animation
    },
  },
};
const Animation = () => {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);
  return (
    <motion.div
      className=" flex justify-center"
      variants={containerVariants}
      //   initial="initial"
      //   animate="visible"
      whileHover="hover"
    >
      <AnimatePresence>
        {showTitle && <motion.h2 exit={{ x: -1000 }}>Animation</motion.h2>}
      </AnimatePresence>
      <p>Thanks for your tutorial!</p>
    </motion.div>
  );
};
//types: spring uses stiffness,mass,damping ,tween(duration is sed and its defaault )
//while hover, when:"beforeChildren"
//higher mass means it moves slowes and lower mass means its moves faster, damping means the strength of the opposing force
//stagger is one after another
//3 steps wrap in animate prsence, find when the routes changes, use location is used
//const location=useLocation() ; when ever the routes is changes it is updated in ocation attribute
// set location={location} in switch key=location.key
// add exit in the routes compoonents

//ONSCROLL ANIMATIONS
// const ref=useRef(null)
// const isInView= useInView(ref,[once:true])
// useEffect(()=>{

// })

export default Animation;
