import React, { useState, useEffect } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
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
      id: "Design | Development | AI Integration",
      name: "Whisperify",
      image: "https://cognimuse.com/Whisperify/whisp.webp",
      para: "AI Audio Transcription app",
      description:
        "Whisperify is a Minimal AI transcription app, designed primarily for decluttering your day-to-day voice conversions without any hassle of finding features.",
    },
    {
      id: "Design | Development | AI Integration",
      name: "Marble Note",
      image: "https://cognimuse.com/MarbleAi/marble2.png",
      para: "AI-Powered Knowledge Base and Mind Mapping",
      description:
        "Marble Note is a powerful tool for book readers to organize and mind-map knowledge, helping you turn scattered thoughts into a structured knowledge base for deeper insights.",
    },
    {
      id: "Design | Development | AI Integration",
      name: "Squad AI",
      image: "https://cognimuse.com/SquadAI/squad.webp",
      para: "AI-Powered Networking Assistant",
      description:
        "Squad AI is a networking assistant for entrepreneurs, designed to help you manage and grow your professional connections, making networking easier and more efficient.",
    },
    {
      id: "Design | Development | AI Integration",
      name: "Aiyurveda",
      image: "https://cognimuse.com/Aiurveda/ayurveda2.webp",
      para: "Personalized Ayurvedic-Diet Assistant",
      description:
        "Aiyurveda is a personalized assistant for your Ayurvedic diet, tailored to your body type and lifestyle, ensuring holistic health through natural practices.",
    },
    {
      id: "Design | Development | AI Integration",
      name: "Marble Research",
      image: "https://cognimuse.com/Research/note.webp",
      para: "AI-Powered Research Assistant",
      description:
        "Marble Research is a research and writing assistant designed for content writers, helping you streamline research, organize thoughts, and improve writing efficiency with AI-powered tools.",
    },
    {
      id: "Design | Development | AI Integration",
      name: "Ursa AI",
      image: "https://cognimuse.com/WiseAI/wiseMain.webp",
      para: "AI-Powered Learning Assistant",
      description:
        "Ursa AI is a learning assistant tailored for college students, helping you organize your studies, manage time, and improve your academic performance with personalized assistance.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white p-8 flex flex-col items-center">
      {/* Title */}
      <h1
        className={`text-center font-bold ${
          isMobile ? "text-4xl mb-6" : "text-[10rem] mb-12"
        }`}
      >
        OUR WORKS
      </h1>

      {/* Mobile View */}
      {isMobile ? (
        <div className="flex flex-col items-center space-y-6">
          {services.map((service) => (
            <div key={service.id} className="text-center">
              <img
                alt={`${service.name} illustration`}
                loading="lazy"
                className="cursor-pointer w-full max-w-md mx-auto animate-[float_3s_ease-in-out_infinite]"
                src={service.image}
              />
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="text-gray-400 text-sm mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop View */
        <div className="flex w-full max-w-6xl">
          {/* Left Side: Selected Service Details */}
          <div className="w-1/2 relative flex flex-col items-center justify-center">
            {selectedService && (
              <div className="relative text-center p-6">
                <h1 className="text-5xl font-bold">{selectedService.name}</h1>
                <h3 className="text-2xl text-gray-400 mt-2">
                  {selectedService.id}
                </h3>
                <h3 className="border border-gray-400 inline-block px-4 py-2 text-lg mt-4">
                  {selectedService.para}
                </h3>
                <img
                  key={selectedService.name} // This forces React to re-render the image
                  alt={`${selectedService.name} illustration`}
                  className="rounded-lg animate-[float_3s_ease-in-out_infinite] transition-all duration-1 ease-in-out transform scale-100 hover:scale-10"
                  src={selectedService.image}
                  style={{
                    width:
                        selectedService.name === "Marble Note" ||selectedService.name === "Aiyurveda"? "14rem": "100%",
                    height:
                        selectedService.name === "Marble Note" ||selectedService.name === "Aiyurveda"? "26rem": "auto",
                    display: "block",
                    margin: "auto",
                  }}
                />

                <p className="text-gray-300 text-lg mt-6 text-justify">
                  {selectedService.description}
                </p>
              </div>
            )}
          </div>

          {/* Right Side: Service List (Aligned to the right) */}
          <div className="w-1/2 flex flex-col justify-end items-end">
            {services.map((service) => (
              <div
                key={service.id}
                className="border-t border-gray-800 py-8 w-full text-right group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <h2 className="text-6xl font-bold transition-all transform hover:text-gray-400 hover:translate-x-2">
                  {service.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
