import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { 
    id: 1, 
    name: "Harsh Kushwah", 
    clientImage: "src/assets/harsh.jpg",
    company: "Founder- Menpsyche.com", 
    review: "I used the AI tool created by the team and was highly impressed with their understanding of the users. Their tools was intuitive to use and easy to learn." 
  },
  { 
    id: 2, 
    name: "Srujan Panuganti", 
    clientImage: "src/assets/panugathi.jpg",
    company: "Founder-XAIRO", 
    review: "I really liked how they had a very well-structured step-by-step approach in designing while keeping us in the loop all the time." 
  },
  { 
    id: 3, 
    name: "Amb. Harris", 
    clientImage: "src/assets/harsis.jpg",
    company: "Director- HPC Medical Staffing LLC", 
    review: "CogniMuse is a fascinating team of professionals that prioritized efficiency and effectiveness in their transactions and interactions with clients." 
  },
  { 
    id: 4, 
    name: "Raja S Iskala", 
    clientImage: "src/assets/raja.jpg",
    company: "Founder- Ganganu", 
    review: "The collaboration with CogniMuse was so good that the output they gave me speaks for it." 
  },
  { 
    id: 5, 
    name: "Dr. Naveen G", 
    clientImage: "src/assets/naveen.jpg",
    company: "Director- Dhanvith Ventures", 
    review: "The team's flexibility and adaptability helped us a lot, as our requirements were not very concrete at the beginning." 
  },
  { 
    id: 6, 
    name: "Gokul", 
    clientImage: "src/assets/gokul.jpg",
    company: "Co-founder, Kadaikodi", 
    review: "I reached out to Cognimuse for help with my software MVP, and they impressed me by completing it in just a week." 
  },
  { 
    id: 7, 
    name: "Ananya Dutta", 
    clientImage: "src/assets/ananya dutta.jpg",
    company: "General Motors, Michigan", 
    review: "The CogniMuse team was fantastic to work with. They provided regular updates and delivered everything within a very short turnaround time." 
  },
  { 
    id: 8, 
    name: "Suyog V Mahulkar", 
    clientImage: "src/assets/suyog.jpg",
    company: "President- SFRI", 
    review: "I remember that in each discussion, the team was firm about not compromising on quality, and this dedication is reflected in the product that CogniMuse delivered to us." 
  }
];

const TestimonialsSection = () => {
  const cardContainerRef = useRef(null);
  const [angleY, setAngleY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setAngleY((prev) => prev + 0.4);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = (e.clientX - startX) * 0.2;
      setAngleY((prev) => prev + deltaX);
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "auto";
  };

  return (
    <div 
      className="flex items-center justify-center h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={(e) => handleMouseMove(e.touches[0])}
      onTouchEnd={handleMouseUp}
    >
      <motion.div
        ref={cardContainerRef}
        className="relative w-[300px] h-[300px] cursor-grab active:cursor-grabbing"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: angleY, rotateX: -15 }}
        transition={{ type: "spring", stiffness: 50 }}
        onMouseDown={handleMouseDown}
        onTouchStart={(e) => handleMouseDown(e.touches[0])}
      >
        {testimonials.map((testimonial, index) => (
            <motion.div
  key={testimonial.id}
  className="absolute w-[250px] h-[250px] p-4 border-2 border-lime-300 rounded-lg backdrop-blur-lg bg-opacity-30 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-400"
  style={{
    transform: `rotateY(${(360 / testimonials.length) * index}deg) translateZ(330px)`,
    background: "rgba(128, 128, 128, 0.3)",
    borderColor: "rgb(128, 128, 128)"
  }}
>

            <img src={testimonial.clientImage} alt={testimonial.name} className="w-12 h-12 rounded-full mb-2" />
            <p className="font-bold text-white">{testimonial.name}</p>
            <p className="text-sm text-gray-300">{testimonial.company}</p>
            <p className="text-xs italic text-gray-200">"{testimonial.review}"</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;