import React, { useState } from "react";
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
  // Definindo os cards no estado
  const [cards, setCards] = useState([
    { id: 1, content: capitalFinanceiro },
    { id: 2, content: capitalFinanceiro2 },
    { id: 3, content: capitalCultural },
    { id: 4, content: capitalSimbolico },
    { id: 5, content: karl },
    { id: 6, content: capitalFinanceiro },
    { id: 7, content: capitalFinanceiro2 },
    { id: 8, content: capitalCultural },
  ]);

  // Função de embaralhamento (Algoritmo de Fisher-Yates)
  const shuffleCards = () => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Gera um índice aleatório
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Troca os elementos
    }
    setCards(shuffled); // Atualiza o estado com o novo array embaralhado
  };

  return (
    <div className="hst-container">
      <h1 className="hst-firstTitle">JOGO DA MEMÓRIA</h1>
      
      <header className="hst-header"> Higiene e Segurança do Trabalho (HST)</header>
      
      {/* Exibindo os cards embaralhados */}
      <div className="grid grid-cols-4 gap-4 p-4">
        {cards.map((card) => (
          <Card key={card.id} content={card.content} />
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>

        <div className="hst-buttonNext">

          <button id="shuffle-button" onClick={shuffleCards}>
            Embaralhe para um novo jogo!
          </button>

        </div>

        <div className="hst-buttonClose">

          <button id="shuffle-button">
            Sair do jogo!
          </button>

        </div>

      </div>

      <div>

        <img src={vaca} alt="vaquinha" className="vaca" />
        <img src={vacaLeite} alt="vaquinha com leite" className="vaca" />

      </div>

    </div>
  );
};

export default Hst;
