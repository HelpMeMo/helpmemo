import React from "react";

const PopupMessage = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <img
        src={image}
        alt="Pop-up"
        style={{ maxWidth: "80%", maxHeight: "80%" }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default PopupMessage;
