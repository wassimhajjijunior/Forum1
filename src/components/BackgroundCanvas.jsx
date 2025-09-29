// src/components/BackgroundCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController ";
import Triangles from "./Triangles";
import TriangleTunnel from "./Tunnel";
import {  Stars } from "@react-three/drei";
const BackgroundCanvas = ({ currentSection, setCurrentSection }) => {
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

        <Stars
          radius={500} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
        />

        {/* Camera controller for scroll/section changes */}
        <CameraController onSectionChange={setCurrentSection} />

        {/* Triangle tunnel */}
        <Triangles visible={currentSection >= 1} />
        <TriangleTunnel
          segments={60}
          spacing={2}
          width={4}
          height={4}
          visible={currentSection >= 1}
        />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
