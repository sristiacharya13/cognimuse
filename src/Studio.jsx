import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Studio = () => {
  // State for randomized numbers
  const [numbers, setNumbers] = useState({
    feedback: Math.floor(Math.random() * 1000),
    experience: Math.floor(Math.random() * 20),
    projects: Math.floor(Math.random() * 500),
  });

  useEffect(() => {
    let count = 0;
    
    // Faster randomization every 50ms
    const interval = setInterval(() => {
      setNumbers({
        feedback: Math.floor(Math.random() * 999) + 1, // 1 - 999
        experience: Math.floor(Math.random() * 15) + 1, // 1 - 15
        projects: Math.floor(Math.random() * 300) + 50, // 50 - 300
      });

      count++;

      // Stop randomization after 1.5 seconds (faster effect)
      if (count > 30) {
        clearInterval(interval);
        setNumbers({
          feedback: 100, // Will get % superscript
          experience: 5,  // Will get +
          projects: 174,  // Will get +
        });
      }
    }, 50); // Faster transition every 50ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center text-center px-6">
      {/* Animated Text Content */}
      <motion.div 
        className="mt-10 md:mt-8 w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p 
          className="text-4xl md:text-4xl font-large"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <span className="text-lime-300">CogniMuse</span> – Founded to empower early-stage startups, we specialize in building, launching, and accelerating <span className="text-lime-300">MVPs</span>
        </motion.p>

        {/* Stats Section with Faster Random Number Effect */}
        <div className="mt-12 flex flex-col md:flex-row justify-around items-center">
          {[
            { label: "positive feedback", value: numbers.feedback, suffix: "%" },
            { label: "years experience", value: numbers.experience, suffix: "+" },
            { label: "projects done", value: numbers.projects, suffix: "+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
            >
              <p className="text-6xl md:text-8xl font-bold leading-none">
                {stat.value}
                <sup className="text-lime-300">{stat.suffix}</sup>
              </p>
              <p className="text-sm md:text-base mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Link to="/studio">
                <button className="mt-12 px-6 py-3 text-white font-semibold relative overflow-hidden hover:text-white transition-colors 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-300
                    hover:after:w-full after:transition-all after:duration-300">
                    MORE ABOUT US
                </button>
      </Link>
    </div>
  );
};

export default Studio;
