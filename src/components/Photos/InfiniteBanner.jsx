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
      setBannerWidth(containerRef.current.scrollWidth / 2);
    }
  }, [images]);

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        ref={containerRef}
        className="flex gap-4"
        animate={{
          x: direction === "left" ? [0, -bannerWidth] : [-bannerWidth, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: speed,
        }}
      >
        {[...images, ...images].map((img, idx) => (
          <motion.div
            key={idx}
            className="
              flex-shrink-0 
              overflow-hidden 
              rounded-lg border-2 border-white cursor-pointer
              w-[200px] h-[150px] sm:w-[320px] sm:h-[200px]
            "
            onClick={() =>
              onClick?.({
                src: img,
                layoutId: layoutIdPrefix
                  ? `${layoutIdPrefix}-${idx}`
                  : undefined,
              })
            }
          >
            <motion.img
              src={img}
              alt=""
              layoutId={
                layoutIdPrefix ? `${layoutIdPrefix}-${idx}` : undefined
              }
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteBanner;
