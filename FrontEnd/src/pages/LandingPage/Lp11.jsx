import * as React from "react";
import "../../styles/MBS.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
// import { useState } from "react";

const appliances = [
  { img: "/repair/cooler.png", alt: "Air Cooler", path: "/ac" },
  { img: "/repair/AC.png", alt: "Air Conditioner", path: "/ac" },
  { img: "/repair/purifier.png", alt: "Air Purifier", path: "/ac" },
  { img: "/repair/Washing.png", alt: "Washing Machine", path: "/ac" },
  { img: "/repair/tv.png", alt: "Television", path: "/ac" },
];

export default function Repair() {
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
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // -1 to account for rounding
      }
    };

    window.addEventListener("resize", handleResize);
    scrollRef.current?.addEventListener("scroll", checkScrollPosition);

    // Initial check
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
    <div className="mbs-container">
      <div className="mbs-header">
        <h2 className="text-xl font-semibold">Appliance repair & service</h2>
        <button className="see-all-btn">See all</button>
      </div>

      <div className="mbs-scroll-wrapper">
        <button
          onClick={() => scroll("left")}
          className={`scroll-btn left ${isAtStart ? "disabled" : ""}`}
          disabled={isAtStart}
        >
          ◀
        </button>
        <div ref={scrollRef} className="scroll-container">
          {appliances.map(({ img, title, path }, index) => {
            const content = (
              <div className="card">
                <div className="card-content">
                  <img
                    src={img}
                    alt={title}
                    className="img"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            );

            return (
              <div
                key={index}
                className="scroll-item"
                style={{ cursor: path ? "pointer" : "default" }}
              >
                {path ? <Link to={path}>{content}</Link> : content}
              </div>
            );
          })}
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
