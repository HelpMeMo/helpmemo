import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import linkedinIcon from "../assets/footer/icon1.png";
import githubIcon from "../assets/footer/icon2.png";
import instaIcon from "../assets/footer/icon3.png";

const Footer = () => {
        return (
                <footer className="footer">
                        <p className="footer-text">Copyright © 2024/HelpMeMo</p>
                        <div className="footer-icons">
                                <Link to="https://www.instagram.com/isabelly.bc/" className="footer-icon" title="Facebook">
                                        <img src={linkedinIcon} alt="linkedIn" />
                                </Link>
                                <Link to="https://github.com/HelpMeMo/helpmemo" className="footer-icon" title="Instagram">
                                        <img src={githubIcon} alt="Github" />
                                </Link>
                                <Link to="https://www.instagram.com/isabelly.bc/" className="footer-icon" title="Twitter">
                                        <img src={instaIcon} alt="instagram" />
                                </Link>
                        </div>
                </footer>
        );
};

export default Footer;
