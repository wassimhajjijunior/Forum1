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
  const glowPulseRef = useRef(0);
  const pressDepthRef = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    if (buttonRef.current) {
      const targetScale = isHovered ? 1.08 : 1;
      buttonScaleRef.current += (targetScale - buttonScaleRef.current) * 0.1;
      buttonRef.current.scale.set(
        buttonScaleRef.current,
        buttonScaleRef.current,
        1,
      );
    }

    const pulseTarget = isHovered ? 1 : 0;
    glowPulseRef.current += (pulseTarget - glowPulseRef.current) * 0.08;

    const depthTarget = isHovered ? 0.035 : 0;
    pressDepthRef.current += (depthTarget - pressDepthRef.current) * 0.15;
  });

  const groupScale = isMobile ? 0.65 : 1;

  return (
    <group
      ref={groupRef}
      position={[0, 0, -5]}
      scale={[groupScale, groupScale, groupScale]}>
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
        anchorY="middle">
        THROUGH THE PORTAL BEYOND THIS DIMENSION
      </Text>

      <group
        ref={buttonRef}
        position={[0, -2.8, 0]}
        scale={isHovered ? 1.035 : 1}>
        <mesh position={[0, 0, -0.015]}>
          <planeGeometry args={[2.82, 0.7]} />
          <meshBasicMaterial
            color="#66f7ff"
            transparent
            opacity={isHovered ? 0.14 : 0.08}
          />
        </mesh>

        <mesh position={[0, 0, 0 + pressDepthRef.current]}>
          <planeGeometry args={[2.74, 0.62]} />
          <meshBasicMaterial color="#102437" />
        </mesh>

        <mesh position={[0, 0.14, 0.015 + pressDepthRef.current]}>
          <planeGeometry args={[1.95, 0.035]} />
          <meshBasicMaterial
            color="#d8fbff"
            transparent
            opacity={isHovered ? 0.28 : 0.14}
          />
        </mesh>

        <mesh
          position={[0, 0, 0.03 + pressDepthRef.current]}
          onPointerDown={(e) => {
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
          }}>
          <planeGeometry args={[2.9, 0.78]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        <Text
          fontSize={0.17}
          font="/fonts/hazmat-regular.ttf"
          color={isHovered ? "#e8feff" : "#d9e8f5"}
          anchorX="center"
          anchorY="middle"
          position={[-0.08, 0.005, 0.04 + pressDepthRef.current]}>
          Explore More
        </Text>

        <Text
          fontSize={0.16}
          font="/fonts/hazmat-regular.ttf"
          color={isHovered ? "#9ffcff" : "#7ecfe6"}
          anchorX="center"
          anchorY="middle"
          position={[0.92, 0.005, 0.04 + pressDepthRef.current]}>
          →
        </Text>
      </group>
    </group>
  );
};

export default HomeMesh;
