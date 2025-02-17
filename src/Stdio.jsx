import React from "react";
import { motion } from "framer-motion";
import CogniMuseStory from "./CognimuseStory";
import CognimuseStory from "./CognimuseStory";

const Stdio = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black">
      <motion.div
        className="relative w-[450px] h-[400px]"
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
            className="absolute w-[450px] h-[400px] bg-white border-2 border-gray-300 flex flex-col items-center justify-center text-black text-5xl font-extrabold"
            style={{ transform: face.transform }}
          >
            <div className="w-[150px] h-[150px] absolute left-5 top-4 rounded-full overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/6717997491fcff9b174daed5_about.avif"
                alt="U Digital Studio Logo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="mt-4 absolute bottom-8 left-2 text-8xl font-bold text-black">
              ABOUT <br /> STUDIO&copy;
            </div> */}
            <div className="mt-4 absolute bottom-8 left-2 text-6xl font-bold text-black">
              ABOUT <br /> COGNIMUSE&copy;
            </div>
          </div>
        ))}
      </motion.div>

      {/* New Text Section with proper alignment */}
      <div className="flex justify-between items-center w-full max-w-screen-xl px-1 text-white mt-12">
        <p className="text-left text-sm sm:text-base md:text-xs w-1/3">  
          READY TO FIND YOUR NEXT IDEAL  
          <br /> TEMPLATE  
        </p>
        <p className="text-center text-sm sm:text-base md:text-xs w-1/3">  
          UPS <br /> DIGITAL STUDIO  
        </p>
        <p className="text-right text-sm sm:text-base md:text-xs w-1/3">  
          MADE TO LEAVE A MARK.  
        </p>
      </div>
    </div>
    <CognimuseStory/>
    </>
  );
};

export default Stdio;
