// import React, { useState, useEffect, useRef } from 'react';
// import StorySection from './StorySection';
// import { motion, useScroll } from 'framer-motion';

// import faviconImg from './assets/favicon.png';
// import section2Img from './assets/favicon.png';
// import section3Img from './assets/favicon.png';

// const CognimuseStory = () => {
//   const [activeSection, setActiveSection] = useState(null);
//   const { scrollYProgress } = useScroll();
//   const pathRef = useRef(null);

//   const sections = [
//     {
//       id: 'section1',
//       title: 'Who are we?',
//       content: 'CogniMuse is a software development company dedicated to accelerating the success of early-stage startups and entrepreneurs by saving them time, money, and energy.',
//       position: 'left',
//       image: faviconImg,
//     },
//     {
//       id: 'section2',
//       title: 'What do we do?',
//       content: 'We help early-stage startups and entrepreneurs build and launch their MVP in 2-4 weeks.',
//       position: 'right',
//       image: section2Img,
//     },
//     {
//       id: 'section3',
//       title: 'What do we offer?',
//       content: 'Transform your ideas into prototypes, MVPs, and full-scale products with our expert-driven development process.',
//       position: 'left',
//       image: section3Img,
//     },
//   ];

//   // Function to update the path when a section is in view
//   const updatePath = (position) => {
//     if (!pathRef.current) return;

//     // Get the current section's position
//     const sectionElement = document.getElementById(position);
//     if (!sectionElement) return;

//     const rect = sectionElement.getBoundingClientRect();
//     const startX = position === 'left' ? 150 : window.innerWidth - 150;
//     const endX = position === 'left' ? 500 : window.innerWidth - 500;
//     const startY = rect.top + window.scrollY + rect.height / 2;
//     const endY = startY + 200; // Adjust line length here

//     const newPath = `M${startX},${startY} Q${(startX + endX) / 2},${(startY + endY) / 2} ${endX},${endY}`;
//     pathRef.current.setAttribute('d', newPath);
//   };

//   // Clear path if no section is active
//   const clearPath = () => {
//     if (pathRef.current) {
//       pathRef.current.setAttribute('d', '');
//     }
//   };

//   return (
//     <div className="relative bg-black text-white min-h-screen flex flex-col space-y-5 overflow-hidden">
//       <svg
//         style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}
//       >
//         <path ref={pathRef} stroke="#72B6FF" fill="transparent" strokeWidth="3" />
//       </svg>

//       {sections.map((section) => (
//         <StorySection
//           key={section.id}
//           id={section.id}
//           title={section.title}
//           content={section.content}
//           position={section.position}
//           setActiveSection={setActiveSection}
//           image={section.image}
//           updatePath={updatePath}
//           clearPath={clearPath} // Pass clear function
//         />
//       ))}
//     </div>
//   );
// };

// export default CognimuseStory;



// import React, { useState, useEffect, useRef } from "react";

// const CognimuseStory = () => {
//   const [progressValue, setProgressValue] = useState(0);
//   const [isFixed, setIsFixed] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const sectionTop = sectionRef.current.offsetTop;
//       const sectionHeight = sectionRef.current.offsetHeight;
//       const scrollTop = window.scrollY;
//       const windowHeight = window.innerHeight;

//       // Calculate progress relative to the CognimuseStory section
//       const progress = Math.min(
//         ((scrollTop - (sectionTop - windowHeight)) / (sectionHeight - windowHeight)) * 100,
//         100
//       );

//       setProgressValue(progress);

//       // Make content sticky while the progress bar is updating
//       if (scrollTop >= sectionTop - windowHeight && scrollTop < sectionTop + sectionHeight) {
//         setIsFixed(progress < 100);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div ref={sectionRef} className="relative bg-black text-white">
//       <div
//         className={`flex items-center justify-between px-16 min-h-screen ${
//           isFixed ? "fixed top-0 left-0 w-full h-screen" : "relative"
//         }`}
//       >
//         {/* Left Section */}
//         <div className="space-y-16 relative z-10">
//           {/* Progress Bar */}
//           <div className="absolute left-0 top-0 h-full w-2 bg-gray-700 overflow-hidden">
//             <div
//               className="bg-pink-500 w-full transition-all duration-300"
//               style={{ height: `${progressValue}%` }}
//             ></div>
//           </div>

//           {/* Sections */}
//           {[
//             {
//               title: "Who are we?",
//               content:
//                 "CogniMuse is a software development company dedicated to accelerating the success of early-stage startups and entrepreneurs by saving them time, money, and energy.",
//             },
//             {
//               title: "What do we do?",
//               content:
//                 "We help early-stage startups and entrepreneurs build and launch their MVP in 2-4 weeks.",
//             },
//             {
//               title: "What do we offer?",
//               content:
//                 "Transform your ideas into prototypes, MVPs, and full-scale products with our expert-driven development process.",
//             },
//           ].map((item, index) => (
//             <div key={index}>
//               <h1 className="text-5xl font-bold">{item.title}</h1>
//               <p className="text-lg mt-4 opacity-70">{item.content}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right Section (Image) */}
//         <div className="relative z-10">
//           <img
//             src="/image.png"
//             alt="Fancy Design"
//             className="max-w-md transform rotate-6"
//           />
//         </div>
//       </div>

//       {/* Spacer to Enable Smooth Scroll */}
//       <div className="h-[200vh] bg-black"></div>
//     </div>
//   );
// };

// export default CognimuseStory;



// import React, { useState, useEffect, useRef } from "react";
// import TeamSection from "./TeamSection";

// const CognimuseStory = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const { top, height } = containerRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Calculate scroll progress for each section
//       const scrollRange = height - windowHeight;
//       const currentScroll = Math.min(Math.max(-top, 0), scrollRange);
//       const progress = (currentScroll / scrollRange) * 100;

//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const getOpacity = (start, end) => {
//     return Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1);
//   };

//   const getTextColor = (start, end) => {
//     const opacity = getOpacity(start, end);
//     return `rgba(255, 255, 255, ${opacity})`;
//   };

//   const allSectionsVisible = scrollProgress >= 100;

//   return (
//     <div className="bg-black min-h-screen">
//       <div ref={containerRef} className="relative">
//         <div className="flex items-start justify-between px-16">
//           <div className={`text-white space-y-32 ${allSectionsVisible ? "relative" : "sticky top-0"} pl-12`}>
//             <div className="absolute left-0 top-0 h-full w-2 bg-gray-700 overflow-hidden">
//               <div
//                 className="bg-lime-500 w-full transition-all duration-300"
//                 style={{ height: `${Math.min(scrollProgress, 100)}%` }}
//               ></div>
//             </div>

//             {/* Step 1 (0% - 33%) */}
//             <div style={{ opacity: getOpacity(0, 33) }}>
//               <h1
//                 className="text-5xl font-bold transition-opacity duration-700"
//                 style={{ color: getTextColor(0, 33) }}
//               >
//                 Who are we?
//               </h1>
//               <p
//                 className="text-lg mt-2 transition-opacity duration-700"
//                 style={{ color: getTextColor(0, 33) }}
//               >
//                 CogniMuse is a software development company dedicated to accelerating the success <br />
//                 of early-stage startups and entrepreneurs by saving them time, money, and energy.
//               </p>
//             </div>

//             {/* Step 2 (33% - 66%) */}
//             <div style={{ opacity: getOpacity(33, 66) }}>
//               <h1
//                 className="text-5xl font-bold transition-opacity duration-700"
//                 style={{ color: getTextColor(33, 66) }}
//               >
//                 What do we do?
//               </h1>
//               <p
//                 className="text-lg mt-2 transition-opacity duration-700"
//                 style={{ color: getTextColor(33, 66) }}
//               >
//                 We help early-stage startups and entrepreneurs build and launch their MVP in 2-4 weeks.
//               </p>
//             </div>

//             {/* Step 3 (66% - 100%) */}
//             <div style={{ opacity: getOpacity(66, 100) }}>
//               <h1
//                 className="text-5xl font-bold transition-opacity duration-700"
//                 style={{ color: getTextColor(66, 100) }}
//               >
//                 What do we offer?
//               </h1>
//               <p
//                 className="text-lg mt-2 transition-opacity duration-700"
//                 style={{ color: getTextColor(66, 100) }}
//               >
//                 Transform your ideas into prototypes, MVPs, and full-scale products with our <br />
//                 expert-driven development process.
//               </p>
//             </div>
//           </div>

//           {/* <div className="relative">
//             <img src="https://cognimuse.online/_next/static/media/Muse.675f37a8.svg" alt="Fancy Design" className="max-w-md transform rotate-6" />
//           </div> */}
//         </div>
//       </div>

//       {allSectionsVisible && <TeamSection />}
//     </div>
//   );
// };

// export default CognimuseStory;
import { useState, useEffect } from "react";

const steps = [
  {
    title: "Who are we?",
    description:
      "CogniMuse is a software development company dedicated to accelerating the success of early-stage startups and entrepreneurs by saving them time, money, and energy.",
    media: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3cd25ca07a1862c5dec1_work-7.avif",
  },
  {
    title: "What do we do?",
    description:
      "We help early-stage startups and entrepreneurs build and launch their MVP in 2-4 weeks.",
    media: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3547c9cec6488b67c054_work-5.avif",
  },
  {
    title: "What do we offer?",
    description:
      "We provide comprehensive support for MVP development, ensuring fast delivery without compromising on quality.",
    media: "https://cognimuse.com/services/whisperify.mp4",
  },
];

export default function CognimuseStory() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stepHeight = window.innerHeight / 2;
      const totalScrollHeight = steps.length * stepHeight;

      // Calculate the current step index
      const stepIndex = Math.min(
        Math.floor(scrollPosition / stepHeight),
        steps.length - 1
      );
      setCurrentStep(stepIndex);

      // Unfix the component when gradient reaches 100%
      setIsFixed(scrollPosition < totalScrollHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic gradient height (1/3 for each step)
  const gradientHeight = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="bg-black text-white w-screen min-h-screen">
      <div
        className={`flex items-center justify-between p-10 ${
          isFixed ? "fixed" : "relative"
        } top-0 left-0 w-full h-screen`}
      >
        <ol className="relative flex flex-col space-y-16 ml-8">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`transition-all duration-[1200ms] ease-in-out transform ${
                currentStep >= index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } px-10`}
            >
              <h3 className="text-5xl font-extrabold">{step.title}</h3>
              <p className="text-2xl mt-4">{step.description}</p>
            </li>
          ))}

          {/* Dynamic Gradient Bar */}
          <div className="absolute left-0 top-0 h-full w-2.5">
            <div
              className="bg-gray-600 absolute inset-0"
              style={{ height: "100%" }}
            />
            <div
              className="bg-lime-500 transition-all duration-1000"
              style={{ height: `${Math.max(5, gradientHeight)}%` }}
            />
          </div>
        </ol>

        {/* Media Section */}
        <div
          className={`relative w-96 h-96 transition-opacity duration-[1200ms] ease-in-out transform ${
            currentStep >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {steps[currentStep].media.endsWith(".mp4") ? (
            <video
              key={steps[currentStep].media} // Ensure video reloads on step change
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={steps[currentStep].media} type="video/mp4" />
            </video>
          ) : (
            <img
              src={steps[currentStep].media}
              alt={steps[currentStep].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
