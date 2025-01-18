import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card';
import '../styles/Sociology.css';

import capitalFinanceiro from "../assets/sociology/capitalFinanceiro.png";
import capitalFinanceiro2 from "../assets/sociology/capitalFinanceiro2.png";
import capitalCultural from "../assets/sociology/capitalCultural.png";
import capitalCultural2 from "../assets/sociology/capitalCultural2.png";
import capitalSimbolico from "../assets/sociology/capitalSimbolico.png";
import capitalSimbolico2 from "../assets/sociology/capitalSimbolico2.png";
import capitalSocial from "../assets/sociology/capitalSocial.png";
import capitalSocial2 from "../assets/sociology/capitalSocial2.png";
import karlMarx from "../assets/sociology/karlMarx.png";
import karlMarx2 from "../assets/sociology/karlMarx2.png";
import emileDurkhein from "../assets/sociology/emileDurkhein.png";
import emileDurkhein2 from "../assets/sociology/emileDurkhein.png";
import maxWeber from "../assets/sociology/maxWeber.png";
import maxWeber2 from "../assets/sociology/maxWeber2.png";
import estado from "../assets/sociology/estado.png";
import estado2 from "../assets/sociology/estado2.png";

import vaca from '../assets/vaca.png';
import vacaLeite from '../assets/vacaLeite.png';

const Sociology = () => {
  const [cards, setCards] = useState([
    { id: 1, content: capitalFinanceiro },
    { id: 2, content: capitalFinanceiro2 },
    { id: 3, content: capitalCultural },
    { id: 4, content: capitalCultural2 },
    { id: 5, content: capitalSimbolico },
    { id: 6, content: capitalSimbolico2 },
    { id: 7, content: capitalSocial },
    { id: 8, content: capitalSocial2 },
    { id: 9, content: karlMarx },
    { id: 10, content: karlMarx2 },
    { id: 11, content: emileDurkhein },
    { id: 12, content: emileDurkhein2 },
    { id: 13, content: maxWeber },
    { id: 14, content: maxWeber2 },
    { id: 15, content: estado },
    { id: 16, content: estado2 },
  ]);

  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const shuffleCards = () => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
    }
    setCards(shuffled);
  };

  const handleExitClick = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleConfirmExit = () => {
    navigate("/"); // Redireciona para a tela inicial
  };

  return (
    <div className="soc-container">
      <h1 className="soc-firstTitle">JOGO DA MEMÓRIA</h1>

      <header className="soc-header">Sociologia</header>

      <div className="grid grid-cols-4 gap-4 p-4">
        {cards.map((card) => (
          <Card key={card.id} content={card.content} />
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <div className="soc-buttonNext">
          <button id="shuffle-button" onClick={shuffleCards}>
            Embaralhe para um novo jogo!
          </button>
        </div>

        <div className="soc-buttonClose">
          <button id="exit-button" onClick={handleExitClick}>
            Sair do jogo!
          </button>
        </div>
      </div>

      {showNotification && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <h2>Vai desistir?</h2>
          <img
            src={vaca}
            alt="imagem de aviso"
            style={{ width: "100px", marginBottom: "10px" }}
          />
          <div>
            <button
              onClick={handleCloseNotification}
              style={{
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Não
            </button>
            <button
              onClick={handleConfirmExit}
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sim
            </button>
          </div>
        </div>
      )}

      <div>
        <img src={vaca} alt="vaquinha" className="vaca" />
        <img src={vacaLeite} alt="vaquinha com leite" className="vaca" />
      </div>
    </div>
  );
};

export default Sociology;
