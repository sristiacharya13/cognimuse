import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      {/* Marquee Section */}
      <div className="overflow-hidden whitespace-nowrap py-6 mt-16">
        <div className="marquee flex space-x-10 items-center h-[250px]">
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
                  className="h-48 w-48"
                />
                <span className="text-[12vw] font-bold uppercase leading-none">
                  Let's Talk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Logo Above Navigation */}
      <div className="flex justify-center py-6"> {/* Centering div */}
        <img
          src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67093575f256069376139ec6_logo-white.svg"
          alt="Logo"
          className="h-28 w-28"
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4 py-6">
        {["Home", "Studio", "Work", "Plans", "Blog", "Contact"].map((item) => (
          <button
            key={item}
            className="bg-gray-800 px-6 py-3 rounded-md text-lg hover:bg-gray-700 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-4">
        <p className="mb-2">COPYRIGHT © UPS — POWERED BY WEBFLOW</p>
        <p>
          <a href="#" className="underline">
            STYLE GUIDE
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            LICENSING
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Contact;