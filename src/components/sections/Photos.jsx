import React, { useState, useEffect } from "react";
import InfiniteBanner from "../Photos/InfiniteBanner";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "/lastPhotos/img1_.jpg";
import img3 from "/lastPhotos/img3_.webp";
import img4 from "/lastPhotos/img5_.jpg";
import img5 from "/lastPhotos/img5_.webp";
import img6 from "/lastPhotos/img6_.jpg";
import img7 from "/lastPhotos/img7_.webp";
import img9 from "/lastPhotos/img9_.jpg";
import img9b from "/lastPhotos/img9_.webp";
import img11 from "/lastPhotos/img11_.jpg";
import img11b from "/lastPhotos/img11_.webp";
import img12 from "/lastPhotos/img12_.jpg";
import img12b from "/lastPhotos/img12_.webp";
import img17 from "/lastPhotos/img17_.webp";
import img22 from "/lastPhotos/img22_.jpg";
import img31 from "/lastPhotos/img31_.jpg";

const bannerOneImages = [img1, img6, img9, img11, img17, img31];
const bannerTwoImages = [img3, img4, img7, img12, img22, img5];
const Photos = () => {
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-transparent ">
      {/* 🟪 Transparent Trapezoid Container */}
      <div
        className="relative flex flex-col justify-center items-center text-white overflow-hidden"
        style={{
          width: "100%",
          height: "100%",
          clipPath: isMobile ? "":"polygon(33% -5%, 67% -4%, 96% 96%, 5% 93%)",
          background: "transparent", // fully transparent
        }}
      >
        {/* Top Banner */}
        <div className="w-full">
          <InfiniteBanner
            images={bannerOneImages}
            direction="left"
            speed={40}
            onClick={setSelected}
            layoutIdPrefix="bannerOne"
          />
        </div>

        <div className="h-6 sm:h-8 md:h-10" />

        

        {/* Spacing */}
        <div className="h-6 sm:h-8 md:h-10" />

        {/* Bottom Banner */}
        <div className="w-full">
          <InfiniteBanner
            images={bannerTwoImages}
            direction="right"
            speed={40}
            onClick={setSelected}
            layoutIdPrefix="bannerTwo"
          />
        </div>
      </div>

      {/* 🖼 Lightbox */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-transparent/70 z-40"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50"
              onClick={() => setSelected(null)}
            >
              <motion.img
                src={selected.src}
                alt=""
                layoutId={selected.layoutId}
                className={`rounded-xl shadow-2xl object-contain 
                  ${isMobile ? "w-[90%]" : "w-[35%]"} 
                  sm:w-[70%] md:w-[35%] lg:w-[35%] 
                  max-h-[90vh]`}
                  loading="lazy"

                transition={{
                  layout: { duration: isMobile ? 0.6 : 0.5, ease: [0.25, 0.8, 0.25, 1] },
                  duration: isMobile ? 0.5 : 0.4,
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photos;
