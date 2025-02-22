import React from "react";
import { FaXTwitter } from "react-icons/fa6"; 
import { FaLinkedinIn, FaInstagram, FaDribbble } from "react-icons/fa"; 

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ethan Reyes",
      role: "Developer",
      image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afc9_team-4.avif",
    },
    {
      name: "Noah Bennett",
      role: "Founder",
      image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afc8_team-1.avif",
    },
    {
      name: "Emma Lawson",
      role: "Creative director",
      image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e620d078646bcf8ed3206_team-3.avif",
    }
  ];

  const socialIcons = [
    { id: "twitter", icon: <FaXTwitter />, link: "https://twitter.com" },
    { id: "linkedin", icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { id: "instagram", icon: <FaInstagram />, link: "https://instagram.com" },
    { id: "dribbble", icon: <FaDribbble />, link: "https://dribbble.com" }
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16">
      {/* Responsive Title */}
      <div className="flex justify-center">
        <h1 className="font-bold mt-16 mb-12 text-4xl md:text-6xl lg:text-8xl">
          THE TEAM
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-[300px] h-[350px] mx-auto object-cover object-center mb-4"
              sizes="(max-width: 479px) 94vw, (max-width: 991px) 46vw, 31vw"
              loading="lazy"
            />
            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
            <p className="text-gray-400 mb-4">{member.role}</p>

            {/* Social Media Icons with Hover Effects */}
            <div className="flex justify-center space-x-4">
              {socialIcons.map((social) => (
                <a 
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-2xl transition duration-300 transform hover:text-[#bfc3c5] hover:scale-125"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
