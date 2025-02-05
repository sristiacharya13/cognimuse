import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3cd25ca07a1862c5dec1_work-7.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e353d429c71c439c27c38_work-4.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3547c9cec6488b67c054_work-5.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670d2e05a810006162dcefd4_work-2.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670d35a62ea6281ea715f7bd_work-1.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3a80e86a23be97a92b9c_work-6.avif",
];

export default function WorksPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center relative">
      {/* Large Text "WORKS" */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: scrolled ? 0 : 1, scale: scrolled ? 0.8 : 1 }}
        transition={{ duration: 0.8 }}
        className="absolute w-full h-screen flex items-center justify-center text-[12rem] font-extrabold"
      >
        WORKS <span className="text-[4rem] ml-4">‘19-24</span>
      </motion.div>

      {/* Image Grid Appearing on Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-3 gap-6 mt-20"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <img
              src={src}
              alt={`Work ${index + 1}`}
              loading="lazy"
              className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
