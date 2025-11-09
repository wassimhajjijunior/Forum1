// Sponsors1.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Sponsors1 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Use public paths and add sponsor URLs
  const backgroundImage = "/sponsor/packs/redDiamand.png";
  const sponsors = [
    {
      src: "/sponsor/sponsors/Ooredooo.png",
      delay: 0,
      width: isMobile ? "85px" : "110px",
      marginBottom: "5px",
      url: "https://www.ooredoo.tn/",
    },
    {
      src: "/sponsor/sponsors/tt.png",
      delay: 1,
      width: isMobile ? "70px" : "90px",
      marginBottom: "15px",
      url: "https://www.tunisietelecom.tn/",
    },
    {
      src: "/sponsor/sponsors/Orange.png",
      delay: 2,
      width: isMobile ? "50px" : "60px",
      marginBottom: "20px",
      url: "https://www.orange.tn/",
    },
  ];

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
    backdropFilter: "blur(2px)",
  });

  const logoStyle = {
    height: "auto",
    transition: "width 0.3s ease",
    cursor: "pointer",
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
        {sponsors.map((s, index) => (
          <div key={index} style={podiumStyle("rgba(204,22,47,0.3)")}>
            {/* ✅ Clickable sponsor */}
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={s.src}
                alt={`Sponsor ${index + 1}`}
                style={{
                  ...logoStyle,
                  width: s.width,
                  marginBottom: s.marginBottom,
                }}
                animate={{
                  y: [
                    index === 0 ? 0 : -5,
                    index === 0 ? -10 : 5,
                    index === 0 ? 0 : -5,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: s.delay,
                }}
                whileHover={{ scale: 1.1 }}
              />
            </a>

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
                delay: s.delay,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors1;
