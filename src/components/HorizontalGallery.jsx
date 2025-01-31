import React, { useRef, useEffect } from "react";

const HorizontalGallery = ({ images }) => {
  const galleryRef = useRef(null);

  // Handle scroll left/right
  const handleScroll = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      if (direction === "left") {
        galleryRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handleScroll("left");
      } else if (event.key === "ArrowRight") {
        handleScroll("right");
      }
    };

    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  // Handle touch events
  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    galleryRef.current.touchStartX = touch.clientX;
  };

  const handleTouchMove = (event) => {
    if (galleryRef.current.touchStartX) {
      const touch = event.touches[0];
      const touchEndX = touch.clientX;
      const deltaX = touchEndX - galleryRef.current.touchStartX;

      if (deltaX > 50) {
        handleScroll("left");
      } else if (deltaX < -50) {
        handleScroll("right");
      }

      galleryRef.current.touchStartX = null; // Reset touch position
    }
  };

  return (
    <section className="py-24 relative bg-cusLightBg -z-20">
      <div className="h-[2px] w-[200%] bg-cusBg absolute top-[50%] -z-10"></div>
      <div className="mx-container">
        <div
          ref={galleryRef}
          className="grid grid-cols-6 w-[200%] items-center overflow-x-auto scroll-snap"
          tabIndex="0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {images.map((image, index) => (
            <div key={index} className="snap-start">
              <img
                className="max-w-[340px] h-auto rounded-md"
                src={image}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
