import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StorySection = ({ id, title, content, position, setActiveSection, image, updatePath, clearPath }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveSection(id);
        updatePath(id);
      } else {
        clearPath();
      }
    },
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, x: position === 'left' ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
      className="relative flex items-center w-full min-h-screen"
    >
      <motion.div
        style={{
          position: 'absolute',
          width: '264px',
          height: '264px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          top: '50%',
          left: position === 'left' ? '0' : 'auto',
          right: position === 'right' ? '0' : 'auto',
          transform: 'translateY(-50%)',
          opacity: inView ? 1 : 0,
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      />

      <div
        className={`max-w-xl p-8 text-white ${position === 'left' ? 'ml-auto' : 'mr-auto'} text-left`}
      >
        <h2 className="text-6xl font-bold mb-6">{title}</h2>
        <p className="text-2xl leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
};

export default StorySection;
