import React, { useState } from "react";
import './OrbitButton.css';

const OrbitButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="btn poppins"
      id="register-btn"
      onClick={() => (window.location.href = "/#events")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontSize: "1.25rem" }}
    >
      {hovered ? "Launch yourself into orbit today!" : "Get Started"}
    </button>
  );
};

export default OrbitButton;
