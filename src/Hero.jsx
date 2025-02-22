// // import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <div className="flex items-center justify-center w-full h-screen bg-black">
//       <motion.div
//         className="relative w-[450px] h-[350px]"
//         animate={{
//           rotateX: [0, 30, 0, -30, 0],
//           rotateY: [0, 45, 45, -45, -45],
//         }}
//         transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {[
//           { className: "front", transform: "translateZ(225px)" },
//           { className: "back", transform: "translateZ(-225px) rotateY(180deg)" },
//           { className: "left", transform: "translateX(-225px) rotateY(-90deg)" },
//           { className: "right", transform: "translateX(225px) rotateY(90deg)" },
//         ].map((face, index) => (
//           <div
//             key={index}
//             className="absolute w-[450px] h-[350px] flex items-center justify-center text-black text-xl font-bold border-gray-400"
//             style={{ 
//               transform: face.transform,
//               backgroundColor: 'rgba(190,190,190,0.8)', // Silver color with 30% opacity
//             }}
//           >
//             <div className="flex flex-col absolute top-10 left-10 items-center text-center">
//               <img  className="w-30 h-20"
//               src="src/assets/favicon[1].png" alt="" />
//             </div>
//             <div className="mt-4 absolute top-25 left-8 text-6xl font-bold text-black">
//               COGNIMUSE
//             </div>
//             <div className="mt-7 absolute bottom-30 left-8 text-xl font-bold text-black">
//               Simplifying Experiences. Amplifying Impacts
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaMedium, FaBehance } from 'react-icons/fa';
import Navbar from './Navbar';

const Hero = () => {
  const [showSubheading, setShowSubheading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubheading(true);
    }, "COGNIMUSE".length * 100 + 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 flex-col relative">
      {/* Navbar */}
      {showSubheading && (
        <div className="navbar-container">
          <Navbar />
        </div>
      )}

      {/* Main Title */}
      <h1 className="text">
        {"COGNIMUSE".split("").map((letter, index) => (
          <span
            key={index}
            className="letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>

      {/* Subheading */}
      {showSubheading && (
        <p className="subheading">Simplifying Experiences. Amplifying Impacts.</p>
      )}

      {/* Social Media Icons */}
      {showSubheading && (
        <div className="social-icons">
          <a href="#" aria-label="Location" className="icon"><FaMapMarkerAlt /></a>
          <a href="tel:+123456789" aria-label="Phone" className="icon"><FaPhoneAlt /></a>
          <a href="mailto:email@example.com" aria-label="Email" className="icon"><FaEnvelope /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon"><FaLinkedin /></a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="icon"><FaMedium /></a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="icon"><FaBehance /></a>
        </div>
      )}

      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }

        .text {
          display: flex;
          font-weight: bold;
          color: white;
          text-transform: uppercase;
          line-height: 1;
          font-size: 4rem;
          text-align: center;
        }

        @media (min-width: 640px) {
          .text {
            font-size: 8rem;
          }
        }

        @media (min-width: 1024px) {
          .text {
            font-size: 15rem;
          }
        }

        .letter {
          display: inline-block;
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .navbar-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          animation: fadeInSubheading 1s ease-out forwards;
        }

        .subheading {
          color: #bef264;
          font-size: 1.5rem;
          opacity: 0;
          margin-top: 2rem;
          animation: fadeInSubheading 1s ease-out forwards;
          text-align: center;
        }

        @media (min-width: 640px) {
          .subheading {
            font-size: 2rem;
          }
        }

        .social-icons {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          gap: 1rem;
          opacity: 0;
          animation: fadeInSubheading 1s ease-out forwards;
        }

        .icon {
          color: white;
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .icon:hover {
          transform: scale(1.2);
          color: #bef264;
        }

        @keyframes fadeInSubheading {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;