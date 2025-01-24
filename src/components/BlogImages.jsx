import { React, useRef } from "react";
import { motion, useInView } from "framer-motion";
const BlogImages = (Props) => {
  const AnimatedSection = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{
          opacity: 0,
          rotateX: -80,
          translateZ: 200,
          transformOrigin: "top",
          perspective: 5500,
          transformStyle: "preserve-3d",
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          rotateX: isInView ? 0 : -120,
          translateY: isInView ? 0 : -100,
          translateZ: isInView ? 0 : 150,
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <AnimatedSection
      className="h-[345px] lg:h-[345px] md:h-[300px] 
      relative 
      w-full max-w-[345px] md:max-w-[300px] lg:max-w-[345px]
      p-6 md:p-8 lg:p-10
      rounded-md overflow-hidden group
      mb-6 md:mb-8 lg:mb-10"
    >
      <div
        style={{
          backgroundImage: `url('${Props.img}')`,
        }}
        className="absolute  inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
      ></div>

      <div className="absolute inset-0 bg-[#1f232c] opacity-30 transition-opacity duration-300 group-hover:opacity-60"></div>

      <div className="relative z-10 flex flex-col items-start justify-between h-full">
        <button
          className="bg-white text-customGray font-schibsted uppercase font-medium 
          pt-[6px] pb-[4px] px-[18px] 
          text-[12px] md:text-[12px] lg:text-[12px]
          rounded-[2px] border border-transparent transition-all duration-300 
          group-hover:bg-transparent group-hover:text-white group-hover:border-gray-400"
        >
          Restaurant
        </button>

        <p
          className="text-[24px] md:text-[26px] lg:text-[28px] 
          text-white uppercase w-[70%] leading-7 md:leading-8"
        >
          {Props.text}
        </p>
      </div>
    </AnimatedSection>
  );
};

export default BlogImages;
