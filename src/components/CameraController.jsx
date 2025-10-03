import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const CameraController = ({ onSectionChange, targetSection }) => {
  const { camera } = useThree();
  const [sectionIndex, setSectionIndex] = useState(0);
  const targetZ = useRef(0);
  const isInitialized = useRef(false);

  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);

  const depth = 5; 
  const maxSections = 9;

  const firstScrollSpeed = 8;
  const normalSpeed = 5;
  const speedRef = useRef(normalSpeed);
  const prevSection = useRef(0);

  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  useEffect(() => {
    if (!isInitialized.current) {
      camera.position.z = 0;
      targetZ.current = 0;
      isInitialized.current = true;
    }
  }, [camera]);

  // 🔥 if targetSection changes (via Navbar), move camera
  useEffect(() => {
    if (targetSection !== null && targetSection !== sectionIndex) {
      setSectionIndex(targetSection);
      setIsAnimating(true);
      isAnimatingRef.current = true;
    }
  }, [targetSection, sectionIndex]);

  useEffect(() => {
    targetZ.current = -sectionIndex * depth;
    if (onSectionChange) onSectionChange(sectionIndex);

    if (prevSection.current === 0 && sectionIndex === 1) {
      speedRef.current = firstScrollSpeed;
    } else {
      speedRef.current = normalSpeed;
    }

    prevSection.current = sectionIndex;
  }, [sectionIndex, onSectionChange]);

  useEffect(() => {
    const SCROLL_THRESHOLD = 30;

    const handleWheel = (event) => {
      event.preventDefault();
      if (isAnimatingRef.current) return;
      if (Math.abs(event.deltaY) < SCROLL_THRESHOLD) return;

      setSectionIndex((prev) => {
        const newIndex =
          event.deltaY > 0
            ? Math.min(prev + 1, maxSections - 1)
            : Math.max(prev - 1, 0);

        if (newIndex !== prev) {
          setIsAnimating(true);
          isAnimatingRef.current = true;
        }
        return newIndex;
      });
    };

    const handleKeyDown = (event) => {
      if (isAnimatingRef.current) return;

      let newIndex = sectionIndex;
      switch (event.code) {
        case "ArrowDown":
        case "PageDown":
        case "Space":
          newIndex = Math.min(sectionIndex + 1, maxSections - 1);
          break;
        case "ArrowUp":
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
        isAnimatingRef.current = true;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sectionIndex, maxSections]);

  useFrame((state, delta) => {
    if (!isInitialized.current) return;

    const distance = targetZ.current - camera.position.z;
    if (Math.abs(distance) > 0.01) {
      const lerpFactor = 1 - Math.exp(-speedRef.current * delta);
      camera.position.z += distance * lerpFactor;
    } else if (isAnimatingRef.current) {
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }
  });

  return null;
};

export default CameraController;
