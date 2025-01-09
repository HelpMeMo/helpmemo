import { useState } from "react";
import questio_mark_sociologia from "../assets/questio_mark_sociologia.png";


function Card(){
    const [content, setContent] = useState("NR 17");
    return(
        <div>
            <h1 className="text-3xl">{content}</h1>
            <button 
                onClick = {() => {
                    setContent(<img className="questio_mark_sociologia" src={questio_mark_sociologia} alt="question mark sociologia" />);
                }}
            > 
                Virar Card
            </button>
        </div>
        
    )
}

export default Card