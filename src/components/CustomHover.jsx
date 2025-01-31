import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const CustomHover = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add hover effects for specific elements
    const hoverElements = document.querySelectorAll("a, button, .hover-effect");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => setIsHovering(true));
      element.addEventListener("mouseleave", () => setIsHovering(false));
    });

    // Track mouse movement
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => setIsHovering(true));
        element.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-6 h-6 bg-cusBg border-black rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ${
        isHovering ? "scale-150 bg-opacity-50" : "scale-100 bg-opacity-100"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default CustomHover;
