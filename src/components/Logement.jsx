import React from "react";
import Data from "../Data"
import Carte from "./Carte";
import "../styles/Carte.css"

function Logement(){
    return(
        <div className="section-carte">
            {Data.map((id) => (
                <Carte
                    key={`${id}`}
                    image={id.cover}
                    titre={id.title}
                />

            ))}
        </div>
    )
}

export default Logement