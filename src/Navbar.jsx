// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
// import CalendlyEmbed from "./CalendlyEmbed"; // Import Calendly component

// const Navbar = () => {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [isCalendlyOpen, setIsCalendlyOpen] = useState(false); // State for Calendly modal

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleResize = () => {
//     setIsMobile(window.innerWidth < 768);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const getLinkClass = (path) =>
//     location.pathname === path
//       ? "text-white font-semibold text-lg bg-white/20 px-3.5 py-2.5"
//       : "text-white/80 font-semibold text-lg bg-white/10 px-3.5 py-2.5 hover:bg-white/20 transition";

//   return (
//     <>
//       <div className="w-full bg-black text-white">
//         <nav className="flex justify-between items-center px-6 md:px-12 py-6 relative">
//           {/* Logo - Centered in Desktop, Left in Mobile */}
//           <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
//             <img
//               src="https://cognimuse.online/_next/static/media/Muse.675f37a8.svg"
//               alt="Cognimuse Logo"
//               className="h-10 md:h-12"
//             />
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex space-x-8">
//             <Link to="/" className={getLinkClass("/")}>Home</Link>
//             <Link to="/studio" className={getLinkClass("/studio")}>Studio</Link>
//             <Link to="/work" className={getLinkClass("/work")}>Work</Link>
//           </div>

//           {/* Right Side - Blog, Contact, Cart & Menu Button (Mobile) */}
//           <div className="flex items-center space-x-4 md:space-x-8">
//             {/* Blog and Contact - Moved to the Right Side */}
//             <div className="hidden md:flex space-x-6">
//               <Link to="/blog" className={getLinkClass("/blog")}>Blog</Link>
//               <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
//             </div>

//             {/* "Launch My Idea" Button (Triggers Calendly Modal) */}
//             <button
//               onClick={() => setIsCalendlyOpen(true)}
//               className={`${getLinkClass("/cart")} flex items-center space-x-2`}
//             >
//               <span>Launch My Idea</span>
//               <FiArrowUpRight className="text-xl" />
//             </button>

//             {/* Mobile Menu Button */}
//             {isMobile && (
//               <button
//                 onClick={toggleMenu}
//                 className="md:hidden text-white text-2xl focus:outline-none"
//               >
//                 {isOpen ? <FiX /> : <FiMenu />}
//               </button>
//             )}
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="fixed top-0 left-0 w-full h-[40vh] bg-black/90 text-white flex flex-col items-start px-8 py-6 z-50 transition-all duration-300">
//             {/* Close Button */}
//             <button
//               onClick={toggleMenu}
//               className="absolute top-4 right-6 text-white text-3xl"
//             >
//               <FiX />
//             </button>

//             {[
//               { name: "Home", path: "/" },
//               { name: "Studio", path: "/studio" },
//               { name: "Work", path: "/work" },
//               { name: "Blog", path: "/blog" },
//               { name: "Contact", path: "/contact" },
//             ].map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className="w-full text-left text-white font-semibold text-xl px-4 py-2 transition-all duration-300 hover:bg-white/20 hover:translate-x-2"
//                 onClick={toggleMenu}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Calendly Modal */}
//       <CalendlyEmbed isOpen={isCalendlyOpen} setIsOpen={setIsCalendlyOpen} />
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import CalendlyEmbed from "./CalendlyEmbed"; // Import Calendly component

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false); // State for Calendly modal

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
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
    <>
      <div className="w-full bg-black text-white">
        <nav className="flex justify-between items-center px-6 md:px-12 py-6 relative">
          {/* Logo - Centered in Desktop, Left in Mobile */}
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <img
              src="https://cognimuse.online/_next/static/media/Muse.675f37a8.svg"
              alt="Cognimuse Logo"
              className="h-10 md:h-12"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={getLinkClass("/")}>Home</Link>
            <Link to="/studio" className={getLinkClass("/studio")}>About</Link>
          </div>

          {/* Right Side - Blog, Contact, Cart & Menu Button (Mobile) */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Blog and Contact - Moved to the Right Side */}
            <div className="hidden md:flex space-x-6">
              <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
            </div>

            {/* "Launch My Idea" Button (Triggers Calendly Modal) */}
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className={`${getLinkClass("/cart")} flex items-center space-x-2`}
            >
              <span>Launch My Idea</span>
              <FiArrowUpRight className="text-xl" />
            </button>

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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-[40vh] bg-black/90 text-white flex flex-col items-start px-8 py-6 z-50 transition-all duration-300">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-6 text-white text-3xl"
            >
              <FiX />
            </button>

            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/studio" },
              { name: "Work", path: "/work" },
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

      {/* Calendly Modal */}
      <CalendlyEmbed isOpen={isCalendlyOpen} setIsOpen={setIsCalendlyOpen} />
    </>
  );
};

export default Navbar;
