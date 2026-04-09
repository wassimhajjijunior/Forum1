import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MAX_SECTIONS } from "./sections/sectionConfig";

const isInteractiveElement = (element) => {
  if (!element || typeof element.closest !== "function") return false;
  return Boolean(
    element.closest(
      "input, textarea, select, button, a, iframe, video, [contenteditable='true'], [data-allow-touch-scroll='true']",
    ),
  );
};

const isInsideScrollableContainer = (element) => {
  let current = element;
  while (current && current !== document.body) {
    const style = window.getComputedStyle(current);
    const canScrollY =
      (style.overflowY === "auto" || style.overflowY === "scroll") &&
      current.scrollHeight > current.clientHeight;

    if (canScrollY) return true;
    current = current.parentElement;
  }
  return false;
};

const CameraController = ({ onSectionChange, goToSection, clearGoToSection }) => {
  const { camera } = useThree();
  const [sectionIndex, setSectionIndex] = useState(0);
  const targetZ = useRef(0);
  const isInitialized = useRef(false);

  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);

  const depth = 5;

  const firstScrollSpeed = 8;
  const normalSpeed = 5;
  const speedRef = useRef(normalSpeed);
  const prevSection = useRef(0);
  const canHandleTouchNavigation = useRef(true);

  // Sync animating state
  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  // Initialize camera
  useEffect(() => {
    if (!isInitialized.current) {
      camera.position.z = 0;
      targetZ.current = 0;
      isInitialized.current = true;
    }
  }, [camera]);

  // Update targetZ on section change
  useEffect(() => {
    targetZ.current = -sectionIndex * depth;
    if (onSectionChange) onSectionChange(sectionIndex);

    speedRef.current =
      prevSection.current === 0 && sectionIndex === 1
        ? firstScrollSpeed
        : normalSpeed;

    prevSection.current = sectionIndex;
  }, [sectionIndex, onSectionChange]);

  // Handle navbar clicks
  useEffect(() => {
    if (
      goToSection !== null &&
      goToSection !== undefined &&
      goToSection >= 0 &&
      goToSection < MAX_SECTIONS &&
      goToSection !== sectionIndex
    ) {
      setSectionIndex(goToSection);
      setIsAnimating(true);
      isAnimatingRef.current = true;

      if (clearGoToSection) clearGoToSection();
    }
  }, [goToSection, sectionIndex, clearGoToSection]);

  // Scroll, keyboard, and touch
  useEffect(() => {
    const SCROLL_THRESHOLD = 30;
    let touchStartY = 0;

    const handleWheel = (event) => {
      event.preventDefault();
      if (isAnimatingRef.current) return;
      if (Math.abs(event.deltaY) < SCROLL_THRESHOLD) return;

      setSectionIndex((prev) => {
        const newIndex =
          event.deltaY > 0
            ? Math.min(prev + 1, MAX_SECTIONS - 1)
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

      // Ignore keyboard navigation when user is typing in input fields
      const activeElement = document.activeElement;
      const isInputFocused =
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          activeElement.isContentEditable);

      if (isInputFocused) return;

      let newIndex = sectionIndex;
      switch (event.code) {
        case "ArrowDown":
        case "PageDown":
        case "Space":
          newIndex = Math.min(sectionIndex + 1, MAX_SECTIONS - 1);
          break;
        case "ArrowUp":
        case "PageUp":
          newIndex = Math.max(sectionIndex - 1, 0);
          break;
        case "Home":
          newIndex = 0;
          break;
        case "End":
          newIndex = MAX_SECTIONS - 1;
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

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      const target = e.target;

      canHandleTouchNavigation.current =
        !isInteractiveElement(target) && !isInsideScrollableContainer(target);
    };

    const handleTouchMove = (e) => {
      if (canHandleTouchNavigation.current) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (isAnimatingRef.current || !canHandleTouchNavigation.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) < SCROLL_THRESHOLD) return;

      setSectionIndex((prev) => {
        const newIndex =
          deltaY > 0
            ? Math.min(prev + 1, MAX_SECTIONS - 1)
            : Math.max(prev - 1, 0);

        if (newIndex !== prev) {
          setIsAnimating(true);
          isAnimatingRef.current = true;
        }
        return newIndex;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [sectionIndex]);

  // Animate camera
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
