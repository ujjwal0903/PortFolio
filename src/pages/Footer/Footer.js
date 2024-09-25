import React from "react";
import './Footer.css';
import logo from '../../images/WebLogo.png';

const Footer = () => {
return (
    <footer className="footer">
    <div className="footer-container">
        {/* Left Section: Logo */}
        <div className="footer-logo">
        <a href="/">
            <img src={logo} alt="Website Logo" />
        </a>
        </div>

        {/* Right Section: Social Links and Contact Details */}
        <div className="footer-right">
        <div className="footer-socials">
            <a href="https://api.whatsapp.com/send?phone=9990243659" rel="noreferrer" target="_blank">
                WhatsApp
            </a>
            <a href="https://github.com/ujjwal0903" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            <a href="https://linkedin.com/in/ujjwal-singhal" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
        </div>

        <div className="footer-contact">
            <p>Email: <a href="mailto:ujjwalsinghal0903@gmail.com">ujjwalsinghal0903@gmail.com</a></p>
            <p>Phone: +91-9990243659</p>
        </div>
        </div>
    </div>

    {/* Bottom Section: Copyright */}
    <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ujjwal. All rights reserved.</p>
    </div>
    </footer>
);
};

export default Footer;
