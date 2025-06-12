import ReactDOM from "react-dom";
import { useState, useRef } from "react";

export default function EditTaskModal({ show, task, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
    id: task.id,
  });
   const editFormRef = useRef(null);
     function handleSaveClick() {
    if (editFormRef.current) {
      editFormRef.current.requestSubmit();
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
  }

  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Modifica Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titolo"
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrizione"
          />
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <div className="modal-buttons">
            <button type="button" className="btn-cancel" onClick={onClose}>Annulla</button>
            <button  onClick={handleSaveClick} className="btn-confirm" type="submit">Salva</button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
