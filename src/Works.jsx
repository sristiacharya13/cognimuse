import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: "branding",
    number: "001",
    title: "Branding",
    image: "src/assets/brand-identity-design-custommade.jpeg",
    description: "Crafting unique brand identities that capture your essence and resonate with your target audience.",
    link: "#",
  },
  {
    id: "logo-design",
    number: "002",
    title: "Logo Design",
    image: "src/assets/gm.jpg",
    description: "Creating distinctive visual symbols that become the memorable face of your business.",
    link: "#",
  },
  {
    id: "uiux-design",
    number: "003",
    title: "UI/UX Design",
    image: "src/assets/uiux.png",
    description: "Developing intuitive digital interfaces that enhance user experience and drive engagement.",
    link: "#",
  },
  {
    id: "product-design",
    number: "004",
    title: "Product Design",
    image: "src/assets/e2aa2b6027ea355f3ef3d3eff5bba4f3.jpeg",
    description: "Transforming concepts into functional, aesthetically pleasing products that solve real problems.",
    link: "#",
  }
];

export default function WorksSection() {
  const { scrollYProgress } = useScroll();
  const [currentProject, setCurrentProject] = useState("001");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".project-section");
      let newCurrentProject = "001";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          newCurrentProject = section.getAttribute("data-number");
        }
      });
      setCurrentProject(newCurrentProject);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center">
      <motion.div 
        className="fixed top-10 right-10 text-4xl font-bold text-gray-500 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ visibility: currentProject !== "000" ? "visible" : "hidden" }}
      >
        {currentProject}
      </motion.div>
      <div className="py-16 w-full max-w-6xl">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            data-number={project.number}
            className="project-section min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full max-w-md relative overflow-hidden rounded-lg">  {/* Reduced image size */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}  // Added scale and opacity animation
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.div 
              className="mt-8 flex flex-col space-y-2 items-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">{project.title}</h2>
              <p className="text-gray-400 mt-2 text-lg max-w-xl">{project.description}</p>
              <motion.a 
                href={project.link} 
                className="inline-block mt-6 border-b border-white pb-1 text-sm font-medium w-max"
                whileHover={{ borderColor: "#888", color: "#888", x: 5 }}
                transition={{ duration: 0.2 }}
              >
                EXPLORE 
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}