import React from 'react'
import "./Navbar.css"
import AddTaskIcon from '@mui/icons-material/AddTask';
import {NavLink} from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar-logo"><AddTaskIcon className="navbar-icon"/>Task Manager</h1>
             <ul className="list">
                 <li className="list-item"><NavLink exact to="/" activeClassName="nav-active">Home</NavLink></li>
                 <li className="list-item"><NavLink exact to="/add" activeClassName="nav-active">Add Item</NavLink></li>
             </ul>
        </div>
    )
}

export default Navbar
