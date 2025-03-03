import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb,Paintbrush} from "lucide-react"; // Importing icons
const texts = [
  { small: "Need an extended tech team?", large: "We're your crew" },
  { small: "No tech co-founder?", large: "We'll keep you moving" },
  { small: "Running on strict deadline?", large: "We got you" }, // Fixed text with symbols
];

const symbols = [
  { icon: <Lightbulb size={80}/>, text: "Knowledge" },
  { icon: <img src="src/assets/lotus.png" alt="self realization" className="w-25 h-25 filter invert brightness-200 hue-rotate-60" />, text: "Self-Realization" },
  { icon: <Paintbrush size={80} />, text: "Creativity" },
  { icon: <img src="src/assets/mandala.png" alt="spirituality" className="w-25 h-25 filter invert brightness-200 hue-rotate-60" />, text: "Spirituality" },
];

export default function LoadingPage({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [symbolIndex, setSymbolIndex] = useState(0);
  const [showSymbols, setShowSymbols] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < texts.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setShowSymbols(true); // Start showing symbols after last text appears
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (showSymbols) {
      const symbolTimer = setTimeout(() => {
        if (symbolIndex < symbols.length - 1) {
          setSymbolIndex((prev) => prev + 1);
        } else {
          onComplete(); // Move to hero section after last symbol
        }
      }, 1150); // Symbols change every 1.5s

      return () => clearTimeout(symbolTimer);
    }
  }, [symbolIndex, showSymbols, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      <AnimatePresence mode="wait">
        {!showSymbols ? (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center"
          >
            <p className="text-xl">{texts[currentIndex]?.small}</p>
            <h1 className="text-5xl font-bold mt-2">{texts[currentIndex]?.large}</h1>
          </motion.div>
        ) : (
          <div>
            {/* <p className="text-xl">{texts[texts.length - 1].small}</p>
            <h1 className="text-5xl font-bold mt-2">{texts[texts.length - 1].large}</h1> */}

            <motion.div
              key={symbolIndex}
              initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 360, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex flex-col items-center mt-6"
            >
              {symbols[symbolIndex]?.icon}
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
