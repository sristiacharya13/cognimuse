import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const CalendlyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    let calendlyScript;
    let isScriptLoaded = false;

    const loadCalendlyScript = () => {
      if (isScriptLoaded) return;

      const existingContainer = document.getElementById("calendly-container");
      if (existingContainer) {
        existingContainer.innerHTML = "";
      }

      calendlyScript = document.createElement("script");
      calendlyScript.src = "https://assets.calendly.com/assets/external/widget.js";
      calendlyScript.async = true;

      calendlyScript.onload = () => {
        isScriptLoaded = true;
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/meet-manoj-cognimuse/consultation",
            parentElement: document.getElementById("calendly-container"),
            prefill: {},
            styles: {
              height: "100%",
              minHeight: "700px",
              overflow: "auto",
            },
          });
        }
      };

      document.body.appendChild(calendlyScript);
    };

    const cleanupCalendly = () => {
      if (calendlyScript) {
        document.body.removeChild(calendlyScript);
      }

      const widgetElement = document.getElementById("calendly-container");
      if (widgetElement) {
        widgetElement.innerHTML = "";
      }

      document.querySelectorAll("[data-calendly]").forEach((element) => element.remove());
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      loadCalendlyScript();
    } else {
      document.body.style.overflow = "auto";
      cleanupCalendly();
    }

    return () => {
      document.body.style.overflow = "auto";
      cleanupCalendly();
    };
  }, [isOpen]);

  return isOpen ? (
    <div className="fixed inset-0 z-[9999] p-2 w-full flex items-center justify-center backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-center h-screen overflow-x-hidden"
      >
        <button
          onClick={onClose}
          className="text-2xl absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors font-bold"
          aria-label="Close calendar"
        >
           ✖
        </button>
        <div>
          <div
            id="calendly-container"
            className="flex-1 w-screen"
            style={{ minHeight: "700px", height: "100%" }}
          />
        </div>
      </motion.div>
    </div>
  ) : null;
};

export default CalendlyModal;
