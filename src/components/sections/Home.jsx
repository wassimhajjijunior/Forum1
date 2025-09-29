import React from "react";
import logo from "../../assets/logo3.png";

const Home = () => {
  // animationStep: 0 = initial, 1 = zooming into logo, 2 = settled

  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        height: "100%",
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}>
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "300px",
          aspectRatio: "1.4",
          objectFit: "contain",
          marginBottom: "1rem",
          transition: "transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />

      <h3
        style={{
          fontSize: "1.8rem",
          lineHeight: 1,
          opacity: 0.7,
          textShadow: "0 0 20px rgba(255,255,255,0.3)",
          transition: "transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}>
        X-Ops Space Forum
      </h3>

      <h5
        style={{
          fontSize: "1.2rem",
          maxWidth: "700px",
          lineHeight: 1,
          opacity: 0.85,
          textShadow: "0 0 20px rgba(255,255,255,0.3)",
          transition: "transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}>
        Exploring ML, Development and Security Galaxies
      </h5>

      <h3
        style={{
          fontSize: "2rem",
          textShadow: "0 0 20px rgba(255,255,255,0.3)",
          transition: "transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}>
        0D 0H 0M 0S
      </h3>
    </div>
  );
};

export default Home;
