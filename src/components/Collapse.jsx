import React from "react"
import DataApropos from "../DataApropos"
import ModelCollapse from "./ModelCollapse"

function Collapse(){
    return(
        <div className="full-collapse">
            {DataApropos.map((id) => (
                <ModelCollapse
                    key={`${id}`}
                    content={id.content}
                    title={id.title}
                />

            ))}
        </div>
    )
}

export default Collapse