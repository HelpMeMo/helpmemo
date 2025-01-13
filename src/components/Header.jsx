import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';
import { Link } from "react-router-dom";


function Navbar() {
        return (
                <nav className="navbar">

                        <div className="logo">
                                <img src={logo} alt="Logo" className="logo-img" />
                        </div>

                        <div className="dropdown">
                                <button className="dropbtn">Disciplinas</button>
                                <div className="dropdown-content">
                                        <Link to="/math">Matemática</Link>
                                        <Link to="/sociology">Sociologia</Link>
                                        <Link to="/hst">HST</Link>
                                </div>
                        </div>
                </nav>
        );
}

export default Navbar;
