{/*
import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white">
  
      <nav className="flex justify-between items-center px-12 py-8 text-lg">
        
        <div className="flex space-x-8">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/studio" className="hover:text-gray-400 transition">Studio</Link>
          <Link to="/work" className="hover:text-gray-400 transition">Work</Link>
        </div>

       
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67093575f256069376139ec6_logo-white.svg"
            alt="U Digital Studio Logo"
            className="h-12"
          />
        </div>

        
        <div className="flex space-x-8 items-center">
          <Link to="/blog" className="hover:text-gray-400 transition">Blog</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
          <div className="flex items-center">
            <Link to="/cart" className="hover:text-gray-400 transition">Cart</Link>
            <span className="ml-2">0</span>
          </div>
        </div>
      </nav>

  
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

export default Navbar;
*/}

{/*
import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-white/20 px-3.5 py-2.5 text-lg rounded"
      : "text-white/70 bg-white/10 px-3.5 py-2.5 text-lg rounded hover:bg-white/20 transition";
  };

  return (
    <div className="w-full bg-black text-white">
      <nav className="flex justify-between items-center px-12 py-8">
        <div className="flex space-x-8">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/studio" className={getLinkClass("/studio")}>Studio</Link>
          <Link to="/work" className={getLinkClass("/work")}>Work</Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67093575f256069376139ec6_logo-white.svg"
            alt="U Digital Studio Logo"
            className="h-12"
          />
        </div>

        <div className="flex space-x-8 items-center">
          <Link to="/blog" className={getLinkClass("/blog")}>Blog</Link>
          <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
          <Link to="/cart" className={`${getLinkClass("/cart")} flex items-center`}>Cart | <span className="ml-1">0</span></Link>
        </div>
      </nav>

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

export default Navbar;
*/}
import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-white/20 px-3.5 py-2.5 text-lg"
      : "text-white/70 bg-white/10 px-3.5 py-2.5 text-lg hover:bg-white/20 transition";
  };

  return (
    <div className="w-full bg-black text-white">
      <nav className="flex justify-between items-center px-12 py-8">
        <div className="flex space-x-8">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/studio" className={getLinkClass("/studio")}>Studio</Link>
          <Link to="/work" className={getLinkClass("/work")}>Work</Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67093575f256069376139ec6_logo-white.svg"
            alt="U Digital Studio Logo"
            className="h-12"
          />
        </div>

        <div className="flex space-x-8 items-center">
          <Link to="/blog" className={getLinkClass("/blog")}>Blog</Link>
          <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
          <Link to="/cart" className={`${getLinkClass("/cart")} flex items-center`}>Cart | <span className="ml-1">0</span></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;