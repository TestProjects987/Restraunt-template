import { motion } from "framer-motion";

const HeroSection = (Props) => {
  return (
    <section
      className="relative flex justify-center items-start h-[60vh]  w-full"
      aria-label="hero-section"
    >
      <div
        className="w-full absolute inset-0"
        style={{
          backgroundImage:
            "url('https://craftohtml.themezaa.com/images/demo-restaurant-about-title-bg.jpg')",
          backgroundSize: "140%",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: "-20px" }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center flex-col mt-24 z-10"
      >
        <p className="text-[5rem] text-customDarkGray leading-[5rem] mt-12 ">
          {Props.heading}
        </p>
        <span className="text-customRed   font-schibsted mb-[10px] font-semibold uppercase">
          {Props.subheading}
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
