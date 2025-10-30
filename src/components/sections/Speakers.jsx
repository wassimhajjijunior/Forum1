// src/components/Speakers.jsx
import React, { useRef, useState, useEffect } from "react";
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
];

const radius = 110;

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
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="relative w-[300px] h-[250px] flex items-center justify-center">
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
      <h3 className="text-[12px] font-mistrully text-white tracking-wide ">Keynote</h3>
      <p className="text-[7px] text-gray-300 font-hazmat-regular">catch up with train of technology</p>
    </motion.div>

    {/* Circle Image */}
    <div
      className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform hover:scale-105"
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
      <h3 className="text-[10px] font-hazmat-regular text-white mb-1">{speaker.name}</h3>
      <p className="text-xs text-gray-300 font-mistrully">{speaker.role}</p>
    </motion.div>
  </div>
);

export default Speakers;
