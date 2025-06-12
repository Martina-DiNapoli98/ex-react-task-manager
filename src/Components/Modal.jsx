import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function Modal({
  title,
  content,
  show,
  onClose,
  onConfirm,
  confirmText = "Conferma"
}) {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{title}</h2>
        <div className="modal-content">{content}</div>
        <div className="modal-buttons">
          <button onClick={onClose} className="btn-cancel">Annulla</button>
          <button onClick={onConfirm} className="btn-confirm">{confirmText}</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
Modal.propTypes = {
title: PropTypes.string.isRequired,
content: PropTypes.node.isRequired,
show: PropTypes.bool.isRequired,
onClose: PropTypes.func.isRequired,
onConfirm: PropTypes.func.isRequired,
confirmText: PropTypes.string
};