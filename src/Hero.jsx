import React from "react";
import SplineScene from "./SplineScene";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Spline Scene (Original Desktop Position) */}
      <div
        className="w-3/4 h-full absolute right-0 top-0 flex items-center justify-center"
      >
        <SplineScene />
      </div>



      {/* Original Desktop Bottom Left Text */}
      <div className="hidden md:block absolute bottom-20 left-20 text-left font-[Orbitron] z-10">
        <h1 className="text-[85px] leading-tight">
          Designing <br /> Visions
        </h1>
      </div>

      {/* Original Desktop Center Bottom "Since '20" */}
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-[Orbitron] z-10">
        <p className="text-4xl">Since '20</p>
      </div>

      {/* Original Desktop Right Centered Text */}
      <div className="hidden md:block absolute top-1/2 right-10 transform -translate-y-1/2 max-w-xs z-10 pr-10">
        <p className="text-lg text-justify font-[Inter]">
          We transform raw ideas<br /> into immersive digital<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;experiences
        </p>
      </div>

      {/* Mobile Bottom Text and Since '20 (Stacked) */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center z-10">
        <p className="text-lg text-center font-[Inter]">
          We transform raw ideas<br /> into immersive digital<br /> experiences
        </p>
        <h1 className="text-4xl leading-tight font-[Orbitron] mt-2">
          Designing Visions
        </h1>
        <p className="text-2xl font-[Orbitron] mt-4">Since '20</p>
      </div>
    </div>
  );
};

export default Hero;