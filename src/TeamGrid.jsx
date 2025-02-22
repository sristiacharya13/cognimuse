import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Saranya Subburam",
      role: "CDO, CogniMuse",
      image: "src/assets/12.png", // Use the public folder for assets
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
    <div className="p-8 my-12 text-center">
      <h1 className="text-4xl w-screen text-white mb-8 text-center font-bold mt-15 md:text-6xl lg:text-[10rem]">THE TEAM</h1>
      <div className="max-w-4xl mx-auto space-y-8 items-left">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group flex items-center gap-6"
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            {/* Image */}
            <div className="w-48 h-48 relative overflow-hidden rounded-lg shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover transition duration-300 ease-in-out ${
                  hoveredMember === index ? "grayscale-0 scale-105" : "grayscale"
                }`}
              />
            </div>

            {/* Member Details */}
            <div>
              <h2 className="text-lime-200 text-3xl font-bold">{member.name}</h2>
              <p className="text-gray-400 text-base mb-2">{member.role}</p>

              {/* Contact Links */}
              <div
                className={`flex flex-col gap-1 transition-opacity duration-300 ${
                  hoveredMember === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-lime-200 hover:text-lime-300 text-sm"
                  >
                    <MdEmail size={20} className="text-lime-200" />
                    <span>{member.email}</span>
                  </a>
                )}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lime-200 hover:text-lime-300 text-sm"
                >
                  <FaLinkedin size={20} className="text-lime-200" />
                  <span>View Profile</span>
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
