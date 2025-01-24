import { React, useRef, useEffect } from "react";
import Banner from "./Banner";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { PhoneOutgoing, Box, Award, ShoppingBag, Star } from "react-feather";
import TextCarousel from "./TextCarousel";
import Badges from "./Badges";
import ImageSwiper from "./ImageSwiper";
import ScrollableMenu from "./ScrollableMenu";
import BlogImages from "./BlogImages";
import TabContent from "./TabContent";
import FooterSection from "./FooterSection";
import Stars from "./Stars";
import ContentText from "./ContentText";
import RatingBar from "./RatingBar";
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
  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const containerRef = useRef(null);
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
      <section className="overflow-hidden">
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

      <section className="w-full h-auto relative py-[90px]">
        <div className="absolute w-[100%] text-customLightGray font-medium text-center -top-[8%] -z-10 opacity-10 tracking-tight leading-[300px] uppercase  text-[350px] ">
          Experience
        </div>

        <div
          className="container px-[15px] mx-auto space-y-6 relative  flex mb-18 "
          ref={containerRef}
        >
          <motion.img
            style={{ rotate, y: translateY }}
            className="absolute -left-24 w-1/5 -top-36 h-auto -z-10"
            src="https://craftohtml.themezaa.com/images/demo-restaurant-home-02.jpg"
            alt="Decorative"
          />

          <div className="mt-[30px] px-[15px] w-[54%] flex-shrink-0 relative left-9 -top-6">
            <motion.img
              initial={{ rotateZ: -20 }}
              animate={{ rotateZ: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="w-[100%] h-auto overflow-visible"
              src="https://craftohtml.themezaa.com/images/demo-restaurant-home-04.png"
              alt="Main Dish"
            />
          </div>

          <div className="right ">
            <motion.img
              style={{ rotate, y: translateY }}
              className="absolute -right-20 -top-[60%] w-1/6 h-auto -z-20"
              src="https://craftohtml.themezaa.com/images/demo-restaurant-home-03.jpg"
              alt="Decorative"
            />
            <AnimatedSection className="pl-[30px] space-x-7 ">
              <ContentText
                title={"since 1988 restaurant"}
                title2={"Wonderful dining experience & food."}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
                }
                btnText={"About Restraunt "}
              />
            </AnimatedSection>
          </div>
        </div>
        <motion.div
          ref={ref}
          className="mx-[104px] relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
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
            text2={"Best Buffet Restraunt"}
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
        className="relative cover w-full h-auto py-[90px] "
        style={{
          backgroundImage:
            "url('https://craftohtml.themezaa.com/images/demo-restaurant-home-05.jpg')",
          backgroundSize: "115%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top 8% center",
        }}
      >
        <div className="mx-[105px]">
          <AnimatedSection className="flex justify-center items-center flex-col ">
            <span className="text-customRed  text-base font-schibsted mb-[10px] font-bold">
              - CHOOSE DELICIOUS -
            </span>
            <p className="text-[3.438rem] text-customDarkGray mb-[65px] leading-[3.2rem]">
              POPULAR MENU
            </p>
          </AnimatedSection>
          <TabContent />
          <AnimatedSection className="flex items-center justify-center font-schibsted">
            <div className="bg-red-700 inline-block mr-[10px] text-white font-medium rounded-[30px] px-[20px] align-middle text-center">
              Masterchef{" "}
            </div>
            <div className="text-[18px] inline-block font-normal">
              Unique and delicious dishes from the worlds{" "}
              <span className="font-semibold underline">best masterchefs.</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="flex justify-center items-center flex-col mx-[105px] ">
          <AnimatedSection className="text-customRed  text-base font-schibsted uppercase mb-[10px] font-bold">
            - Special Choice -
          </AnimatedSection>
          <AnimatedSection className="text-[3.438rem] text-customDarkGray mb-[65px] leading-[3.2rem]">
            POPULAR DISHES
          </AnimatedSection>
        </div>
        <ScrollableMenu />
      </section>

      <section className="py-24 mt-12 bg-cusLightBg w-full ">
        <div className="overflow-hidden relative -top-44 w-full">
          <TextCarousel />
        </div>
        <div className="flex items-start justify-center relative -top-32">
          <div className="col-span-6 max-w-[40%] flex flex-col justify-center items-center text-center text-customGray ">
            <img
              className="mb-10 rounded-full"
              src="https://craftohtml.themezaa.com/images/demo-restaurant-home-quotes-icon.jpg"
              alt=""
            />
            <p className="leading-[2.625rem] text-[2.375rem] tracking-tight mb-4">
              Food for us comes from our relatives whether they have wings or
              fins or roots that is how we consider food has a culture It has
              history it has a story it has relationships.
            </p>
            <span className="font-schibsted font-medium text-xl text-cusBg mb-6">
              Herman Miller
            </span>
            <ImageSwiper />
          </div>
        </div>
      </section>

      <section className="py-24 w-full h-full relative">
        <AnimatedSection className="flex justify-center items-center flex-col mx-[105px] ">
          <span className="text-customRed  text-base font-schibsted uppercase mb-[10px] font-bold">
            - From Our Blogs -
          </span>
          <p className="text-[3.438rem] text-customDarkGray mb-[65px] leading-[3.2rem]">
            Recent Articles
          </p>
        </AnimatedSection>
        <RatingBar />
        <div className="grid grid-cols-3  mx-[115px] px-[12px]">
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
      </section>

      <FooterSection />
    </>
  );
}
