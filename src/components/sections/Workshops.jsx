import React, { useRef, useState, useEffect } from "react";
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
  {
    id: 3,
    name: "Wassim Hajji",
    role: "A passionate developer",
    image: WhorkshopImage2,
    workshop: "How to Build a Multi-Agent App with ADK and Gemini",
  },
];

const Workshops = () => {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef();

  // Responsive radius & container
  const [radius, setRadius] = useState(150);
  const [containerSize, setContainerSize] = useState({
    width: 500,
    height: 450,
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setRadius(mobile ? 90 : 150);
      setContainerSize(
        mobile ? { width: 250, height: 220 } : { width: 500, height: 450 }
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Triangle vertices and path
  const triangleVertices = [
    { x: 0, y: -radius },
    { x: -radius, y: radius },
    { x: radius, y: radius },
  ];

  const cardPaths = [triangleVertices, triangleVertices, triangleVertices];

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

  const speed = 0.004; // smooth speed

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
      <div
        className="relative flex items-center justify-center"
        style={{
          width: containerSize.width,
          height: containerSize.height,
          marginTop: "50px",
        }}>
        {speakers.map((speaker, idx) => {
          const t = time + (idx / speakers.length) * cardPaths[idx].length;
          const pos = getPositionOnPath(cardPaths[idx], t);

          return (
            <motion.div
              key={speaker.id}
              className="absolute flex flex-col items-center"
              style={{ x: pos.x, y: pos.y }}>
              <SpeakerCard
                speaker={speaker}
                isHovered={hoveredId === speaker.id}
                onHoverStart={() => handleHoverStart(speaker.id)}
                onHoverEnd={handleHoverEnd}
                isMobile={isMobile}
              />
            </motion.div>
          );
        })}
      </div>

      <motion.h2
        className={`mt-10 ${
          isMobile ? "text-2xl" : "text-4xl"
        } font-hazmat-regular text-white`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        Keynote
      </motion.h2>
    </section>
  );
};

const SpeakerCard = ({
  speaker,
  isHovered,
  onHoverStart,
  onHoverEnd,
  isMobile,
}) => (
  <div className="flex flex-col items-center">
    <motion.div
      className="text-center mb-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}>
      <h3
        className={`${
          isMobile ? "text-sm" : "text-base"
        } font-mistrully text-yellow-900 tracking-wide`}>
        Keynote
      </h3>
      <p
        className={`${
          isMobile ? "text-[8px]" : "text-[10px]"
        } text-gray-300 font-hazmat-regular w-56`}>
        {speaker.keynote}
      </p>
    </motion.div>

    <div
      className={`${
        isMobile ? "w-20 h-20" : "w-28 h-28"
      } sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-sky-900 shadow-2xl transition-transform hover:scale-105`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}>
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-full object-cover"
      />
    </div>

    <motion.div
      className="text-center mt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}>
      <h3
        className={`${
          isMobile ? "text-sm" : "text-lg"
        } font-hazmat-regular text-white mb-1`}>
        {speaker.name}
      </h3>
      <p
        className={`${
          isMobile ? "text-[7px]" : "text-[11px]"
        } sm:text-[12px] text-gray-300 font-mistrully w-60 text-center`}>
        {speaker.role}
      </p>
    </motion.div>
  </div>
);

export default Workshops;
