import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';


function Navbar() {
        return (
                <nav className="navbar">

                        <div className="logo">
                                <img src={logo} alt="Logo" className="logo-img" />
                        </div>

                        <div className="dropdown">
                                <button className="dropbtn">Disciplinas</button>
                                <div className="dropdown-content">
                                        <a href="#">Matemática</a>
                                        <a href="#">Sociologia</a>
                                        <a href="#">HST</a>
                                </div>
                        </div>
                </nav>
        );
}

export default Navbar;
