import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Triangles = () => {
  const groupRef = useRef();

  
  // Create wider triangle geometry with head pointing up
  const triangleGeometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    -1.5, -1, 0,  // bottom left (wider)
     1.5, -1, 0,  // bottom right (wider)
     0,    1.5, 0 // top (higher)
  ]);
  triangleGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));



  return (
    <group ref={groupRef}>
      {/* 6 triangles stacked behind each other */}
      {Array.from({ length: 9 }, (_, index) => (
        <mesh
          key={index}
          position={[0, 0, -index * 5]} // Stack them behind each other
          geometry={triangleGeometry} 
          
          
        >
          <meshBasicMaterial 
            wireframe 
            transparent 
            opacity={1}
            color={"#00ffff"}
          />
        </mesh>
      ))}
    </group>
  );
};

export default Triangles;