import React from "react";

const Studio = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center text-center px-6">
      {/* Text Content */}
      <div className="mt-16 md:mt-24 w-full max-w-3xl">
        <p className="text-6xl md:text-4xl font-large"> {/* Increased text size */}
          Ups™ Founded in 2019, this agency focuses on building, launching, and
          revitalizing brands.
        </p>

        {/* Stats Section (Static) */}
        <div className="mt-12 flex flex-col md:flex-row justify-around items-center">
          <div>
            <p className="text-6xl md:text-8xl font-bold leading-none"> {/* Increased text size */}
              100<sup className="text-gray-400">%</sup> {/* Superscript and gray color */}
            </p>
            <p className="text-sm md:text-base mt-2">positive feedback</p>
          </div>
          <div>
            <p className="text-6xl md:text-8xl font-bold leading-none"> {/* Increased text size */}
              15<sup className="text-gray-400">+</sup> {/* Superscript and gray color */}
            </p>
            <p className="text-sm md:text-base mt-2">years experience</p>
          </div>
          <div>
            <p className="text-6xl md:text-8xl font-bold leading-none"> {/* Increased text size */}
              174<sup className="text-gray-400">+</sup> {/* Superscript and gray color */}
            </p>
            <p className="text-sm md:text-base mt-2">projects done</p>
          </div>
        </div>
      </div>

      {/* ... (Rest of your component: More About Us, images, etc.) */}
    </div>
  );
};

export default Studio;