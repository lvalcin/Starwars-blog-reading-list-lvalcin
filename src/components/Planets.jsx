import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'

export const Planets = () => {

  const {store, dispatch} =useGlobalReducer()

  return (
<div className="container-fluid d-flex p-5">
  <h1>Planets</h1>
    
      
        { store.planets.length >0?
          store.planets.map(
            (planets)=>{
              return(
                <div>
                   
                  <h3>{planets.name}</h3>
                </div>
              )
            }
          )
          :
          "NO PLANETS"
        }

</div>
  )
}