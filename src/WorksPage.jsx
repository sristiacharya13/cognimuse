// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const images = [
//   "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3cd25ca07a1862c5dec1_work-7.avif",
//   "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e353d429c71c439c27c38_work-4.avif",
//   "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3547c9cec6488b67c054_work-5.avif",
//   "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670d2e05a810006162dcefd4_work-2.avif",
//   "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670d35a62ea6281ea715f7bd_work-1.avif",
//   "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3a80e86a23be97a92b9c_work-6.avif",
// ];

// export default function WorksPage() {
//   const [showText, setShowText] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!isMobile) {
//         const currentScrollY = window.scrollY;
//         setShowText(currentScrollY <= lastScrollY || currentScrollY <= 100);
//         setLastScrollY(currentScrollY);
//       }
//     };

//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [lastScrollY, isMobile]);

//   return (
//     <div className="relative min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
//       {/* Title with fade-out effect on scroll (Desktop only) */}
//       <motion.div
//         className={`text-center ${isMobile ? "mt-0" : "absolute top-1/2 transform -translate-y-1/2"}`}
//         animate={isMobile ? {} : { opacity: showText ? 1 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1
//           className="font-bold leading-tight"
//           style={{ fontSize: isMobile ? "2.5rem" : "10rem" }}
//         >
//           WORKS
//           <span
//             className="align-super ml-2"
//             style={{ fontSize: isMobile ? "1rem" : "3rem" }}
//           >
//             ‘19-24
//           </span>
//         </h1>
//       </motion.div>

//       {/* Image Grid with Animation only on Desktop */}
//       <motion.div
//         className={`grid ${
//           isMobile ? "grid-cols-1 gap-6 p-6 mt-6" : "grid-cols-2 md:grid-cols-3 gap-4 p-10 mt-20"
//         }`}
//         initial={isMobile ? {} : { opacity: 0 }}
//         animate={isMobile ? {} : { opacity: showText ? 0 : 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {images.map((src, index) => (
//           <motion.img
//             key={index}
//             src={src}
//             alt={`Work ${index + 1}`}
//             className="w-full h-auto object-cover"
//             initial={isMobile ? {} : { opacity: 0, y: 50 }}
//             animate={isMobile ? {} : { opacity: showText ? 0 : 1, y: showText ? 50 : 0 }}
//             transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: "Harsh Kushwah", 
    image: "src/assets/menpysche-removebg-preview.png", 
    clientImage: "src/assets/harsh.jpg",
    company: "Founder- Menpsyche.com", 
    review: "I used the AI tool created by the team and was highly impressed with their understanding of the users. Their tools was intuitive to use and easy to learn " 
  },
  { 
    id: 2, 
    title: "Srujan Panuganti", 
    image: "src/assets/xairotech_logo.jpg", 
   
    clientImage: "src/assets/panugathi.jpg",
    company: "Founder-XAIRO", 
    review: "I really liked how they had a very well-structured step by step approach in designing while keeping us in the loop all the time. During the process we went over multiple iterations with a lot of ideas and suggestions coming from both the ends, to get to an output which is pleasing for everyone. Overall, it was great working with CogniMuse and I would highly recommend them." 
  },
  { 
    id: 3, 
    title: "Amb. Harris", 
    image: "src/assets/favicon[1].png", 
    clientImage: "src/assets/harsis.jpg",
    company: "Director- HPC Medical Staffing LLC", 
    review: "CogniMuse is a fascinating team of professionals that prioritized efficiency and effectiveness in their transactions and interactions with clients." 
  },
  { 
    id: 4, 
    title: "Raja S Iskala", 
    image: "src/assets/ganganu_cover.jpg", 
    clientImage: "src/assets/raja.jpg",
    company: "Founder- Ganganu", 
    review: "The Collaboration with CogniMuse was so good that the output they gave me speaks for it. Throughout the process they value our vision and suggestions. Would love to collaborate with them in future." 
  },
  { 
    id: 5, 
    title: "Dr. Naveen G", 
    image: "src/assets/dhanvith-removebg-preview.png", 
    clientImage: "src/assets/naveen.jpg",
    company: "Director- Dhanvith Ventures", 
    review: "The team's flexibility and adaptability helped us a lot, as our requirements were not very concrete at the beginning. Their willingness to help us achieve our final objective was very evident. Availability of the team to discuss any changes that were required was also helped us give our observations for bug-fixing/enhancements. Looking forward to working with you guys again." 
  },
  { 
    id: 6, 
    title: "Gokul", 
    image: "src/assets/kadaik.jpg", 
    clientImage: "src/assets/gokul.jpg",
    company: "Co-founder, Kadaikodi", 
    review: "I reached out to Cognimuse for help with my software MVP, and they impressed me by completing it in just a week. Thanks to their amazing work, I was able to onboard early users and pitch to investors with confidence. I'd love to team up with Cognimuse again to build a scalable product." 
  },
  { 
    id: 7, 
    title: "Ananya Dutta", 
    image: "src/assets/general_motors_logo.jpg", 
    clientImage: "src/assets/ananya dutta.jpg",
    
    company: "General Motors, Michigan", 
    review: "The CogniMuse team was fantastic to work with. They provided regular updates and delivered everything within a very short turnaround time. The team incorporated all of our requirements into the logo and presentation, ensuring high-quality results. Overall, it was a fruitful experience working with the entire CogniMuse team." 
  },
  { 
    id: 8, 
    title: "Suyog V Mahulkar", 
    image: "src/assets/favicon[1].png", 
    clientImage: "src/assets/suyog.jpg",
    company: "President- SFRI", 
    review: "I remember that in each discussion, the team was firm about not compromising on quality, and this dedication is reflected in the product that CogniMuse delivered to us. As a result, our website is gaining appreciation from all our members and supporters. I witnessed their zeal and willingness to put in the effort to meet the highest possible standards for the website." 
  }
];

export default function WorksPage() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const topRowX = useTransform(scrollYProgress, [0.1, 0.3], ['-100%', '0%']);
  const bottomRowX = useTransform(scrollYProgress, [0.1, 0.3], ['100%', '0%']);
  const rowsOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section 
      ref={sectionRef} 
      className="h-[500vh] bg-black text-white"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ 
            opacity: titleOpacity, 
            scale: titleScale 
          }}
          className="absolute text-center z-10"
        >
          <h1 className="text-center font-bold mt-15 mb-12 text-4xl md:text-6xl lg:text-[10rem]">
            CLIENTS <sup><span className="text-gray-400 text-5xl">TRUST US</span></sup>
          </h1>
        </motion.div>

        <div className="absolute w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-8">
            <motion.div 
              style={{ 
                x: topRowX,
                opacity: rowsOpacity
              }}
              className="flex justify-center gap-4"
            >
              {projects.slice(0, 4).map((project) => (
                <motion.div
                  key={project.id}
                  className="relative w-90  h-50 rounded-lg overflow-hidden group"
                  whileHover={{ scale: 1.2}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative z-10 p-4 text-center">
                      <div className="flex items-center justify-center mb-3">
                        <img 
                          src={project.clientImage}
                          alt={project.title}
                          className="w-12 h-12 rounded-full object-cover border"
                        />
                      </div>
                      <h3 className="text-lg font-medium text-white">{project.title}</h3>
                      <p className="text-sm text-gray-200 mt-1">{project.company}</p>
                      <p className="text-xs text-gray-300 mt-2 line-clamp-3">{project.review}</p>
                    </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-44 object-contain p-4"
                  />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              style={{ 
                x: bottomRowX,
                opacity: rowsOpacity
              }}
              className="flex justify-center gap-4"
            >
              {projects.slice(4).map((project) => (
                <motion.div
                  key={project.id}
                  className="relative w-90 rounded-lg overflow-hidden group"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
                    <div className="relative z-10 p-4 text-center">
                      <div className="flex items-center justify-center mb-3">
                        <img 
                          src={project.clientImage}
                          alt={project.title}
                          className="w-12 h-12 rounded-full object-cover border"
                        />
                      </div>
                      <h3 className="text-lg font-medium text-white">{project.title}</h3>
                      <p className="text-sm text-gray-200 mt-1">{project.company}</p>
                      <p className="text-xs text-gray-300 mt-2 line-clamp-3">{project.review}</p>
                    </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-44 object-contain  p-4"
                  />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
