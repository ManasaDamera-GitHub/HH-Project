import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black text-white rounded-full p-2"
  >
    ➡️
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black text-white rounded-full p-2"
  >
    ⬅️
  </div>
);

const CarouselComponent = () => {
  const items = [
    {
      title: "2X COOLING",
      subtitle: "Deep clean with foam jet AC service",
      btnText: "Book now",
      image: "/Lp3/img1.jpeg",
    },
    {
      title: "Transform your space",
      subtitle: "with wall panels\nStarts at ₹6,999 only",
      btnText: "Book now",
      image: "/Lp3/img2.jpeg",
    },
    {
      title: "RO Water Purifiers",
      subtitle: "NATIVE - Sale live",
      btnText: "Buy now",
      image: "/Lp3/img3.jpeg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="p-4 relative">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-xl shadow p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-bold text-lg mt-2">{item.title}</h3>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {item.subtitle}
              </p>
              <button className="mt-3 bg-black text-white py-1 px-4 rounded">
                {item.btnText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
