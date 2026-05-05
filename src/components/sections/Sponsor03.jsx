import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor03 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 03"
      logoSrc="/sponsor/sponsors/tt.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/telecom/img1.jpg",
        "/sponsorGal/telecom/img2.jpg",
        "/sponsorGal/telecom/img3.JPG"
      ]}
    />
  );
};

export default Sponsor03;
