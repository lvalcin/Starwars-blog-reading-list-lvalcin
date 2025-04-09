import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'
import { Link } from "react-router-dom";

export const Planets = () => {

  const {store, dispatch} =useGlobalReducer()

  return (
      <div className="container">
        <h1 className="text-danger">Planets</h1>
        <div className= "d-flex gap-3 overflow-auto" style={{ whiteSpace: "nowrap", overflowX: "auto", scrollbarWidth: "thin" }}>
          {store.planets.length >0 ?
            store.planets.map(
                (planets, index)=>{
                    return(
                        <div className="card" style={{width: "12 rem", flex: "0 0 auto" }}>
                            <img src={"https://placehold.co/400x200"} 
                            className="card-img-top" style={{objectFit: "cover" }}/>
                            <div className="card-body">
                                <h5 className="card-title">{planets.name}</h5>
                                <p className="card-text">{planets.rotation_period}</p>
                                <p className="card-text">{planets.orbital_period}</p>
                                <p className="card-text">{planets.terrain}</p>
                                <p className="card-text">{planets.gravity}</p>
                                <Link to= {"/soloPlanet/" + index}>
                                    <button type="button" class="btn btn-outline-primary">
                                    Learn More
                                    </button>
                                </Link>
                                <button onClick = {()=>{
                                    dispatch({type:"set_favorites", payload:planets.name})
                                    }}
                                    className="btn"> 
                                        ❤️ 
                                    </button>
                                
                            </div>
                        </div>
                    )
                }
            )
            :
            "WHAT WORLD!"
        }       
    </div>

</div>
  )
}