import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor02 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 02"
      logoSrc="/sponsor/sponsors/Ooredooo.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/ooredoo/img1.jpg",
        "/sponsorGal/ooredoo/img2.jpg",
        "/sponsorGal/ooredoo/img3.jpg"
      ]}
    />
  );
};

export default Sponsor02;
