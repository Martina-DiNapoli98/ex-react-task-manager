import { useState, useRef } from "react"

export default function AddTask(){

    const [title, setTitle] = useState("")
    const statusRef = useRef("to Do")
    const descriptionRef = useRef()


    function handleSubmit(e){
        e.preventDefault()

        const newTask = {
            title, 
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }
        console.log("task creato", newTask)
    }

    return(
        <>
        <div className="container">

           <form onSubmit={handleSubmit}>
            <input type="text"
                className="form-control m-2"
                name="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className="form-control m-2"
                name="description"
                placeholder="description"
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