import React from "react";
import "../../styles/FifthPart.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

export const FifthPart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/wall-panels");
  };
  return (
    <div className="fifth-part-container" onClick={handleClick}>
      <div className="content-wrapper">
        <img src="./New/wall2.png" alt="wall image" className="wall-image" />
        <div className="text-content">
          <h1>Wall Panels</h1>
          <p>Level up your walls</p>
          <button className="know-more-btn" onClick={handleClick}>
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};
