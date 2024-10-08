import React, { useState } from "react";
import './OrbitButton.css';

const OrbitButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="btn poppins"
      id="register-btn"
      onClick={() => (window.location.href = "/#join")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontSize: "1.25rem" }}
    >
      {hovered ? "Launch yourself into orbit today!" : "Be the first to use it"}
    </button>
  );
};

export default OrbitButton;
