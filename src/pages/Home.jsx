import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React,{useEffect} from 'react'

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()



const getPeople =  ()=>{
	fetch("https://swapi.dev/api/people")
	.then((resp)=>resp.json())
	.then((data)=>dispatch({type:"set_people",payload:data.results}))
	// .catch((error) => console.error("Error fetching people:", error));
}

const getVehicles= ()=>{
	fetch("https://swapi.dev/api/vehicles")
	.then((resp)=>resp.json())
	.then((data)=> dispatch({type:"set_vehicles",payload:data.results}))
}


const getPlanets=()=>{
	fetch("https://swapi.dev/api/planets")
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
			<Planets />
			<Vehicles />
			
		</div>
	);
}; 