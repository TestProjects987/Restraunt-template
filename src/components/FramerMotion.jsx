// import {
//   motion,
//   useAnimation,
//   useInView,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { useEffect, useRef } from "react";

// function FramerMotion() {
//   const containerRef = useRef(null);

//   const isInView = useInView(containerRef, { once: true });
//   const mainControls = useAnimation();

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"], // Ensure the animation triggers during the correct scrolling range
//   });

//   const paragraphOneValue = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["-100%", "0%"]
//   );
//   const paragraphTwoValue = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["100%", "0%"]
//   );

//   // Rotate transformation for the image
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

//   useEffect(() => {
//     if (isInView) {
//       mainControls.start("visible");
//     }
//   }, [isInView, mainControls]);

//   const parentVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-10 overflow-x-hidden">
//         <motion.section
//           variants={parentVariants}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-3 p-10 gap-10"
//         >
//           <motion.div
//             variants={childVariants}
//             className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
//           >
//             <motion.div
//               className="w-20 h-20 bg-stone-100 rounded-lg"
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//             ></motion.div>
//             <motion.div
//               className="w-20 h-20 bg-stone-100 rounded-full"
//               initial={{ opacity: 0, y: -100 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
//             ></motion.div>
//           </motion.div>
//           <motion.div
//             ref={containerRef}
//             variants={childVariants}
//             className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center"
//           >
//             <motion.div
//               style={{
//                 rotate, // Apply rotation animation
//                 width: "300px",
//                 height: "300px",
//                 backgroundImage: `url('https://craftohtml.themezaa.com/images/demo-restaurant-home-02.jpg')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 borderRadius: "50%",
//               }}
//             ></motion.div>
//           </motion.div>
//           <motion.div
//             variants={childVariants}
//             className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center"
//           ></motion.div>
//           <motion.div
//             variants={childVariants}
//             className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center"
//           ></motion.div>
//           <motion.div
//             variants={childVariants}
//             className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center"
//           ></motion.div>
//           <motion.div
//             variants={childVariants}
//             className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center"
//           ></motion.div>
//         </motion.section>
//         <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
//           <motion.h1
//             className="text-slate-800 text-5xl tracking-wide text-center"
//             animate={mainControls}
//             initial="hidden"
//             variants={{
//               hidden: { opacity: 0, y: 75 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ delay: 0.3 }}
//           >
//             Just keep Scrolling
//           </motion.h1>
//           <motion.p
//             style={{ translateX: paragraphOneValue }}
//             className="text-slate-800 font-thin text-4xl w-1/2 mx-auto"
//           >
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//             distinctio perferendis provident error facere aspernatur? Et ad
//             iusto earum consequuntur sed praesentium? Eligendi ipsum deserunt
//             laudantium hic similique asperiores laborum.
//           </motion.p>
//           <motion.p
//             style={{ translateX: paragraphTwoValue }}
//             className="text-slate-800 font-thin text-4xl w-1/2 mx-auto"
//           >
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//             distinctio perferendis provident error facere aspernatur? Et ad
//             iusto earum consequuntur sed praesentium? Eligendi ipsum deserunt
//             laudantium hic similique asperiores laborum.
//           </motion.p>
//         </section>
//       </div>
//     </>
//   );
// }
// export default FramerMotion;
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

function FramerMotion() {
  const containerRef = useRef(null); // Initialize useRef
  const { scrollYProgress } = useScroll({
    target: containerRef, // Attach scroll listener to the container
    offset: ["start end", "end start"], // Trigger animation during scrolling
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // Map scroll progress to rotation

  return (
    <div
      ref={containerRef}
      style={{
        height: "200vh", // Ensure enough scrollable height
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          rotate, // Apply rotation animation
          width: "300px",
          height: "300px",
          backgroundImage: `url('https://craftohtml.themezaa.com/images/demo-restaurant-home-02.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      />
      <p className="text-center mt-10 text-lg">
        Scroll to see the image rotate!
      </p>
    </div>
  );
}

export default FramerMotion;
