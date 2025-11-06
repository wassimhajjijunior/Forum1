import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import aiLogo from "../../assets/icons/AI icon@2x.png";
import securityLogo from "../../assets/icons/sec icon@2x.png";
import iotLogo from "../../assets/icons/cloud.png";

const Description = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const descriptions = {
    ai: {
      title: "Artificial Intelligence",
      text: "AI is transforming the way we solve problems — from automation to intelligent decision-making. It empowers systems to learn, adapt, and act with human-like reasoning.",
    },
    security: {
      title: "Cyber Security",
      text: "Security ensures data protection, privacy, and system integrity. It's crucial to build trust in connected and digital environments.",
    },
    iot: {
      title: "Internet of Things (IoT)",
      text: "IoT connects devices and sensors to collect and share data, enabling smarter cities, industries, and daily life through real-time connectivity.",
    },
  };

  // Floating animation for icons
  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Container animation - stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.2 : 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation - fade in and scale up
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  // Icon rotation on hover/tap
  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    },
    tap: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  // Text reveal animation
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={`relative w-full h-screen text-white flex items-center justify-center overflow-hidden ${
        isMobile ? 'flex-col gap-8 py-8 px-4' : ''
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* AI - Top Center / First on Mobile */}
      <motion.div 
        className={`${
          isMobile 
            ? 'relative w-[280px]' 
            : 'absolute top-15 left-1/2 -translate-x-1/2 w-[220px]'
        } flex flex-col items-center text-center cursor-pointer`}
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.img
            src={aiLogo}
            alt="AI"
            className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} mb-2`}
            variants={floatAnimation}
            animate="animate"
          />
        </motion.div>
        <motion.h3 
          className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold mb-1`}
          variants={textVariants}
        >
          {descriptions.ai.title}
        </motion.h3>
        <motion.p 
          className={`${isMobile ? 'text-[11px]' : 'text-xs'} text-white/80 leading-relaxed`}
          variants={textVariants}
        >
          {descriptions.ai.text}
        </motion.p>
      </motion.div>

      {/* IoT - Bottom Left / Second on Mobile */}
      <motion.div 
        className={`${
          isMobile 
            ? 'relative w-[280px]' 
            : 'absolute bottom-6 left-6 w-[220px]'
        } flex flex-col items-center text-center cursor-pointer`}
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.img
            src={iotLogo}
            alt="IoT"
            className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} mb-2`}
            variants={floatAnimation}
            animate="animate"
            transition={{ delay: 0.5 }}
          />
        </motion.div>
        <motion.h3 
          className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold mb-1`}
          variants={textVariants}
        >
          {descriptions.iot.title}
        </motion.h3>
        <motion.p 
          className={`${isMobile ? 'text-[11px]' : 'text-xs'} text-white/80 leading-relaxed`}
          variants={textVariants}
        >
          {descriptions.iot.text}
        </motion.p>
      </motion.div>

      {/* Security - Bottom Right / Third on Mobile */}
      <motion.div 
        className={`${
          isMobile 
            ? 'relative w-[280px]' 
            : 'absolute bottom-6 right-6 w-[220px]'
        } flex flex-col items-center text-center cursor-pointer`}
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.img
            src={securityLogo}
            alt="Security"
            className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} mb-2`}
            variants={floatAnimation}
            animate="animate"
            transition={{ delay: 1 }}
          />
        </motion.div>
        <motion.h3 
          className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold mb-1`}
          variants={textVariants}
        >
          {descriptions.security.title}
        </motion.h3>
        <motion.p 
          className={`${isMobile ? 'text-[11px]' : 'text-xs'} text-white/80 leading-relaxed`}
          variants={textVariants}
        >
          {descriptions.security.text}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Description;