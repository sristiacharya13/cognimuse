import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import Studio from "./Studio"
import CalendlyEmbed from "./CalendlyEmbed";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleOpenVideo = () => {
    setVideoSrc("https://youtube.com/-q9horL8Ok8?si=H3p0WyUa7BK-quS7"); 
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoSrc("");
  };

  return (
    <>
    <CalendlyEmbed/>
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="relative w-full overflow-hidden mt-[-20px]">
        <div className="flex whitespace-nowrap animate-marquee mt-[90px] mb-[100px]">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center px-2">
              <span className="text-[12vw] font-bold uppercase leading-none">
                About Cognimuse
              </span>
              <button
                className="border-2 border-white rounded-full p-6 flex items-center justify-center w-[10vw] h-[10vw] min-w-[60px] min-h-[60px] mx-2 hover:bg-white group transition duration-300"
                onClick={handleOpenVideo}
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

      {showVideo && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold z-50"
            onClick={handleCloseVideo}
          >
            <FiX className="text-white hover:text-gray-300 transition duration-200" />
          </button>
          <div className="relative w-[80vw] max-w-[900px]">
            {videoSrc && (
              <iframe
                className="w-full h-[50vw] max-h-[500px] rounded-lg"
                src={videoSrc}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}

      <Studio/>
    </div>
    </>
  );
};

export default About;
