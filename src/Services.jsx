import React, { useState } from "react";

const Services = () => {
 const [hoveredService, setHoveredService] = useState(null);

 const services = [
   {
     id: "01",
     name: "Development",
     image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e69e395da746d1fd2d518_icons8-development%20(2).svg"
   },
   {
     id: "02", 
     name: "Motion Graphic",
     image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e6a7566d09b604e6093ee_icons8-mind-map%20(1).svg"
   },
   {
     id: "03",
     name: "Video Editing",
     image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e6a73c2a7fe04d831cc13_icons8-video-call%20(2).svg"
   },
   {
    id: "04",
    name: "3D Animation",
    image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e6a73191effdf49936ea3_icons8-sugar-cube%20(2).svg"
   },
   {
    id: "05",
    name: "Branding",
    image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e6a73e8d02cef5b7a14ef_icons8-responsive%20(2).svg"
   },
   {
    id: "06",
    name: "Web Design",
    image: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e6a73e0c4001e3d5af898_icons8-vector%20(2).svg"
   }
 ];

 return (
   <div className="bg-black min-h-screen text-white p-8">
     <h1 className="text-[8rem] font-bold mb-32">SERVICES</h1>

     <div className="flex">
       <div className="w-1/2 relative">
         {hoveredService && (
           <img
             src={hoveredService.image}
             alt={hoveredService.name}
             className="absolute top-0 left-0 w-96 h-96 transition-opacity duration-300"
           />
         )}
       </div>

       <div className="w-1/2">
         {services.map((service) => (
           <div
             key={service.id}
             className="border-t border-gray-800 py-8 group"
             onMouseEnter={() => setHoveredService(service)}
             onMouseLeave={() => setHoveredService(null)}
           >
             <div className="flex items-center justify-between">
               <h2 className="text-4xl font-bold group-hover:text-gray-400 transition-colors">
                 {service.name}
               </h2>
               <span className="text-sm text-gray-500">{service.id}</span>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default Services;