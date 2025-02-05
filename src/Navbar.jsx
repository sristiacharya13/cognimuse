import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-8 text-lg">
        {/* Left Navigation */}
        <div className="flex space-x-8">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="/studio" className="hover:text-gray-400 transition">Studio</a>
          <a href="/work" className="hover:text-gray-400 transition">Work</a>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67093575f256069376139ec6_logo-white.svg"
            alt="U Digital Studio Logo"
            className="h-12"
          />
        </div>

        {/* Right Navigation */}
        <div className="flex space-x-8 items-center">
          <a href="/blog" className="hover:text-gray-400 transition">Blog</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
          <div className="flex items-center">
            <a href="/cart" className="hover:text-gray-400 transition">Cart</a>
            <span className="ml-2">0</span>
          </div>
        </div>
      </nav>

      {/* Center Content */}
      <div className="flex flex-col justify-center items-center min-h-screen space-y-12">
        {/* 3D Rotating Cube */}
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

        {/* Text in Single Row with Proper Alignment */}
        <div className="flex justify-between w-full px-16 text-lg text-gray-300 mt-12">
          <p className="text-left w-1/3">READY TO FIND YOUR NEXT IDEAL<br/>TEMPLATE</p>
          <p className="text-center w-1/3">UPS <br/>DIGITAL STUDIO</p>
          <p className="text-right w-1/3">MADE TO LEAVE A MARK.</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;