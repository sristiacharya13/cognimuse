import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden mt-[-20px]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center px-2">
              <span className="text-[12vw] font-bold uppercase leading-none">
                About ups
              </span>
              <button className="border-2 border-white rounded-full p-6 flex items-center justify-center w-[10vw] h-[10vw] min-w-[60px] min-h-[60px] mx-2">
                <svg
                  className="w-[4vw] h-[4vw] min-w-[25px] min-h-[25px] text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Subtext */}
      <p className="text-9xl md:text-3xl font-medium max-w-2xl mt-6">
        Ups™ Founded in 2019, this agency focuses on building, launching, and
        revitalizing brands.
      </p>

      {/* More About Us Button */}
      <button className="mt-4 text-sm uppercase tracking-widest border-b-2 border-white pb-1 hover:opacity-75 transition">
        More About Us
      </button>

      <div className="grid grid-cols-4 gap-6 mt-8 max-w-4xl">
        {["DEEI", "Bilg", "MCON", "CUBE", "Albor", "R", "MOVE", "RIDE"].map((text, index) => (
          <div key={index} className="text-3xl font-bold uppercase flex justify-center items-center">
            {text}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default About;
