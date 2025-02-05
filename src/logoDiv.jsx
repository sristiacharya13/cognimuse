import React from "react";

const logoDiv = () => {
  return (
    <div className="flex flex-col items-center"> {/* Main container: column direction and center alignment */}
      <div className="relative"> {/* Container for logo and TM */}
        <div className="w-40 h-40 bg-black flex items-center justify-center"> {/* Adjust w-40 and h-40 for size */}
          <div className="text-white text-5xl font-bold"> {/* U character */}
            U
          </div>
        </div>
        <span className="absolute top-2 right-2 text-white text-xs">TM</span> {/* TM position */}
      </div>
      <div className="mt-4"> {/* Space between logo and text */}
        <p className="text-2xl font-bold uppercase">DIGITAL</p>
        <p className="text-2xl font-bold uppercase">STUDIO</p>
      </div>
    </div>
  );
};

export default logoDiv;