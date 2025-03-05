import React from "react";  
import { motion } from "framer-motion";
import SplineScene from "./SplineScene";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      {/* Animated Spline Scene */}
      <motion.div
        initial={{ scale: 0.5, x: "50vw" }} // Start small & move from center
        animate={{ scale: 1, x: "0%" }} // Scale up & move fully to the right
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth effect
        className="w-3/4 h-full absolute right-0 top-0 flex items-center justify-center"
      >
        <SplineScene />
      </motion.div>

      {/* Bottom Left Text */}
      <div className="absolute bottom-20 left-20 text-left font-[Orbitron] z-10">
        <h1 className="text-[85px] leading-tight">
          Designing <br /> Visions
        </h1>
      </div>

      {/* Center Bottom "Since '20" */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-[Orbitron] z-10">
        <p className="text-4xl">Since '20</p>
      </div>

      {/* Right Centered Text */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 max-w-xs z-10 pr-10">
        <p className="text-lg text-justify font-[Inter]">
          We transform raw ideas<br /> into immersive digital<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;experiences
        </p>
      </div>
    </div>
  );
};

export default Hero;
