import { React, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RatingBar from "./RatingBar";
import { Heart } from "react-feather";
import { BsChatQuote } from "react-icons/bs";
import Stars from "./Stars";
import AboutImgs from "./AboutImgs";
import TextCarousel from "./TextCarousel";
import ContentText from "./ContentText";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";

const staggerAnimation = {
  initial: {
    opacity: 0,
    y: "20px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.4 },
  },
};

const YoloAnimation = {
  initial: { y: 0 },
  animate: {
    y: ["0px", "-10px", "0px"],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const About = () => {
  const { scrollYProgress } = useScroll();

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["right 15% top 25%", "left 40% bottom 100%"]
  );

  const backgroundPosition2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["right 25% top 0%", "left 40% bottom 100%"]
  );

  const backgroundSize = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["110%", "111%"]
  );
  const backgroundSize2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["110%", "111%"]
  );

  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  return (
    <>
      <HeroSection heading={"About Us"} subheading={"- Luxury Restraunt -"} />
      <section
        className="mx-container w-full h-1/2"
        aria-label="restaurant-images"
      >
        <div className="relative flex ">
          <motion.img
            variants={YoloAnimation}
            className="px-4 h-max w-max relative "
            src="https://craftohtml.themezaa.com/images/demo-restaurant-about-01.jpg"
            alt="Static Image"
            animate="animate"
            initial="initial"
          />
          <motion.div
            ref={containerRef}
            className="overflow-hidden relative  w-[850px] h-[600px] left-24 px-4"
            style={{
              backgroundImage:
                "url('https://craftohtml.themezaa.com/images/demo-restaurant-about-02.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition,
              backgroundSize,
              transition:
                "background-position 0.3s ease, background-size 0.3s ease",
            }}
          ></motion.div>
        </div>
      </section>

      <section
        className="w-full h-[350px] bg-VeryLightGray"
        aria-label="quote-section"
      >
        <div
          ref={containerRef2}
          className="relative ml-[105px] mr-[105px] w-vw flex -top-80"
        >
          <motion.div
            className="h-[600px] w-[100%] lg:w-[45%] mr-8"
            style={{
              backgroundImage:
                "url('https://craftohtml.themezaa.com/images/demo-restaurant-about-03.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: backgroundPosition2 || "top 0%",
              backgroundSize: backgroundSize2 || "110%",
              transition:
                "background-position 0.3s ease, background-size 0.3s ease",
            }}
          ></motion.div>

          <div className="w-[100%] px-4 flex items-end  lg:w-[45%]">
            <div className="pl-8 pb-12 flex justify-center items-end">
              <BsChatQuote size={180} className="text-cusBg " />
              <div className="flex flex-col font-schibsted ml-8 ">
                <p className="text-xl text-customGray">
                  The food you eat can be either the safest and most powerful
                  medicine or the{" "}
                  <span className=" border-b-[1px] font-semibold border-spacing-1 border-customGray ">
                    slowest form of poison.
                  </span>
                </p>
                <span className="mt-4 text-customGray text-base font-medium">
                  - Alexandar Harvard
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full relative overflow-hidden bg-VeryLightGray"
        aria-label="about-section"
      >
        <img
          src="https://craftohtml.themezaa.com/images/demo-restaurant-about-04.jpg"
          alt=""
          className="absolute -left-20 top-36"
        />
        <img
          src="https://craftohtml.themezaa.com/images/demo-restaurant-about-11.png"
          alt=""
          className="absolute -right-10 z-10 top-10"
        />
        <div className="mx-container flex relative gap-10">
          <div className="w-2/5 px-4">
            <div className=" flex items-center mb-6 ">
              <span className="flex w-[70px] h-[2px] bg-customRed mr-[15px]"></span>
              <span className="text-customRed text-xl font-medium tracking-wide">
                About Restaurant
              </span>
            </div>
            <p className="text-6xl mb-5 text-customDarkGray tracking-tight ">
              experience original food teste of italy.
            </p>
            <p className="w-[80%] text-[17px] leading-[30px] mb-9 font-schibsted text-customMediumGray">
              Lorem ipsum dolor sit amet adipiscing elit do eiusmod tempor
              incididunt ut labore et dolore magna minim veniam nostrud
              exercitation..
            </p>
            <div className="bg-white w-[300px] text-customDarkGray px-7 inline-flex pt-5 pb-4 shadow-lg mb-6">
              <p className="text-7xl">4.8</p>
              <div className="pl-5 ml-5 border-l-[1px] border-customLightGray border-opacity-30">
                <Stars color={"cusBg"} />
                <span className="text-sm text-customDarkGray font-schibsted font-medium">
                  Review by Google
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Heart size={18} className="mr-2 fill-red-600 text-red-600" />
              <span className="font-medium font-schibsted text-lg text-customDarkGray">
                Authentic cultural experience.
              </span>
            </div>
          </div>
          <div className="w-3/5">
            <img
              className="z-0"
              src="https://craftohtml.themezaa.com/images/demo-restaurant-about-05.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="w-full py-24" aria-label="facilities-section">
        <div className="flex justify-center items-center flex-col mx-container ">
          <span className="text-customRed  text-base font-schibsted uppercase mb-[10px] font-semibold">
            - Restaurant facilities -
          </span>
          <p className="text-[3.438rem] text-customDarkGray mb-20 leading-[3.2rem]">
            Restaurant special
          </p>
          <div className="grid grid-cols-3 ">
            <AboutImgs
              title={"Private Dining"}
              text={"Lorem ipsum dolor sit amet consectetur adipiscing."}
              img={
                "https://craftohtml.themezaa.com/images/demo-restaurant-about-06.jpg"
              }
            />
            <AboutImgs
              title={"The Raw Bar"}
              text={"Lorem ipsum dolor sit amet consectetur adipiscing."}
              img={
                "https://craftohtml.themezaa.com/images/demo-restaurant-about-07.jpg"
              }
            />
            <AboutImgs
              title={"Outdoor catering"}
              text={"Lorem ipsum dolor sit amet consectetur adipiscing."}
              img={
                "https://craftohtml.themezaa.com/images/demo-restaurant-about-08.jpg"
              }
            />
          </div>
        </div>
      </section>
      <section
        className="h-lvh w-vw relative bg-VeryLightGray"
        aria-label="dining-section"
      >
        <div className="absolute -top-20 ">
          <TextCarousel />
        </div>
        <div className=" mx-container">
          <div className="flex flex-wrap gap-10 ">
            <div className="flex-1 min-w-[150px] p-4 ">
              <img
                className="rounded-md relative top-24"
                src="https://craftohtml.themezaa.com/images/demo-restaurant-about-10.jpg"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-[150px] p-4 -right-10 relative top-8">
              <ContentText
                title={"since 1988 restaurant"}
                title2={"Awesome dining, Delicious food."}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
                }
                btnText={"Restraunt story"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-vw" aria-label="achievements-section">
        <div className="relative">
          <RatingBar />
        </div>
        <div className="py-20 mx-container">
          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex flex-col justify-center items-center">
              <span className="text-customRed text-base font-schibsted uppercase mb-[10px] font-semibold">
                - Awards and Honours -
              </span>
              <p className="text-[3.438rem] text-customDarkGray leading-[3.2rem]">
                ACHIEVEMENTS
              </p>
            </div>
            <div className="px-1 block">
              <img
                src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-01.jpg"
                alt=""
              />
            </div>
            <div className="px-1">
              <img
                src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-02.jpg"
                alt=""
              />
            </div>
            <div className="px-1">
              <img
                src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-03.jpg"
                alt=""
              />
            </div>
            <div className="px-1">
              <img
                src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-04.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default About;
