import React from 'react';
import * as THREE from 'three';

const TriangleTunnel = ({ segments = 50, width = 3, height = 3, depth = 5 }) => {
  const texture = new THREE.TextureLoader().load('./src/assets/textures/texture2.jpg');
  
  const walls = [];
  for (let i = 0; i < segments; i++) {
    const z = -i * depth; // push back
    const scale = 1 - i / segments; // shrink progressively (vanish at end)

    walls.push(
      <group key={i} scale={[scale, scale, 1]} position={[0, 0, z]}>
        {/* Bottom */}
        <mesh position={[0, -height / 2, 0]}>
          <boxGeometry args={[width * 2, 1, depth]} />
          <meshStandardMaterial map={texture} />
        </mesh>

        {/* Left */}
        <mesh position={[-width / 2, 0, 0]} rotation={[0, 0, Math.PI / 3]}>
          <boxGeometry args={[width * 2, 1, depth]} />
          <meshStandardMaterial map={texture} />
        </mesh>

        {/* Right */}
        <mesh position={[width / 2, 0, 0]} rotation={[0, 0, -Math.PI / 3]}>
          <boxGeometry args={[width * 2, 1, depth]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </group>
    );
  }

  return <group>{walls}</group>;
};

export default TriangleTunnel;
