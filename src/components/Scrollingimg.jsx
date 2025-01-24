import { React, useRef } from "react";
import FooterSection from "./FooterSection";
import Title from "./Title";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);

  // Tracking the scroll progress inside the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Start when the top enters and end when the bottom enters
  });

  // Creating a translation effect for the image based on scroll progress
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <section
        className="w-full h-screen flex justify-center items-start"
        style={{
          backgroundImage:
            "url('https://craftohtml.themezaa.com/images/demo-restaurant-about-title-bg.jpg')",
          backgroundSize: "140%",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center absolute top-[23%] items-center flex-col">
          <Title />
        </div>
      </section>

      <section className="mx-[105px]">
        <div className="relative flex">
          {/* Static Image */}
          <img
            className="px-4 h-max w-max relative -top-60"
            src="https://craftohtml.themezaa.com/images/demo-restaurant-about-01.jpg"
            alt="Static Image"
          />

          <div className="overflow-hidden relative w-full h-[40%] left-20 -top-60">
            {/* Animated Scrolling Image */}
            <motion.img
              ref={containerRef}
              className="px-4 w-[90%] h-[70%]"
              src="https://craftohtml.themezaa.com/images/demo-restaurant-about-02.jpg"
              alt="Scrolling Image"
              style={{
                scale: 1.1,
                y: translateY, // Applying the translation on Y axis based on scroll
              }}
            />
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default About;
