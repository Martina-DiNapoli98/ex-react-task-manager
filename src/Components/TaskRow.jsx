import { useMemo } from "react"
import { NavLink } from "react-router-dom";

export default function TaskRow({task}){

    const colorStatus = useMemo(()=>{
        switch(task.status){
            case "To do" : return "red";
            case "Doing" : return "yellow";
            case "Done" : return "green";
            default : return "black"
        }
    },[task.status])

    const formattedDate = useMemo(()=>{
        return new Date(task.createdAt).toLocaleDateString()
    },[task.createdAt])

    return(
        <>
            <tr>
                <td><NavLink className="nav-link-task" to={`taskDetail/${task.id}`}>{task.title}</NavLink></td>
                <td>{task.description}</td>
                <td style={{color : colorStatus, fontWeight:"bold"}}>{task.status}</td>
                <td>{formattedDate}</td>
            </tr>
        </>
    )
}