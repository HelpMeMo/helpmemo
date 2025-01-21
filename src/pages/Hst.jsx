import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    { id: 1, content: nr5, pairId: 'pair1', matched: false },
    { id: 2, content: nr5s2,  pairId: 'pair1', matched: false },
    { id: 3, content: nr6,  pairId: 'pair2', matched: false },
    { id: 4, content: nr6s2,  pairId: 'pair2', matched: false },
    { id: 5, content: nr7,  pairId: 'pair3', matched: false },
    { id: 6, content: nr7s2,  pairId: 'pair3', matched: false },
    { id: 7, content: nr16,  pairId: 'pair4', matched: false },
    { id: 8, content: nr16s2,  pairId: 'pair4', matched: false },
    { id: 9, content: nr17, pairId: 'pair5', matched: false },
    { id: 10, content: nr17s2, pairId: 'pair5', matched: false },
    { id: 11, content: nr23, pairId: 'pair6', matched: false },
    { id: 12, content: nr23s2, pairId: 'pair6', matched: false },
  ]);

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  // Embaralhar os cards
  useEffect(() => {
        shuffleCards();
      }, []);
    
      const shuffleCards = () => {
        const shuffled = [...cards].sort(() => Math.random() - 0.5);
        setCards(shuffled);
        setFlippedCards([]);
        setMatchedCards([]);
        setShowPopup(false);
      };

      const handleCardClick = (id) => {
        if (flippedCards.length === 2) return;

        const clickedCard = cards.find((card) => card.id === id);
    setFlippedCards((prev) => [...prev, clickedCard]);

    if (flippedCards.length === 1) {
      const firstCard = flippedCards[0];
      if (firstCard.pairId === clickedCard.pairId) {
        setMatchedCards((prev) => [...prev, firstCard.id, clickedCard.id]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  // Verificar vitória
  useEffect(() => {
        if (matchedCards.length === cards.length) {
          setShowPopup(true);
        }
      }, [matchedCards, cards]);

      //Codigo da sophi

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
    <div className="hst-container">
      <h1 className="hst-firstTitle">JOGO DA MEMÓRIA</h1>

      <header className="hst-header">Higiene e Segurança do Trabalho</header>

      <div className="grid grid-cols-4 gap-4 p-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            content={card.content}
            isFlipped={flippedCards.includes(card) || matchedCards.includes(card.id)}
            onClick={() => handleCardClick(card.id)}
          />
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

        {showPopup && (
                <div className="popup">
                <h2>Parabéns! Você ganhou!</h2>
                <button onClick={shuffleCards}>Jogar novamente</button>
                <button onClick={() => navigate("/")}>Sair</button>
                </div>
        )}

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

export default Hst;
