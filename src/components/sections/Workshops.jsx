import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import workshopImage1 from "/speakers/workshop/amel sellami.jpg";
import workshopImage2 from "/speakers/workshop/Mohamed.jpg";

const workshopSpeakers = [
  {
    id: 1,
    name: "Amel Sellami",
    role: "Google Developer Expert in Machine Learning | ML Research Engineer & Team Lead at InstaDeep",
    image: workshopImage1,
  },
  {
    id: 2,
    name: "Mohamed Ould-ElHassen Aoueileyine",
    role: "Dr. Eng. | IoT, AI & Industry 4.0 Expert",
    image: workshopImage2,
  },
];

const WorkshopSpeakerCard = ({ speaker }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Motion.article
      className="group relative w-full max-w-[250px] sm:max-w-[270px] rounded-3xl border border-cyan-300/25 bg-slate-950/45 backdrop-blur-md p-3 sm:p-4 md:p-5 shadow-[0_0_22px_rgba(34,211,238,0.12)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
    >
      <div className="w-full aspect-square rounded-2xl overflow-hidden border border-cyan-200/30 bg-black/25">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-hazmat-regular text-white text-base sm:text-lg md:text-xl">
          {speaker.name}
        </h3>
        <p className="mt-1 font-mistrully text-slate-300 text-xs sm:text-sm leading-relaxed">
          {speaker.role}
        </p>

        
      </div>
    </Motion.article>
  );
};

const Workshops = () => {
  return (
    <section className="w-full min-h-[72dvh] md:h-[72dvh] px-4 sm:px-6 py-16 md:py-0 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2 className="font-hazmat-regular text-cyan-100 text-2xl sm:text-3xl md:text-4xl tracking-wide text-center mb-5 sm:mb-6 md:mb-8">
          Workshop Speakers
        </h2>

        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 items-stretch justify-items-center">
          {workshopSpeakers.map((speaker) => (
            <WorkshopSpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
