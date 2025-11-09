import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const speakers = [
  {
    id: 1,
    name: "Speaker One",
    role: "AI Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Speaker Two",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Wassim Hajji",
    role: "A passionate developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Speaker Four",
    role: "Cloud Architect",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop",
  },
];

const SpeakerCard = ({ speaker, isHovered, onHoverStart, onHoverEnd, isMobile }) => (
  <div className="flex flex-col items-center">
    {/* Top text */}
    <motion.div
      className="text-center mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className={`${isMobile ? "text-sm" : "text-lg"} font-mistrully text-white tracking-wide`}>
        Keynote
      </h3>
      <p className={`${isMobile ? "text-[6px]" : "text-[9px]"} text-gray-300 font-hazmat-regular`}>
        catch up with train of technology
      </p>
    </motion.div>

    {/* Circle Image */}
    <div
      className={`${isMobile ? "w-20 h-20" : "w-32 h-32"} rounded-full overflow-hidden border-3 border-sky-900 shadow-2xl transition-transform hover:scale-105`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
    </div>

    {/* Bottom text */}
    <motion.div
      className="text-center mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className={`${isMobile ? "text-sm" : "text-xl"} font-hazmat-regular text-white`}>
        {speaker.name}
      </h3>
      <p className={`${isMobile ? "text-[7px]" : "text-[12px]"} text-gray-300 font-mistrully`}>
        {speaker.role}
      </p>
    </motion.div>
  </div>
);

const TableSquare = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseFloat = {
    y: [0, 10, 0],
    transition: {
      y: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Grid container */}
      <div
        className={`relative grid ${isMobile ? "grid-cols-2 gap-6" : "grid-cols-2 gap-16"}`}
        style={{ marginTop: "50px" }}
      >
        {/* Center title */}
        <motion.h2
          className="absolute inset-0 flex items-center justify-center text-2xl font-hazmat-regular text-white pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Round Table
        </motion.h2>

        {speakers.map((speaker, idx) => (
          <motion.div
            key={speaker.id}
            animate={{
              y: baseFloat.y,
              transition: {
                ...baseFloat.transition,
                y: {
                  ...baseFloat.transition.y,
                  delay: idx * 0.5,
                },
              },
            }}
          >
            <SpeakerCard
              speaker={speaker}
              isHovered={hoveredId === speaker.id}
              onHoverStart={() => setHoveredId(speaker.id)}
              onHoverEnd={() => setHoveredId(null)}
              isMobile={isMobile}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TableSquare;
