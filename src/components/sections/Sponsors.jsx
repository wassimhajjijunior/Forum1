import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example sponsors (replace with real logos)
import sponsor1 from "../../assets/Speakers/me.jpg";
import sponsor2 from "../../assets/Speakers/me.jpg";
import sponsor3 from "../../assets/Speakers/me.jpg";
import sponsor4 from "../../assets/Speakers/me.jpg";
import sponsor5 from "../../assets/Speakers/me.jpg";

const Sponsors = () => {
  const categories = [
    {
      id: 1,
      name: "Diamond",
      sponsors: [sponsor1],
    },
    {
      id: 2,
      name: "Gold",
      sponsors: [sponsor2, sponsor3],
    },
    {
      id: 3,
      name: "Silver",
      sponsors: [sponsor1, sponsor2, sponsor3, sponsor4],
    },
    {
      id: 4,
      name: "Bronze",
      sponsors: [sponsor2, sponsor3, sponsor4, sponsor5],
    },
    {
      id: 5,
      name: "Community",
      sponsors: [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent text-gray-900">
      {/* Section title */}
      <h2 className="text-3xl font-bold mb-10 tracking-tight">Our Sponsors</h2>

      {/* Sponsors display */}
      <div className="flex items-center justify-center flex-wrap gap-8 w-full min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {activeCategory.sponsors.map((s, i) => (
              <motion.img
                key={i}
                src={s}
                alt={`Sponsor ${i}`}
                className="w-[140px] h-auto rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Category buttons fixed at bottom */}
      <div className="absolute bottom-10 flex justify-center gap-3 flex-wrap">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full border font-semibold transition-all duration-300 ${
              activeCategory.id === cat.id
                ? "bg-black text-white border-black shadow-lg"
                : "border-gray-400 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
