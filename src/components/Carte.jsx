import React from "react"
import "../styles/Carte.css"
import {Link} from 'react-router-dom'


function Carte({image, titre, id}){

    return(
        
        <div >
            <Link to={`/Logement?${id}`} className="full-carte">
                <img className="image-carte" src={image} alt="" />
                <div className="shadow-carte"></div>
                <h2 className="titre-carte">{titre}</h2>
            </Link>
        </div>
    )
}

export default Carte