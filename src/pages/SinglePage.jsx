
// import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'
import { Link, useParams } from "react-router-dom";


export const SinglePage = () => {
    const {store, dispatch} =useGlobalReducer()
    const { position } = useParams()
    const soloPerson = store.people[position]
        console.log(store.people, "info on people")
        console.log(store.people[position])
        console.log(soloPerson, "solo index")

    const getPeople =  ()=>{
        fetch("https://swapi.dev/api/people")
        .then((resp)=>resp.json())
        .then((data)=> dispatch({type:"set_people",payload:data.results}))
            
        }

    useEffect(()=> {
        if (store.length===0) getPeople();
    },[]);
    
    return (
        <div className = "container-fluid style={{ height: '200px' }}">
            <h1 className="title text-end ">{soloPerson?.name}</h1>
           <div className=" d-flex mb-3 " style={{width: "18rem", height: '100%'}}>
               <img src={"https://placehold.co/400x200"} 
                className="img" style={{objectFit: "cover", height: '200px' }}/>
                

                <div className="footer container-fluid">
                {soloPerson?.birth_year}
                {soloPerson?.height}
                {soloPerson?.eye_color}
                {soloPerson?.hair_color}
                </div>
                
         </div>
       </div>  
    
    )
};
        {/* // location.pathname.split("/") */}