// Sponsors4.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Sponsors4 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = "/sponsor/packs/silver.png";

  // ✅ Added website URLs for each sponsor
  const sponsors = [
    { src: "/sponsor/sponsors/minotore.png", delay: 0, url: "https://www.minotore.com/" },
    { src: "/sponsor/sponsors/Sofrecom.png", delay: 0.5, url: "https://www.sofrecom.com/" },
    { src: "/sponsor/sponsors/3S.png", delay: 1, url: "https://www.3s.com.tn/" },
    { src: "/sponsor/sponsors/amaris.png", delay: 1.5, url: "https://amaris.com/" },
    { src: "/sponsor/sponsors/EY.png", delay: 2, url: "https://www.ey.com/fr_ca/locations/tunisia" },
  ];

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
    height: isMobile ? "30px" : "60px",
    background: `linear-gradient(to top, ${color}, #fff0)`,
    borderRadius: "10px 10px 0 0",
    boxShadow: `0 6px 20px ${color}55`,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backdropFilter: "blur(2px)",
  });

  const logoStyle = {
    width: isMobile ? "70px" : "90px",
    height: "auto",
    marginBottom: isMobile ? "15px" : "20px",
    cursor: "pointer", // ✅ Cursor for clickable logo
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
        // 🖥️ Desktop layout: 3 on top, 2 on bottom
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
          <div style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
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
                  onClick={() => window.open(s.url, "_blank")} // ✅ Open sponsor link
                />
                {podiumGlow(s.delay)}
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div style={{ display: "flex", justifyContent: "center", gap: "120px" }}>
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
                  onClick={() => window.open(s.url, "_blank")}
                />
                {podiumGlow(s.delay)}
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 📱 Mobile layout: 2 on top, 1 center, 2 bottom
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
                  onClick={() => window.open(s.url, "_blank")}
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
                onClick={() => window.open(sponsors[2].url, "_blank")}
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
                  onClick={() => window.open(s.url, "_blank")}
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
