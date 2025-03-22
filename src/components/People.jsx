
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'

export const People = () => {

  const {store, dispatch} =useGlobalReducer()


  return (
    <div className="text-center mt-5">
       People Component
        {store.people.length >0 ?
            store.people.map(
                (people)=>{
                    return(
                        <div>{people.name}</div>
                    )
                }
            )
            :
            "NO PEEPS!"
        }       
    </div>
);
}; 