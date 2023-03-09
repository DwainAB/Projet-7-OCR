import React from "react";
import Data from "../Data"
import "../styles/Carte.css"
import { Link } from "react-router-dom";

function Carte(){
    return(
        <div className="section-carte">
            {Data.map((data) => (
                <div key={data.id}>
                    <Link to={`/Logement/${data.id}`} className="full-carte"> 
                        <img className="image-carte" src={data.cover} alt="" />
                        <div className="shadow-carte"></div>
                        <h2 className="titre-carte">{data.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Carte