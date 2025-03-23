
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'

export const People = () => {
    
    const {store, dispatch} =useGlobalReducer()


  return (
     <div className="container-fluid p-3">
         <h1>Characters</h1>
    <div className= "d-flex gap-3 overflow-auto" style={{ whiteSpace: "nowrap", overflowX: "auto", scrollbarWidth: "thin" }}
    >
        {store.people.length >0 ?
            store.people.map(
                (people)=>{
                    return(
                        <div className="card" style={{width: "12 rem", height: "15 rem", flex: "0 0 auto" }}>
                            <img src={"https://placehold.co/10"} 
                            className="card-img-top" style={{ height: "70%", objectFit: "cover" }}/>
                            <div className="card-body">
                                <h5 className="card-title">{people.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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