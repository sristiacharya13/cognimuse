  import { useState, useEffect, useRef } from "react";
  import { motion } from "framer-motion";

  const steps = [
    {
      title: "Who are we?",
      description: (
        <>
          CogniMuse is a software development company dedicated to accelerating the success of
          <br />
          early-stage startups and entrepreneurs by saving them time, money, and energy.
        </>
      ),
      image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670d2e05a810006162dcefd4_work-2.avif",
    },
    {
      title: "What do we do?",
      description: "We help early-stage startups and entrepreneurs build and launch their MVP in 2-4 weeks.",
      image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e353d429c71c439c27c38_work-4.avif",
    },
    {
      title: "What do we offer?",
      description: "We provide comprehensive support for MVP development, ensuring fast delivery without compromising on quality.",
      image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3547c9cec6488b67c054_work-5.avif",
    },
  ];

  export default function CognimuseStory() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isFixed, setIsFixed] = useState(true);
    const olRef = useRef(null);
    const [olHeight, setOlHeight] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const stepHeight = window.innerHeight / 2;
        const totalScrollHeight = steps.length * stepHeight;

        // Calculate the current step index
        const stepIndex = Math.min(
          Math.floor(scrollPosition / stepHeight),
          steps.length - 1
        );
        setCurrentStep(stepIndex);

        // Unfix the component when progress reaches 100%
        if (scrollPosition >= totalScrollHeight) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      if (olRef.current) {
        setOlHeight(olRef.current.scrollHeight);
      }
    }, [steps]);

    // Dynamic progress bar height
    const progressBarHeight = ((currentStep + 1) / steps.length) * 100;

    return (
      <>
      <div className="bg-black text-white min-h-screen">
        <div
          className={`flex items-center justify-between p-10 ${
            isFixed ? "sticky" : "relative"
          } top-0 left-0 w-full h-screen`}
        >
          <ol ref={olRef} className="relative flex flex-col space-y-16 ml-8">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={currentStep >= index ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="px-10"
              >
                <h3 className="text-5xl font-extrabold">{step.title}</h3>
                <p className="text-2xl mt-4">{step.description}</p>
              </motion.li>
            ))}
          </ol>

          {/* Vertical Progress Bar with Left Spacing */}
          <div className="absolute left-13" style={{ height: `${olHeight}px` }}>
            <div
              className="bg-lime-300 transition-all duration-500 w-2"
              style={{ height: `${progressBarHeight}%` }}
            />
          </div>

          {/* Image Display */}
          <div className="relative w-96 h-96 right-13">
            <motion.img
              key={steps[currentStep].image}
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
      </>
    );
  }
