import React from 'react';
import PropTypes from 'prop-types';
import './Popup.css'; // Certifique-se de ter o estilo apropriado aqui

const Popup = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">{title}</h2>
        <p className="popup-message">{message}</p>
        <div className="popup-buttons">
          <button className="popup-button confirm" onClick={onConfirm}>
            Confirmar
          </button>
          <button className="popup-button cancel" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Popup;