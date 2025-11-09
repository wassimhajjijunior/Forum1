// Sponsors3.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "/sponsor/packs/gold.png";
import Sponsor4 from "/sponsor/sponsors/Pwc.png";
import  Sponsor2 from "/sponsor/sponsors/SIEMENS.png";
import Sponsor3 from "/sponsor/sponsors/Pearlss.png";
import Sponsor1 from "/sponsor/sponsors/somef.jpg";

const Sponsors3 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    height: isMobile ? "370px" : "420px",
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
    left: 2,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: isMobile ? "85%" : "35%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
    filter: "blur(1px)",
  };

  const podiumStyle = (color) => ({
    width: isMobile ? "90px" : "160px",
    height: isMobile ? "30px" : "55px",
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
    width: isMobile ? "70px" : "140px",
    height: "auto",
    marginBottom: isMobile ? "10px" : "10px",
  };

  // Positions for square layout
  const rowTop = isMobile ? "270px" : "330px";
  const rowBottom = isMobile ? "170px" : "190px";
  const leftOffset = isMobile ? "27%" : "30%";
  const rightOffset = isMobile ? "73%" : "70%";

  return (
    <div style={containerStyle}>
      {/* Background */}
      <motion.div
        style={backgroundStyle}
        initial={{ opacity: 0.9 }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sponsors layout (square) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: isMobile ? "400px" : "600px",
          height: "100%",
        }}
      >
        {/* Top Left Sponsor */}
        <div
          style={{
            position: "absolute",
            top: rowTop,
            left: leftOffset,
            transform: "translateX(-50%)",
          }}
        >
          <div style={podiumStyle("rgba(255, 215, 0, 0.3)")}>
            <motion.img
              src={Sponsor1}
              alt="Sponsor 1"
              style={{...logoStyle,
               width: "60px",
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
                height: "8px",
                backgroundColor: "rgba(255, 215, 0, 0.6)",
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

        {/* Top Right Sponsor */}
        <div
          style={{
            position: "absolute",
            top: rowTop,
            left: rightOffset,
            transform: "translateX(-50%)",
          }}
        >
          <div style={podiumStyle("rgba(255, 215, 0, 0.3)")}>
            <motion.img
              src={Sponsor2}
              alt="Sponsor 2"
              style={{...logoStyle,
                marginBottom: isMobile ? "10px" : "15px"
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "8px",
                backgroundColor: "rgba(255, 215, 0, 0.6)",
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

        {/* Bottom Left Sponsor */}
        <div
          style={{
            position: "absolute",
            top: rowBottom,
            left: leftOffset,
            transform: "translateX(-50%)",
          }}
        >
          <div style={podiumStyle("rgba(255, 215, 0, 0.3)")}>
            <motion.img
              src={Sponsor3}
              alt="Sponsor 3"
              style={{...logoStyle,
                width: isMobile ? "100px" : "250px",
                marginBottom: isMobile ? "10px" : "0px"
              }}
              animate={{ y: [5, -5, 5] }}
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
                backgroundColor: "rgba(255, 215, 0, 0.6)",
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

        {/* Bottom Right Sponsor */}
        <div
          style={{
            position: "absolute",
            top: rowBottom,
            left: rightOffset,
            transform: "translateX(-50%)",
          }}
        >
          <div style={podiumStyle("rgba(255, 215, 0, 0.3)")}>
            <motion.img
              src={Sponsor4}
              alt="Sponsor 4"
              style={{...logoStyle,
                width: "100px",
                marginBottom: isMobile ? "0px" : "-5px"
              }}
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "8px",
                backgroundColor: "rgba(255, 215, 0, 0.6)",
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
    </div>
  );
};

export default Sponsors3;
