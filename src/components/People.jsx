
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'
import { Link } from "react-router-dom";


export const People = () => {
    
    const {store, dispatch} =useGlobalReducer()


  return (
     <div className="container">
         <h1 className="text-danger">Characters</h1>
        <div className= "d-flex gap-3 overflow-auto" style={{ whiteSpace: "nowrap", overflowX: "auto", scrollbarWidth: "thin" }}>
            {store.people.length >0 ?
                store.people.map(
                    (people, index)=>{
                        return(
                            <div className="card" style={{width: "12 rem", flex: "0 0 auto" }}>
                                <img src={"https://placehold.co/400x200"} 
                                className="card-img-top" style={{objectFit: "cover" }}/>
                                <div className="card-body">
                                    <h5 className="card-title">{people.name}</h5>
                                    <p className="card-text">{people.birth_year}</p>
                                    <p className="card-text">{people.height}</p>
                                    <p className="card-text">{people.eye_color}</p>
                                    <p className="card-text">{people.hair_color}</p>
                                    <Link to= {"/solo/" + index}>
                                        <button type="button" class="btn btn-outline-primary">
                                            Learn More!
                                        </button>
                                    </Link>
                                    <button onClick = {()=>{
                                        dispatch({type:"set_favorites", payload:people.name})
                                    }}
                                    // ((data)=>dispatch({type:"set_planets",payload:data.results}))
                                    className="btn"> 
                                        ❤️ 
                                    </button>
                                </div>
                            </div>
                        )
                    }
                )
                :
                "NO PEEPS!"
            }       
        </div>
    </div>
    );
    }; 