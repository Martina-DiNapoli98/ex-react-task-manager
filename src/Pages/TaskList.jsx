import { useContext } from "react"
import GlobalContext from "../Contexts/GlobalContext"
import TaskRow from "../Components/TaskRow"

export default function TaskList(){
    const {tasks} = useContext(GlobalContext)
    console.log(tasks)
    return(
        <>
           <div className="container">
            <h1>Task List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
           </div>
        </>
    )
}