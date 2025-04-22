import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCarousel() {
  return (
    <Carousel style={{ height: "400px" }} className="p-5">
      <Carousel.Item style={{ height: "400px", width: "100%" }}>
        <img
          className="d-block w-100 h-100"
          src="/first.jpg"
          alt="First slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="second.png"
          alt="Second slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="/third.png"
          alt="Third slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="/women.png"
          alt="Fourth slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="/mens.jpeg"
          alt="Fifth slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img
          className="d-block w-100 h-100"
          src="/fourth.jpeg"
          alt="Fifth slide"
          style={{ objectFit: "contain" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
