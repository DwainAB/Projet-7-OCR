import React from "react";
import Data from "../Data"
import Carte from "./Carte";
import "../styles/Carte.css"

function Logement(){
    return(
        <div className="section-carte">
            {Data.map((data) => (
                <Carte
                    key={data.id}
                    id={data.id}
                    image={data.cover}
                    titre={data.title}
                />

            ))}
        </div>
    )
}

export default Logement