import { useContext } from "react"
import GlobalContext from "../Contexts/GlobalContext"

export default function TaskList(component){
    const {tasks} = useContext(GlobalContext)
    console.log(tasks)
    return(
        <>
            <h1>This is task list</h1>
        </>
    )
}