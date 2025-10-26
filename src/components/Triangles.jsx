import React, { useRef } from "react";
import * as THREE from "three";
import HomeMesh from "./HomeMesh";
const Triangles = ({ visible }) => {
  const groupRef = useRef();

  // Triangle geometry
  const triangleGeometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    -1.5, -1, 0, // bottom left
     1.5, -1, 0, // bottom right
     0,    1.5, 0 // top
  ]);
  triangleGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  return (
    <group ref={groupRef} visible={visible}>
      {Array.from({ length: 10 }, (_, index) => {
        // if (index === 3) {
          
        //   return (
        //     <HomeMesh />
        //   );
        // }

        return (
          <mesh
            key={index}
            position={[0, 0, -index * 5]}
            geometry={triangleGeometry}
          >
            <meshBasicMaterial
              wireframe
              transparent
              opacity={1}
              color={"#00ffff"}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default Triangles;
