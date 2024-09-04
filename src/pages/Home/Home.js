import React from "react";
import { useTheme } from "../../components/context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function Home() {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? "dark" : "light"));
  }

  return (
    <>
      <div id="home" className="container-fluid home-container">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi,👋 i'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "Mern Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
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
    </>
  );
}

export default Home;
