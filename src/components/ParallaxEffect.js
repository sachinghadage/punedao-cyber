import React, { useEffect, useState } from "react";
import "./ParallaxEffect.css";
import backgroundImage from './bg.jpg';

export const ParallaxEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container" style={{ height: "50vh" }}>
      <div
        className="parallax-bg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPositionY: -scrollY * 0.1 + "px",
        }}
      />
      <div className="parallax-text" style={{ top: scrollY * 0.5 + "px" }}>
        <h1 className="title">Hack For Secure🌎</h1>
      </div>
    </div>
  );
};
