import React, { useState, useEffect } from "react";
import "./StarrySky.css";
import anime from "animejs/lib/anime.es.js"; // Install animejs via npm

const StarrySky = () => {
    const [numStars, setNumStars] = useState(80); // Number of stars
    const [numShootingStars, setNumShootingStars] = useState(10); // Number of shooting stars
    const [vw, setVw] = useState(window.innerWidth); // Viewport width
    const [vh, setVh] = useState(window.innerHeight); // Viewport height

    const randomRadius = () => {
        return Math.random() * 0.7 + 0.6; // Random star size
    };

    const getRandomX = () => {
        return Math.floor(Math.random() * vw).toString(); // Random X coordinate
    };

    // Limit Y-coordinate to the top 50% of the viewport height
    const getRandomY = (maxHeight) => {
        return Math.floor(Math.random() * maxHeight).toString(); // Random Y coordinate within the limit
    };

    useEffect(() => {
        const starryNight = () => {
            anime({
                targets: ["#sky .star"],
                opacity: [
                    { duration: 700, value: "1" },
                    { duration: 700, value: "0" }
                ],
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
                width: ['5px', '5px'], // Change size to simulate streak
                opacity: [1, 0], // Fade out effect
                duration: 3000, // Duration of each shooting star
                easing: 'linear',
                loop: true, // Repeat indefinitely
                delay: anime.stagger(1000) // Stagger start times
            });
        };

        starryNight();
        shootingStars();

        const handleResize = () => {
            setVw(window.innerWidth);
            setVh(window.innerHeight);
        };

        window.addEventListener("resize", handleResize); // Handle window resizing

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [vw, vh]);

    return (
        <div id="StarApp">
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
                            top: `${getRandomY(vh * 0.5)}px`, // Limit Y to 50% for shooting stars
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default StarrySky;
