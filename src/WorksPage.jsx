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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        const currentScrollY = window.scrollY;
        setShowText(currentScrollY <= lastScrollY || currentScrollY <= 100);
        setLastScrollY(currentScrollY);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY, isMobile]);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      {/* Title with fade-out effect on scroll (Desktop only) */}
      <motion.div
        className={`text-center ${isMobile ? "mt-0" : "absolute top-1/2 transform -translate-y-1/2"}`}
        animate={isMobile ? {} : { opacity: showText ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className="font-bold leading-tight"
          style={{ fontSize: isMobile ? "2.5rem" : "10rem" }}
        >
          WORKS
          <span
            className="align-super ml-2"
            style={{ fontSize: isMobile ? "1rem" : "3rem" }}
          >
            ‘19-24
          </span>
        </h1>
      </motion.div>

      {/* Image Grid with Animation only on Desktop */}
      <motion.div
        className={`grid ${
          isMobile ? "grid-cols-1 gap-6 p-6 mt-6" : "grid-cols-2 md:grid-cols-3 gap-4 p-10 mt-20"
        }`}
        initial={isMobile ? {} : { opacity: 0 }}
        animate={isMobile ? {} : { opacity: showText ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Work ${index + 1}`}
            className="w-full h-auto object-cover"
            initial={isMobile ? {} : { opacity: 0, y: 50 }}
            animate={isMobile ? {} : { opacity: showText ? 0 : 1, y: showText ? 50 : 0 }}
            transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
