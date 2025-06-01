import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import "../../styles/MBS.css"; // Keep styles here or add globally

const appliances = [
  {
    img: "/MBS/ac.jpeg",
    title: "Lite AC service",
    path: "/ac",
  },
  {
    img: "/MBS/pest.png",
    title: "Cleaning & pest control",
    path: "/cleaning-pest-control",
  },

  {
    img: "/MBS/paint.png",
    title: "Painting consultation",
    path: "/painting",
  },
  {
    img: "/MBS/hme.png",
    title: "Apartment terminate control",
    path: "/terminate-control",
  },
  {
    img: "/MBS/filter.jpeg",
    title: "Filter Repair",
    path: "/waterPurifier",
  },

  {
    img: "/MBS/bed.png",
    title: "Bed bugs control",
    path: "/cleaning-pest-control",
  },
];

export default function MBS() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      checkScrollPosition();
    };

    const checkScrollPosition = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    window.addEventListener("resize", handleResize);
    scrollRef.current?.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollRef.current?.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount =
        windowWidth < 450
          ? current.firstChild?.clientWidth || 250
          : windowWidth < 700
          ? (current.firstChild?.clientWidth || 150) * 2
          : 300;

      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">Most Booked Services</h2>
        <button
          onClick={() => navigate("/most-booked-services")}
          className="border-2 border-black rounded-lg px-4 py-2 font-medium hover:bg-gray-100 transition-colors"
        >
          See all
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className={`scroll-btn left ${isAtStart ? "disabled" : ""}`}
          disabled={isAtStart}
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="scroll-container flex gap-4 overflow-x-auto scroll-smooth pb-4 px-1"
        >
          {appliances.map(({ img, title, path }, index) => (
            <div
              key={index}
              onClick={() => navigate(path)}
              className="min-w-[180px] md:min-w-[220px] cursor-pointer flex flex-col items-center"
            >
              <Card className="w-full aspect-square overflow-hidden border-none shadow-none transition-transform hover:scale-[1.03]">
                <CardContent className="p-0 h-full">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
              <p className="text-center font-medium text-gray-800 mt-2">
                {title}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className={`scroll-btn right ${isAtEnd ? "disabled" : ""}`}
          disabled={isAtEnd}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
