import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { People } from "../components/People.jsx";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()



const getPeople =  ()=>{
	fetch("https://www.swapi.tech/api/people")
	.then((resp)=>resp.json())
	.then((data)=>dispatch({type:"set_people",payload:data.results}))
	// .catch((error) => console.error("Error fetching people:", error));
}

const getVehicles= ()=>{
	fetch("https://www.swapi.tech/api/vehicles")
	.then((resp)=>resp.json())
	.then((data)=> dispatch({type:"set_vehicles",payload:data.results}))
}


const getPlanets=()=>{
	fetch("https://www.swapi.tech/api/planets")
	.then((resp)=>resp.json())
	.then((data)=>dispatch({type:"set_planets",payload:data.results}))
}
useEffect(()=>{
	getPeople();
	getVehicles();
	getPlanets()
},[])

console.log(store, "MY STORE!!!");

	return (
		<div className="text-center mt-5">
			<People />
			
		</div>
	);
}; 