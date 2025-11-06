// Sponsors.jsx
import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/sponsor/packs/blueDiaman.png";
import SponsorLogo from "../../assets/sponsor/sponsors/Cognira.png";

const Sponsors = () => {
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
    top: 85,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "50%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.6,
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };

  // ✅ podium style from your Sponsors1
  const podiumStyle = (color) => ({
    width: "270px",
    height: "60px",
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
    width: "250px",
    height: "auto",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      {/* Animated background */}
      <motion.div
        style={backgroundStyle}
        animate={{ opacity: [0.6, 0.7, 0.6] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div style={contentStyle}>
        {/* Single sponsor with podium */}
        <div style={podiumStyle("rgba(0,191,255,0.5)")}>
          {/* Floating logo */}
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

          {/* Glowing base bar */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "8px",
              backgroundColor: "rgba(0,191,255,0.7)",
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
