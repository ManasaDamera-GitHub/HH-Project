import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCarousel() {
  return (
    <Carousel
      className="py-4"
      style={{
        width: "100%",
        maxWidth: "1220px",
        margin: "0 auto",
      }}
    >
      {[
        "/Lp1/first.jpg",
        "/Lp1/paint.png",
        "Lp1/second.png",
        "/Lp1/third.png",
        "/Lp1/women.png",
        "/Lp1/mens.png",
        // "/Lp1/fourth.png",
      ].map((src, index) => (
        <Carousel.Item
          key={index}
          style={{
            height: "auto",
            maxHeight: "70vh",
            overflow: "hidden",
          }}
        >
          <img
            className="d-block w-100"
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              maxHeight: "70vh",
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
