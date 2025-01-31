import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import {
  FaMagnifyingGlass,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import FooterSection from "./FooterSection";

function Gallery() {
  const categories = {
    All: [
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-01.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-02.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-03.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-04.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-05.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-06.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-07.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-08.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-09.jpg",
    ],
    NonVeg: [
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-01.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-03.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-02.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-05.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-04.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-06.jpg",
    ],
    Vegetarian: [
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-05.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-06.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-07.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-08.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-09.jpg",
    ],
    Desserts: [
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-02.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-03.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-04.jpg",
    ],
    Drinks: [
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-08.jpg",
      "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-09.jpg",
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (imageUrl) => {
    const index = categories[selectedCategory].indexOf(imageUrl);
    setCurrentImageIndex(index);
    setSelectedImage(imageUrl);
  };

  const closeZoomModal = () => {
    setSelectedImage(null);
  };

  const goToPreviousImage = () => {
    const newIndex =
      (currentImageIndex - 1 + categories[selectedCategory].length) %
      categories[selectedCategory].length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(categories[selectedCategory][newIndex]);
  };

  const goToNextImage = () => {
    const newIndex =
      (currentImageIndex + 1) % categories[selectedCategory].length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(categories[selectedCategory][newIndex]);
  };

  return (
    <>
      <HeroSection
        heading={"PHOTO GALLERY"}
        subheading={"- LUXURY RESTAURANT -"}
      />
      <section className="p-8 text-center mx-container pb-24">
        <div className="flex justify-center gap-4 mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {categories[selectedCategory].map((imageUrl, index) => (
              <motion.div
                key={imageUrl}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-lg group"
              >
                <motion.img
                  src={imageUrl}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.1, duration: 0.7 }}
                />

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-700"></div>

                <motion.button
                  onClick={() => handleImageClick(imageUrl)}
                  className="absolute top-[47%] left-[45%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaMagnifyingGlass size={32} color="#ffffff" weight="bold" />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
            onClick={closeZoomModal}
          >
            <motion.img
              src={selectedImage}
              alt="Zoomed Image"
              className="max-w-[100%] max-h-[100%] "
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
              className="absolute left-4 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-70 transition-all duration-300"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
              className="absolute right-4 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-70 transition-all duration-300"
            >
              <FaChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <FooterSection />
    </>
  );
}

export default Gallery;
