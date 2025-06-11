import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddTask from "./Pages/AddTask";
import TaskList from "./Pages/TaskList";
import { GlobalProvider } from "./Contexts/GlobalContext";

function App(){
  return(
    <>
    {/* <GlobalProvider> */}
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/AddTask" element={<AddTask/>} />
          <Route path="/TaskList" element={<TaskList/>} />
          
        </Routes>
       </BrowserRouter>
    {/* </GlobalProvider> */}
    </>
  )
}


export default App;