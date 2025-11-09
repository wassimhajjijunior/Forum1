// Sponsors.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "/sponsor/packs/blueDiaman.png";
import SponsorLogo from "/sponsor/sponsors/SAGEMCOM.png";

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    height: isMobile ? "400px" : "100vh", // bigger on desktop
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const backgroundStyle = {
    position: "absolute",
    top: isMobile ? 90 : 160,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: isMobile ? "95%" : "40%", // slightly bigger on desktop
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.6,
    zIndex: 1,
    filter: "blur(1px)",
    transition: "background-size 0.3s ease",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const podiumStyle = (color) => ({
    width: isMobile ? "180px" : "400px", // slightly bigger on desktop
    height: isMobile ? "50px" : "100px",
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
    width: isMobile ? "160px" : "340px", // slightly bigger on desktop
    height: "auto",
    marginBottom: "10px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <motion.div
        style={backgroundStyle}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div style={contentStyle}>
        <div style={podiumStyle("rgba(255,255,255,0.5)")}>
          {/* ✅ Clickable sponsor image */}
          <a
            href="https://sagemcom.com/fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={SponsorLogo}
              alt="Sagemcom"
              style={logoStyle}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
            />
          </a>

          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "8px",
              backgroundColor: "rgba(0,191,255,0.8)",
              borderRadius: "4px 4px 0 0",
            }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
