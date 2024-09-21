import React from "react";
import "./Partners.css";
import SwarmZero from "../../assets/swarmzero.webp"

const partners = [
  { id: 1, name: "SwarmZero.ai", url: "https://swarmzero.ai/", logo: SwarmZero },
  { id: 2, name: "Partner 2", url: "", logo: "/path/to/logo2.png" },
  { id: 3, name: "Partner 3", url: "", logo: "/path/to/logo3.png" },
  { id: 4, name: "Partner 4", url: "", logo: "/path/to/logo4.png" },
  { id: 5, name: "Partner 5", url: "", logo: "/path/to/logo5.png" },
  { id: 5, name: "Partner 5", url: "", logo: "/path/to/logo5.png" },
  { id: 5, name: "Partner 5", url: "", logo: "/path/to/logo5.png" },
  { id: 5, name: "Partner 5", url: "", logo: "/path/to/logo5.png" },
];

const PartnersWidget: React.FC = () => {
  return (
    <div className="partners-widget mt-4 mb-4">
      <h2 className="partners-title poppins">Our Partners</h2>
      <div className="partners-logos">
        {partners.slice(0, 3).map((partner) => (
          <div key={partner.id} className="partner">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="partner-logo"
              onClick={() => window.open(partner.url, "_blank")}            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersWidget;
