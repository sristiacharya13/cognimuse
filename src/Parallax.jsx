// import React from 'react'
// import { motion } from "framer-motion";

// const images=[
//  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3cd25ca07a1862c5dec1_work-7.avif"
// ]
// const Parallax = () => {
//   return (
//     <>
//     <div className='min-h-screen flex justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center'>
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
//     </div>

//     <div className='p-10'>
//         <h2 className='font-bold text-4xl'>Sample Section</h2>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos recusandae sed? Optio asperiores, inventore sequi nemo, nobis ex at delectus corporis aperiam quisquam ut reprehenderit laborum. Maxime, repellat neque.</p>
//     </div>

//     <div className='min-h-screen bg-center bg-no-repeat bg-cover'
//         style={{backgroundImage:`url(${images[0]})`}}
//     >   
//     </div>

//     <div className='min-h-screen bg-fixed bg-no-repeat bg-cover'
//         style={{backgroundImage:`url(${images[0]})`}}
//     >

//     </div>
//     </>
//   )
// }

// export default Parallax



// import React, { useState } from "react";
// import About from './About';

// const Parallax = () => {
//   return (
//     <>
//     <div
//       className="min-h-screen flex justify-center items-center bg-fixed bg-center bg-cover bg-black"
//     >
//       <h1 className="font-black text-6xl text-white">CogniMuse</h1>
//     </div>

//     <div className='p-10'>
//         <About/>
//     </div>
//     </>
//   );
// };

// export default Parallax;
import React from 'react';
import About from './About';
import Projects from './Projects';
import Services from './Services'
import VideoSection from './VideoSection'
import TeamSection from './TeamSection'
import Contact from './Contact';

const images = [
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3cd25ca07a1862c5dec1_work-7.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670d35a62ea6281ea715f7bd_work-1.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3a80e86a23be97a92b9c_work-6.avif",
];

const Parallax = () => {
  return (
    <>
    <div
      className="min-h-screen flex justify-center items-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${images[0]})` }}
    >
      <h1 className="font-black text-6xl text-white">CogniMuse</h1>
    </div>

    
    <div className='p-0 m-0'>
        <About/>
    </div>

    <div className='min-h-screen bg-fixed bg-center bg-no-repeat bg-cover'
        style={{backgroundImage:`url(${images[1]})`}}
    >   
    </div>

    <div className='min-h-screen bg-no-repeat bg-cover'>
        <Projects/>
        <VideoSection/>
        <Services/>
        <TeamSection/>
        <Contact/>
    </div>
    </>
  );
};

export default Parallax;
