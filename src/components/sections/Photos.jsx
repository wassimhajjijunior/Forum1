// Photos.jsx
import React, { useState } from "react";
import InfiniteBanner from "../Photos/InfiniteBanner";
import me from "../../assets/lastPhotos/me.jpg";
import { motion, AnimatePresence } from "framer-motion";

const bannerOneImages = [me, me, me, me, me];
const bannerTwoImages = [me, me, me, me, me];

const Photos = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-transparent text-white gap-12">
      <h2 className="text-2xl font-bold">Photo Gallery</h2>

      <InfiniteBanner
        images={bannerOneImages}
        direction="left"
        speed={25}
        onClick={setSelected}
        layoutIdPrefix="bannerOne"
      />
      <InfiniteBanner
        images={bannerTwoImages}
        direction="right"
        speed={25}
        onClick={setSelected}
        layoutIdPrefix="bannerTwo"
      />

      {/* Lightbox with fly-to-center & back animation */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-transparent bg-opacity-80 flex justify-center items-center z-50"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={selected.src}
              alt=""
              layoutId={selected.layoutId} // key for smooth transition
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photos;
