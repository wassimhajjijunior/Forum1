import React from 'react';
import * as THREE from 'three';

const TriangleTunnel = ({ segments = 50, width = 3, height = 3, depth = 4 , visible , currentSection}) => {
  const texture1 = new THREE.TextureLoader().load('./src/assets/textures/floorr.png');
  const texture2 = new THREE.TextureLoader().load('./src/assets/textures/floorr.png');
  const texture3 = new THREE.TextureLoader().load('./src/assets/textures/floorr.png');
  const texture4 = new THREE.TextureLoader().load('./src/assets/textures/floorr1.png');

  const walls = [];
  for (let i = 2; i < segments; i++) {
    const z = -i * depth; // no scaling, so they touch each other
    const texture = i % 3 === 0 ? texture1 : i % 3 === 1 ? texture2 : texture3;
    const floorTexture = i % 2 === 0 ? texture1 : texture4;
    const rightTexture = i % 2 === 0 ? texture1 : texture4;
    // const texture = texture1;

    walls.push(
      <group key={i} position={[0, 0, z]} visible={visible}>
        {/* Bottom */}
        <mesh position={[0, -height / 2, 0]}>
          <boxGeometry args={[width * 2, 0, depth]} />
          <meshStandardMaterial map={floorTexture} />
          
        </mesh>

        {/* Left */}
        <mesh position={[-width / 2, 0, 0]} rotation={[0, 0, Math.PI / 3]}>
          <boxGeometry args={[width * 2, 0, depth]} />
          <meshStandardMaterial map={rightTexture} />

        </mesh>

        {/* Right */}
        <mesh position={[width / 2, 0, 0]} rotation={[0, 0, -Math.PI / 3]}>
          <boxGeometry args={[width * 2, 0, depth]} />
          <meshStandardMaterial map={rightTexture} />
        </mesh>
        <ambientLight intensity={currentSection === 14 ? 0.0009 : 0.009} />
      </group>
    );
  }

  return <group>{walls}</group>;
};

export default TriangleTunnel;
