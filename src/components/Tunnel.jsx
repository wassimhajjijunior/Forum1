// src/components/TriangleTunnel.jsx
import React from 'react';
import * as THREE from 'three';

const TriangleTunnel = ({ length = 50, width = 3, height = 3 }) => {
  return (
    <group>
      {/* Bottom wall */}
      <mesh position={[0, -height / 2, -length / 2]} rotation={[0, 0, 0]}>
        <boxGeometry args={[width * 2, 0.05, length]} />
        <meshStandardMaterial color="#ff5555" />
      </mesh>

      {/* Left wall */}
      <mesh position={[-width / 2, 0, -length / 2]} rotation={[0, 0, Math.PI / 3]}>
        <boxGeometry args={[width * 2, 0.05, length]} />
        <meshStandardMaterial color="#55ff55" />
      </mesh>

      {/* Right wall */}
      <mesh position={[width / 2, 0, -length / 2]} rotation={[0, 0, -Math.PI / 3]}>
        <boxGeometry args={[width * 2, 0.05, length]} />
        <meshStandardMaterial color="#5555ff" />
      </mesh>
    </group>
  );
};

export default TriangleTunnel;
