import { createContext, useEffect, useState } from "react";
import useTasks from "../Hooks/useTasks";
const GlobalContext = createContext()

export function GlobalProvider({children}){
    const {tasks, addTask, removeTask, updateTask} = useTasks()

    return (
        <GlobalContext.Provider value={{
            tasks,
            addTask,
            removeTask,
            updateTask
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;