import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "branding",
    number: "001",
    title: "Branding",
    image: "src/assets/brand-identity-design-custommade.webp",
    description: "Crafting unique brand identities that capture your essence and resonate with your target audience.",
    category: "Branding",
    year: "2024",
    link: "#",
  },
  {
    id: "logo-design",
    number: "002",
    title: "Logo Design",
    image: "src/assets/gm.webp",
    description: "Creating distinctive visual symbols that become the memorable face of your business.",
    category: "Design",
    year: "2024",
    link: "#",
  },
  {
    id: "uiux-design",
    number: "003",
    title: "UI/UX Design",
    image: "src/assets/uiux.webp",
    description: "Developing intuitive digital interfaces that enhance user experience and drive engagement.",
    category: "UI/UX",
    year: "2023",
    link: "#",
  },
  {
    id: "product-design",
    number: "004",
    title: "Product Design",
    image: "src/assets/e2aa2b6027ea355f3ef3d3eff5bba4f3.webp",
    description: "Transforming concepts into functional, aesthetically pleasing products that solve real problems.",
    category: "Product",
    year: "2023",
    link: "#",
  }
];

export default function OurWorks() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pb-12">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            id={project.id}
            className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-16"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 md:gap-12 items-center">
              <div 
                className="w-full md:w-1/2 relative group"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {hovered && (
                  <motion.div 
                    className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center text-black font-medium"
                    style={{ position: 'fixed', left: cursorPos.x - 40, top: cursorPos.y - 40 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View
                  </motion.div>
                )}
              </div>
              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <motion.span 
                  className="text-5xl md:text-7xl font-bold opacity-50"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {project.number}
                </motion.span>
                <motion.div 
                  className="flex flex-col space-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="text-sm font-medium text-gray-400">{project.category} Â· {project.year}</div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">{project.title}</h2>
                  <p className="text-gray-400 mt-2 text-lg">{project.description}</p>
                  <a href={project.link} className="inline-block mt-6 border-b border-white pb-1 text-sm font-medium hover:text-gray-300 transition-colors w-max">EXPLORE SERVICE</a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
