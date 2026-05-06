import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor05 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 05"
      logoSrc="/sponsor/sponsors/Decade.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/decade/img1.jpg",
        "/sponsorGal/decade/img2.jpg",
        "/sponsorGal/decade/img3.jpg"
      ]}
    />
  );
};

export default Sponsor05;
