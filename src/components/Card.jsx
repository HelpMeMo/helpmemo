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

{/* <img className="Questio_mark_sociologia" src={questio_mark_sociologia} alt="question mark sociologia" /> */}