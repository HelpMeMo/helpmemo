
import React from "react";
import { Link } from "react-router-dom";
import "../styles/CardInitial.css";

const CardInitial = ({ title, image, backgroundColor, borderColor, to }) => {
        return (
                <Link
                        to={to}
                        className="card-initial"
                        style={{ backgroundColor, border: `2px solid ${borderColor}` }}
                >
                        <p className="card-title">{title}</p>
                        <img src={image} alt={title} className="card-image" />
                </Link>
        );
};

export default CardInitial;
