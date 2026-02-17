import React, { useRef, useEffect, useState } from "react";
import { Text } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import logo from "/LogoForum.png";
import titleForum from "/delta/DELTA.svg";

const HomeMesh = ({ onNavigate }) => {
  const groupRef = useRef();
  const buttonRef = useRef();
  const buttonScaleRef = useRef(1);
  const textureLogo = useLoader(THREE.TextureLoader, logo);
  const textureTitle = useLoader(THREE.TextureLoader, titleForum);

  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    if (buttonRef.current) {
      const targetScale = isHovered ? 1.05 : 1;
      buttonScaleRef.current += (targetScale - buttonScaleRef.current) * 0.1;
      buttonRef.current.scale.set(buttonScaleRef.current, buttonScaleRef.current, 1);
    }
  });

  const groupScale = isMobile ? 0.65 : 1;

  return (
    <group ref={groupRef} position={[0, 0, -5]} scale={[groupScale, groupScale, groupScale]}>
      <mesh position={[0, 0.5, 0]}>
        <planeGeometry args={[3.2, 3]} />
        <meshBasicMaterial map={textureLogo} transparent alphaTest={0.1} />
      </mesh>

      <mesh position={[0, -1.6, 0]}>
        <planeGeometry args={[3, 0.6]} />
        <meshBasicMaterial map={textureTitle} transparent />
      </mesh>

      <Text
        position={[0, -2.2, 0]}
        fontSize={0.18}
        font="/fonts/hazmat-regular.ttf"
        color="#a0b0c0"
        anchorX="center"
        anchorY="middle"
      >
        THROUGH THE PORTAL BEYOND THIS DIMENSION
      </Text>

      <group ref={buttonRef} position={[0, -2.8, 0]}>
        <mesh position={[0, 0, -0.02]}>
          <planeGeometry args={[2.2, 0.5]} />
          <meshBasicMaterial 
            color={isHovered ? "#00ffff" : "#ffffff"} 
            transparent 
            opacity={isHovered ? 0.15 : 0.03} 
          />
        </mesh>

        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[2.5, 0.6]} />
          <meshBasicMaterial 
            color="#00ffff" 
            transparent 
            opacity={isHovered ? 0.4 : 0.2} 
          />
        </mesh>

        <mesh
          position={[0, 0, 0.01]}
          onClick={(e) => {
            e.stopPropagation();
            if (onNavigate) onNavigate(1);
          }}
          onPointerEnter={(e) => {
            e.stopPropagation();
            setIsHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            setIsHovered(false);
            document.body.style.cursor = "auto";
          }}
        >
          <planeGeometry args={[2.5, 0.5]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        <Text
          fontSize={0.2}
          font="/fonts/hazmat-regular.ttf"
          color={isHovered ? "#00ffff" : "#ffffffaa"}
          anchorX="center"
          anchorY="middle"
        >
          EXPLORE THE EVENT
        </Text>
      </group>
    </group>
  );
};

export default HomeMesh;
