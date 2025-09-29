// src/components/BackgroundCanvas.jsx
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";
import Triangles from "./Triangles";
import TriangleTunnel from "./Tunnel";
import { Stars } from "@react-three/drei";
import HomeMesh from "./HomeMesh";

const BackgroundCanvas = ({ currentSection, setCurrentSection }) => {
  const [showTunnel, setShowTunnel] = useState(false);

  useEffect(() => {
    let timer;
    if (currentSection >= 1) {
      // Wait 1 second after passing the logo before showing tunnel
      timer = setTimeout(() => setShowTunnel(true), 400);
    } else {
      setShowTunnel(false); // hide tunnel immediately when back to home
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
        style={{ background: "black" }}>
        
        {/* Ambient light */}
        <ambientLight intensity={0.5} />

        {/* Stars background */}
        <Stars
          radius={500}
          depth={50}
          count={5000}
        />

        {/* Camera controller */}
        <CameraController onSectionChange={setCurrentSection} />

        {/* Landing page content */}
        <HomeMesh />

        {/* Triangles show immediately after leaving logo */}
        <Triangles visible={currentSection >= 1} />

        {/* Tunnel shows with a delay */}
        <TriangleTunnel
          segments={60}
          spacing={2}
          width={4}
          height={4}
          visible={showTunnel}
        />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
