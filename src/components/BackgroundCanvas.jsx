// src/components/BackgroundCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController ";
import Starfield from "./Starfield";
import Triangles from "./Triangles";
import TriangleTunnel from "./Tunnel";

const BackgroundCanvas = ({ currentSection, setCurrentSection }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'black' }}
      >
        {/* Ambient light */}
        <ambientLight intensity={0.5} />

        {/* Starfield background */}
        {/* <Starfield /> */}

        {/* Camera controller for scroll/section changes */}
        <CameraController onSectionChange={setCurrentSection} />

        {/* Triangle tunnel */}
        <Triangles />
        <TriangleTunnel segments={60} spacing={2} width={4} height={4} />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
