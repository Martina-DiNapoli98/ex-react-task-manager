import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";


export default function TaskDetail(){

    const {id} = useParams()
     const { tasks } = useContext(GlobalContext);
    
    const task = tasks.find(t => String(t.id) === id);
    
    const formattedDate = useMemo(() => {
        return task ? new Date(task.createdAt).toLocaleDateString() : "";
    }, [task]);

    if(!task){
        return (
            <p>Task non trovata</p>
        )
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
            </div>
        </>
    )
}