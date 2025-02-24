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
    image: "src/assets/xairotech_logo-removebg-preview.png", 
    clientImage: "src/assets/panugathi.jpg",
    company: "Founder-XAIRO", 
    review: "I really liked how they had a very well-structured step by step approach in designing while keeping us in the loop all the time." 
  },
  { 
    id: 3, 
    title: "Amb. Harris", 
    image: "src/assets/Kadaikodi white.svg", 
    clientImage: "src/assets/harsis.jpg",
    company: "Director- HPC Medical Staffing LLC", 
    review: "CogniMuse is a fascinating team of professionals that prioritized efficiency and effectiveness in their transactions and interactions with clients." 
  },
  { 
    id: 4, 
    title: "Raja S Iskala", 
    image: "src/assets/ganganu_white.png", 
    clientImage: "src/assets/raja.jpg",
    company: "Founder- Ganganu", 
    review: "The Collaboration with CogniMuse was so good that the output they gave me speaks for it." 
  },
  { 
    id: 5, 
    title: "Dr. Naveen G", 
    image: "src/assets/dhanvith-removebg-preview.png", 
    clientImage: "src/assets/naveen.jpg",
    company: "Director- Dhanvith Ventures", 
    review: "The team's flexibility and adaptability helped us a lot, as our requirements were not very concrete at the beginning." 
  },
  { 
    id: 6, 
    title: "Gokul", 
    image: "src/assets/kadaik.jpg", 
    clientImage: "src/assets/gokul.jpg",
    company: "Co-founder, Kadaikodi", 
    review: "I reached out to Cognimuse for help with my software MVP, and they impressed me by completing it in just a week." 
  },
  { 
    id: 7, 
    title: "Ananya Dutta", 
    image: "src/assets/general_motors_logo-removebg-preview.png", 
    clientImage: "src/assets/ananya dutta.jpg",
    company: "General Motors, Michigan", 
    review: "The CogniMuse team was fantastic to work with. They provided regular updates and delivered everything within a very short turnaround time." 
  },
  { 
    id: 8, 
    title: "Suyog V Mahulkar", 
    image: "src/assets/SFRI - coloured.svg", 
    clientImage: "src/assets/suyog.jpg",
    company: "President- SFRI", 
    review: "I remember that in each discussion, the team was firm about not compromising on quality, and this dedication is reflected in the product that CogniMuse delivered to us." 
  }
];

export default function WorkSection() {
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
      className="h-[200vh] bg-black text-white"
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
            CLIENTS
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
                  className="relative w-70 h-50 rounded-lg overflow-hidden group"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-44 object-contain p-4 filter grayscale brightness-125 contrast-125"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                    <div className="relative z-10 p-4 text-center">
                      <div className="flex items-center justify-center mb-3">
                        <img 
                          src={project.clientImage}
                          alt={project.title}
                          className="w-12 h-12 rounded-full object-cover filter grayscale"
                        />
                      </div>
                      <h3 className="text-lg font-medium text-white">{project.title}</h3>
                      <p className="text-sm text-gray-200 mt-1">{project.company}</p>
                      <p className="text-xs text-gray-300 mt-2 line-clamp-3">{project.review}</p>
                    </div>
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
                  className="relative w-70 rounded-lg overflow-hidden group"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-44 object-contain p-4 filter grayscale brightness-125 contrast-125"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                    <div className="relative z-10 p-4 text-center">
                      <div className="flex items-center justify-center mb-3">
                        <img 
                          src={project.clientImage}
                          alt={project.title}
                          className="w-12 h-12 rounded-full object-cover filter grayscale"
                        />
                      </div>
                      <h3 className="text-lg font-medium text-white">{project.title}</h3>
                      <p className="text-sm text-gray-200 mt-1">{project.company}</p>
                      <p className="text-xs text-gray-300 mt-2 line-clamp-3">{project.review}</p>
                    </div>
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