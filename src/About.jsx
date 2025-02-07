import React, { useState } from "react";
import Cards from "./Cards";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden mt-[-20px]">
        <div className="flex whitespace-nowrap animate-marquee mt-[90px] mb-[100px]">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center px-2">
              <span className="text-[12vw] font-bold uppercase leading-none">
                About ups
              </span>
              <button
                className="border-2 border-white rounded-full p-6 flex items-center justify-center w-[10vw] h-[10vw] min-w-[60px] min-h-[60px] mx-2 hover:bg-white group transition duration-300"
                onClick={() => setShowVideo(true)}
              >
                <svg
                  className="w-[4vw] h-[4vw] min-w-[25px] min-h-[25px] text-white group-hover:text-black transition duration-300"
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

      {/* Video Popup (Thumbnail Only) */}
      {showVideo && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold z-50"
            onClick={() => setShowVideo(false)}
          >
            ✖
          </button>
          <div className="relative w-[80vw] max-w-[900px]">
            {/* Video Thumbnail */}
            <img
              className="w-full rounded-lg cursor-pointer"
              src="https://i.ytimg.com/vi/KVh7cTfPTgs/maxresdefault.jpg"
              alt="Video Thumbnail"
              onClick={() => window.open("https://www.youtube.com/watch?v=KVh7cTfPTgs", "_blank")}
            />
          </div>
        </div>
      )}

      <Cards />
    </div>
  );
};

export default About;
