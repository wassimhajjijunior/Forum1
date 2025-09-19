// src/components/PortalCamera.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

export default function PortalCamera({ sectionCount = 6 }) {
  const cameraRef = useRef();

  // Track scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const t = scrollY / maxScroll; // 0 → 1
    cameraSpring.positionZ = t * sectionCount * 10; // move along Z
  };

  window.addEventListener("scroll", handleScroll);

  // Animated camera
  const [cameraSpring, api] = useSpring(() => ({
    positionZ: 0,
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = cameraSpring.positionZ.get();
    }
  });

  return <perspectiveCamera ref={cameraRef} position={[0, 0, 6]} fov={75} />;
}
