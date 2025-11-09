// src/components/Speakers.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import WhorkshopImage1 from "/speakers/keynote/Sami.jpg";
import WhorkshopImage2 from "/speakers/keynote/M.Aymen.jpg";
import WhorkshopImage3 from "/speakers/me.jpg";

const speakers = [
  {
    id: 1,
    name: "M.Sami Haboubi",
    role: "Senior Manager at Deloitte | Risk Advisory & Consulting | Cyber Risk",
    image: WhorkshopImage1,
    keynote: "Cybersecurity meets AI and Gen AI",
  },
  {
    id: 2,
    name: "M.Aymen Ghadghadi",
    role: "CEO Navinspire IA",
    image: WhorkshopImage2,
    keynote: "IA Agentique & Générale : comprendre, implémenter, transformer",
  },
  {
    id: 3,
    name: "Wassim Hajji",
    role: "A passionate developer",
    image: WhorkshopImage1,
    keynote: "catch up with train of technology",
  },
];

const radius = 85;

const triangleVertices = [
  { x: 0, y: -radius },      // top
  { x: -radius, y: radius }, // bottom-left
  { x: radius, y: radius },  // bottom-right
];

const cardPaths = [
  [triangleVertices[0], triangleVertices[1], triangleVertices[2]],
  [triangleVertices[0], triangleVertices[1], triangleVertices[2]],
  [triangleVertices[0], triangleVertices[1], triangleVertices[2]],
];

const getPositionOnPath = (path, t) => {
  const totalSegments = path.length;
  const segmentIndex = Math.floor(t % totalSegments);
  const nextIndex = (segmentIndex + 1) % totalSegments;
  const localT = t % 1;
  const p1 = path[segmentIndex];
  const p2 = path[nextIndex];
  return {
    x: p1.x + (p2.x - p1.x) * localT,
    y: p1.y + (p2.y - p1.y) * localT,
  };
};

const Speakers = () => {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState(null); // Track which card is hovered
  const requestRef = useRef();

  const speed = 0.004; // slower movement

  const animate = () => {
    if (!paused) setTime((prev) => prev + speed);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [paused]);

  const handleHoverStart = (id) => {
    setPaused(true);
    setHoveredId(id);
  };
  const handleHoverEnd = () => {
    setPaused(false);
    setHoveredId(null);
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center">
      <div className="relative w-[300px] h-[250px] flex items-center justify-center"
      style={{ marginTop: "50px" }}>
        {speakers.map((speaker, idx) => {
          const t = time + (idx / speakers.length) * cardPaths[idx].length;
          const pos = getPositionOnPath(cardPaths[idx], t);

          return (
            <motion.div
              key={speaker.id}
              className="absolute flex flex-col items-center"
              style={{ x: pos.x, y: pos.y }}
            >
              <SpeakerCard
                speaker={speaker}
                isHovered={hoveredId === speaker.id} // only this card shows text
                onHoverStart={() => handleHoverStart(speaker.id)}
                onHoverEnd={handleHoverEnd}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Title at the bottom */}
      <motion.h2
        className="mt-10 text-2xl font-hazmat-regular text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Keynote
      </motion.h2>
    </section>
  );
};

const SpeakerCard = ({ speaker, isHovered, onHoverStart, onHoverEnd }) => (
  <div className="flex flex-col items-center">
    {/* Top text */}
    <motion.div
      className="text-center mb-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-[12px] font-mistrully text-yellow-900 tracking-wide ">Keynote</h3>
      <p className="text-[5px] text-gray-300 font-hazmat-regular w-40">{speaker.keynote}</p>
    </motion.div>

    {/* Circle Image */}
    <div
      className="w-20 h-20  rounded-full overflow-hidden border-3 border-sky-900 shadow-2xl transition-transform hover:scale-105"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
    </div>

    {/* Bottom text */}
    <motion.div
      className="text-center mt-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-[9px] font-hazmat-regular text-white mb-1">{speaker.name}</h3>
      <p className="text-[8px] text-gray-300 font-mistrully w-50">{speaker.role}</p>
    </motion.div>
  </div>
);

export default Speakers;
