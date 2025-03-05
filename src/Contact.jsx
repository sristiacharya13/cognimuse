import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactForm = () => {
  return (
    <div id="contact" className="w-full min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-12 lg:px-20 py-12 bg-black">
      {/* Left Side Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 font-[Inter] text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-6xl md:text-8xl font-bold text-white">Say hey.</h1>
          <p className="text-xl md:text-2xl text-gray-400 mt-8 md:mt-10">
            Not sure where to start?
          </p>
        </div>
        <p className="text-xl md:text-2xl text-gray-400 mt-6 leading-relaxed">
          Tell us about your product, your timeline, <br className="hidden md:block" />
          how you heard about us, and where you're located.
        </p>
        <p className="text-xl md:text-2xl text-gray-400 mt-6 leading-relaxed">
          We read every message. So, thanks in advance for <br className="hidden md:block" />
          making it a good one.
        </p>
        <Link to="ComingSoon" className="text-white text-xl md:text-2xl underline mt-6 block">
          Looking for a job?
        </Link>
      </div>

      {/* Right Side Form */}
      <div className="md:w-2/3 lg:w-1/2 p-6 md:p-8 w-full bg-black">
        <form className="space-y-10 font-[Inter]">
          {/* First Row - Name & Email */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="w-full">
              <label className="block text-white text-lg md:text-xl mb-3">Name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none"
              />
            </div>
            <div className="w-full">
              <label className="block text-white text-lg md:text-xl mb-3">Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none"
              />
            </div>
          </div>

          {/* Second Row - How did you hear of us? & What stage is your company? */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="w-full">
              <label className="block text-white text-lg md:text-xl mb-3">How did you hear of us?*</label>
              <input
                type="text"
                placeholder="Enter your answer"
                className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none"
              />
            </div>
            <div className="w-full">
              <label className="block text-white text-lg md:text-xl mb-3">What stage is your company?</label>
              <select className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none">
                <option className="text-black">Select One</option>
                <option className="text-black">Early stage startup</option>
                <option className="text-black">Mid stage startup</option>
                <option className="text-black">Late stage startup</option>
                <option className="text-black">Enterprise</option>
              </select>
            </div>
          </div>

          {/* Third Row - Message */}
          <div>
            <label className="block text-white text-lg md:text-xl mb-3">Message*</label>
            <textarea
              placeholder="Type your message"
              className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none"
            ></textarea>
          </div>

          {/* Checkbox and Submit Button in the Same Row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 md:w-6 md:h-6" />
              <label className="text-white text-lg md:text-xl">Signup to Newsletter</label>
            </div>

            <button
              type="submit"
              className="text-white text-lg md:text-xl font-semibold focus:outline-none backdrop-blur-lg bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:bg-black hover:border-2 hover:border-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
