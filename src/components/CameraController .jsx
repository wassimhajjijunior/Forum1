import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const CameraController = ({ onSectionChange }) => {
  
  const { camera } = useThree();
  const [sectionIndex, setSectionIndex] = useState(0);
  const targetZ = useRef(0);
  const isInitialized = useRef(false);
  const [isAnimating, setIsAnimating] = useState(false); 
  const depth = 5;
  const maxSections = 9;

  // Initialize camera position without animation
  useEffect(() => {
    if (!isInitialized.current) {
      camera.position.z = 0;
      targetZ.current = 0;
      isInitialized.current = true;
    }
  }, [camera]);
  
  // Update target position when section changes
  useEffect(() => {
    targetZ.current = -sectionIndex * depth;
    if (onSectionChange) {
      onSectionChange(sectionIndex);
    }
  }, [sectionIndex, onSectionChange]);

  // Handle scroll and keyboard events
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      if (isAnimating) return; // ignore scroll if animation is running
      
      setSectionIndex(prevIndex => {
        const newIndex = event.deltaY > 0
          ? Math.min(prevIndex + 1, maxSections - 1)
          : Math.max(prevIndex - 1, 0);
        if (newIndex !== prevIndex) setIsAnimating(true); // lock scroll
        return newIndex;
      });
    };

    const handleKeyDown = (event) => {
      if (isAnimating) return; // ignore keys while animating

      let newIndex = sectionIndex;
      switch (event.code) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
        case 'Space':
          newIndex = Math.min(sectionIndex + 1, maxSections - 1);
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          newIndex = Math.max(sectionIndex - 1, 0);
          break;
        case 'Home':
          newIndex = 0;
          break;
        case 'End':
          newIndex = maxSections - 1;
          break;
        default:
          return;
      }
      event.preventDefault();
      if (newIndex !== sectionIndex) {
        setSectionIndex(newIndex);
        setIsAnimating(true); // lock scroll
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sectionIndex, isAnimating]);

  // Smoothly animate camera to target position
  useFrame((state, delta) => {
    if (!isInitialized.current) return;

    const distance = Math.abs(targetZ.current - camera.position.z);
    if (distance > 0.01) {
      const lerpFactor = 1 - Math.exp(-5 * delta);
      camera.position.z += (targetZ.current - camera.position.z) * lerpFactor;
    } else if (isAnimating) {
      setIsAnimating(false); // unlock scroll when animation finishes
    }
  });

  return null;
};

export default CameraController;
