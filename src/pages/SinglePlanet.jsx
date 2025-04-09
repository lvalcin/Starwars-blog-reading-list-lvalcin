import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'
import { Link, useParams } from "react-router-dom";

export const SinglePlanet = () => {
    const {store, dispatch} =useGlobalReducer()
    const { position } = useParams()
    const soloPlanet = store.planets[position]
        console.log(store.planets, "info on planets")
        console.log(store.planets[position])
        console.log(soloPlanet, "solo index for planet")
    
    return (
        <div>
        
    {soloPlanet?.name}
        </div>        
)
};


// location.pathname.split("/")