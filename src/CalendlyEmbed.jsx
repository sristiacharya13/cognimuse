import React from "react";
import { FiX } from "react-icons/fi";

const CalendlyEmbed = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm p-4">
      <div className="relative bg-white shadow-lg rounded-lg w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Section - Logo and Text */}
        <div className="hidden md:flex w-1/2 bg-black flex-col items-center justify-center p-6 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
          {/* Logo Image */}
          <img
            src="https://your-logo-url.com/logo.png" // Replace with actual logo URL
            alt="Company Logo"
            className="h-16 mb-4"
          />

          {/* Tagline */}
          <p className="text-white text-lg font-semibold text-center">
            IDEAS IN, PRODUCTS OUT, IN WEEKS;
          </p>
        </div>

        {/* Right Section - Calendly Embed */}
        <div className="w-full md:w-1/2 p-3">
          <iframe
            src="https://calendly.com/meet-manoj-cognimuse/consultation?embed_domain=www.cognimuse.com&embed_type=Inline"
            width="100%"
            height="500px"
            frameBorder="0"
            title="Calendly Scheduling"
            className="rounded-md"
            style={{ border: "none" }}
          ></iframe>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <FiX size={24} />
        </button>
      </div>
    </div>
  );
};

export default CalendlyEmbed;
