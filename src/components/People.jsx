
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'

export const People = () => {
    
    const {store, dispatch} =useGlobalReducer()


  return (
     <div className="container">
         <h1 className="text-danger">Characters</h1>
        <div className= "d-flex gap-3 overflow-auto" style={{ whiteSpace: "nowrap", overflowX: "auto", scrollbarWidth: "thin" }}>
            {store.people.length >0 ?
                store.people.map(
                    (people)=>{
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
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                    <a href="#" className="btn">❤️</a>
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