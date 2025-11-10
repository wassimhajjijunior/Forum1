import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WhorkshopImage1 from "/speakers/workshop/amel sellami.png";
import WhorkshopImage2 from "/speakers/workshop/Mohamed.jpg";

const speakers = [
  {
    id: 1,
    name: "Amel Sellami",
    role: "Google Developer Expert in Machine Learning - ML Research Engineer & Team Lead at InstaDeep",
    image: WhorkshopImage1,
    workshop: "How to Build a Multi-Agent App with ADK and Gemini",
  },
  {
    id: 2,
    name: "Mohamed Ould-ElHassen Aoueileyine",
    role: "Dr. Eng. | IoT, AI & Industry 4.0 Expert",
    image: WhorkshopImage2,
    workshop:
      "Predictive Maintenance for Industry 4.0: From Data Collection to Deployment",
  },
];

const Workshops = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4">
      {/* Speakers Container with smaller gap */}
      <div className="flex w-full max-w-4xl justify-center items-center gap-16">
        {speakers.map((speaker, idx) => (
          <SpeakerCard key={speaker.id} speaker={speaker} isMobile={isMobile} index={idx} />
        ))}
      </div>

      <motion.h2
        className={`mt-10 ${isMobile ? "text-2xl" : "text-4xl"} font-hazmat-regular text-white`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Workshops
      </motion.h2>
    </section>
  );
};

const SpeakerCard = ({ speaker, isMobile, index }) => {
  const [hovered, setHovered] = useState(false);

  // Float animation
  const floatVariants = {
    float: {
      y: ["0%", "5%", "0%"],
      transition: {
        duration: 3 + index,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={floatVariants}
      animate="float"
    >
      {/* Workshop text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-2 max-w-[250px]"
      >
        <h3
          className={`${
            isMobile ? "text-sm" : "text-base"
          } font-mistrully text-yellow-900 tracking-wide`}
        >
          Workshop
        </h3>
        <p
          className={`${
            isMobile ? "text-[8px]" : "text-[12px]"
          } text-gray-300 font-hazmat-regular`}
        >
          {speaker.workshop}
        </p>
      </motion.div>

      {/* Speaker Image - bigger size */}
      <div
        className={`${
          isMobile ? "w-24 h-24" : "w-36 h-36"
        } rounded-full overflow-hidden border-4 border-sky-900 shadow-2xl transition-transform hover:scale-105`}
      >
        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
      </div>

      {/* Name & Role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mt-3 max-w-[250px]"
      >
        <h3 className={`${isMobile ? "text-sm" : "text-lg"} font-hazmat-regular text-white`}>
          {speaker.name}
        </h3>
        <p className={`${isMobile ? "text-[7px]" : "text-[12px]"} text-gray-300 font-mistrully`}>
          {speaker.role}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Workshops;
