import * as React from "react";
import "../../styles/WomenSalon.css";
import path from "path";
import { useNavigate } from "react-router-dom";
const content = [
  { img: "/menImages/cutting.png", text: "HairCut", path: "/m_salon/haircut" },
  {
    img: "/menImages/beard.png",
    text: "Beard Styling",
    path: "/m_salon/beard",
  },
  {
    img: "/menImages/stress.png",
    text: "Stress relief",
    path: "/m_salon/stress",
  },
  {
    img: "/menImages/pedicure.png",
    text: "Pedicure & Manicure",
    path: "/m_salon/pedicure",
  },
  {
    img: "/menImages/hairColor.png",
    text: "Hair color",
    path: "/m_salon/haircolor",
  },
  { img: "/menImages/facial.png", text: "Facial", path: "/m_salon/facial" },
];

export const M_Salon = () => {
  const navigate = useNavigate();

  const handleSeeAll = (path = "/men-salon/all-services") => {
    navigate(path);
  };
  return (
    <div className="women-salon-container">
      <div className="women-salon-header">
        <h1 className="women-salon-title">Salon for Men</h1>
        <button className="women-salon-button" onClick={() => handleSeeAll()}>
          See all
        </button>
      </div>
      <div className="women-salon-grid">
        {content.map((service, index) => (
          <div
            key={index}
            className="women-salon-card"
            onClick={() => handleSeeAll(service.path)}
          >
            <img
              src={service.img}
              alt={service.text}
              className="women-salon-image"
            />
            <p className="women-salon-service-name">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
