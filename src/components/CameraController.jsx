import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const CameraController = ({ onSectionChange }) => {
  const { camera } = useThree();
  const [sectionIndex, setSectionIndex] = useState(0);
  const targetZ = useRef(0);
  const isInitialized = useRef(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const depth = 5; // distance between sections
  const maxSections = 9;

  // Speeds
  const firstScrollSpeed = 8; // fast for first scroll from Home
  const normalSpeed = 5;       // slower for others
  const speedRef = useRef(normalSpeed);
  const prevSection = useRef(0);

  // Initialize camera
  useEffect(() => {
    if (!isInitialized.current) {
      camera.position.z = 0;
      targetZ.current = 0;
      isInitialized.current = true;
    }
  }, [camera]);

  // Update target position and speed
  useEffect(() => {
    targetZ.current = -sectionIndex * depth;
    if (onSectionChange) onSectionChange(sectionIndex);

    // Apply fast speed only when leaving Home section (0 → 1)
    if (prevSection.current === 0 && sectionIndex === 1) {
      speedRef.current = firstScrollSpeed;
    } else {
      speedRef.current = normalSpeed;
    }

    prevSection.current = sectionIndex;
  }, [sectionIndex, onSectionChange]);

  // Handle scroll & keyboard
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      if (isAnimating) return;

      setSectionIndex((prev) => {
        const newIndex = event.deltaY > 0
          ? Math.min(prev + 1, maxSections - 1)
          : Math.max(prev - 1, 0);
        if (newIndex !== prev) setIsAnimating(true);
        return newIndex;
      });
    };

    const handleKeyDown = (event) => {
      if (isAnimating) return;

      let newIndex = sectionIndex;
      switch (event.code) {
        case "ArrowDown":
        case "ArrowRight":
        case "PageDown":
        case "Space":
          newIndex = Math.min(sectionIndex + 1, maxSections - 1);
          break;
        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp":
          newIndex = Math.max(sectionIndex - 1, 0);
          break;
        case "Home":
          newIndex = 0;
          break;
        case "End":
          newIndex = maxSections - 1;
          break;
        default:
          return;
      }
      event.preventDefault();
      if (newIndex !== sectionIndex) {
        setSectionIndex(newIndex);
        setIsAnimating(true);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sectionIndex, isAnimating]);

  // Smooth camera animation
  useFrame((state, delta) => {
    if (!isInitialized.current) return;

    const distance = targetZ.current - camera.position.z;
    if (Math.abs(distance) > 0.01) {
      const lerpFactor = 1 - Math.exp(-speedRef.current * delta);
      camera.position.z += distance * lerpFactor;
    } else if (isAnimating) {
      setIsAnimating(false); // unlock scroll
    }
  });

  return null;
};

export default CameraController;
