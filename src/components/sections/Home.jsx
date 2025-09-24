// src/components/sections/Home.jsx
import React from "react";
import logo from "./logo3.png";

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
        padding: "1rem",
        boxSizing: "border-box",
        perspective: "1200px",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "300px",          // controls the width
          aspectRatio: "1.4",      // keeps same ratio as triangle
          objectFit: "contain",    // keeps logo inside shape
          marginRight: "1rem",
          translate: "translateZ(-60px)",
        }}
      />

      <h3
        style={{
          fontSize: "1.8rem",
          marginBottom: "0.5rem",
          lineHeight: 1,
          transform: "translateZ(-40px) rotateX(60deg)",
          opacity: 0.7,
          textShadow: "0 0 20px rgba(255,255,255,0.3)",
        }}
      >
        X-Ops Space Forum
      </h3>

      <p
        style={{
          fontSize: "1rem",
          maxWidth: "600px",
          marginBottom: "0.5rem",
          lineHeight: 1,
          transform: "translateZ(-20px) rotateX(60deg)",
          opacity: 0.85,
        }}
      >
        Exploring ML, Development and Security Galaxies
      </p>

      <h3
        style={{
          fontSize: "2rem",
          transform: "translateZ(20px) rotateX(60deg)",
          textShadow: "0 0 20px rgba(255,255,255,0.3)",
        }}
      >
        0D 0H 0M 0S
      </h3>
    </div>
  );
};

export default Home;
