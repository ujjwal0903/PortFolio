import React from 'react'
import './About.css'
import AboutLogo from "../../images/ujjwal.jpeg"
function About() {
  return (
    <>
      <div id='about' className="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
                <img src={AboutLogo} alt="Profile_Pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About Me</h1>
                <p>
                Hi, I'm Ujjwal Singhal, a Computer Science and Engineering student at ABES Engineering College. 
                <hr />
                I'm proficient in Python3, C++, C, JavaScript, HTML, and CSS, and have hands-on experience in frameworks like React.js, Node.js, and Tailwind CSS. I also have strong fundamentals in Data Structures, Algorithms, Operating Systems, Database Query Language (MySQL), and Object-Oriented Programming.
                <hr />
                I consider myself an optimistic and perfectionist person, always aiming to find the best in every challenge and refining my work until it's perfect. I sometimes tend to overthink, but I manage it by prioritizing tasks and taking practical steps, which keeps me balanced and productive.
                I believe in teamwork, problem-solving, and continually learning new technologies. Check out my work on GitHub and let’s connect!

                Thanks for watching!
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
