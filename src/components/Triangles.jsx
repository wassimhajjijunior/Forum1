import * as THREE from "three";
import { useRef } from "react";

export default function Triangles() {
  const group = useRef();
  const triangleCount = 6;
  const scaleStep = 0.5;
  const spacing = 0.6;

  const triangleShape = new THREE.Shape();
  triangleShape.moveTo(0, 1);
  triangleShape.lineTo(-1, -1);
  triangleShape.lineTo(1, -1);
  triangleShape.lineTo(0, 1);

  const baseGeometry = new THREE.ShapeGeometry(triangleShape);
  baseGeometry.center();

  return (
    <group ref={group} position={[0, 0, 0]}>
      {Array.from({ length: triangleCount }).map((_, i) => {
        const scale = 1 + i * scaleStep;
        const yOffset = -(scale - 1);
        return (
          <mesh
            key={i}
            geometry={baseGeometry}
            scale={scale}
            position={[0, yOffset + i * spacing, 0]}
          >
            <meshBasicMaterial color="white" wireframe />
          </mesh>
        );
      })}
      
    </group>
  );
}
