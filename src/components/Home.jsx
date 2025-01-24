import { React, useRef, useState } from "react";
import Banner from "./Banner";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Box, Award, ShoppingBag, Star } from "react-feather";
import TextCarousel from "./TextCarousel";
import Badges from "./Badges";
import ScrollableMenu from "./ScrollableMenu";
import BlogImages from "./BlogImages";
import TabContent from "./TabContent";
import FooterSection from "./FooterSection";
import ContentText from "./ContentText";
import Testimonials from "./Testimonials";
import RatingBar from "./RatingBar";
import SectionTitle from "./SectionTitle";

export default function Home() {
  const AnimatedSection = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

  const containerRef = useRef(null);
  const mainDishRef = useRef(null);
  const isMainDishInView = useInView(mainDishRef, { once: true });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end start", "start end"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["20vh", "80vh"]);

  return (
    <>
      <section className="overflow-hidden relative top-10 lg:top-0">
        <div
          className="relative w-full h-screen flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://craftohtml.themezaa.com/images/demo-restaurant-home-banner-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#383632] opacity-20"></div>
          <Banner />
        </div>
      </section>
      <section className="relative lg:py-[90px] md:py-[75px] pt-24 sm:mx-12 lg:mx-0">
        <div className="absolute w-[100%] text-customLightGray text-[10rem] sm:text-[12rem] md:text-[14rem] font-medium text-center lg:-top-[8%] sm:-top-[5%] -top-[7%] -z-10 opacity-20 tracking-tight leading-[300px] uppercase lg:text-[350px] ">
          Experience
        </div>

        <div
          className="container px-[15px] mx-auto space-y-6 relative lg:flex mb-18 "
          ref={containerRef}
        >
          <motion.img
            style={{ rotate, y: translateY }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute hidden lg:block -left-24 w-1/5 -top-36 h-auto -z-10"
            src="https://craftohtml.themezaa.com/images/demo-restaurant-home-02.jpg"
            alt="Decorative"
          />

          <div className="mt-[30px] lg:px-[15px] md:w-[90%] lg:w-[54%] flex justify-center items-center sm:w-[510px] flex-shrink-0 relative lg:left-9 -top-6">
            <motion.img
              ref={mainDishRef}
              initial={{ rotateZ: -20, opacity: 0 }}
              animate={isMainDishInView ? { rotateZ: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="w-[100%] h-auto overflow-visible flex-grow"
              src="https://craftohtml.themezaa.com/images/demo-restaurant-home-04.png"
              alt="Main Dish"
            />
          </div>

          <div className="lg:flex-1 lg:pl-10">
            <motion.img
              style={{ rotate, y: translateY }}
              className="absolute hidden lg:block -right-20 -top-[60%] w-1/6 h-auto -z-20"
              src="https://craftohtml.themezaa.com/images/demo-restaurant-home-03.jpg"
              alt="Decorative"
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
            <AnimatedSection className="lg:space-x-7">
              <ContentText
                title={"since 1988"}
                title2={"Wonderful dining experience & food."}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
                }
                btnText={"About Restaurant"}
              />
            </AnimatedSection>
          </div>
        </div>

        <motion.div
          ref={ref}
          className="lg:mx-container relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:[&>*:last-child]:col-span-2 md:[&>*:last-child]:place-self-center lg:[&>*:last-child]:col-span-1"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Badges
            text1={"Fast Delivery"}
            text2={"Within 30 minutes"}
            icon={Box}
          />
          <Badges
            text1={"Absolute Dining"}
            text2={"Best Buffet Restaurant"}
            icon={Award}
          />
          <Badges
            text1={"Pickup Delivery"}
            text2={"Grab Your Food Order"}
            icon={ShoppingBag}
          />
        </motion.div>
      </section>
      <section
        className="relative  lg:py-[90px] py-12 bg-center"
        style={{
          backgroundImage:
            "url('https://craftohtml.themezaa.com/images/demo-restaurant-home-05.jpg')",
          // backgroundSize: "115%",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "top 8% center",
        }}
      >
        <div className="lg:mx-container sm:mx-12  md:mx-32">
          <SectionTitle subtitle="CHOOSE DELICIOUS" title="POPULAR MENU" />
          <TabContent />
          <AnimatedSection className="flex md:flex-row flex-col items-center justify-center font-schibsted px-4 lg:p-0">
            <div className="bg-red-700 mr-2 text-white font-medium rounded-2xl px-5 py-1 m-2 lg:m-0 text-center">
              Masterchef{"  "}
            </div>
            <div className="text-lg inline-block font-normal text-center md:text-nowrap">
              Unique and delicious dishes from the worlds{" "}
              <span className="font-semibold underline">best masterchefs.</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="lg:py-24 py-12">
        <div className="flex justify-center items-center flex-col lg:mx-container">
          <AnimatedSection>
            <SectionTitle subtitle="Special Choice" title="POPULAR DISHES" />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <ScrollableMenu />
        </AnimatedSection>
      </section>
      <section className="lg:py-24  py-12 lg:mt-12 bg-cusLightBg ">
        <div className="overflow-hidden relative lg:-top-44 ">
          <AnimatedSection>
            <TextCarousel />
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="flex items-start justify-center relative lg:-top-32 px-4">
            <Testimonials />
          </div>
        </AnimatedSection>
      </section>
      <section className="lg:py-24 py-12 relative px-4 mx-12">
        <AnimatedSection>
          <RatingBar />
        </AnimatedSection>
        <AnimatedSection>
          <SectionTitle subtitle="From Our Blogs" title="Recent Articles" />
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid md:grid-cols-2 grid-cols-1   lg:grid-cols-3 gap-8 md:gap-5 lg:gap-5 justify-items-center w-full px-4 md:px-6 lg:px-8">
            {" "}
            <BlogImages
              img={
                "https://craftohtml.themezaa.com/images/demo-restaurant-blog-01.jpg"
              }
              text={"Never Eat more than you can life."}
            />
            <BlogImages
              img={
                "https://craftohtml.themezaa.com/images/demo-restaurant-blog-02.jpg"
              }
              text={"Life is uncertain Eat dessert first."}
            />
            <BlogImages
              img={
                "https://craftohtml.themezaa.com/images/demo-restaurant-blog-03.jpg"
              }
              text={"Food simply isn't important to me."}
            />
          </div>
        </AnimatedSection>
      </section>
      <FooterSection />
    </>
  );
}
