import React from "react"
import { Link } from "react-router-dom"

function NavBar() {

    return (
        <nav> 
            <Link to="/">Mission Statement</Link>
            <Link to="/known">Known toys</Link>
            <Link to="/add">Add Toy</Link>
        </nav>
    )
}

export default NavBar;