import React from "react";
import FrequencyTableGame from '../components/FrequencyTableGame';
import '../styles/Math.css';
import vaca from "../assets/vaca.png";
import vacaLeite from "../assets/vacaLeite.png";

const Math = () => {
        return (
                <div className="page-math">
                                         <img src={vaca} alt="vaquinha" className="vaca" />
                                         <img src={vacaLeite} alt="vaquinha com leite" className="vaca" />
                                         <h1 className="mat-firstTitle">TABELA DE FREQUÊNCIA</h1>
                                         <header className="mat-header">Matematica</header>
                        
                        <FrequencyTableGame />
                </div>
                 
        );
        
};

export default Math;
