import React from "react"
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
import '../styles/Navbar.css'

function Navbar(){
    return(
        <div className="all">
            <img className="navbar-img" src={logo} alt="" />
            <nav className="navbar-link">
                <Link  className="link" to="/">Accueil</Link>
                <Link  className="link" to="/Apropos">A Propos</Link>
            </nav>
        </div>
    )
}

export default Navbar