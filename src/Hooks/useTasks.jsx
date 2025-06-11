import { useEffect, useState } from "react";

export default function useTasks(){
    const [tasks, setTasks] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL;

      const addTask = (newTask) => {
    
  };

  const removeTask = (taskId) => {
   
  };

  const updateTask = (updatedTask) => {
   
  };

    useEffect(()=>{
        fetch(`${apiUrl}/tasks`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTasks(data)
        })
        .catch(error => console.error(error))
    },[])

    return {
        tasks, addTask, removeTask, updateTask
    }
}