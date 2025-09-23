// src/components/sections/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        textAlign: "center",
        width: "100%",
        height: "100%",
        padding: "2rem",
        boxSizing: "border-box",
        perspective: "1200px", // enable 3D perspective
      }}
    >
      {/* Top text (farther away) */}
      <h3
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          lineHeight: 1.2,
          transform: "translateZ(-40px) rotateX(18deg)",
          opacity: 0.7,
          textShadow: "0 0 15px rgba(255,255,255,0.2)",
        }}
      >
        X-Ops Space Forum
      </h3>

      {/* Middle text */}
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          marginBottom: "2rem",
          lineHeight: 1.4,
          transform: "translateZ(-20px) rotateX(15deg)",
          opacity: 0.85,
        }}
      >
        Exploring ML, Development and Security Galaxies
      </p>

      {/* Bottom text (closest) */}
      <h3
        style={{
          fontSize: "2.8rem",
          marginTop: "0",
          transform: "translateZ(20px) rotateX(12deg)",
          textShadow: "0 0 20px rgba(255,255,255,0.3)",
        }}
      >
        0D 0H 0M 0S
      </h3>
    </div>
  );
};

export default Home;
