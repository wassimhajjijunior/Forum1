import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Starfield = () => {
  const starsRef = useRef();

  // Subtle rotation for parallax effect
  useFrame((state, delta) => {
    if (starsRef.current) {
      // Very slow rotation to simulate flying through space
      
      starsRef.current.position.z += delta * 0.1; // Slow forward movement
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}        // Large radius to cover the whole scene
      depth={100}         // Depth of the star field
      count={2000}        // Number of stars
      factor={6}          // Size of stars
      saturation={0}      // Keep stars white/monochrome
      fade={true}         // Stars fade based on distance
      speed={1}         // Subtle movement speed
    />
  );
};

export default Starfield;