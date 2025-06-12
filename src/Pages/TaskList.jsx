import { useContext, useState } from "react";
import GlobalContext from "../Contexts/GlobalContext";
import TaskRow from "../Components/TaskRow";
import EditTaskModal from "../Components/EditTaskModal";
import useTasks from "../Hooks/useTasks"; 


export default function TaskList() {
  const { tasks,updateTaskInContext} = useContext(GlobalContext);
  const { updateTask } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  function handleEditClick(task) {
    setSelectedTask(task);
    setShowModal(true);
  }

  async function handleSave(updatedData) {
  try {
    const response = await updateTask(updatedData); 
    if (response.success) {
      updateTaskInContext(response.task); 
      alert("Task aggiornata con successo");
      setShowModal(false);
    } else {
      throw new Error(response.message || "Errore sconosciuto");
    }

  } catch (err) {
    alert("Errore durante la modifica: " + err.message);
  }
}

  return (
    <>
      <div className="container">
        <h1>Tasks List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Titolo</th>
              <th>Descrizione</th>
              <th>Status</th>
              <th>Data</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskRow key={task.id} task={task} onEdit={handleEditClick} />
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedTask && (
        <EditTaskModal
          show={showModal}
          task={selectedTask}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
}
