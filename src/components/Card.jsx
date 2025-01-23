
import "../styles/Card.css";


function Card({ content, isFlipped, onClick, borderColor, defaultAsset }) {
  return (
    <button
      className="Card"
      onClick={onClick}
      disabled={isFlipped} // Desativa o botão se já estiver virado
      style={{ border: `2px solid ${borderColor}` }}
    >
      <img className="asset" src={isFlipped ? content : defaultAsset} alt="" />

    </button>
  );
}

export default Card;
