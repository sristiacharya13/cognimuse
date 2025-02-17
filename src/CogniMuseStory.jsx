import React, { useState, useEffect, useRef } from 'react';
import StorySection from './StorySection';
import { motion, useScroll } from 'framer-motion';

import faviconImg from './assets/favicon.png';
import section2Img from './assets/favicon.png';
import section3Img from './assets/favicon.png';

const CogniMuseStory = () => {
  const [activeSection, setActiveSection] = useState(null);
  const { scrollYProgress } = useScroll();
  const pathRef = useRef(null);

  const sections = [
    {
      id: 'section1',
      title: 'Who are we?',
      content: 'CogniMuse is a software development company dedicated to accelerating the success of early-stage startups and entrepreneurs by saving them time, money, and energy.',
      position: 'left',
      image: faviconImg,
    },
    {
      id: 'section2',
      title: 'What do we do?',
      content: 'We help early-stage startups and entrepreneurs build and launch their MVP in 2-4 weeks.',
      position: 'right',
      image: section2Img,
    },
    {
      id: 'section3',
      title: 'What do we offer?',
      content: 'Transform your ideas into prototypes, MVPs, and full-scale products with our expert-driven development process.',
      position: 'left',
      image: section3Img,
    },
  ];

  // Function to update the path when a section is in view
  const updatePath = (position) => {
    if (!pathRef.current) return;

    // Get the current section's position
    const sectionElement = document.getElementById(position);
    if (!sectionElement) return;

    const rect = sectionElement.getBoundingClientRect();
    const startX = position === 'left' ? 150 : window.innerWidth - 150;
    const endX = position === 'left' ? 500 : window.innerWidth - 500;
    const startY = rect.top + window.scrollY + rect.height / 2;
    const endY = startY + 200; // Adjust line length here

    const newPath = `M${startX},${startY} Q${(startX + endX) / 2},${(startY + endY) / 2} ${endX},${endY}`;
    pathRef.current.setAttribute('d', newPath);
  };

  // Clear path if no section is active
  const clearPath = () => {
    if (pathRef.current) {
      pathRef.current.setAttribute('d', '');
    }
  };

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col space-y-5 overflow-hidden">
      <svg
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}
      >
        <path ref={pathRef} stroke="#72B6FF" fill="transparent" strokeWidth="3" />
      </svg>

      {sections.map((section) => (
        <StorySection
          key={section.id}
          id={section.id}
          title={section.title}
          content={section.content}
          position={section.position}
          setActiveSection={setActiveSection}
          image={section.image}
          updatePath={updatePath}
          clearPath={clearPath} // Pass clear function
        />
      ))}
    </div>
  );
};

export default CogniMuseStory;
