import React from "react";
import sponsor1 from "../../assets/Speakers/me.jpg";
import sponsor2 from "../../assets/Speakers/me.jpg";
import sponsor3 from "../../assets/Speakers/me.jpg";

const Sponsors3 = () => {
  const sponsors = [sponsor1, sponsor2, sponsor3];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-transparent text-gray-900">
      <h2 className="text-3xl font-bold mb-10 tracking-tight">Sponsors 3</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((s, i) => (
          <img
            key={i}
            src={s}
            alt={`Sponsor ${i}`}
            className="w-[140px] h-auto rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors3;
