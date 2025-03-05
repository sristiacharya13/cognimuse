import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhoneCall, FiX } from "react-icons/fi";
import CalendlyModal from "./Calendly";

const Navbar = ({ heroRef, worksRef, contactRef, servicesRef }) => {
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
    const options = {
      timeZoneName: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    setTimezones({
      india: new Intl.DateTimeFormat("en-GB", {
        ...options,
        timeZone: "Asia/Kolkata",
      }).format(new Date()),
      paris: new Intl.DateTimeFormat("en-GB", {
        ...options,
        timeZone: "Europe/Paris",
      }).format(new Date()),
      canada: new Intl.DateTimeFormat("en-GB", {
        ...options,
        timeZone: "America/Toronto",
      }).format(new Date()),
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    updateTimeZones();
    const interval = setInterval(updateTimeZones, 60000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

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
      <div className="w-full">
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-transparent backdrop-blur-md">
          {/* Mobile View: Logo on the left, Menu on the right */}
          <div className="flex w-full md:w-auto md:justify-between items-center">
            {/* Logo - Left for Mobile, Center for Desktop */}
            <div className="relative left-0 transform-none md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <img src="/cognimuse.png" alt="Cognimuse Logo" className="h-10 md:h-22" />
            </div>

            {/* Menu Button - Right for Mobile */}
            <div className="ml-auto md:ml-0">
              <button
                onClick={toggleMenu}
                className="text-white text-sm font-[Inter] font-semibold focus:outline-none backdrop-blur-lg bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-black hover:border-2 hover:border-white flex items-center space-x-2"
              >
                {isOpen ? <>Close <FiX className="text-lg" /></> : "Menu"}
              </button>
            </div>
          </div>

          {/* Desktop Timezones & Contact Button */}
          <div className="hidden md:flex items-center space-x-6 font-[Inter] text-white text-sm">
            <span>{currentZone.toUpperCase()} {timezones[currentZone]}</span>
            <div className="relative flex items-center group">
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="flex items-center backdrop-blur-xl bg-white/30 w-8 h-8 rounded-full transition-all duration-300 group-hover:w-40 group-hover:h-10 group-hover:justify-end pl-2 pr-2 group-hover:bg-black group-hover:border-2 group-hover:border-white"
              >
                <FiPhoneCall className="text-xl text-white transition-all duration-300" />
                <span className="absolute left-10 font-[Inter] text-white text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Let's Talk
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* Responsive Dropdown Menu */}
        {isOpen && (
          <div
            className={`bg-opacity-80 text-white text-lg flex flex-col items-start space-y-4 py-6 px-6 fixed top-[60px] z-50 rounded-lg ${
              isMobile ? "right-0" : "left-6"
            }`}
          >
            <Link
              to="/ComingSoon"
              className="hover:text-white text-white text-sm font-[Inter] font-semibold focus:outline-none backdrop-blur-lg w-19 bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-black hover:border-2 hover:border-white text-left right-0"
              onClick={toggleMenu}
            >
              Works
            </Link>
            <Link
              to="/services"
              className="hover:text-white text-white text-sm font-[Inter] font-semibold focus:outline-none backdrop-blur-lg w-22 bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-black hover:border-2 hover:border-white text-left"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="hover:text-white text-white text-sm font-[Inter] font-semibold focus:outline-none backdrop-blur-lg bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-black hover:border-2 hover:border-white w-full text-left"
              onClick={toggleMenu}
            >
              Get in touch
            </Link>
          </div>
        )}
      </div>

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </>
  );
};

export default Navbar;