import React, { useEffect, useState } from 'react';
import CognimuseStory from './CognimuseStory';
import Stdio from './Stdio';

const ParallaxRotation = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skew + Tilt Effect */}
      <div
        className="min-h-screen bg-fixed bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('https://your-background-image-url.com')",
          transform: `skewY(${offsetY * 0.05}deg) rotate(${offsetY * 0.02}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <Stdio />
      </div>

      {/* Cognimuse Story Section */}
      <div className="min-h-screen bg-no-repeat bg-cover">
        <CognimuseStory />
      </div>
    </>
  );
};

export default ParallaxRotation;
