import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToggleNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <motion.div
        initial={{
          x: "100%",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        exit={{
          x: "100%",
        }}
        className={`fixed top-0 right-0 h-full bg-customDarkGray z-20 w-[90vw] sm:w-[70vw] md:w-[70vw] lg:hidden`}
      >
        <div className="p-4 flex justify-end relative">
          <button
            onClick={toggleNavbar}
            className="text-white absolute left-10 top-10"
          >
            <X size={24} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ToggleNavBar;
