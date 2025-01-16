import React from "react";
import '../styles/Hst.css';

import Card from '../components/Card';
import capitalFinanceiro from "../assets/sociology/capitalFincanceiro.png";
import capitalFinanceiro2 from "../assets/sociology/capitalFinanceiro2.png";
import capitalCultural from "../assets/sociology/capitalCultural.png";
import capitalSimbolico from "../assets/sociology/capitalSimbolico.png";
import karl from "../assets/sociology/karl.png";

import vaca from '../assets/vaca.png'
import vacaLeite from '../assets/vacaLeite.png'

const Hst = () => {
    return (

        <div className="hst-container">
            <h1 className="hst-firstTitle">JOGO DA MEMÓRIA</h1>
            
            <header className="hst-header">
                Higiene e Segurança do Trabalho (HST)
            </header>
            
            <div className="grid grid-cols-4 gap-4 p-4">
                <Card content={capitalFinanceiro} />
                <Card content={capitalFinanceiro2} />
                <Card content={capitalCultural} />
                <Card content={capitalSimbolico} />
                <Card content={karl} />
                <Card content={capitalFinanceiro} />
                <Card content={capitalFinanceiro} />
                <Card content={capitalFinanceiro} />
            </div>
            
            <div className="hst-buttonNext">

                <button id="shuffle-button">Embaralhe para um novo jogo!</button>
           
            </div>

            <div>

                <img src={vaca} alt="vaquinha" className="vaca" />
                <img src={vacaLeite} alt="vaquinha com leite" className="vaca" />
            
            </div>
        </div>
    );
};

export default Hst;
