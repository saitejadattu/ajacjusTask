import React from 'react'
import "./index.css"
import { Link } from "react-router-dom"
import { IoIosAdd } from "react-icons/io";
const NavBar = () => {
    return (
        <div className='navbar-container'>
            <Link to="/" className='nav-heading'>Ajackus</Link>
            <Link className='add-user-button' to="/add-user">Add<IoIosAdd/></Link>
        </div>
    )
}

export default NavBar