import React from "react";
import "./Menus.css";
import NavLogo from '../../images/ujjwal.jpeg'
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src = {NavLogo}
              alt="pr0file pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Experience
              </div>
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              <div className="nav-link">
                <FcVoicePresentation />
                Testemonial
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About"/>
              </div>
              <div className="nav-link">
                <FcPortraitMode title="Experience" />
              </div>
              <div className="nav-link">
                <FcBiotech title="Tech Stack"/>
              </div>
              <div className="nav-link">
                <FcReadingEbook title="Education"/>
              </div>
              <div className="nav-link">
                <FcVideoProjector title="Projects"/>
              </div>
              <div className="nav-link">
                <FcVoicePresentation title="Testemonials"/>
              </div>
              <div className="nav-link">
                <FcBusinessContact title="Contact"/>
              </div>
            </div>
          </div>
      )}
    </>
  );
};

export default Menus;
