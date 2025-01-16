import { useState } from "react";
import "../styles/Card.css";

import qmark from "../assets/sociology/qmark.png";


function Card({content}){
    const [flipped, setFlipped] = useState(false);
    return(
        <button
            className="Card"
            onClick={() => setFlipped(!flipped)} 
            >
            <img
                className="asset"
                src={flipped ? content : qmark} 
                alt=""
            />
        </button>
       
    )
}

export default Card

