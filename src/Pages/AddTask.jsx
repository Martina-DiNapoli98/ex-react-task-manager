import { useState, useRef, useContext } from "react"
import GlobalContext from "../Contexts/GlobalContext"

export default function AddTask(){
    const { addTask } = useContext(GlobalContext)
    const [title, setTitle] = useState("")
    const statusRef = useRef("")
    const descriptionRef = useRef()
    
    function titleIsValid(title) {
        const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`\"~";

        if (title.trim() === "") {
            alert("Devi inserire un titolo");
            return false;
        }

        if (symbols.split("").some(s => title.includes(s))) {
            alert("Il titolo contiene caratteri speciali non ammessi.");
            return false;
        }

        return true;
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(!titleIsValid(title)) return;

        const newTask = {
            title, 
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        try {
            await addTask(newTask)
            alert("Task creata con successo!")
            setTitle("")
            descriptionRef.current.value = ""
            statusRef.current.value = ""
        } catch (error) {
            alert(error.message || "Errore durante la creazione della task")
        }
    }

    return(
        <>
        <div className="container">
            <h1>Add your Tasks</h1>

           <form onSubmit={handleSubmit}>
            <input type="text"
                className="form-control m-2"
                name="title"
                placeholder="Add a title for your task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className="form-control m-2"
                name="description"
                placeholder="Add a description for your task..."
                ref={descriptionRef}
            />

            <select 
                className="form-control m-2"
                name="status" 
                id="status" 
                ref={statusRef}
            >
                <option value="To Do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>

            <button type="submit">Invia</button>
           </form>
        </div>
        </>
    )
}