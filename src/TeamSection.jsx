import React from "react";

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
   { id: "twitter", icon: "X" },
   { id: "linkedin", icon: "in" },
   { id: "instagram", icon: "IG" },
   { id: "dribbble", icon: "DR" }
 ];

 return (
   <div className="bg-black text-white w-screen min-h-screen py-16">
     <h1 className="text-[10rem] lg:text-[8rem] md:text-[6rem] sm:text-[4rem] xs:text-[2rem] font-bold text-center mb-16">
       THE TEAM
     </h1>
     
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
           
           <div className="flex justify-center space-x-4">
             {socialIcons.map((social) => (
               <button 
                 key={social.id}
                 className="text-gray-400 hover:text-white transition"
               >
                 {social.icon}
               </button>
             ))}
           </div>
         </div>
       ))}
     </div>
   </div>
 );
};

export default TeamSection;