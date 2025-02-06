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
  const [showText, setShowText] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowText(false); // Hide text, show images
      } else {
        setShowText(true); // Show text, hide images
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
      {/* Large Text "WORKS" with Superscript */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10vw] font-bold uppercase leading-none text-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: showText ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[10rem] font-bold mt-15 mb-12 text-center">WORKS<span className="text-[3rem] align-super ml-2">‘19-24</span></h1>
        
      </motion.div>

      {/* Image Grid Appearing on Scroll */}
      <motion.div
        className={`absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showText ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Work ${index + 1}`}
            className="w-full h-auto object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: showText ? 0 : 1, y: showText ? 50 : 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
