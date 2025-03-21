import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

const getPeople =  ()=>{
fetch("https://www.swapi.tech/api/people")
.then((resp)=>resp.json())
.then((data)=>console.log(data.results, "MY DATA!"));
console.log(useGlobalReducer());
}

const getVehicles= ()=>{
fetch("https://www.swapi.tech/api/vehicles")
.then((resp)=>resp.json())
.then((data)=>console.log(data.results, "MY DATA!"));
console.log(useGlobalReducer());
}

const getPlanets=()=>{
fetch("https://www.swapi.tech/api/planets")
.then((resp)=>resp.json())
.then((data)=>console.log(data.results, "MY DATA!"));
console.log(useGlobalReducer());
}

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 