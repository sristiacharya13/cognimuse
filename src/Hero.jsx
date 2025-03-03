import React from "react";
import SplineScene from "./SplineScene"; // Import SplineScene component

const Hero = () => {
  return (
    <div className="relative min-h-screen h-screen bg-black text-white overflow-hidden flex items-start justify-center pt-10">
      {/* Centered Spline Scene */}
      <div className="w-full h-full flex justify-center items-start mt-[-20px]">
        <div className="w-full h-full max-w-[1200px] max-h-[1200px]">
          <SplineScene />
        </div>
      </div>
    </div>
  );
};

export default Hero;
