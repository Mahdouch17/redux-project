import React from 'react'
import {FaListAlt, FaCheckSquare, FaPlusSquare} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = () => (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
            <NavLink to="/" className="btn btn-outline-dark bg-light" exact><FaListAlt /></NavLink>
            <NavLink to="/completed" className="btn btn-outline-dark bg-light">< FaCheckSquare /></NavLink>
            <NavLink to="/add-task" className="btn btn-outline-dark bg-light" exact><FaPlusSquare /></NavLink>
        </div>
    </footer>
) 

export default NavBar