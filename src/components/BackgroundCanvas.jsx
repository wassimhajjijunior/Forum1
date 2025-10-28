// src/components/BackgroundCanvas.jsx
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";
import Triangles from "./Triangles";
import TriangleTunnel from "./Tunnel";
import HomeMesh from "./HomeMesh";
import MovingStars from "./MovingStars";

const BackgroundCanvas = ({
  currentSection,
  setCurrentSection,
  targetSection,
  clearGoToSection,
}) => {
  const [showScene, setShowScene] = useState(false); // renamed from showTunnel

  useEffect(() => {
    let timer;
    if (currentSection >= 1) {
      // Wait 0.4s after passing the logo before showing both
      timer = setTimeout(() => setShowScene(true), 400);
    } else {
      setShowScene(false); // hide immediately when back to home
    }
    return () => clearTimeout(timer);
  }, [currentSection]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}>
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75 }}
        style={{ background: "radial-gradient(rgb(50,90,120),rgb(2,5,30))" }}>
        {/* Ambient light */}
        <ambientLight intensity={0.5} />

        {/* Stars background */}
        {/* <Stars radius={500} depth={50} count={5000} /> */}
        <MovingStars count={500} radius={10} speed={8} length={50} />

        {/* Camera controller */}
        <CameraController
          onSectionChange={setCurrentSection}
          goToSection={targetSection}
          clearGoToSection={clearGoToSection}
        />

        {/* Landing page content */}
        <HomeMesh  />

        {/* Triangles + Tunnel show together after delay */}
        <Triangles visible={showScene} />
        <TriangleTunnel
          segments={60}
          spacing={2}
          width={4}
          height={4}
          visible={showScene}
        />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
