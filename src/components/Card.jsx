import { useState } from "react";
import "../styles/Card.css";

import qmark from "../assets/sociology/qmark.png";


// function Card({content}){
//     const [flipped, setFlipped] = useState(false);
//     return(
//         <button
//             className="Card"
//             onClick={() => setFlipped(!flipped)} 
//             >
//             <img
//                 className="asset"
//                 src={flipped ? content : qmark} 
//                 alt=""
//             />
//         </button>
       
//     )
// }

// export default Card

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
  