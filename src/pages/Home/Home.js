import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from '../../assets/resume.txt'

function Home() {
  return (
    <>
      <div className="container-fluid home-container">
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
            <a className="btn btn-cv" href={Resume} download={"Ujjwal_Resume.pdf"}>Resume</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
