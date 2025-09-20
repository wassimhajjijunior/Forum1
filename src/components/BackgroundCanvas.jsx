import React from 'react';
import { Canvas } from '@react-three/fiber';
import Triangles from './Triangles';
import CameraController from './CameraController ';
import Starfield from './Starfield';


const BackgroundCanvas = ({ currentSection, setCurrentSection }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'black' }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.5} />
        
        {/* Starfield background */}
        <Starfield />
        
        {/* Camera controller */}
        <CameraController onSectionChange={setCurrentSection} />
        
        {/* Your Triangles component in the center */}
        <Triangles />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;