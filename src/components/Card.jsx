import { useState } from "react";
import "../styles/Card.css";

import qmark from "../assets/hst/qmark.png";

function Card({ content, isFlipped, onClick }) {
    return (
      <button
        className="Card"
        onClick={onClick}
        disabled={isFlipped} // Desativa o botão se já estiver virado
      >
        <img className="asset" src={isFlipped ? content : qmark} alt="" />
      </button>
    );
  }
  
  export default Card;
  