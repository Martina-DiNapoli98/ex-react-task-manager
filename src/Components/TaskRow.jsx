export default function TaskRow({task}){
    return(
        <>
            <tr>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td style={{color: task.status === "To do" ? "red" : 
                    task.status === "Doing" ? "yellow" : 
                    task.status === "Done" ? "green" : 
                    "black"}}>{task.status}</td>
                <td>{
                        new Date(task.createdAt).toLocaleDateString()
                    }
                </td>
            </tr>
        </>
    )
}