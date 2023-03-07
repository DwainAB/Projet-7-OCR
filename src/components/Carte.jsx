import React from "react"
import "../styles/Carte.css"
import {Link} from 'react-router-dom'

//Fonction qui gère le modèle de carte
function Carte({image, titre, id}){

    return(
        //La balise de lien englobe toutes la cartes, et lors du clique renvois l'id du logement dans l'url
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
//renvois vers Logement.jsx