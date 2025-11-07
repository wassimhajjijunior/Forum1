// Sponsors1.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/sponsor/packs/redDiamand.png";
import Sponsor2 from "../../assets/sponsor/sponsors/tt.png";
import Sponsor3 from "../../assets/sponsor/sponsors/Orange.png";
import Sponsor1 from "../../assets/sponsor/sponsors/Ooredooo.png"; 

const Sponsors1 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    backgroundSize: isMobile ? "70%" : "50%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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
    gap: isMobile ? "15px" : "80px",
    transform: "translateY(20px)",
    transition: "gap 0.3s ease",
  };

  const podiumStyle = (color) => ({
    width: isMobile ? "80px" : "110px",
    height: isMobile ? "40px" : "50px",
    background: `linear-gradient(to top, ${color}, #fff0)`,
    borderRadius: "10px 10px 0 0",
    boxShadow: `0 6px 20px ${color}55`,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    transition: "width 0.3s ease, height 0.3s ease",
  });

  const logoStyle = {
    width: isMobile ? "70px" : "90px",
    height: "auto",
    marginBottom: "15px",
    transition: "width 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      {/* Soft animated background */}
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
        {/* Sponsor 1 */}
        <div style={podiumStyle("rgba(204,22,47,0.3)")}>
          <motion.img
            src={Sponsor1}
            alt="Sponsor 1"
            style={{...logoStyle,
              width: isMobile ? "85px" : "110px",
              marginBottom: "5px",
            }}
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
              height: "6px",
              backgroundColor: "rgba(210,25,0,0.4)",
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

        {/* Sponsor 2 */}
        <div style={podiumStyle("rgba(204,22,47,0.3)")}>
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
              height: "6px",
              backgroundColor: "rgba(210,25,0,0.4)",
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

        {/* 🆕 Sponsor 3 */}
        <div style={podiumStyle("rgba(204,22,47,0.3)")}>
          <motion.img
            src={Sponsor3}
            alt="Sponsor 3"
            style={{...logoStyle,
              width: isMobile ? "50px" : "60px",
              marginBottom: "20px",
            }}
            animate={{ y: [10, -5, 10] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "6px",
              backgroundColor: "rgba(210,25,0,0.4)",
              borderRadius: "4px 4px 0 0",
            }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors1;
