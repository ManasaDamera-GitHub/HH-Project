import React from "react";
import "../../styles/WomenSalon.css";

export const SpaPage = () => {
  const content = [
    { img: "/Lp6/massage.png", text: "Stress Relief" },
    { img: "/Lp6/pain.png", text: "Pain Relief" },
    { img: "/Lp6/skin.png", text: "Natural Skin Care" },
  ];
  return (
    <div className="women-salon-container">
      <div className="women-salon-header">
        <h1 className="women-salon-title">Salon for Women</h1>
        <button className="women-salon-button">See all</button>
      </div>
      <div className="women-salon-grid">
        {content.map((service, index) => (
          <div key={index} className="women-salon-card">
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
