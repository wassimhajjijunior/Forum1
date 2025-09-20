import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const CameraController = ({ onSectionChange }) => {
  const { camera } = useThree();
  const [sectionIndex, setSectionIndex] = useState(0);
  const targetZ = useRef(0);
  const isInitialized = useRef(false);
  const depth = 5;
  const maxSections = 6;

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
      
      setSectionIndex(prevIndex => {
        if (event.deltaY > 0) {
          // Scroll down - move forward (increase section)
          return Math.min(prevIndex + 1, maxSections - 1);
        } else {
          // Scroll up - move backward (decrease section)
          return Math.max(prevIndex - 1, 0);
        }
      });
    };

    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
        case 'Space':
          event.preventDefault();
          setSectionIndex(prevIndex => Math.min(prevIndex + 1, maxSections - 1));
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          event.preventDefault();
          setSectionIndex(prevIndex => Math.max(prevIndex - 1, 0));
          break;
        case 'Home':
          event.preventDefault();
          setSectionIndex(0);
          break;
        case 'End':
          event.preventDefault();
          setSectionIndex(maxSections - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Smoothly animate camera to target position
  useFrame((state, delta) => {
    if (!isInitialized.current) return;
    
    // Only animate if camera is not at target position
    const distance = Math.abs(targetZ.current - camera.position.z);
    if (distance > 0.01) {
      // Lerp camera position towards target
      const lerpFactor = 1 - Math.exp(-5 * delta);
      camera.position.z += (targetZ.current - camera.position.z) * lerpFactor;
    }
  });

  return null;
};

export default CameraController;