import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Saranya Subburam",
      role: "CDO, CogniMuse",
      image: "src/assets/12.png", // Ensure this path is correct (use the `public` folder for easier referencing)
      email: "saranya@cognimuse.com",
      linkedin:
        "https://www.linkedin.com/in/saranya-subburam-71440494/?originalSubdomain=in",
    },
    {
      name: "Manoj S",
      role: "CEO, CogniMuse",
      image: "src/assets/11.png",
      email: "manoj@cognimuse.com",
      linkedin: "https://www.linkedin.com/in/rulemj7/",
    },
    {
      name: "Prashanth Kumar",
      role: "CTO, CogniMuse",
      image: "src/assets/13.png",
      email: "prashanth@cognimuse.com",
      linkedin: "https://www.linkedin.com/in/prash4nth/",
    },
  ];

  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="p-4 md:p-6 lg:p-8 my-6 md:my-8 lg:my-12">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group flex flex-col md:flex-row items-center gap-4 md:gap-6"
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            {/* Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative overflow-hidden rounded-lg shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover transition duration-300 ease-in-out ${
                  hoveredMember === index ? "grayscale-0 scale-105" : "grayscale"
                }`}
              />
            </div>

            {/* Member Details */}
            <div className="text-center md:text-left">
              <h2 className="text-lime-200 text-xl md:text-2xl lg:text-3xl font-bold">
                {member.name}
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-2">
                {member.role}
              </p>

              {/* Contact Links */}
              <div
                className={`flex flex-col gap-1 transition-opacity duration-300 ${
                  hoveredMember === index ? "opacity-100" : "opacity-0 md:opacity-100"
                }`}
              >
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center md:justify-start gap-2 text-lime-200 hover:text-lime-300 text-xs md:text-sm"
                  >
                    <MdEmail className="text-lime-200" size={16} />
                    <span className="break-all md:break-normal text-lime-200">
                      {member.email}
                    </span>
                  </a>
                )}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-lime-200 hover:text-lime-300 text-xs md:text-sm"
                >
                  <FaLinkedin className="text-lime-200" size={16} />
                  <span className="text-lime-200">View Profile</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
