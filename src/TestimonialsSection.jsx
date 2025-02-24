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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        if (!isDragging) {
          setAngleY((prev) => prev + 0.4);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isDragging, isMobile]);

  useEffect(() => {
    if (isMobile) {
      let index = 0;
      const interval = setInterval(() => {
        if (cardContainerRef.current) {
          index = (index + 1) % testimonials.length;
          cardContainerRef.current.scrollTo({ left: index * 300, behavior: "smooth" });
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {isMobile ? (
        <div ref={cardContainerRef} className="flex overflow-x-hidden w-full px-4 space-x-4 no-scrollbar mt-2 pb-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-[300px] flex-shrink-0 p-6 border-2 border-lime-300 rounded-xl bg-black bg-opacity-10 text-center mb-50 mt-0">
              <img src={testimonial.clientImage} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white" />
              <p className="font-bold text-lg text-white">{testimonial.name}</p>
              <p className="text-sm text-gray-300">{testimonial.company}</p>
              <p className="text-sm italic text-gray-200">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          ref={cardContainerRef}
          className="relative w-[400px] h-[400px] cursor-grab"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: angleY, rotateX: -15 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute w-[350px] h-[350px] p-6 border-2 border-lime-300 rounded-xl bg-black bg-opacity-10 text-center mt-10"
              style={{ transform: `rotateY(${(360 / testimonials.length) * index}deg) translateZ(450px)` }}
            >
              <img src={testimonial.clientImage} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-lime-300" />
              <p className="font-bold text-xl text-white">{testimonial.name}</p>
              <p className="text-lg text-gray-300">{testimonial.company}</p>
              <p className="text-base italic text-gray-200">"{testimonial.review}"</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default TestimonialsSection;
