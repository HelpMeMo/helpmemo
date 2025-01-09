import { useState } from "react";
import questio_mark_sociologia from "../assets/questio_mark_sociologia.png";
import "../styles/Card.css";


function Card({content}){
    const [showContent, setContent] = useState(false);
    return(
        <button className="Card" onClick = {() => {
            setContent({content});
            
        }}>
             {showContent && {content}}
            <img className="Questio_mark_sociologia" src={questio_mark_sociologia} alt="question mark sociologia" /> 
        </button>
       
    )
}



export default Card

{/* <img className="Questio_mark_sociologia" src={questio_mark_sociologia} alt="question mark sociologia" /> */}