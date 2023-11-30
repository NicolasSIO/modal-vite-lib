import React from "react";
import "./style.css";

const Modal = ({ children, isDisplay, onClose }) => {
  return (
    <>
      {isDisplay && (
        <div className="modal">
          <div onClick={onClose} className="overlay"></div>
          <div className="modal-content">
            {children}
            <button className="close" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
