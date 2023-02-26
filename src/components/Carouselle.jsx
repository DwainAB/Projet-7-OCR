import React from "react"
import {useParams} from 'react-router-dom'

function Carouselle(){
    let uid = useParams()
    console.log(uid)
    return(
        <div>
            <h2>test</h2>
        </div>
    )
}

export default Carouselle