import React from "react";

const Hero = () => {
  
  return (
    <div className="w-full bg-black text-white">
      <div className="flex flex-col justify-center items-center min-h-screen space-y-12">
        <div className="cube-container">
          <div className="cube">
            {['front', 'back', 'left', 'right', 'top', 'bottom'].map(face => (
              <div key={face} className={`cube-face cube-${face} bg-white p-20 text-black text-center shadow-lg`}>
                <img
                  src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67094393682de8d96652a577_logo.svg"
                  alt="U Digital Studio Logo"
                  className="h-20 mx-auto mb-4"
                />
                <div className="text-6xl font-bold">DIGITAL</div>
                <div className="text-6xl font-bold">STUDIO</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between w-full px-16 text-lg text-gray-300 mt-12">
          <p className="text-left w-1/3">READY TO FIND YOUR NEXT IDEAL<br/>TEMPLATE</p>
          <p className="text-center w-1/3">UPS <br/>DIGITAL STUDIO</p>
          <p className="text-right w-1/3">MADE TO LEAVE A MARK.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;