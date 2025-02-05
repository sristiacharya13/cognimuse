import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        <div>
          <a href="#" className="font-bold text-xl">Home</a>
          <a href="#" className="ml-6">Studio</a>
          <a href="#" className="ml-6">Work</a>
        </div>
        <div>
          <a href="#">Blog</a>
          <a href="#" className="ml-6">Contact</a>
          <a href="#" className="ml-6">Cart 0</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        {/* Middle Element (Div with Logo and Text) */}
        <div className="flex flex-col items-center"> {/* Vertical alignment */}
          <div className="relative"> {/* For positioning the TM */}
            <div className="bg-white w-48 h-48 flex items-center justify-center"> {/* Adjust w-48 h-48 for size */}
              <img
                src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67093575f256069376139ec6_logo-white.svg"
                alt="Logo"
                className="h-14 w-14"
              />
            </div>
            <span className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs">TM</span>
          </div>
          <div className="mt-4"> {/* Space between logo and text */}
            <p className="text-4xl font-bold">DIGITAL</p>
            <p className="text-4xl font-bold">STUDIO</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-lg">READY TO FIND YOUR NEXT IDEAL</p>
          <p className="text-5xl font-bold mt-4">TEMPLATE</p>
          <div className="mt-16 flex flex-col items-center">
            <p className="text-lg">UPS</p>
            <p className="text-lg">DIGITAL STUDIO</p>
            <p className="mt-8 text-sm">Browse our selection of over 300+ top Webflow templates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;