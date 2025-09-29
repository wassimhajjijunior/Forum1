import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import logo from "../assets/logo3.png";

const HomeMesh = () => {
  const groupRef = useRef();

  // Load the texture only once
  const texture = useLoader(THREE.TextureLoader, logo);

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {/* Logo plane */}
      <mesh position={[0, 0.3, 0]}>
        <planeGeometry args={[4, 4]} /> 
        <meshBasicMaterial map={texture} transparent={true} alphaTest={0.1} />
      </mesh>

      {/* Title above the logo */}
      <Text
        position={[0, -2.2, 0]}
        fontSize={0.5}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        X-Ops Space Forum
      </Text>

      {/* Subtitle below the logo */}
      <Text
        position={[0, -3, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Exploring ML, Development and Security Galaxies
      </Text>
    </group>
  );
};

export default HomeMesh;
