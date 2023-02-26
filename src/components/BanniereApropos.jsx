import React from "react"
import BanniereAbout from "../assets/banniereAbout.png"
import "../styles/Banniere.css"

function BanniereApropos(){
    return(
        <div className="full-banniere">
            <img className="img-banniere" src={BanniereAbout}  alt="Banniere" />
            <div className="shadow-banniere"></div>
        </div>
    )
}

export default BanniereApropos