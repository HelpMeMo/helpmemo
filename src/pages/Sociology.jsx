import React from "react";
import Card from '../components/Card';
import capitalFinanceiro from "../assets/sociology/capitalFincanceiro.png";
import capitalFinanceiro2 from "../assets/sociology/capitalFinanceiro2.png";
import capitalCultural from "../assets/sociology/capitalCultural.png";
import capitalSimbolico from "../assets/sociology/capitalSimbolico.png";
import karl from "../assets/sociology/karl.png"

const Sociology = () => {
        return (
                <>
                {/* <div>
                        <h1>Sociologia</h1>
                        <p>Esta é a página de sociologia.</p>
                </div> */}
                
                <h1 className="text-3xl w-64 text-center">Testes</h1>
          
                <div className="grid grid-cols-4 gap-4 p-4 ">
                        <Card content={capitalFinanceiro} />
                        <Card content={capitalFinanceiro2} />
                        <Card content={capitalCultural} />
                        <Card content={capitalSimbolico} />
                        <Card content={karl} />
                        <Card content={capitalFinanceiro} />
                        <Card content={capitalFinanceiro} />
                        <Card content={capitalFinanceiro} />
                </div>
                
                </>
        );
};

export default Sociology;
