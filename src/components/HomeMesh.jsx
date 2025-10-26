import React, { useRef, useEffect, useState } from "react";
import { Text } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import logo from "../assets/logof.png";

const HomeMesh = () => {
  const groupRef = useRef();
  const timerBoxRefs = useRef([]);
  const texture = useLoader(THREE.TextureLoader, logo);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ✅ Detect mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // any width < 768px = mobile
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  }, [targetDate]);

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

  // ✅ Only change scale for mobile
  const groupScale = isMobile ? 0.65 : 1;

  return (
    <group ref={groupRef} position={[0, 0, -5]} scale={[groupScale, groupScale, groupScale]}>
      {/* Logo */}
      <mesh position={[0, 0.5, 0]}>
        <planeGeometry args={[3.2, 3]} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.1} />
      </mesh>

      {/* Main Title */}
      <Text
        position={[0, -1.4, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        fontWeight={600}
      >
        DELTA ∇I
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, -1.9, 0]}
        fontSize={0.22}
        color="#a0b0c0"
        anchorX="center"
        anchorY="middle"
      >
        THROUGH THE PORTAL BEYOND THIS DIMENSION
      </Text>

      {/* Timer Section */}
      <group position={[0, -2.7, 0]}>
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
              fontSize={0.32}
              color="#00d4ff"
              anchorX="center"
              anchorY="middle"
              fontWeight={700}
            >
              {formatUnit(unit.value)}
            </Text>

            <Text
              position={[0, -0.2, 0.05]}
              fontSize={0.1}
              color="#8899aa"
              anchorX="center"
              anchorY="middle"
              fontWeight={300}
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
