import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import "../../styles/MBS.css";
import { Link, useNavigate } from "react-router-dom";

const content = [
  { img: "/New/wallPanel.png", text: "Wall Panel", path: "/wall-panels" },
  {
    img: "/New/clean.jpeg",
    text: "Insta Help",
    path: "/cleaning-pest-control",
  },
  {
    img: "/New/filter.jpeg",
    text: "Native Water Purifier",
    path: "/waterPurifier",
  },
  {
    img: "/New/wash.jpeg",
    text: "Bathroom & Kitchen cleaning",
    path: "/cleaning-pest-control",
  },
  { img: "/New/lock.png", text: "Native smart locks", path: "/smart-locks" },
  { img: "/New/AC.png", text: "AC", path: "/ac" },
  { img: "/New/doctor.png", text: "Check Out Salon", path: "/" },
];

export default function FourthPart() {
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
        <h1 className="mbs-title">New and Noteworthy</h1>
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
          {content.map(({ img, text, path }, index) => {
            const card = (
              <div className="card">
                <div className="card-content">
                  <img src={img} alt={text} className="img" />
                </div>
                <p className="card-title text-center text-sm sm:text-base md:text-lg font-semibold text-gray-800 mt-2">
                  {text}
                </p>
              </div>
            );

            return (
              <div
                key={index}
                className="scroll-item"
                style={{ cursor: path ? "pointer" : "default" }}
              >
                {/* {path ? <Link to={path} >{card}</Link> : card} */}
                {path ? (
                  <Link to={path} className="no-underline">
                    {card}
                  </Link>
                ) : (
                  card
                )}
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
