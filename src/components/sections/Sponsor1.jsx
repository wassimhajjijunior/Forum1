// Sponsors1.jsx
import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/sponsor/packs/redDiamand.png";
import Sponsor1 from "../../assets/sponsor/sponsors/tt.png";
import Sponsor2 from "../../assets/sponsor/sponsors/Orange.png";

const Sponsors1 = () => {
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
    top: 20,
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
    gap: "80px",
  };

  const podiumStyle = (color) => ({
    width: "120px",
    height: "50px",
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
    width: "100px",
    height: "auto",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      {/* Soft animated background */}
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
        {/* Sponsor 1 Podium */}
        <div style={podiumStyle("rgba(0,191,255,0.5)")}>
          <motion.img
            src={Sponsor1}
            alt="Sponsor 1"
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

        {/* Sponsor 2 Podium */}
        <div style={podiumStyle("rgba(255, 165, 0, 0.5)")}>
          <motion.img
            src={Sponsor2}
            alt="Sponsor 2"
            style={logoStyle}
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "8px",
              backgroundColor: "rgba(255, 165, 0, 0.7)",
              borderRadius: "4px 4px 0 0",
            }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors1;
