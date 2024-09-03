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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam sit natus ullam expedita neque porro, enim veniam tempora illo! Dolores illo ratione fugiat nihil ipsa vero beatae, praesentium aperiam similique commodi totam iure quis ea necessitatibus eveniet expedita soluta laborum aliquam minima magnam dolorem mollitia. Illum quam voluptatibus unde? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi neque ratione optio illo officiis voluptatem error voluptatum odio iure temporibus.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
