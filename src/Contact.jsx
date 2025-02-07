import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-white font-semibold text-lg bg-white/20 px-3.5 py-2.5"
      : "text-white/80 font-semibold text-lg bg-white/10 px-3.5 py-2.5 hover:bg-white/20 transition";

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/studio", label: "Studio" },
    { path: "/work", label: "Work" },
    { path: "/plans", label: "Plans" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  // State for hover effect on marquee section only
  const [isHoveringMarquee, setIsHoveringMarquee] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Track cursor position
  const handleMouseMove = (event) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="bg-black text-white min-h-screen flex flex-col justify-between relative"
      onMouseMove={handleMouseMove}
    >
      {/* Marquee Section */}
      <div
        className="overflow-hidden whitespace-nowrap py-6 mt-16"
        onMouseEnter={() => setIsHoveringMarquee(true)}
        onMouseLeave={() => setIsHoveringMarquee(false)}
      >
        <div className="animate-marquee flex space-x-10 items-center h-[250px]">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex items-center space-x-10 h-full">
                <span className="text-[12vw] font-bold uppercase leading-none">
                  Contact Us
                </span>
                <img
                  src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67093575f256069376139ec6_logo-white.svg"
                  alt="Logo"
                  className="h-20 w-20 md:h-48 md:w-48"
                />
                <span className="text-[12vw] font-bold uppercase leading-none">
                  Let's Talk&nbsp;
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Hover Effect (Only on Marquee Section) */}
      {isHoveringMarquee && (
        <div
          className="fixed px-[0.3vw] py-[0.3vw] bg-black/70 text-white text-[1.3vw] font-normal rounded-md flex items-center pointer-events-none transition-transform duration-50"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          Say Hello <span className="ml-1">😎</span>
        </div>
      )}

      {/* Logo Above Navigation */}
      <div className="flex justify-center py-6">
        <img
          src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67093575f256069376139ec6_logo-white.svg"
          alt="Logo"
          className="h-16 w-16 md:h-28 md:w-28"
        />
      </div>

      {/* Responsive Navigation */}
      <div className="py-6 px-6">
        <div className="hidden md:flex justify-center space-x-4">
          {navItems.map(({ path, label }, index) => (
            <Link key={index} to={path} className={getLinkClass(path)}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile View: 2 Rows, 3 Columns */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {navItems.map(({ path, label }, index) => (
            <Link key={index} to={path} className={getLinkClass(path)}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-center text-white-400 text-sm py-4 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <p className="flex justify-center items-center space-x-2">
          <span>BACK TO THE TOP</span> <FaArrowUp />
        </p>
        <p className="mt-2">
          COPYRIGHT © UPS — POWERED BY WEBFLOW STYLE GUIDE LICENSING
        </p>
      </footer>

      {/* Styles */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 300s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;