import React, { useState, useEffect } from "react";
import "./NightSky.css";
import anime from "animejs/lib/anime.es.js";

const NightSky = () => {
  const numStars = 80;
  const numShootingStars = 10;
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  const randomRadius = () => Math.random() * 0.7 + 0.6;
  const getRandomX = () => Math.floor(Math.random() * vw).toString();
  const getRandomY = (maxHeight) => Math.floor(Math.random() * maxHeight).toString();

  useEffect(() => {
    const starryNight = () => {
      anime({
        targets: ["#sky .star"],
        opacity: [{ duration: 700, value: "1" }, { duration: 700, value: "0" }],
        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i,
      });
    };

    const shootingStars = () => {
      anime({
        targets: ["#shootingstars .wish"],
        translateX: ['-150px', '100vw'],
        translateY: ['-150px', '100vh'],
        width: ['5px', '5px'],
        opacity: [1, 0],
        duration: 3000,
        easing: 'linear',
        loop: true,
        delay: anime.stagger(1000),
      });
    };

    starryNight();
    shootingStars();

    const handleResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [vw, vh]);

  return (
    <div className="night-sky">
      <svg id="sky">
        {[...Array(numStars)].map((_, index) => (
          <circle
            key={index}
            cx={getRandomX()}
            cy={getRandomY(vh * 0.5)} 
            r={randomRadius()}
            stroke="none"
            strokeWidth="1"
            fill="white"
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {[...Array(numShootingStars)].map((_, index) => (
          <div
            key={index}
            className="wish"
            style={{
              left: `${getRandomX()}px`,
              top: `${getRandomY(vh * 0.5)}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NightSky;
