import { useState } from "react";
import qmark from "../assets/sociology/qmark.png";
import "../styles/Card.css";


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

