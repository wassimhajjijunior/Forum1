// Sponsors.jsx
import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/sponsor/packs/blueDiaman.png";
import SponsorLogo from "../../assets/sponsor/sponsors/Cognira.png";

const Sponsors = () => {
  const containerStyle = {
    height: "400px",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  // Background style (you can adjust "backgroundSize" to change image size)
  const backgroundStyle = {
    position: "absolute",
    top: 80,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "50%", // <-- smaller image (try values: "50%", "70%", "100%", "cover")
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.5,
    zIndex: 1,
    filter: "blur(1px)",
  };

  const imageStyle = {
    width: "200px", // logo size
    height: "auto",
    objectFit: "contain",
    zIndex: 2,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      {/* Animated background */}
      <motion.div
        style={backgroundStyle}
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Centered floating logo (not circular) */}
      <motion.div
        style={contentStyle}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <motion.img
          src={SponsorLogo}
          alt="Featured Sponsor Logo"
          style={imageStyle}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Sponsors;
