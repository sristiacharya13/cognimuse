import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMedium,
  FaBehance,
} from "react-icons/fa";
import Navbar from "./Navbar";

const text = "COGNIMUSE";

const Hero = () => {
  const [showSubheading, setShowSubheading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubheading(true);
    }, text.length * 100 + 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar - Smoothly Appears */}
      <motion.div
        className="fixed top-0 w-full bg-black z-50 pt-4 sm:pt-6"
        initial={{ opacity: 0, y: -50 }}
        animate={showSubheading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {showSubheading && <Navbar />}
      </motion.div>

      <div className="h-screen bg-black flex flex-col items-center justify-center relative px-4 pt-16 sm:pt-20">
        {/* Main Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-white font-bold tracking-wider text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[13rem] 2xl:text-[13rem]">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ scale: 1, letterSpacing: 6, color: "white" }}
                animate={{
                  scale: [1, 0.5, 0.5, 1, 1, 1, 1],
                  letterSpacing: [6, 10, 50, 6, 20, 6, 6],
                  x: [0, 0, (index - text.length / 2) * 15, 0, 0, 0, 0],
                  color: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
                }}
                transition={{
                  duration: 4,
                  delay: Math.abs(index - Math.floor(text.length / 2)) * 0.1,
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
                  ease: "easeInOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Subheading - Adjusted for Mobile */}
          {showSubheading && (
            <motion.p
              className="text-[#bef264] text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center mt-4 sm:mt-6 md:mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Simplifying Experiences. Amplifying Impacts.
            </motion.p>
          )}
        </div>

        {/* Social Media Icons - Smooth Fade-in */}
        {showSubheading && (
          <motion.div
            className="absolute bottom-6 sm:bottom-10 flex gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#" className="text-white text-xl sm:text-2xl hover:text-[#bef264]"><FaMapMarkerAlt /></a>
            <a href="tel:+123456789" className="text-white text-xl sm:text-2xl hover:text-[#bef264]"><FaPhoneAlt /></a>
            <a href="mailto:email@example.com" className="text-white text-xl sm:text-2xl hover:text-[#bef264]"><FaEnvelope /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl hover:text-[#bef264]"><FaLinkedin /></a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl hover:text-[#bef264]"><FaMedium /></a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl hover:text-[#bef264]"><FaBehance /></a>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Hero;
