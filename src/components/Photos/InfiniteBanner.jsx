// InfiniteBanner.jsx
import { motion } from "framer-motion";
import React from "react";

const InfiniteBanner = ({ images, direction = "left", speed = 40, onClick, layoutIdPrefix }) => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-6"
        animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {[...images, ...images].map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt=""
            layoutId={layoutIdPrefix ? `${layoutIdPrefix}-${idx}` : undefined} // unique ID
            className="w-48 h-32 object-cover rounded-lg border-2 border-white cursor-pointer"
            onClick={() =>
              onClick?.({
                src: img,
                layoutId: layoutIdPrefix ? `${layoutIdPrefix}-${idx}` : undefined,
              })
            }
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteBanner;
