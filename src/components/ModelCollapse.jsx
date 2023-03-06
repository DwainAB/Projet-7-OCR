import React from "react"
import "../styles/Collapse.css"
import Vector from "../assets/vector.png"
import { useState } from "react"

function ModelCollapse({title, content, i}){

    const [ouvert, fermer] = useState(null)
    const toggle = (i) =>{
        if( ouvert === i){
            return fermer(null)
        }
        fermer(i)
    }
     
    return(
        <div className="wrapper">
            <div className="accordeon">
                <div className="item">                     
                    <div className="titre-item" onClick={() => toggle(i)}>
                        <h2>{title}</h2>
                        <img src={Vector} alt="fleche" />
                    </div>                                  
                    <div className={ouvert === i ? 'contenue-item-show' : 'contenue-item'}><p>{content}</p></div>                    
                </div>        
            </div>
        </div>
    )
}

export default ModelCollapse