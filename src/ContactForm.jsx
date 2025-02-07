import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Contact Header */}
      <div className="flex items-center justify-center min-h-[90vh] bg-black">
        <span className="text-[15vw] font-bold text-white uppercase leading-none">
          CONTACT
        </span>
      </div>

      {/* Contact Form */}
      <div className="min-h-[20vh] flex items-end justify-center bg-black px-6 pb-12">
        <form className="w-full max-w-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label className="text-white/70 text-sm font-semibold block mb-2">
                FULL NAME
              </label>
              <input
                type="text"
                placeholder="Name Surname"
                className="w-full bg-black text-white/70 border border-gray-700 px-4 py-3 text-sm outline-none placeholder:text-white/70"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="text-white/70 text-sm font-semibold block mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="mail@company.com"
                className="w-full bg-black text-white/70 border border-gray-700 px-4 py-3 text-sm outline-none placeholder:text-white/70"
              />
            </div>

            {/* Timeline Input */}
            <div>
              <label className="text-white/70 text-sm font-semibold block mb-2">
                TIMELINE
              </label>
              <input
                type="text"
                placeholder="2 weeks"
                className="w-full bg-black text-white/70 border border-gray-700 px-4 py-3 text-sm outline-none placeholder:text-white/70"
              />
            </div>

            {/* Budget Input */}
            <div>
              <label className="text-white/70 text-sm font-semibold block mb-2">
                BUDGET
              </label>
              <input
                type="text"
                placeholder="$5,000, $10,000"
                className="w-full bg-black text-white/70 border border-gray-700 px-4 py-3 text-sm outline-none placeholder:text-white/70"
              />
            </div>
          </div>

          {/* More Info Textarea */}
          <div className="mt-6">
            <label className="text-white/70 text-sm font-semibold block mb-2">
              MORE INFORMATION
            </label>
            <textarea
              placeholder="Hello, I'm looking for an agency to help me out with..."
              className="w-full h-32 bg-black text-white/70 border border-gray-700 px-4 py-3 text-sm outline-none resize-none placeholder:text-white/70"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-white text-black py-4 text-sm font-semibold uppercase tracking-wide hover:bg-white/75 transition"
          >
            Submit Project
          </button>
        </form>
      </div>

      {/* Custom Cursor */}
      {isHovering && (
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

      {/* Marquee Animation (Move to CSS file if necessary) */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 50s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default ContactForm;
