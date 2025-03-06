import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "BRANDING",
    description:
      "We design brands with clear identity and strategic messaging to help businesses create consistent, engaging experiences that connect",
    details: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
    image: "/Duct Tape Mockup.png",
    color: "linear-gradient(135deg, #E97FD0, #6968FB, #CDF286)",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "We create user-centered digital experiences that balance aesthetics with functionality, ensuring intuitive interactions at every step",
    details: ["Wireframing", "Prototyping", "User Research"],
    image: "/35074109_2311202312.png",
    color: "linear-gradient(135deg, #E97FD0, #6968FB, #CDF286)",
  },
  {
    title: "WEBSITE DESIGN",
    description:
      "We build modern, high-performing websites that engage users and reflect your brand, helping you stand out from the crowd",
    details: ["Responsive Design", "SEO Optimization", "E-commerce Solutions"],
    image: "/Group 1000002794.png",
    color: "linear-gradient(135deg, #E97FD0, #6968FB, #CDF286)",
  },
];

export default function DesignAgency() {
  const [selectedService, setSelectedService] = useState(null);

  const modalColors = {
    "0%": "#E448FF",
    "20%": "#FACF67",
    "48%": "#6267F1",
    "78%": "#DDE467",
    "100%": "#98FC99",
  };

  const getGradientString = () => {
    let gradient = "linear-gradient(to bottom, ";
    for (const stop in modalColors) {
      gradient += `${modalColors[stop]} ${stop}, `;
    }
    return gradient.slice(0, -2) + ")";
  };

  return (
    <div className="min-h-screen bg-black text-white px-10 py-8"> {/* Removed mt-0 */}
      <div className="flex justify-center items-center h-[55vh] w-full transition-all duration-500 ease-in-out">
        {selectedService ? (
          <Link to="/works">
            <div
              className="w-76 h-76 border border-white rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-500 cursor-pointer"
              style={{ background: getGradientString() }}
            >
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="absolute inset-0 w-full h-full object-contain rounded-full"
              />
            </div>
          </Link>
        ) : (
          <div
            className="w-76 h-76 border border-white rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-500"
            style={{ background: "black" }}
          >
            <h1 className="text-5xl font-bold text-center text-white font-[Orbitron]">
              Services
            </h1>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 border border-gray-600 rounded-3xl shadow-2xl cursor-pointer transition-all text-white w-full max-w-md mx-auto text-left ${
              selectedService?.title === service.title
                ? "scale-105 border-white shadow-lg"
                : "opacity-100"
            }`}
            onClick={() => setSelectedService(service)}
            style={{
              transition: "background-color 0.3s ease, transform 0.3s ease",
              background: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = service.color)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-[Inter]">{service.title}</h2>
              <ArrowUpRight size={28} className="text-white" />
            </div>
            <p className="text-m text-white mt-2 font-[Inter]">{service.description}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {service.details.map((detail, i) => (
                <span
                  key={i}
                  className="backdrop-blur-xl bg-white/30 text-gray-200 px-4 py-2 rounded-full text-m font-semibold font-[Inter]"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}