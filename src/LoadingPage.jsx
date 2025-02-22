import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero"; // Importing the Hero component

const messages = [
  { small: "Need an extended tech team?", large: "We're your crew" },
  { small: "No tech co-founder?", large: "We'll keep you moving" },
  { small: "Running on strict deadline?", large: "We got you" },
];

export default function LoadingPage() {
  const [index, setIndex] = useState(0);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    if (index < messages.length - 1) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 3000);
      return () => clearInterval(interval);
    } else {
      setTimeout(() => setShowHero(true), 3000); // Show Hero after last message
    }
  }, [index]);

  return (
    <div>
      {!showHero ? (
        <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center bg-black text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-lg mb-4">{messages[index].small}</p>
              <h1 className="text-4xl font-bold">{messages[index].large}</h1>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover"
        >
          <Hero />
        </motion.div>
      )}
    </div>
  );
}
