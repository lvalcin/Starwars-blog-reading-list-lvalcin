
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'
import { Link, useParams } from "react-router-dom";

export const SingleVehicle = () => {
    const {store, dispatch} =useGlobalReducer()
    const { position } = useParams()
    const soloVehicle = store.vehicles[position]
    //     console.log(store.vehicles, "info on vehciles")
    //     console.log(store.vehilces[position])
    //     console.log(soloVehicle, "solo index for vehicles")
    
    return (
        <div>
      
       {soloVehicle?.name}
        </div>        
)
};