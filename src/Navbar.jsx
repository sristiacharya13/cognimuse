import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CalendlyEmbed from "./CalendlyEmbed"; // Import Calendly component
import { FiMail } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [timezones, setTimezones] = useState({
    india: "",
    paris: "",
    canada: "",
  });
  const [currentZone, setCurrentZone] = useState("india");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const updateTimeZones = () => {
    const options = { timeZoneName: "short", hour: "2-digit", minute: "2-digit", hour12: false };

    setTimezones({
      india: new Intl.DateTimeFormat("en-GB", { ...options, timeZone: "Asia/Kolkata" }).format(new Date()),
      paris: new Intl.DateTimeFormat("en-GB", { ...options, timeZone: "Europe/Paris" }).format(new Date()),
      canada: new Intl.DateTimeFormat("en-GB", { ...options, timeZone: "America/Toronto" }).format(new Date()),
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    updateTimeZones();
    const interval = setInterval(updateTimeZones, 60000); // Update every minute

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  // Auto-switch timezone every 3 seconds
  useEffect(() => {
    const timezoneInterval = setInterval(() => {
      setCurrentZone((prev) => {
        if (prev === "india") return "paris";
        if (prev === "paris") return "canada";
        return "india";
      });
    }, 3000);

    return () => clearInterval(timezoneInterval);
  }, []);

  return (
    <>
      <div className="w-full bg-black text-white">
        <nav className="flex justify-between items-center px-6 md:px-12 py-6 relative">
          {/* Left Side - Menu Button */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-sm font-semibold focus:outline-none bg-gray-700 px-4 py-2 rounded-full transition-all duration-300 hover:bg-black hover:border-2 hover:border-white"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src="https://cognimuse-main.web.app/images/cognimuse.png"
              alt="Cognimuse Logo"
              className="h-22 md:h-22"
            />
          </div>

          {/* Right Side - Time Zones & Email Icon */}
          <div className="flex items-center space-x-4 md:space-x-6 text-sm relative">
            {/* Timezone Section */}
            <span className="hidden md:inline">
              {currentZone.toUpperCase()} {timezones[currentZone]}
            </span>

            {/* Email Icon with Hover Effect */}
            <div className="relative flex items-center group">
              <a href="mailto:your@email.com" className="flex items-center">
                <div className="relative flex items-center bg-gray-700 w-8 h-8 rounded-full transition-all duration-300 group-hover:w-40 group-hover:h-10 group-hover:justify-end pl-2 pr-2 group-hover:bg-black group-hover:border-2 group-hover:border-white">
                  <FiMail className="text-xl text-white transition-all duration-300" />
                  <span className="absolute left-10 text-white text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Get in Touch
                  </span>
                </div>
              </a>
            </div>
          </div>
        </nav>

        {/* Responsive Dropdown Menu - Left Side with Opacity */}
        {isOpen && (
          <div className="bg-black bg-opacity-80 text-white text-lg flex flex-col items-start space-y-4 py-6 px-6 absolute top-16 left-0 w-64 z-10">
            <Link to="/what-we-do" className="hover:text-gray-400" onClick={toggleMenu}>
              What do we do?
            </Link>
            <Link to="/about" className="hover:text-gray-400" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-400" onClick={toggleMenu}>
              Get in touch
            </Link>
          </div>
        )}
      </div>

      {/* Calendly Modal */}
      <CalendlyEmbed isOpen={isCalendlyOpen} setIsOpen={setIsCalendlyOpen} />
    </>
  );
};

export default Navbar;
