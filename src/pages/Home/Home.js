import React from "react";
import { useTheme } from "../../components/context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

function Home() {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

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
          <Fade right>
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
          </Fade>
          <div className="home-buttons">
            <a
              className="btn btn-hire" 
              href="https://api.whatsapp.com/send?phone=9990243659"
              rel = 'noreferrer'
              target="_blank"
            >
              Hire Me
            </a>
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
