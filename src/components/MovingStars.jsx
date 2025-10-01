import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const MovingStars = ({ count = 2000, speed = 0.05, spread = 1000 }) => {
  const pointsRef = useRef();

  // Generate star positions
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * spread; // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread; // y
      arr[i * 3 + 2] = -Math.random() * spread * 2;    // z
    }
    return arr;
  }, [count, spread]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const positionsArray = pointsRef.current.geometry.attributes.position.array;
    const time = clock.getElapsedTime();

    for (let i = 0; i < positionsArray.length; i += 3) {
      positionsArray[i + 2] += speed; // move stars forward
      if (positionsArray[i + 2] > 50) positionsArray[i + 2] = -spread * 2; // reset
    }

    // twinkle by changing size slightly
    pointsRef.current.material.size = 0.4 + Math.sin(time * 5) * 0.15;
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="white"
        size={0.4}
        sizeAttenuation={true}
        transparent={true}
      />
    </points>
  );
};

export default MovingStars;
