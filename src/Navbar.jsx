import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false); // Close mobile menu when resizing to desktop
    }
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-white font-semibold text-lg bg-white/20 px-3.5 py-2.5"
      : "text-white/80 font-semibold text-lg bg-white/10 px-3.5 py-2.5 hover:bg-white/20 transition";

  return (
    <div className="w-full bg-black text-white">
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 relative">
        
        {/* Logo - Centered in Desktop, Left in Mobile */}
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <img
            src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67093575f256069376139ec6_logo-white.svg"
            alt="U Digital Studio Logo"
            className="h-10 md:h-12"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/studio" className={getLinkClass("/studio")}>Studio</Link>
          <Link to="/work" className={getLinkClass("/work")}>Work</Link>
        </div>

        {/* Right Side - Blog, Contact, Cart & Menu Button (Mobile) */}
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Blog and Contact - Moved to the Right Side */}
          <div className="hidden md:flex space-x-6">
            <Link to="/blog" className={getLinkClass("/blog")}>Blog</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className={`${getLinkClass("/cart")} flex items-center`}>
            Cart | <span className="ml-1">0</span>
          </Link>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="md:hidden text-white text-2xl focus:outline-none"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu - Reduced Height & Left Aligned */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-[40vh] bg-black/90 text-white flex flex-col items-start px-8 py-6 z-50 transition-all duration-300">
          {/* Close Button - Positioned at the top-right */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 text-white text-3xl"
          >
            <FiX />
          </button>

          {[
            { name: "Home", path: "/" },
            { name: "Studio", path: "/studio" },
            { name: "Work", path: "/work" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="w-full text-left text-white font-semibold text-xl px-4 py-2 transition-all duration-300 hover:bg-white/20 hover:translate-x-2"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
