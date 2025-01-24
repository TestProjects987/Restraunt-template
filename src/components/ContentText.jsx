import React from "react";
import { motion } from "framer-motion";
import { PhoneOutgoing } from "react-feather";

const ContentText = (Props) => {
  return (
    <>
      <div className="lg:mt-20 flex items-center mb-8 ">
        <span className="flex w-[70px] h-[2px] bg-customRed mr-4"></span>
        <span className="text-customRed lg:text-lg  text-sm font-medium uppercase font-schibsted">
          {Props.title}
        </span>
      </div>
      <p className="lg:text-[4.375rem] m-0  text-5xl sm:text-[53px] mb-3 text-customDarkGray tracking-tight lg:leading-[4.375rem]">
        {Props.title2}
      </p>
      <p className="lg:w-4/5 w-11/12 mb-6 text-[17px] leading-7 opacity-90 font-schibsted text-customLightGray">
        {Props.text}
      </p>
      <div className="mt-[10px] flex lg:gap-10 gap-5 mb-5">
        <motion.a
          href="demo-restaurant-about.html"
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative bg-customDarkGray lg:w-1/3 w-[47%] sm:w-[32%] flex flex-row items-center justify-center text-white lg:px-4 lg:py-7 px-5 py-7 text-lg rounded-[4px]  overflow-hidden "
        >
          <motion.span
            className="btn-double-text absolute top-4 "
            variants={{
              rest: {
                opacity: 1,
                y: 0,
              },
              hover: {
                opacity: 0,
                y: "-200%",
              },
            }}
            transition={{
              opacity: { duration: 0.6 },
            }}
            data-text="About restaurant"
          >
            {Props.btnText}
          </motion.span>
          <motion.span
            className="btn-double-text absolute top-4"
            variants={{
              rest: {
                opacity: 0,
                y: "200%",
              },
              hover: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              opacity: { duration: 0.6 },
            }}
          >
            {Props.btnText}
          </motion.span>
        </motion.a>
        <div className="flex items-center">
          <PhoneOutgoing className="mr-2  text-cusBg h-auto lg:w-8 w-6" />
          <a href="tel:1800222000" className="text-customDarkGray text-2xl ">
            1-800-222-000
          </a>
        </div>
      </div>
    </>
  );
};
export default ContentText;
