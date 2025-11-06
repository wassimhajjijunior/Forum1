// Sponsors2.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/sponsor/packs/green.png";
import Sponsor1 from "../../assets/sponsor/sponsors/Decade.png";
import Sponsor2 from "../../assets/sponsor/sponsors/FORVIA.png";

const Sponsors2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update layout automatically when resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    height: isMobile ? "380px" : "500px",
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
    backgroundSize: isMobile ? "70%" : "35%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "blur(1px)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: isMobile ? "35px" : "80px",
    transform: isMobile ? "translateY(10px)" : "translateY(20px)",
  };

  const podiumStyle = (color) => ({
    width: isMobile ? "100px" : "110px",
    height: isMobile ? "40px" : "50px",
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
    width: isMobile ? "100px" : "100px",
    height: "auto",
    marginBottom: isMobile ? "15px" : "20px",
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
        {/* Sponsor 1 Podium */}
        <div style={podiumStyle("rgba(63, 195, 128, 0.6)")}>
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
              backgroundColor: "rgba(63, 195, 128, 0.8)",
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
        <div style={podiumStyle("rgba(63, 195, 128, 0.6)")}>
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
              backgroundColor: "rgba(63, 195, 128, 0.8)",
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

export default Sponsors2;
