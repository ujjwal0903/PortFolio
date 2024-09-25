import React from "react";
import { useTheme } from "../../components/context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import NightSky from "../../components/NightSky/NightSky";
import SunnySky from "../../components/SunnySky/SunnySky";

function Home() {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div id="home" className={`home-container ${theme === "dark" ? "dark" : "light"}`}>
      {theme === "dark" ? <NightSky /> : <SunnySky />}
      
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>

      <div className="home-content">
        <h2>Hi,👋 I'm a</h2>
        <h1>
          <Typewriter
            options={{
              strings: ["Full Stack Developer", "Python Programmer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="home-buttons">
          <a
            className="btn btn-cv"
            href={Resume}
            download={"Ujjwal_Resume.pdf"}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
