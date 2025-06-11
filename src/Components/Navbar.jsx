import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/AddTask">Add Task</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/TaskList">TaskList</NavLink>
                    </li>
                </ul>
            </nav>
            
        </>
    )
}