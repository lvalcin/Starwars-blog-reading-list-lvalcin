import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'

export const Vehicles = () => {

  const {store, dispatch} =useGlobalReducer()


  return (
<div className="container-fluid d-flex p-5">
 This is The Vehicle component
        {store.vehicles.length >0?
            store.vehicles.map(
                (vehicles)=>{
                    return(
                        <div>
                            <h3>{vehicles.name}</h3>
                        </div>
                    )
                }
            )
            :
            "NO RIDES"

        }
</div>
  )
}