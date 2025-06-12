import { useEffect, useState } from "react";

export default function useTasks(){
    const [tasks, setTasks] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL;

    async function addTask(newTask){
        try {
            const response = await fetch(`${apiUrl}/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            });

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.message || "Errore nella creazione della task");
            }

            setTasks(prev => [...prev, data.task]);
            return data.task;
        } catch (error) {
            throw error;
        }
    }

    async function removeTask(taskId){
        const res = await fetch(`${apiUrl}/tasks/${taskId}`, {
            method: "DELETE"
        })
        const data = await res.json()
        if(!data.success){
           throw new Error("task non eliminata")
        }
        setTasks(prev => prev.filter(task => task.id === !taskId))
    }

    const updateTask = (updatedTask) => {
        // Da implementare
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
        tasks,
        addTask,
        removeTask,
        updateTask
    }
}