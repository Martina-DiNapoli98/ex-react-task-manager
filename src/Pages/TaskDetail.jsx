import { useMemo, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";
import useTasks from "../Hooks/useTasks";
import { useNavigate } from "react-router-dom";


export default function TaskDetail(){

    const {id} = useParams()
     const { tasks } = useContext(GlobalContext);
     const [remove, setRemove] = useState()
     const { removeTask } = useTasks();
     const navigate = useNavigate();
     
    
    const task = tasks.find(t => String(t.id) === id);
    
    const formattedDate = useMemo(() => {
        return task ? new Date(task.createdAt).toLocaleDateString() : "";
    }, [task]);

    if(!task){
        return (
            <p>Task non trovata</p>
        )
    }

    async function hendleRemove(){
        try{
            await removeTask(task.id)
            alert(`Eliminazione task con id : ${task.id} avvenuta con successo`)
            navigate("/taskList")
        }catch (error){
            alert("errore durante l'eliminazione")

        }
    }
   
   
    return(
        <>
            <div className="container">
                <h1>Task Details</h1>
                <p>Dettagli task con id: {id}</p>
            </div>
            <div className="container">
                <div className="card" key={task.id}>
                    <p>Titolo : {task.title}</p>
                    <p>Descrizione : {task.description}</p>
                    <p>Data : {formattedDate}</p>
                    <p>Status : {task.status}</p>
                </div>
                <button onClick={hendleRemove}>Elimina Task</button>
            </div>
        </>
    )
}