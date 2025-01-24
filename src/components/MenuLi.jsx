import { motion, useInView } from "framer-motion";
import { React, useRef } from "react";

const MenuLi = (Props) => {
  const AnimatedSection = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, rotateX: 89 }}
        animate={{ opacity: 1, rotateX: isInView ? 0 : 90 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <AnimatedSection>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{
          rest: {
            opacity: 1,
            x: 0,
          },
          hover: {
            opacity: 1,
            x: 10,
          },
        }}
        transition={{
          duration: 0.3,
        }}
        className="flex flex-col sm:flex-row sm:items-center lg:items-center lg:justify-center font-schibsted text-customDarkGray py-[15px]"
      >
        <div className="flex flex-col flex-start sm:flex-row sm:items-center w-full">
          <img
            className="rounded-full mb-2 lg:mb-0 h-[100px] w-[100px]"
            src={Props.img}
            alt=""
          />
          <div className="flex flex-col sm:ml-8 w-full">
            <div className="flex items-center justify-between font-semibold text-lg leading-[30px] w-full">
              <span className="lg:mb-2 shrink-0">{Props.Name}</span>
              <div className="border-t border-gray-400 border-dashed mx-3 w-full"></div>
              <span className="shrink-0">{Props.Price}</span>
            </div>
            <p className="text-[17px] opacity-50">
              Lorem ipsum has bspace een the industry.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default MenuLi;
