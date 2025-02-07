import React, { useState, useEffect } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="bg-black min-h-screen text-white p-8 flex flex-col items-center">
      {/* Title with responsive size */}
      <h1 className={`text-center font-bold ${isMobile ? "text-4xl mb-6" : "text-[10rem] mb-12"}`}>
        SERVICES
      </h1>

      {/* Mobile View: 6 rows, 1 column */}
      {isMobile ? (
        <div className="flex flex-col items-center space-y-6">
          {services.map((service) => (
            <div key={service.id} className="text-center">
              <img src={service.image} alt={service.name} className="w-20 h-20 mx-auto mb-2" />
              <h2 className="text-xl font-semibold">{service.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop View: Original Layout */
        <div className="flex w-full max-w-6xl">
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
                  <h2 className="text-6xl font-bold group-hover:text-gray-400 transition-all transform group-hover:translate-x-2">
                    {service.name}
                    <sup className="text-2xl text-gray-500 ml-2">{service.id}</sup>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
