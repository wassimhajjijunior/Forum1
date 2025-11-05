// Sponsors.jsx
import React from "react";
import { motion } from "framer-motion";

import backgroundImage from "../../assets/sponsor/packs/redDiamand.png";
import SponsorLogo1 from "../../assets/speakers/me.jpg";
import SponsorLogo2 from "../../assets/speakers/me.jpg";

const Sponsors = () => {
  const containerStyle = {
    height: "400px",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "column",
    background: "radial-gradient(circle at center, #0b0b0b 0%, #000 100%)",
  };

  const backgroundStyle = {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.15,
    filter: "blur(1px)",
    zIndex: 1,
  };

  const sponsorsContainer = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    gap: "80px",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid rgba(255,255,255,0.9)",
  };

  return (
    <div style={containerStyle}>
      {/* Smooth glowing animated background */}
      <motion.div
        style={backgroundStyle}
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <h2
        style={{
          color: "white",
          fontSize: "1.8rem",
          marginBottom: "40px",
          fontWeight: "500",
          letterSpacing: "1px",
          zIndex: 2,
        }}
      >
        Our Sponsors
      </h2>

      <div style={sponsorsContainer}>
        {[SponsorLogo1, SponsorLogo2].map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 0 25px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              style={imageStyle}
              animate={{
                y: [0, -5, 0],
                boxShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 10px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1.5,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
