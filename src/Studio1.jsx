import React from "react";
import { motion } from "framer-motion";
import TeamGrid from "./TeamGrid";

const Studio1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-black p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6 lg:gap-8 overflow-x-hidden">
      <div className="w-full lg:w-3/5 flex items-center justify-center order-2 lg:order-1 my-4 sm:my-6 lg:my-8">
        <TeamGrid />
      </div>
      
      <div className="flex justify-center">
        <h1 className="font-bold mt-16 mb-12 text-4xl md:text-6xl lg:text-8xl">
          THE TEAM
        </h1>
      </div>
      <div className="w-full lg:w-2/5 flex items-center justify-center order-1 lg:order-2 my-4 sm:my-6 lg:my-8">
        <motion.div
          className="relative w-[200px] sm:w-[250px] lg:w-[300px] h-[180px] sm:h-[220px] lg:h-[250px]"
          animate={{
            rotateX: [0, 30, 0, -30, 0],
            rotateY: [0, 45, 45, -45, -45],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {[
            { className: "front", transform: "translateZ(150px)" },
            { className: "back", transform: "translateZ(-150px) rotateY(180deg)" },
            { className: "left", transform: "translateX(-150px) rotateY(-90deg)" },
            { className: "right", transform: "translateX(150px) rotateY(90deg)" },
          ].map((face, index) => (
            <div
              key={index}
              className="absolute w-full h-full bg-gray-300/80 border-2 border-gray-300"
              style={{ transform: face.transform }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100">
                {/* Logo - Responsive sizing */}
                <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] absolute left-2 sm:left-3 lg:left-4 top-2 sm:top-3 lg:top-4 rounded-full overflow-hidden">
                  <img
                    src="src/assets/favicon.png"
                    alt="U Digital Studio Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Company Name - Responsive text */}
                <div className="absolute top-24 sm:top-28 lg:top-32 left-2 sm:left-3 lg:left-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                  COGNIMUSE
                </div>
                
                {/* Tagline - Responsive text */}
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-2 sm:left-3 lg:left-4 text-xs sm:text-sm lg:text-base font-bold text-black">
                  Simplifying Experiences.
                  <span className="text-black"> Amplifying Impacts</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Studio1;