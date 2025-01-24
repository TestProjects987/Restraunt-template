import React, { useState, useRef } from "react";
import MenuLi from "./MenuLi";
import Icons from "./Icons";
import { motion, useInView } from "framer-motion";

import { TbBowlChopsticks } from "react-icons/tb";
import { LuDessert } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { LuCookie } from "react-icons/lu";
import { PiBeerSteinThin } from "react-icons/pi";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const AnimatedSection = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, rotateX: 80 }}
        animate={{ opacity: 1, rotateX: isInView ? 0 : 90 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    );
  };

  const tabsContent = [
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-01.jpg",
        Price: "$12.00",
        Name: "Boiled Organic Egg",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-02.jpg",
        Price: "$10.00",
        Name: "Chicken breast burger",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-03.jpg",
        Price: "$8.00",
        Name: "Medium spicy chips",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-04.jpg",
        Price: "$11.00",
        Name: "Spicy Chicken",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-05.jpg",
        Price: "$8.00",
        Name: "Vegetarian Wrap",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-06.jpg",
        Price: "$8.00",
        Name: "Vegetarian Wrap",
      },
    ],
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-02.jpg",
        Price: "$10.00",
        Name: "Chicken breast burger",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-04.jpg",
        Price: "$11.00",
        Name: "Spicy Chicken",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-01.jpg",
        Price: "$12.00",
        Name: "Boiled Organic Egg",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-03.jpg",
        Price: "$8.00",
        Name: "Medium spicy chips",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-05.jpg",
        Price: "$8.00",
        Name: "Vegetarian Wrap",
      },
    ],
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-05.jpg",
        Price: "$8.00",
        Name: "Vegetarian Wrap",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-04.jpg",
        Price: "$11.00",
        Name: "Spicy Chicken",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-03.jpg",
        Price: "$8.00",
        Name: "Medium spicy chips",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-02.jpg",
        Price: "$10.00",
        Name: "Chicken breast burger",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-01.jpg",
        Price: "$12.00",
        Name: "Boiled Organic Egg",
      },
    ],
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-06.jpg",
        Price: "$5.00",
        Name: "Chocolate Cake",
      },
    ],
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-07.jpg",
        Price: "$3.00",
        Name: "Fresh Juice",
      },
    ],
  ];

  return (
    <div className="w-100% h-auto mb-6">
      <div className="flex justify-center items-center">
        <AnimatedSection className="grid grid-cols-1 mb-[20px] md:grid-cols-5 w-[80%] mx-auto">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(0);
            }}
            className="flex flex-col items-center justify-center lg:p-4 py-2 hover:text-primary focus:text-primary"
            aria-label="Starters"
            title="Starters"
          >
            <Icons
              category={"Starters"}
              icon={TbBowlChopsticks}
              selected={activeTab === 0}
            />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(1);
            }}
            className="flex flex-col items-center justify-center lg:p-4 py-2 hover:text-primary focus:text-primary"
            aria-label="Non-Veg"
            title="Non-Veg"
          >
            <Icons
              category={"NonVeg"}
              icon={GiChickenOven}
              selected={activeTab === 1}
            />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(2);
            }}
            className="flex flex-col items-center justify-center lg:p-4 py-2 hover:text-primary focus:text-primary"
            aria-label="Vegetarian"
            title="Vegetarian"
          >
            <Icons
              category={"Vegetarian"}
              icon={LuCookie}
              selected={activeTab === 2}
            />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(3);
            }}
            className="flex flex-col items-center justify-center lg:p-4 py-2 hover:text-primary focus:text-primary"
            aria-label="Dessert"
            title="Dessert"
          >
            <Icons
              category={"Dessert"}
              icon={LuDessert}
              selected={activeTab === 3}
            />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(4);
            }}
            className="flex flex-col items-center justify-center lg:p-4 py-2 hover:text-primary focus:text-primary"
            aria-label="Drinks"
            title="Drinks"
          >
            <Icons
              category={"Drinks"}
              icon={PiBeerSteinThin}
              selected={activeTab === 4}
            />
          </button>
        </AnimatedSection>
      </div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:grid-cols-1 p-4"
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          layout: { duration: 0.3 },
          opacity: { duration: 0.3 },
        }}
      >
        {tabsContent[activeTab]?.map((item, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MenuLi img={item.img} Price={item.Price} Name={item.Name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TabContent;
