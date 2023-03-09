import React, { useState, useEffect } from "react";
import "./ParallaxEffect.css";
import bg from "./bg.jpg";

export function ParallaxEffect() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
    <div
      className="parallax"
      style={{
        backgroundImage: "url(" + bg + ")",
        transform: `translate3d(0, ${scrollPosition / 2}px, 0)`,
      }}
    >
      <div className="parallax__overlay"></div>
      <div className="parallax__content">
        <h1 className="parallax__title">Explore the world with us</h1>
      </div>
    </div>
    </div>
  );
}
