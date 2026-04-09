// InfiniteBanner.jsx
import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion as Motion } from "framer-motion";

const InfiniteBanner = ({
  images,
  direction = "left",
  speed = 30,
  onClick,
  layoutIdPrefix,
}) => {
  const containerRef = useRef(null);
  const [bannerWidth, setBannerWidth] = useState(0);

  const duplicatedItems = useMemo(() => {
    const countMap = new Map();
    const buildPass = (passName) =>
      images.map((imageSrc) => {
        const currentCount = countMap.get(imageSrc) || 0;
        const nextCount = currentCount + 1;
        countMap.set(imageSrc, nextCount);

        return {
          key: `${passName}-${imageSrc}-${nextCount}`,
          src: imageSrc,
        };
      });

    return [...buildPass("first"), ...buildPass("second")];
  }, [images]);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const updateWidth = () => {
      if (containerRef.current) {
        setBannerWidth(containerRef.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <Motion.div
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
        {duplicatedItems.map((item) => (
          <Motion.div
            key={item.key}
            className="
              flex-shrink-0 
              overflow-hidden 
              rounded-lg border-2 border-white cursor-pointer
              w-[190px] h-[130px] sm:w-[260px] sm:h-[170px] md:w-[320px] md:h-[210px]
            "
            onClick={() =>
              onClick?.({
                src: item.src,
                layoutId: layoutIdPrefix
                  ? `${layoutIdPrefix}-${item.key}`
                  : undefined,
              })
            }
          >
            <Motion.img
              src={item.src}
              alt=""
              layoutId={
                layoutIdPrefix ? `${layoutIdPrefix}-${item.key}` : undefined
              }
              className="w-full h-full object-cover"
            />
            </Motion.div>
        ))}
      </Motion.div>
    </div>
  );
};

export default InfiniteBanner;
