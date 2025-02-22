import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const FlipBook = () => {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleVisible(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const pages = [
    {
      left: (
        <div className="bg-white shadow-lg p-10 w-[500px] h-[450px] flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold tracking-wide text-gray-900 text-center">
            PROTOTYPE <br /> DEVELOPMENT
          </h2>
          <p className="text-gray-600 text-lg mt-6 text-center">
            Visualize before you build. Impress investors. Gather feedback.
          </p>
          <a
            href="#"
            className="mt-8 text-black font-semibold text-lg border-b-2 border-black flex items-center gap-1"
          >
            Build Now <ArrowUpRight size={20} />
          </a>
        </div>
      ),
      right: (
        <div className="bg-white shadow-lg w-[500px] h-[450px] flex items-center justify-center overflow-hidden">
          <video
            src="https://cognimuse.com/services/whisperify.mp4"
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
          />
        </div>
      ),
    },
    {
      left: (
        <div className="bg-white shadow-lg p-10 w-[500px] h-[450px] flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold tracking-wide text-gray-900 text-center">
            MVP <br /> DEVELOPMENT
          </h2>
          <p className="text-gray-600 text-lg mt-6 text-center">
            Launch an optimal, impactful version of your idea. Test. Learn.
            Repeat.
          </p>
          <a
            href="#"
            className="mt-8 text-black font-semibold text-lg border-b-2 border-black flex items-center gap-1"
          >
            Build Now <ArrowUpRight size={20} />
          </a>
        </div>
      ),
      right: (
        <div className="bg-white shadow-lg w-[500px] h-[450px] flex items-center justify-center overflow-hidden">
          <img
            src="https://cognimuse.com/_next/static/media/marble.8767fc01.svg"
            alt="MVP Development"
            className="object-contain w-auto h-[300px] lg:h-auto max-h-full max-w-full"
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleNavigation = (event) => {
      if (event.deltaY > 0 || event.key === "ArrowRight") {
        setPage((prev) => Math.min(prev + 1, pages.length - 1));
      } else if (event.deltaY < 0 || event.key === "ArrowLeft") {
        setPage((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleNavigation);
    window.addEventListener("keydown", handleNavigation);

    return () => {
      window.removeEventListener("wheel", handleNavigation);
      window.removeEventListener("keydown", handleNavigation);
    };
  }, [pages.length]);

  return (
    <div className="bg-black py-16 px-6 lg:px-20 flex flex-col items-center">
      <div className="bg-black text-white p-2 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className={`text-center font-bold ${
            isMobile ? "text-4xl mb-3" : "text-[10rem] mb-0"
          }`}
        >
          OUR SERVICES
        </motion.h1>
      </div>

      <p className="text-lime-300 text-center text-xl italic mb-8">
        We build Prototypes and MVPs in record time
      </p>

      <div className="relative w-[1000px] h-[500px] flex justify-center gap-x-6">
        <div className="relative w-1/2 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${page}`}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {pages[page].left}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative w-1/2 h-full perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${page}`}
              className="absolute inset-0 origin-left"
              initial={{ rotateY: 180, opacity: 0, scale: 0.95 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: -180, opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {pages[page].right}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex mt-8 gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-gray-700 text-white disabled:opacity-50 flex items-center justify-center"
          disabled={page === 0}
        >
          <ArrowLeft size={24} />
        </button>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, pages.length - 1))}
          className="px-4 py-2 bg-lime-300 text-black disabled:opacity-50 flex items-center justify-center"
          disabled={page === pages.length - 1}
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};
export default FlipBook;