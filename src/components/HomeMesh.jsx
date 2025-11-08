import React, { useRef, useEffect, useState } from "react";
import { Text } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ✅ Import assets from /src (not /public)
import logo from "/LogoForum.png";
import titleForum from "/delta/DELTA.svg";

const HomeMesh = () => {
  const groupRef = useRef();
  const timerBoxRefs = useRef([]);

  // ✅ Load textures safely (works in both dev & production)
  const textureLogo = useLoader(THREE.TextureLoader, logo);
  const textureTitle = useLoader(THREE.TextureLoader, titleForum);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  // ✅ Reliable resize detection (using matchMedia)
  useEffect(() => {
    const updateIsMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // ✅ Countdown timer logic
  const targetDate = new Date("2025-11-12T08:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Gentle pulsing animation for timer boxes
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    timerBoxRefs.current.forEach((box, i) => {
      if (box) {
        const scale = 1 + Math.sin(t * 1.5 + i * 0.3) * 0.02;
        box.scale.set(scale, scale, 1);
      }
    });
  });

  const formatUnit = (unit) => String(unit).padStart(2, "0");

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  // ✅ Use responsive scale
  const groupScale = isMobile ? 0.65 : 1;

  return (
    <group ref={groupRef} position={[0, 0, -5]} scale={[groupScale, groupScale, groupScale]}>
      {/* Logo */}
      <mesh position={[0, 0.5, 0]}>
        <planeGeometry args={[3.2, 3]} />
        <meshBasicMaterial map={textureLogo} transparent alphaTest={0.1} />
      </mesh>

      {/* Title (SVG) */}
      <mesh position={[0, -1.6, 0]}>
        <planeGeometry args={[3, 0.6]} />
        <meshBasicMaterial map={textureTitle} transparent />
      </mesh>

      {/* Subtitle */}
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

      {/* Timer Section */}
      <group position={[0, -2.9, 0]}>
        {timeUnits.map((unit, index) => (
          <group
            key={index}
            ref={(el) => (timerBoxRefs.current[index] = el)}
            position={[index * 1.0 - 1.5, 0, 0]}
          >
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.85, 0.75, 0.08]} />
              <meshStandardMaterial
                color="#1a2332"
                metalness={0.2}
                roughness={0.4}
                transparent
                opacity={0.5}
              />
            </mesh>

            <lineSegments position={[0, 0, 0.041]}>
              <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(0.87, 0.77, 0.08)]} />
              <lineBasicMaterial color="#00a8ff" opacity={0.3} transparent />
            </lineSegments>

            <Text
              position={[0, 0.1, 0.05]}
              fontSize={0.25}
              color="#00d4ff"
              anchorX="center"
              anchorY="middle"
              fontWeight={700}
              font="/fonts/hazmat-oblique.ttf"
            >
              {formatUnit(unit.value)}
            </Text>

            <Text
              position={[0, -0.2, 0.05]}
              fontSize={0.08}
              color="#8899aa"
              anchorX="center"
              anchorY="middle"
              fontWeight={300}
              font="/fonts/hazmat-oblique.ttf"
            >
              {unit.label}
            </Text>

            <mesh position={[0, 0, -0.05]}>
              <planeGeometry args={[0.95, 0.85]} />
              <meshBasicMaterial color="#00a8ff" transparent opacity={0.04} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};

export default HomeMesh;
