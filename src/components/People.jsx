
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'

export const People = () => {

  const {store, dispatch} =useGlobalReducer()


  return (
    <div className="container-fluid d-flex p-5">
       People Component
        {store.people.length >0 ?
            store.people.map(
                (people)=>{
                    return(
                        <div>
                            <h3>{people.name}</h3>
                        </div>
                    )
                }
            )
            :
            "NO PEEPS!"
        }       
    </div>
);
}; 