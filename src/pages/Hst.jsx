import React, { useState } from "react";
import "../styles/Hst.css";

import Card from "../components/Card";
import nr5 from "../assets/hst/nr5.png";
import nr5s2 from "../assets/hst/nr5s2.png";
import nr6 from "../assets/hst/nr6.png";
import nr6s2 from "../assets/hst/nr6s2.png";
import nr7 from "../assets/hst/nr7.png";
import nr7s2 from "../assets/hst/nr7s2.png";
import nr16 from "../assets/hst/nr16.png";
import nr16s2 from "../assets/hst/nr16s2.png";
import nr17 from "../assets/hst/nr17.png";
import nr17s2 from "../assets/hst/nr17s2.png";
import nr23 from "../assets/hst/nr23.png";
import nr23s2 from "../assets/hst/nr23s2.png";

import vaca from "../assets/vaca.png";
import vacaLeite from "../assets/vacaLeite.png";

const Hst = () => {
  const [cards, setCards] = useState([
    { id: 1, content: nr5 },
    { id: 2, content: nr5s2 },
    { id: 3, content: nr6 },
    { id: 4, content: nr6s2 },
    { id: 5, content: nr7 },
    { id: 6, content: nr7s2 },
    { id: 7, content: nr16 },
    { id: 8, content: nr16s2 },
    { id: 9, content: nr17 },
    { id: 10, content: nr17s2 },
    { id: 11, content: nr23 },
    { id: 12, content: nr23s2 },
  ]);

  const [showNotification, setShowNotification] = useState(false);

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

  return (
    <div className="hst-container">
      <h1 className="hst-firstTitle">JOGO DA MEMÓRIA</h1>

      <header className="hst-header">Higiene e Segurança do Trabalho (HST)</header>

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

export default Hst;
