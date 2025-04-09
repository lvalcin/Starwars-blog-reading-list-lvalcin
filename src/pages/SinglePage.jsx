
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
    
    return (
        <div>
            THIS IS THE SINGLE PAGE
    {soloPerson?.name}
        </div>
        // location.pathname.split("/")
    )
};