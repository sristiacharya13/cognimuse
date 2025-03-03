import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaMedium, FaBehance, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-10">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start gap-12">
        {/* Left Side - "Have an idea?" with arrow icon */}
        <div className="md:w-1/3 flex flex-col items-start">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            Have an idea?
          </h2>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-semibold mb-6">Tell us about your project</h2>

          {/* Service Selection */}
          <div className="mb-6">
            <p className="text-lg mb-2">Service</p>
            <div className="flex gap-4">
              {["Design", "Development", "Other"].map((service) => (
                <button
                  key={service}
                  className={`px-4 py-2 rounded-full border ${
                    formData.service === service ? "bg-gray-700 border-gray-500" : "border-gray-500"
                  }`}
                  onClick={() => setFormData({ ...formData, service })}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection in INR */}
          {/* <div className="mb-6">
            <p className="text-lg mb-2">Budget in INR (₹)</p>
            <div className="flex gap-4 flex-wrap">
              {["₹1L-₹2L", "₹2L-₹5L", "₹5L-₹10L", "₹10L+", "Other"].map((budget) => (
                <button
                  key={budget}
                  className={`px-4 py-2 rounded-full border ${
                    formData.budget === budget ? "bg-gray-700 border-gray-500" : "border-gray-500"
                  }`}
                  onClick={() => setFormData({ ...formData, budget })}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div> */}

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 bg-transparent border-b border-gray-500 focus:outline-none w-full"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 bg-transparent border-b border-gray-500 focus:outline-none w-full"
              onChange={handleChange}
            />
          </div>

          {/* Description Field */}
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-3 bg-transparent border-b border-gray-500 focus:outline-none mb-6"
            rows="4"
            onChange={handleChange}
          ></textarea>

          {/* Submit Button with Arrow Icon */}
          <button className="px-6 py-3 bg-black border-2 text-2xl border-white text-white font-semibold rounded-full flex items-center gap-2 hover:bg-gray-300 transition">
            Book a Meeting
            <ArrowUpRight className="w-8 h-8 text-black text-2xl font-semibold bg-white rounded-full p-1" />
          </button>
        </div>
      </div>

      {/* New Section with Logo and Icons */}
      <div className="w-full max-w-5xl flex items-center justify-between pb-4 border-b border-gray-500 mb-8">
        {/* Logo */}
        <img src="https://cognimuse-main.web.app/images/cognimuse.png" alt="Logo" className="h-20 w-20" />
        {/* Icons */}
        <div className="flex gap-4 text-md">
          <FaLinkedin className="cursor-pointer hover:text-gray-400" />
          <FaMedium className="cursor-pointer hover:text-gray-400" />
          <FaBehance className="cursor-pointer hover:text-gray-400" />
          <FaPhone className="cursor-pointer hover:text-gray-400" />
          <FaEnvelope className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between pb-0 text-center md:text-left">
  <h2 className="text-sm font-semibold flex items-center gap-2 mb-4 md:mb-0">
    2025. All rights reserved by cognimuse.design
  </h2>
  {/* Navigation Links */}
  <div className="flex flex-wrap justify-center md:justify-end gap-4">
    <a href="#" className="hover:text-gray-400">Home</a>
    <a href="#" className="hover:text-gray-400">About</a>
    <a href="#" className="hover:text-gray-400">Portfolio</a>
    <a href="#" className="hover:text-gray-400">Work</a>
    <a href="#" className="hover:text-gray-400">Contact</a>
  </div>
</div>
    </div>
  );
}
