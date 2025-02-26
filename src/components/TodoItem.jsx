import React from "react";

const CompletionModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>🎉 Congratulations! 🎉</h2>
        <p>You have successfully completed a task. Keep going!</p>
        <button onClick={onClose} className="close-button">OK</button>
      </div>
    </div>
  );
};

export default CompletionModal;
