import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor04 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 04"
      logoSrc="/sponsor/sponsors/Orange.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/orange/img1.jpg",
        "/sponsorGal/orange/img2.jpg",
        "/sponsorGal/orange/img3.jpg"
      ]}
    />
  );
};

export default Sponsor04;
