import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor01 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 01"
      logoSrc="/sponsor/sponsors/SAGEMCOM.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/sagemcom/_DSC9951_resultat.jpg",
        "/sponsorGal/sagemcom/_DSC9951_resultat.jpg",
        "/sponsorGal/sagemcom/_DSC9951_resultat.jpg"
      ]}
    />
  );
};

export default Sponsor01;
