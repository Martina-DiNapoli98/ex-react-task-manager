import { createContext, useEffect, useState } from "react";
import useTasks from "../Hooks/useTasks";
const GlobalContext = createContext()



export function GlobalProvider({children}){

    const {tasks} = useTasks()

    return (
        <GlobalContext.Provider value={{
            tasks,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}



export default GlobalContext;