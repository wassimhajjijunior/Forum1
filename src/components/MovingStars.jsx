import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MovingStars = ({
  count = 2000,
  speed = 0.2,
  spread = 900,
  length = 20,
}) => {
  const linesRef = useRef();

  // Generate stars as line segments
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = -Math.random() * spread * 2;

      arr.push(
        x, y, z,            // start point
        x, y, z + length    // end point (small segment)
      );
    }
    return new Float32Array(arr);
  }, [count, spread, length]);

  useFrame(() => {
    if (!linesRef.current) return;
    const positionsArray = linesRef.current.geometry.attributes.position.array;

    for (let i = 0; i < positionsArray.length; i += 6) {
      // Move segment forward
      positionsArray[i + 2] += speed; // start z
      positionsArray[i + 5] += speed; // end z

      // Reset when out of view
      if (positionsArray[i + 2] > 50) {
        const x = (Math.random() - 0.5) * spread;
        const y = (Math.random() - 0.5) * spread;
        const z = -spread * 2;
        positionsArray[i] = x;
        positionsArray[i + 1] = y;
        positionsArray[i + 2] = z;
        positionsArray[i + 3] = x;
        positionsArray[i + 4] = y;
        positionsArray[i + 5] = z + length;
      }
    }

    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="white"
        transparent={true}
        opacity={0.25} // 🔥 lower opacity for softer glow effect
        linewidth={0.2} // (only affects WebGL2 / certain browsers)
      />
    </lineSegments>
  );
};

export default MovingStars;
