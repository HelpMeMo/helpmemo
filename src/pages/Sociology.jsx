import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card';
import '../styles/Sociology.css';
import '../styles/Popup.css';

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
import vacaFeliz from '../assets/vacaFeliz.png';
import qmark from "../assets/sociology/qmark.png"


const Sociology = () => {
  const [cards, setCards] = useState([
    { id: 1, content: capitalFinanceiro, pairId: 'pair1', matched: false },
    { id: 2, content: capitalFinanceiro2, pairId: 'pair1', matched: false },
    { id: 3, content: capitalCultural, pairId: 'pair2', matched: false },
    { id: 4, content: capitalCultural2, pairId: 'pair2', matched: false },
    { id: 5, content: capitalSimbolico, pairId: 'pair3', matched: false },
    { id: 6, content: capitalSimbolico2, pairId: 'pair3', matched: false },
    { id: 7, content: capitalSocial, pairId: 'pair4', matched: false },
    { id: 8, content: capitalSocial2, pairId: 'pair4', matched: false },
    { id: 9, content: karlMarx, pairId: 'pair5', matched: false },
    { id: 10, content: karlMarx2, pairId: 'pair5', matched: false },
    { id: 11, content: emileDurkhein, pairId: 'pair6', matched: false },
    { id: 12, content: emileDurkhein2, pairId: 'pair6', matched: false },
    { id: 13, content: maxWeber, pairId: 'pair7', matched: false },
    { id: 14, content: maxWeber2, pairId: 'pair7', matched: false },
    { id: 15, content: estado, pairId: 'pair8', matched: false },
    { id: 16, content: estado2, pairId: 'pair8', matched: false },
  ]);

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setShowPopup(true);
    }
  }, [matchedCards, cards]);

  const handleExitClick = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleConfirmExit = () => {
    navigate("/");
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
            borderColor="#A68760"
            defaultAsset={qmark}

          />
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

        {showPopup && (
          <>
            <div className="overlay"></div>
            <div className="popup">

              <h2 style={{ fontSize: "2rem", color: "#4caf50", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
                Parabéns! Você ganhou!
              </h2>

              <img src={vacaFeliz} alt="imagem de aviso"
                style={{ width: "150px", marginBottom: "20px", display: "block", margin: "0 auto" }}
              />


              <button className="jogarNovamente"

                onClick={() => {
                  shuffleCards(); // Embaralha os cards para um novo jogo
                  setShowPopup(false); // Fecha o popup
                }}
              > Jogar novamente

              </button>


              <button className="Sair" onClick={() => navigate("/")}
              >
                Sair
              </button>

            </div>

          </>
        )}


        {showNotification && (
          <>
            {/* Overlay para congelar a tela */}
            <div className="telCongelada"></div>

            {/* Notificação */}
            <div className="notificacao">

              <h2 className="vaiDesistir" >
                Vai desistir?
              </h2>

              <img
                src={vaca}
                alt="imagem de aviso"
                style={{
                  width: "50px",
                  marginBottom: "10px",
                  display: "block",
                  margin: "0 auto",
                }}
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
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
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
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Sim
                </button>
              </div>
            </div>
          </>
        )}

      </div>

      <div>
        <img src={vaca} alt="vaquinha" className="vaca" />
        <img src={vacaLeite} alt="vaquinha com leite" className="vaca" />
      </div>
    </div>
  );
};

export default Sociology;
