import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionTitle({ subtitle, title, font }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex justify-center items-center flex-col"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            ease: "easeInOut",
          },
        },
      }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-customRed text-base font-schibsted uppercase mb-5 font-bold"
      >
        - {subtitle} -
      </motion.span>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className={`text-[42px] lg:${
          font ? `text-${font}` : "text-[3.438rem]"
        } text-customDarkGray lg:mb-16 mb-6 leading-[3.2rem]`}
      >
        {title}
      </motion.p>
    </motion.div>
  );
}
