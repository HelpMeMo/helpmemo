import React from "react";
import FrequencyTableGame from '../components/FrequencyTableGame';
import '../styles/Math.css';

const Math = () => {
        return (
                <div className="page-math">
                        <h1 id="titulo-math">Duvido você acertar os valores que faltam na tabela: </h1>
                        
                        <FrequencyTableGame />
                </div>
        );
};

export default Math;
