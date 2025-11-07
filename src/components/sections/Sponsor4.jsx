// Sponsors4.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/sponsor/packs/silver.png";

// Example sponsors
import Sponsor5 from "../../assets/sponsor/sponsors/EY.png";
import Sponsor3 from "../../assets/sponsor/sponsors/Sofrecom.png";
import Sponsor1 from "../../assets/sponsor/sponsors/Minotore.png";
import Sponsor4 from "../../assets/sponsor/sponsors/amaris.png";
import Sponsor2 from "../../assets/sponsor/sponsors/3s.png";

const Sponsors4 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    height: isMobile ? "420px" : "500px",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 20,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: isMobile ? "85%" : "38%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "blur(1px)",
    zIndex: 1,
  };

  const podiumStyle = (color) => ({
    width: isMobile ? "80px" : "110px",
    height: isMobile ? "30px" : "50px",
    background: `linear-gradient(to top, ${color}, #fff0)`,
    borderRadius: "10px 10px 0 0",
    boxShadow: `0 6px 20px ${color}55`,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  });

  const logoStyle = {
    width: isMobile ? "70px" : "90px",
    height: "auto",
    marginBottom: isMobile ? "15px" : "20px",
  };

  const podiumGlow = (delay = 0) => (
    <motion.div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "6px",
        backgroundColor: "rgba(192, 192, 192, 0.8)",
        borderRadius: "4px 4px 0 0",
      }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );

  const sponsors = [
    { src: Sponsor1, delay: 0 },
    { src: Sponsor2, delay: 0.5 },
    { src: Sponsor3, delay: 1 },
    { src: Sponsor4, delay: 1.5 },
    { src: Sponsor5, delay: 2 },
  ];

  return (
    <div style={containerStyle}>
      {/* Animated background */}
      <motion.div
        style={backgroundStyle}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sponsors Layout */}
      {!isMobile ? (
        // Desktop layout: 3 on top, 2 on bottom
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "70px",
            transform: "translateY(50px)",
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "100px",
            }}
          >
            {sponsors.slice(0, 3).map((s, index) => (
              <div key={index} style={podiumStyle("rgba(192, 192, 192, 0.3)")}>
                <motion.img
                  src={s.src}
                  alt={`Sponsor ${index + 1}`}
                  style={logoStyle}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: s.delay,
                  }}
                  whileHover={{ scale: 1.1 }}
                />
                {podiumGlow(s.delay)}
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "120px",
            }}
          >
            {sponsors.slice(3, 5).map((s, index) => (
              <div key={index + 3} style={podiumStyle("rgba(192, 192, 192, 0.6)")}>
                <motion.img
                  src={s.src}
                  alt={`Sponsor ${index + 4}`}
                  style={logoStyle}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: s.delay,
                  }}
                  whileHover={{ scale: 1.1 }}
                />
                {podiumGlow(s.delay)}
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Mobile layout: 2 on top, 1 in center, 2 on bottom
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
            transform: "translateY(30px)",
          }}
        >
          {/* Top row */}
          <div style={{ display: "flex", gap: "40px" }}>
            {sponsors.slice(0, 2).map((s, index) => (
              <div key={index} style={podiumStyle("rgba(192, 192, 192, 0.6)")}>
                <motion.img
                  src={s.src}
                  alt={`Sponsor ${index + 1}`}
                  style={logoStyle}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: s.delay,
                  }}
                />
                {podiumGlow(s.delay)}
              </div>
            ))}
          </div>

          {/* Center sponsor */}
          <div>
            <div style={podiumStyle("rgba(192, 192, 192, 0.6)")}>
              <motion.img
                src={sponsors[2].src}
                alt="Sponsor 3"
                style={logoStyle}
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: sponsors[2].delay,
                }}
              />
              {podiumGlow(sponsors[2].delay)}
            </div>
          </div>

          {/* Bottom row */}
          <div style={{ display: "flex", gap: "40px" }}>
            {sponsors.slice(3, 5).map((s, index) => (
              <div key={index + 3} style={podiumStyle("rgba(192, 192, 192, 0.6)")}>
                <motion.img
                  src={s.src}
                  alt={`Sponsor ${index + 4}`}
                  style={logoStyle}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: s.delay,
                  }}
                />
                {podiumGlow(s.delay)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsors4;
