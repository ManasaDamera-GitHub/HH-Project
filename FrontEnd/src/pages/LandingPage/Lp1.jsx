import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCarousel() {
  return (
    <Carousel
      style={{
        height: "50%",
        width: "100%",
        maxWidth: "1220px",
        margin: "auto",
      }}
      className="p-5"
    >
      <Carousel.Item style={{ height: "400px", width: "100%" }}>
        <img
          className="d-block w-100 h-100"
          src="/Lp1/first.jpg"
          alt="First slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="Lp1/second.png"
          alt="Second slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="/Lp1/third.png"
          alt="Third slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="/Lp1/women.png"
          alt="Fourth slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="/Lp1/mens.jpeg"
          alt="Fifth slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="/Lp1/fourth.jpeg"
          alt="Fifth slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
