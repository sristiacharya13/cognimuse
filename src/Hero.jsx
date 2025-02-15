// import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <motion.div
        className="relative w-[450px] h-[350px]"
        animate={{
          rotateX: [0, 30, 0, -30, 0],
          rotateY: [0, 45, 45, -45, -45],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {[
          { className: "front", transform: "translateZ(225px)" },
          { className: "back", transform: "translateZ(-225px) rotateY(180deg)" },
          { className: "left", transform: "translateX(-225px) rotateY(-90deg)" },
          { className: "right", transform: "translateX(225px) rotateY(90deg)" },
        ].map((face, index) => (
          <div
            key={index}
            className="absolute w-[450px] h-[350px] flex items-center justify-center text-black text-xl font-bold border-gray-400"
            style={{ 
              transform: face.transform,
              backgroundColor: 'rgba(190,190,190,0.8)', // Silver color with 30% opacity
            }}
          >
            <div className="flex flex-col absolute top-10 left-10 items-center text-center">
              <img  className="w-30 h-20"
              src="src/assets/favicon[1].png" alt="" />
            </div>
            <div className="mt-4 absolute top-25 left-8 text-6xl font-bold text-black">
              COGNIMUSE
            </div>
            <div className="mt-7 absolute bottom-30 left-8 text-xl font-bold text-black">
              Simplifying Experiences. Amplifying Impacts
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;