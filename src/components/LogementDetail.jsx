import React from "react";
import Data from "../Data";
import "../styles/LogementDetail.css"
import { useState } from "react"
import Vector from "../assets/vector.png"
import StarImgGrey from "../assets/grey_star.png"
import StarImgRed from "../assets/red-star.svg"

function CollapseLogement(i){

    const queryString_url_id = window.location.search //Récupération de l'id depuis l'url
    const idLogement = queryString_url_id.slice(1) //Supression de "?"
    const idLogementSelectionner = Data.find((element) => element.id === idLogement) //Recherche de l'objet qui à le même id que celui de l'url dans le fichier json Data
    const hoteNom = idLogementSelectionner.host.name
    const hoteImage = idLogementSelectionner.host.picture
    console.log(idLogementSelectionner.tags)
    const [isDescriptionToggleOpen, setIsDescriptionToggleOpen] = useState(false)
    const [isEquipementToggleOpen, setIsEquipementToggleOpen] = useState(false)
    console.log(idLogementSelectionner.equipments)


    return(
        <div>
            <div className="boxLogement">
                <div className="informationLogement">
                    <h2 className="titreLogement">{idLogementSelectionner.title}</h2>
                    <p className="localisationLogement">{idLogementSelectionner.location}</p>
                    <ul className="listeTag">
                        {idLogementSelectionner.tags.map((data) => (
                            <li className="tag">{data}</li>
                        ))}
                    </ul>
                </div>

                <div className="hote">
                    <div className="hoteIdentite">
                    <p className="hoteNom">{hoteNom}</p>
                    <img className="hoteImage" src={hoteImage} alt="" />
                    </div>
                    <div className="hoteStar">
                        {
                            [...Array(5).keys()].map((e, k) => {
                                console.log(e, k, parseInt(idLogementSelectionner.rating) )
                                if(parseInt(idLogementSelectionner.rating) > k  )
                                    return <img src={StarImgRed} alt="" />
                                return <img src={StarImgGrey} alt="" />
                            })
                        }
                   </div>
                </div>
            </div>

            <div>
                <div className="wrapper-accordeon">
                    <div className="accordeon">
                        <div className="item-accordeon">                     
                                    <div className="titre-item-accor" onClick={() => setIsDescriptionToggleOpen(!isDescriptionToggleOpen)}>
                                        <h2>Description</h2>
                                        <img className={isDescriptionToggleOpen ? 'active' : 'noactive'} src={Vector} alt="fleche" />
                                    </div>                                  
                                <div className={isDescriptionToggleOpen ? 'contenue-item-show-accor' : 'contenue-item-accor'}><p>{idLogementSelectionner.description}</p></div>                    
                            </div>    
                    </div>

                    <div className="accordeon">
                        <div className="item-accordeon">                     
                                    <div className="titre-item-accor" onClick={() => setIsEquipementToggleOpen(!isEquipementToggleOpen)}>
                                        <h2>Equipement</h2>
                                        <img className={isEquipementToggleOpen ? 'active' : 'noactive'} src={Vector} alt="fleche" />
                                    </div>                                  
                                <div className={isEquipementToggleOpen ? 'contenue-item-show-accor' : 'contenue-item-accor'}>
                                {idLogementSelectionner.equipments.map((id) => (
                                  <p>{id}</p>
                                ))}
                                </div>                    
                            </div>    
                    </div>       
                </div>
            </div>
        </div>     
    )
}

export default CollapseLogement