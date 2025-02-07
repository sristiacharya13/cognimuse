import React from "react";

const Stdio = () => {
  
  return (
    <div className="w-full bg-black text-white">
      <div className="flex flex-col justify-center items-center min-h-screen space-y-12">
        <div className="cube-container">
          <div className="cube">
            {['front', 'back', 'left', 'right', 'top', 'bottom'].map(face => (
              <div key={face} className={`cube-face cube-${face} bg-white text-black text-center shadow-lg`}>
                <div className="rounded-full overflow-hidden mx-auto mb-4" style={{width:'100px',height:'100px'}}>
                <img
                  src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/6717997491fcff9b174daed5_about.avif"
                  alt="U Digital Studio Logo"
                  className="object-cover w-full h-full rounded-lg"
                />
                </div>
                <div className="text-6xl font-bold">ABOUT</div>
                <div className="text-6xl font-bold">STUDIO&copy;</div>
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

export default Stdio;