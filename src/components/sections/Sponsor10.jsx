import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor10 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 10"
      logoSrc="/sponsor/sponsors/minotore.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/minotor/img1.jpg",
        "/sponsorGal/minotor/img2.jpg",

      ]}
    />
  );
};

export default Sponsor10;
