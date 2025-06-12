import { NavLink } from "react-router-dom"
export default function HomePage(){
    return(
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome in your ToDo list</h1>
                    <p className="col-md-8 fs-4">
                        Plan it. Do it. Done."
                    </p>
                    <button className="btn btn-dark btn-lg" type="button"><NavLink className="nav-link" to="/AddTask">Go!</NavLink></button>
                </div>
            </div>
            
            
        </>
    )
}