import { useState } from "react";
import './Loading.scss'
import 'normalize.css'

export default function Loading({isLoaded}){
    return(
        <div className="loadingWrapper">
            <h1 className="loadingTitle">Chargement des données, un instant svp...</h1>
        </div>
        
    )
}