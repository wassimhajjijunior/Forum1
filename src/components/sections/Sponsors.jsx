// Sponsors.jsx
import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "/sponsor/packs/blueDiaman.png";
import SponsorLogo from "/sponsor/sponsors/SAGEMCOM.png";

const Sponsors = () => {
  // Desktop-only styles (ignore mobile)
  const containerStyle = {
    height: "500px",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 90,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "50%", // desktop size only
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
    width: "220px",
    height: "60px",
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
    width: "200px",
    height: "auto",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      {/* Animated background */}
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
          <motion.img
            src={SponsorLogo}
            alt="Sponsor Logo"
            style={logoStyle}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
          />

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
