import { useMemo } from "react"

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
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td style={{color : colorStatus}}>{task.status}</td>
                <td>{formattedDate}</td>
            </tr>
        </>
    )
}