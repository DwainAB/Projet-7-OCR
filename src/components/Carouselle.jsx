import React, { useState } from "react"
import Data from "../Data.js"
import FlecheGauche from "../assets/flechegauche.png"
import FlecheDroit from "../assets/flechedroit.png"
import "../styles/Carroussel.css"


function Carroussel(){
    const queryString_url_id = window.location.search //Récupération de l'id depuis l'url
    const idLogement = queryString_url_id.slice(1) //Supression de "?"
    const idLogementSelectionner = Data.find((element) => element.id === idLogement) //Recherche de l'objet qui à le même id que celui de l'url dans le fichier json Data
    const imageData = idLogementSelectionner.pictures //Récupération des images dans une variable

    const [index, setIndex] = useState(0)

    //Fonction qui permet d'aller à l'image suivante
    function NextSlide(){
        setIndex(index + 1)
        if(index === imageData.length - 1){
            setIndex(0)
        }
    }

    //Fonction qui permet d'aller à l'image précedente
    function prevSlide(){
        setIndex(index - 1)
        if(index ===0){
            setIndex(imageData.length - 1)
        }
    }

    return(
        
        <div className="carrousselbox"> 
          <img className="imagecarroussel" src={imageData[index]} alt="" />
          <div className="carrousselnav">
            <img onClick={prevSlide} className="fleche" src={FlecheGauche} alt="" />
            <img onClick={NextSlide} className="fleche" src={FlecheDroit} alt="" />
          </div>
        </div>
    )
}

export default Carroussel