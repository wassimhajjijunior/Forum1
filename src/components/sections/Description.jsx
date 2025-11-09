import React from "react";
import { motion } from "framer-motion";
import aiLogo from "/icons/AI icon@2x.png";
import securityLogo from "/icons/sec icon@2x.png";
import iotLogo from "/icons/cloud.png";

const Description = () => {
  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white px-4">
      {/* Triangle container (background) */}
      <div className="absolute w-[300px] sm:w-[280px] aspect-[1/1]">
        {/* Triangle background */}
        <div className="absolute inset-0  backdrop-blur-md clip-triangle"></div>

        {/* Icons at triangle corners */}
        <motion.img
          src={aiLogo}
          alt="AI"
          className="absolute w-8 h-8 top-2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={floatAnimation.animate}
        />
        <motion.img
          src={iotLogo}
          alt="IoT"
          className="absolute w-8 h-8 bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
          animate={floatAnimation.animate}
        />
        <motion.img
          src={securityLogo}
          alt="Security"
          className="absolute w-8 h-8 bottom-0 right-0 translate-x-1/2 translate-y-1/2"
          animate={floatAnimation.animate}
        />
      </div>

      {/* Centered text (independent of triangle) */}
      <div className="relative max-w-sm text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">∆ELTA 6</h2>
        <p className="text-sm sm:text-base mb-2">
          Through the portal, Beyond this ∆imension
        </p>
        <p className="text-xs sm:text-sm text-white">
          Placée sous le signe de l’Industrie 6.0 – la nouvelle frontière de
          l’innovation industrielle, la thématique met en lumière la convergence
          entre intelligence artificielle industrielle, connectivité intelligente
          (IoT/IoE) et cybersécurité industrielle, trois piliers essentiels de
          la transformation des écosystèmes productifs.
        </p>
      </div>
    </div>
  );
};

export default Description;
