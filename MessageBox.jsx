import React from "react";
import "./MessageBox.css";

function MessageBox({ message, type, onClose }) {
  return (
    <div className={`message-box ${type}`}>
      <p>{message}</p>
      <button onClick={onClose}>X</button>
    </div>
  );
}

export default MessageBox;
