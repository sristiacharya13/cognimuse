import React, { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const heardAboutUsRef = useRef(null);
  const companyStageRef = useRef(null);
  const messageRef = useRef(null);
  const [newsletter, setNewsletter] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate form
  const validateForm = useCallback(() => {
    let errors = {};
    if (!nameRef.current.value.trim()) errors.name = "Name is required";
    if (!emailRef.current.value.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      errors.email = "Invalid email format";
    }
    if (!heardAboutUsRef.current.value.trim()) errors.heardAboutUs = "This field is required";
    if (!messageRef.current.value.trim()) errors.message = "Message cannot be empty";

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        heardAboutUs: heardAboutUsRef.current.value,
        companyStage: companyStageRef.current.value,
        message: messageRef.current.value,
        newsletter: newsletter,
      };

      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");

      // Reset form
      nameRef.current.value = "";
      emailRef.current.value = "";
      heardAboutUsRef.current.value = "";
      companyStageRef.current.value = "Select One";
      messageRef.current.value = "";
      setNewsletter(false);
      setErrors({});
    }
  };

  return (
    <div id="contact" className="w-full min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-12 lg:px-20 py-12 bg-black">
      {/* Left Side Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 font-[Inter] text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-6xl md:text-8xl font-bold text-white">Say hey.</h1>
          <p className="text-xl md:text-2xl text-gray-400 mt-8 md:mt-10">Not sure where to start?</p>
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
        <form className="space-y-10 font-[Inter]" onSubmit={handleSubmit}>
          {/* First Row - Name & Email */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="w-full">
              <label className="block text-white text-lg md:text-xl mb-3">Name*</label>
              <input ref={nameRef} type="text" placeholder="Enter your name" className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="w-full">
              <label className="block text-white text-lg md:text-xl mb-3">Email*</label>
              <input ref={emailRef} type="email" placeholder="Enter your email" className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Second Row - How did you hear of us? & What stage is your company? */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="w-full">
              <label className="block text-white text-lg md:text-xl mb-3">How did you hear of us?*</label>
              <input ref={heardAboutUsRef} type="text" placeholder="Enter your answer" className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none" />
              {errors.heardAboutUs && <p className="text-red-500 text-sm mt-1">{errors.heardAboutUs}</p>}
            </div>
            <div className="w-full">
              <label className="block text-white text-lg md:text-xl mb-3">What stage is your company?</label>
              <select ref={companyStageRef} className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none">
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
            <textarea ref={messageRef} placeholder="Type your message" className="w-full bg-transparent border-b border-gray-500 p-3 text-white text-lg md:text-xl outline-none"></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Checkbox and Submit Button */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <input type="checkbox" checked={newsletter} onChange={() => setNewsletter(!newsletter)} className="w-5 h-5 md:w-6 md:h-6" />
              <label className="text-white text-lg md:text-xl">Signup to Newsletter</label>
            </div>

            <button type="submit" className="text-white text-lg md:text-xl font-semibold backdrop-blur-lg bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:bg-black hover:border-2 hover:border-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
