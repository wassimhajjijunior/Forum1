import React from "react";
import { motion } from "framer-motion";
import aiLogo from "../../assets/icons/AI icon@2x.png";
import securityLogo from "../../assets/icons/sec icon@2x.png";
import iotLogo from "../../assets/icons/cloud.png";

const Description = () => {
  const descriptions = {
    ai: {
      title: "Artificial Intelligence",
      text: "AI is transforming the way we solve problems — from automation to intelligent decision-making. It empowers systems to learn, adapt, and act with human-like reasoning.",
    },
    security: {
      title: "Cyber Security",
      text: "Security ensures data protection, privacy, and system integrity. It's crucial to build trust in connected and digital environments.",
    },
    iot: {
      title: "Internet of Things (IoT)",
      text: "IoT connects devices and sensors to collect and share data, enabling smarter cities, industries, and daily life through real-time connectivity.",
    },
  };

  // Floating animation variant
  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full h-screen text-white flex items-center justify-center overflow-hidden">
      {/* AI - Top Center */}
      <div className="absolute top-15 left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-[220px]">
        <motion.img
          src={aiLogo}
          alt="AI"
          className="w-14 h-14 mb-2"
          variants={floatAnimation}
          animate="animate"
        />
        <h3 className="text-base font-semibold mb-1">
          {descriptions.ai.title}
        </h3>
        <p className="text-xs text-white/80 leading-relaxed">
          {descriptions.ai.text}
        </p>
      </div>

      {/* IoT - Bottom Left */}
      <div className="absolute bottom-6 left-6 flex flex-col items-center text-center w-[220px]">
        <motion.img
          src={iotLogo}
          alt="IoT"
          className="w-14 h-14 mb-2"
          variants={floatAnimation}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <h3 className="text-base font-semibold mb-1">
          {descriptions.iot.title}
        </h3>
        <p className="text-xs text-white/80 leading-relaxed">
          {descriptions.iot.text}
        </p>
      </div>

      {/* Security - Bottom Right */}
      <div className="absolute bottom-6 right-6 flex flex-col items-center text-center w-[220px]">
        <motion.img
          src={securityLogo}
          alt="Security"
          className="w-14 h-14 mb-2"
          variants={floatAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <h3 className="text-base font-semibold mb-1">
          {descriptions.security.title}
        </h3>
        <p className="text-xs text-white/80 leading-relaxed">
          {descriptions.security.text}
        </p>
      </div>
    </div>
  );
};

export default Description;
