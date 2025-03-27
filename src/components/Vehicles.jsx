import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'
import { Link } from "react-router-dom";

export const Vehicles = () => {

  const {store, dispatch} =useGlobalReducer()


  return (
        <div className="container">
                <h1 className="text-danger">Vehicles</h1>
                <div className= "d-flex gap-3 overflow-auto" style={{ whiteSpace: "nowrap", overflowX: "auto", scrollbarWidth: "thin" }}
                    >
                        {store.vehicles.length >0 ?
                            store.vehicles.map(
                                (vehicles, index)=>{
                                    return(
                                        <div className="card" style={{width: "12 rem", flex: "0 0 auto" }}>
                                            <img src={"https://placehold.co/400x200"} 
                                            className="card-img-top" style={{objectFit: "cover" }}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{vehicles.name}</h5>
                                                <p className="card-text">{vehicles.cost_in_credits}</p>
                                                <p className="card-text">{vehicles.manufacturer}</p>
                                                <p className="card-text">{vehicles.max_atmosphering_speed}</p>
                                                <p className="card-text">{vehicles.model}</p>
                                                <Link to= {"/solo/" + index}>
                                                    <button type="button" class="btn btn-outline-primary">
                                                        Learn More
                                                    </button>
                                                </Link>
                                                <a href="#" className="btn">❤️</a>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                            :
                            "NO RIDES!"
                        }       
                    </div>
                </div>
                )
                }