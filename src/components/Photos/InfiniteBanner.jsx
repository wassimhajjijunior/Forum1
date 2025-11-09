// InfiniteBanner.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const InfiniteBanner = ({
  images,
  direction = "left",
  speed = 30,
  onClick,
  layoutIdPrefix,
}) => {
  const containerRef = useRef(null);
  const [bannerWidth, setBannerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // get full width of one set of images (so animation is perfectly aligned)
      setBannerWidth(containerRef.current.scrollWidth / 2);
    }
  }, [images]);

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        ref={containerRef}
        className="flex gap-4"
        animate={{
          x:
            direction === "left"
              ? [0, -bannerWidth]
              : [-bannerWidth, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: speed,
        }}
      >
        {/* duplicate images once to create infinite loop */}
        {[...images, ...images].map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt=""
            layoutId={layoutIdPrefix ? `${layoutIdPrefix}-${idx}` : undefined}
            className="w-65 h-45 object-cover rounded-lg border-2 border-white cursor-pointer"
            onClick={() =>
              onClick?.({
                src: img,
                layoutId: layoutIdPrefix
                  ? `${layoutIdPrefix}-${idx}`
                  : undefined,
              })
            }
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteBanner;
