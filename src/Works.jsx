import React from 'react';
import Navbar from './Navbar';

const imageUrls = [
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670d2e05a810006162dcefd4_work-2.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e353d429c71c439c27c38_work-4.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3547c9cec6488b67c054_work-5.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3cd25ca07a1862c5dec1_work-7.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670d35a62ea6281ea715f7bd_work-1.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670e3a80e86a23be97a92b9c_work-6.avif",
];

const Works = () => {
  return (
    <>
      <Navbar />
      
      {/* Header Section */}
      <div className="flex items-center justify-center min-h-[85vh] bg-black">
        <span className="text-[15vw] font-bold text-white uppercase leading-none">
          WORKS<span className="text-[4rem] align-super ml-2">‘19-24</span>
        </span>
      </div>

      {/* Image Grid Section */}
      <div className="w-full bg-black text-white py-12">
        <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto">
          {imageUrls.map((url, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={url}
                alt={`Work ${index + 1}`}
                className="w-full h-[500px] object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
