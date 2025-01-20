import React, { useState, useEffect } from "react";
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
import emileDurkhein2 from "../assets/sociology/emileDurkhein2.png";
import maxWeber from "../assets/sociology/maxWeber.png";
import maxWeber2 from "../assets/sociology/maxWeber2.png";
import estado from "../assets/sociology/estado.png";
import estado2 from "../assets/sociology/estado2.png";

import vaca from '../assets/vaca.png';
import vacaLeite from '../assets/vacaLeite.png';

const Sociology = () => {
  const [cards, setCards] = useState([
        { id: 1, content: capitalFinanceiro, pairId: 'pair1', matched: false },
        { id: 2, content: capitalFinanceiro2,  pairId: 'pair1', matched: false },
        { id: 3, content: capitalCultural,  pairId: 'pair2', matched: false },
        { id: 4, content: capitalCultural2,  pairId: 'pair2', matched: false },
        { id: 5, content: capitalSimbolico,  pairId: 'pair3', matched: false },
        { id: 6, content: capitalSimbolico2,  pairId: 'pair3', matched: false },
        { id: 7, content: capitalSocial,  pairId: 'pair4', matched: false },
        { id: 8, content: capitalSocial2,  pairId: 'pair4', matched: false },
        { id: 9, content: karlMarx,  pairId: 'pair5', matched: false },
        { id: 10, content: karlMarx2,  pairId: 'pair5', matched: false },
        { id: 11, content: emileDurkhein,  pairId: 'pair6', matched: false },
        { id: 12, content: emileDurkhein2,  pairId: 'pair6', matched: false },
        { id: 13, content: maxWeber,  pairId: 'pair7', matched: false },
        { id: 14, content: maxWeber2,  pairId: 'pair7', matched: false },
        { id: 15, content: estado,  pairId: 'pair8', matched: false },
        { id: 16, content: estado2,  pairId: 'pair8', matched: false },
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
    <div className="soc-container">
      <h1 className="soc-firstTitle">JOGO DA MEMÓRIA</h1>

      <header className="soc-header">Sociologia</header>

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
        <div className="soc-buttonNext">
          <button id="shuffle-button" onClick={shuffleCards}>
            Embaralhe para um novo jogo!
          </button>
        </div>

        {/* <div className="soc-buttonClose">
          <button id="exit-button" onClick={handleExitClick}>
            Sair do jogo!
          </button>
        </div> */}

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

export default Sociology;
